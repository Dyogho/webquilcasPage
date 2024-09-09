'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface Destination {
  id: number;
  title: string;
  location: string;
  description: string;
  price: number;
  dates: string;
  imageSrc: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    title: 'DALE UNA MORDIDA A LA GRAN MANZANA',
    location: 'Nueva York, EEUU',
    description: 'Explora la ciudad que nunca duerme y descubre sus icónicos rascacielos.',
    price: 5780,
    dates: '27/10/23-9/11/35',
    imageSrc: '/places/destination-1.jpg',
  },
  {
    id: 2,
    title: 'CONOCE LAS PROFUNDIDADES DEL MAR Y SU VIDA',
    location: 'Cancún, México',
    description: 'Sumérgete en las cristalinas aguas del Caribe y descubre un mundo submarino fascinante.',
    price: 5780,
    dates: '27/10/23-9/11/35',
    imageSrc: '/places/destination-2.jpg',
  },
];

const VacationDestinations: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const renderOverview = () => (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">PÁGINA DE VACACIONES</h1>
      <div className="flex justify-center space-x-8 mb-8">
        {['COME', 'JUEGA', 'RELÁJATE'].map((text, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
              index === 0 ? 'bg-yellow-300' : index === 1 ? 'bg-red-400' : 'bg-teal-600'
            }`}>
              <Image 
                src={`/icons/${index === 0 ? 'pineapple' : index === 1 ? 'balloon' : 'palm'}.svg`} 
                alt={text} 
                width={32} 
                height={32} 
              />
            </div>
            <span className="mt-2 text-sm">{text}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {destinations.map((dest) => (
          <div key={dest.id} className="cursor-pointer" onClick={() => setSelectedDestination(dest)}>
            <div className="relative h-64 mb-4">
              <Image src={dest.imageSrc} alt={dest.title} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div className="flex items-center mb-2">
              <div className={`w-8 h-8 rounded-full ${dest.id === 1 ? 'bg-yellow-300' : 'bg-red-400'} mr-2`}></div>
              <h2 className="text-xl font-semibold">{dest.title}</h2>
            </div>
            <p className="text-gray-600">{dest.location}</p>
            <button className="mt-2 px-4 py-2 bg-purple-700 text-white rounded">Más información</button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDetails = (dest: Destination) => (
    <div className="container mx-auto px-4 py-8">
      <button onClick={() => setSelectedDestination(null)} className="mb-4 text-blue-500">← Volver</button>
      <h1 className="text-3xl font-bold mb-8">{dest.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="relative h-96 mb-4">
            <Image src={dest.imageSrc} alt={dest.title} layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </div>
        <div>
          <div className="flex justify-end space-x-4 mb-4">
            {['pineapple', 'balloon', 'palm'].map((icon, index) => (
              <div key={index} className={`w-12 h-12 rounded-full flex items-center justify-center ${
                index === 0 ? 'bg-yellow-300' : index === 1 ? 'bg-red-400' : 'bg-teal-600'
              }`}>
                <Image src={`/icons/${icon}.svg`} alt={icon} width={24} height={24} />
              </div>
            ))}
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-semibold mb-2">DESCRIPCIÓN:</p>
            <p>{dest.description}</p>
            <p className="font-semibold mt-4 mb-2">EL PRECIO INCLUYE:</p>
            <p>Vuelos, alojamiento y actividades principales.</p>
            <p className="font-semibold mt-4 mb-2">NO TE OLVIDES:</p>
            <p>Llevar protector solar y documentos de viaje.</p>
            <p className="font-semibold mt-4 mb-2">NUESTROS TIPS:</p>
            <p>Explora los restaurantes locales para una experiencia auténtica.</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div>
              <p className="text-3xl font-bold">${dest.price}</p>
              <p>{dest.dates}</p>
            </div>
            <button className="px-6 py-3 bg-purple-700 text-white rounded-lg">Envíenme más información</button>
          </div>
          <div className="mt-4 flex justify-end space-x-4">
            <a href="#" className="text-blue-500">
              <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a href="#" className="text-blue-500">
              <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {selectedDestination ? renderDetails(selectedDestination) : renderOverview()}
    </div>
  );
};

export default VacationDestinations;