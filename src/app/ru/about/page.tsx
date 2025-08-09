import Link from 'next/link';

export default function RuAboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          О нас
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            REKLIX - это инновационная компания, специализирующаяся на создании современных веб-решений и цифровых продуктов.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Мы помогаем бизнесу расти и развиваться в цифровой среде, предоставляя качественные услуги разработки и консультирования.
          </p>
          <div className="text-center mt-12">
             <Link href="/ru" className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors">
               Вернуться на главную
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
}