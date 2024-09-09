import { Dispatch, SetStateAction } from 'react';

interface Business {
  id: number;
  name: string;
  category: string;
  rating: number;
  price: number;
  lat: number;
  lng: number;
  description: string;
}

interface BusinessGridProps {
  businesses: Business[];
  onSelectBusiness: Dispatch<SetStateAction<Business | null>>;
}

export default function BusinessGrid({ businesses, onSelectBusiness }: BusinessGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
      {businesses.map(business => (
        <div
          key={business.id}
          className="bg-white rounded-lg shadow-md p-4 cursor-pointer transition-transform hover:-translate-y-1"
          onClick={() => onSelectBusiness(business)}
        >
          <h3 className="text-lg font-semibold mb-2">{business.name}</h3>
          <p className="text-gray-600 mb-2">{business.category}</p>
          <div className="text-yellow-400 mb-1">
            {'★'.repeat(Math.floor(business.rating))}
            {business.rating % 1 ? '½' : ''}
          </div>
          <div className="text-green-600">{'$'.repeat(business.price)}</div>
        </div>
      ))}
    </div>
  );
}