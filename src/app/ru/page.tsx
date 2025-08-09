import Link from 'next/link';

export default function RuHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Добро пожаловать в REKLIX
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Мы создаем инновационные решения для вашего бизнеса
        </p>
        <div className="text-center">
          <Link href="/ru/about" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Узнать больше
          </Link>
        </div>
      </div>
    </div>
  );
}