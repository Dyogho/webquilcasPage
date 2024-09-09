import React from 'react';
import Image from 'next/image';

interface ActivityProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Activity: React.FC<ActivityProps> = ({ imageSrc, title, description }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-full h-64 mb-4 overflow-hidden group">
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </div>
    <h3 className="text-xl font-bold text-blue-600 mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const FunFairSection: React.FC = () => {
  const activities: ActivityProps[] = [
    {
      imageSrc: "/places/destination-1.jpg",
      title: "Trekking ",
      description: "Explora los luares turisticos en una emocionante caminata guiada.",
    },
    {
      imageSrc: "/places/destination-2.jpg",
      title: "Fotografía Paisajística",
      description: "Captura la belleza natural y arqueológica del distrito en un tour fotográfico.",
    },
    {
      imageSrc: "/places/destination-3.jpg",
      title: "Observación de Aves",
      description: "Descubre la rica avifauna local en nuestros puntos de observación designados.",
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
          Descubre las Actividades de Nuestro Distrito
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Activity key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFairSection;