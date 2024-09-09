
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface AttractionProps {
    title: string;
    description: string;
    images: string[];
    icon: React.ElementType;
    link: string;
    index: number;
}

const AttractionCard: React.FC<AttractionProps> = ({ title, description, images, icon: Icon, link, index }) => {
    return (
        <div className="w-full h-screen flex flex-col md:flex-row items-center relative">
            <div className="w-full md:w-1/2 px-4 md:px-8 ">
                <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                    <div className="flex items-center mb-4">
                        <Icon className="w-12 h-12 text-amber-600 mr-3" />
                        <h3 className="text-4xl md:text-4xl font-bold text-amber-800">{title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-lg">{description}</p>
                    <Link href={link} className="inline-block bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition duration-300">
                        Más información
                    </Link>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-8 h-3/4">
                <div className="relative w-full h-full">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        className="rounded-lg shadow-xl w-full h-full"
                    >
                        {images.map((image, imageIndex) => (
                            <SwiperSlide key={imageIndex}>
                                <Image
                                    src={image}
                                    alt={`${title} - Image ${imageIndex + 1}`}
                                    width={1200}
                                    height={800}
                                    className="w-full h-full object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg pointer-events-none"></div>
                </div>
            </div>
            <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-amber-600 rounded-full z-10 shadow-lg">
                <div className="w-full h-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                </div>
            </div>
        </div>
    );
};


export default AttractionCard;