import { Dispatch, SetStateAction } from 'react';

interface Business {
  name: string;
  description: string;
  rating: number;
  price: number;
  category: string;
}

interface BusinessDetailProps {
  business: Business;
  onClose: () => void;
}

export default function BusinessDetail({ business, onClose }: BusinessDetailProps) {
  return (
    <div className="w-full mx-5 xl:w-3/5 p-4 bg-gray-50 rounded-lg shadow-md mt-4 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h2 className="text-2xl font-bold mb-2 md:mb-0">{business.name}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <p className="text-gray-600 mb-2">{business.description}</p>
      <div className="text-yellow-400 mb-2">
        {'★'.repeat(Math.floor(business.rating))}
        {business.rating % 1 ? '½' : ''} ({business.rating})
      </div>
      <div className="text-green-600 mb-2">Precio: {'$'.repeat(business.price)}</div>
      <p className="text-gray-700">Categoría: {business.category}</p>
    </div>
  );
}
