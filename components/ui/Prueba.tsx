// components/Prueba.tsx
import React from 'react';
import Image from 'next/image';

interface AttractionBannerProps {
  title: string;
  description: string;
  breadcrumb: string;
  image: string;
}

const Prueba: React.FC<AttractionBannerProps> = ({ title, description, breadcrumb, image }) => {
  return (
    <div className="relative h-[75vh]" style={{ backgroundImage: "url('/hero/frame3.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
        <div className="relative max-w-[1100px] mx-auto h-full flex items-center">
          {/* Left side */}
          <div className="w-full md:w-[28.9%] pt-[92px] px-4">
            <h3 className="text-4xl text-white font-extrabold uppercase leading-[34px] mb-4">
              Descubre
              <span className="text-[#ff9000] font-semibold block">{title}</span>
            </h3>
            <p className="py-4 text-base text-white font-semibold italic  leading-[22px] tracking-wide">
              {description}
            </p>
            <a
              href="/quilcas/inicio"
              className="px-4 py-3 text-sm font-semibold uppercase inline-block border border-[#b0bdc8] bg-opacity-80 bg-[#405d76] hover:bg-[#ff9000] hover:border-[#ff9000] transition duration-300"
            >
              {breadcrumb}
            </a>
          </div>
          {/* Right side */}
          <div className="w-[68.36%] relative">
            <ul className="list-none m-0 p-0">
              <li className="p-0 m-0 relative">
                <div className="relative">
                  <Image src={image} alt="Slider image" width={752} height={423} />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-6">
                    <div className="float-right w-[31%]">
                      <p className="pt-[5px] text-lg text-white font-normal uppercase text-right leading-[19px]">
                        lorem quis bibendum
                        <span className="text-sm text-[#ff9000] block normal-case">Necagittis Nibel</span>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prueba;
