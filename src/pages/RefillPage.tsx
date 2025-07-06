import { Clock } from 'lucide-react';

const RefillPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-md p-10 flex flex-col items-center">
        <Clock className="h-16 w-16 text-primary-500 mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Refill Page Coming Soon</h1>
        <p className="text-lg text-gray-600 mb-4 text-center">
          We're working hard to bring you this feature. Please check back later!
        </p>
        <a
          href="/"
          className="mt-4 bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors font-medium"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default RefillPage;