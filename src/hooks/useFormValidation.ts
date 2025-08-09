import { useState, useCallback } from 'react';
import { z } from 'zod';
import { formatValidationErrors } from '@/utils/validation';

interface UseFormValidationOptions<T> {
  schema: z.ZodObject<z.ZodRawShape>;
  onSubmit: (data: T) => Promise<void> | void;
  initialValues?: Partial<T>;
}

interface FormState<T> {
  values: T;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isValid: boolean;
  submitStatus: 'idle' | 'success' | 'error';
}

export function useFormValidation<T extends Record<string, unknown>>({
  schema,
  onSubmit,
  initialValues = {}
}: UseFormValidationOptions<T>) {
  const [formState, setFormState] = useState<FormState<T>>(() => ({
    values: initialValues as T,
    errors: {},
    isSubmitting: false,
    isValid: false,
    submitStatus: 'idle'
  }));

  // Validate a single field
  const validateField = useCallback((name: keyof T, value: unknown) => {
    try {
      const partialSchema = schema.pick({ [name as string]: true });
      const result = partialSchema.safeParse({ [name]: value });
      if (result.success) {
        setFormState(prev => ({
          ...prev,
          errors: {
            ...prev.errors,
            [name]: ''
          }
        }));
      } else {
        const fieldError = result.error.issues[0]?.message || 'Invalid value';
        setFormState(prev => ({
          ...prev,
          errors: {
            ...prev.errors,
            [name]: fieldError
          }
        }));
      }
    } catch {
      // Fallback - skip field validation if schema doesn't support it
      console.warn('Field validation not supported for field:', name);
    }
  }, [schema]);

  // Validate entire form
  const validateForm = useCallback((values: T) => {
    try {
      schema.parse(values);
      setFormState(prev => ({
        ...prev,
        errors: {},
        isValid: true
      }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = formatValidationErrors(error);
        setFormState(prev => ({
          ...prev,
          errors,
          isValid: false
        }));
      }
      return false;
    }
  }, [schema]);

  // Handle input change
  const handleChange = useCallback((name: keyof T, value: unknown) => {
    setFormState(prev => {
      const newValues = {
        ...prev.values,
        [name]: value
      };
      
      // Validate field on change (debounced validation can be added here)
      setTimeout(() => validateField(name, value), 300);
      
      return {
        ...prev,
        values: newValues,
        submitStatus: 'idle'
      };
    });
  }, [validateField]);

  // Handle form submission
  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      submitStatus: 'idle'
    }));

    try {
      // Validate form
      const isValid = validateForm(formState.values);
      if (!isValid) {
        setFormState(prev => ({
          ...prev,
          isSubmitting: false,
          submitStatus: 'error'
        }));
        return;
      }

      // Submit form
      await onSubmit(formState.values);
      
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        submitStatus: 'success'
      }));
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        submitStatus: 'error'
      }));
    }
  }, [formState.values, onSubmit, validateForm]);

  // Reset form
  const resetForm = useCallback(() => {
    setFormState({
      values: initialValues as T,
      errors: {},
      isSubmitting: false,
      isValid: false,
      submitStatus: 'idle'
    });
  }, [initialValues]);

  // Set field value programmatically
  const setValue = useCallback((name: keyof T, value: unknown) => {
    setFormState(prev => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value
      }
    }));
  }, []);

  // Set multiple values
  const setValues = useCallback((values: Partial<T>) => {
    setFormState(prev => ({
      ...prev,
      values: {
        ...prev.values,
        ...values
      }
    }));
  }, []);

  // Get field props for easy integration with form inputs
  const getFieldProps = useCallback((name: keyof T) => ({
    name: name as string,
    value: (formState.values[name] as string) || '',
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      handleChange(name, e.target.value);
    },
    onBlur: () => {
      validateField(name, formState.values[name]);
    },
    error: formState.errors[name as string],
    'aria-invalid': !!formState.errors[name as string],
    'aria-describedby': formState.errors[name as string] ? `${name as string}-error` : undefined
  }), [formState.values, formState.errors, handleChange, validateField]);

  return {
    values: formState.values,
    errors: formState.errors,
    isSubmitting: formState.isSubmitting,
    isValid: formState.isValid,
    submitStatus: formState.submitStatus,
    handleChange,
    handleSubmit,
    resetForm,
    setValue,
    setValues,
    validateField,
    validateForm,
    getFieldProps
  };
}

// Utility hook for handling file uploads with validation
export function useFileUpload({
  maxSize = 5 * 1024 * 1024, // 5MB default
  allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
  onUpload
}: {
  maxSize?: number;
  allowedTypes?: string[];
  onUpload: (file: File) => Promise<string>;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadFile = useCallback(async (file: File): Promise<string | null> => {
    setError(null);
    setUploading(true);

    try {
      // Validate file size
      if (file.size > maxSize) {
        throw new Error(`File size must be less than ${Math.round(maxSize / 1024 / 1024)}MB`);
      }

      // Validate file type
      if (!allowedTypes.includes(file.type)) {
        throw new Error(`File type ${file.type} is not allowed`);
      }

      const url = await onUpload(file);
      return url;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Upload failed';
      setError(errorMessage);
      return null;
    } finally {
      setUploading(false);
    }
  }, [maxSize, allowedTypes, onUpload]);

  return {
    uploadFile,
    uploading,
    error,
    clearError: () => setError(null)
  };
}