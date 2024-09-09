// components/Prueba.tsx
import React from 'react';
import Image from 'next/image';

const Prueba: React.FC = () => {
  return (
    <div className="font-sans text-white bg-gray-800">
      <section className="relative flex items-center justify-center h-screen">
        {/* Background image */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/hero/frame3.png"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left md:pr-8">
            <h1 className="text-5xl font-bold uppercase mb-4">Responsive <span className="text-orange-500">Mobile Friendly</span></h1>
            <p className="text-lg mb-8">November is a professional website template that is responsive and mobile friendly for any device. This template is provided by templatemo.com</p>
            <button className="px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-black transition duration-300">More Details</button>
          </div>

          {/* Side Image */}
          <div className="flex-1 relative w-full h-80 md:h-full md:w-auto">
            <Image
              src="/places/destination-1.jpg"
              alt="Side Image"
              width={600}
              height={400}
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      
    </div>
  )

}
export default Prueba;
