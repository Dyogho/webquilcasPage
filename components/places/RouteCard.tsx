// components/RouteCard.tsx
import React from 'react';
import Image from 'next/image';

interface RouteCardProps {
  imageSrc: string;
  title: string;
  description: string;
  mapSrc: string;
  buttonText: string;
}

const RouteCard: React.FC<RouteCardProps> = ({ imageSrc, title, description, mapSrc, buttonText }) => (
  <div className="bg-white rounded-lg shadow-md p-6 m-4 flex flex-col items-center transition-transform transform hover:scale-105">
    <Image src={imageSrc} alt={title} width={300} height={200} className="w-full h-48 object-cover rounded-lg" />
    <h2 className="text-xl font-bold text-blue-800 mt-4">{title}</h2>
    <p className="text-gray-600 mt-2 text-center">{description}</p>
    <iframe
      className="w-full h-48 border-none rounded-lg mt-4"
      src={mapSrc}
      loading="lazy"
      title={title}
    ></iframe>
    <button
      className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4 transition-colors hover:bg-green-600"
      onClick={mapSrc}
    >
      {buttonText}
    </button>
  </div>
);

export default RouteCard;
