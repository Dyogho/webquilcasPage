import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


import { Globe, Leaf, History  } from 'lucide-react'; // Importa íconos relevantes

interface ReasonProps {
  title: string;
  description: string;
  icon: React.ElementType; // Añade la propiedad icon para los íconos
}

interface TestimonialProps {
  name: string;
  location: string;
  quote: string;
  avatar: string;
}


export function ReasonToVisit({ title, description, icon: Icon }: ReasonProps) {
  return (
    <div className="bg-amber-50 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 flex items-start space-x-4">
      <Icon className="w-10 h-10 text-amber-600" />
      <div>
        <h3 className="text-xl font-bold text-amber-800 mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export function TestimonialCard({ name, location, quote, avatar }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
      <div className="flex items-center mb-4">
        <Image
          src={avatar}
          alt={name}
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="ml-4">
          <h4 className="font-bold text-amber-800">{name}</h4>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
  );
}