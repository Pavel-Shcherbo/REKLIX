import Link from 'next/link';

export default function EnAboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          About Us
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            REKLIX is an innovative company specializing in creating modern web solutions and digital products.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            We help businesses grow and develop in the digital environment by providing quality development and consulting services.
          </p>
          <div className="text-center mt-12">
            <Link href="/en" className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}