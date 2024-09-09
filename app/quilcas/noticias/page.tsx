import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Prueba from '@/components/ui/Prueba';

interface NewsProps {
    id: number;
    date: {
        day: string;
        month: string;
        year: string;
    };
    image: string;
    title: string;
    summary: string;
    location: string;
    category: string;
}

const NewsBlock: React.FC<NewsProps> = ({ id, date, image, title, summary, location, category }) => (
    <div className="flex flex-col lg:flex-row mb-8 overflow-hidden rounded-2xl bg-white shadow-md">
        <div className="lg:w-1/6 order-1">
            <div className="flex flex-col items-center justify-center  bg-green-200 text-gray-700 p-4 h-full rounded-tl-2xl rounded-bl-2xl">
                <h6 className="text-5xl font-bold mb-1">{date.day}</h6>
                <span className="text-sm">{`${date.month} ${date.year}`}</span>
            </div>
        </div>

        <div className="lg:w-1/3 order-1 lg:order-2">
            <div className="relative overflow-hidden group">
                <Link href="/">
                    <Image src={image} width={400} height={300} alt="" className="w-full h-auto transition-transform duration-300 group-hover:scale-110" />
                    <i className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-slate-500 text-white w-15 h-15 rounded-full flex items-center justify-center text-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                    </i>
                </Link>
            </div>
        </div>

        <div className="lg:w-1/2 order-3 p-6">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
            <p className="mb-4 text-gray-600">{summary}</p>
            <div className="flex flex-wrap items-center justify-between">
                <div>
                    <div className="flex items-center mb-1">
                        <span className="font-semibold text-gray-700 mr-2 min-w-[80px]">Ubicación:</span>
                        <p className="text-gray-600">{location}</p>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold text-gray-700 mr-2 min-w-[80px]">Categoría:</span>
                        <p className="text-gray-600">{category}</p>
                    </div>
                </div>
                <div className="mt-4 lg:mt-0">
                    <Link href={`/quilcas/noticias/${id}`} className="bg-orange-200 text-gray-700 px-6 py-2 rounded-full hover:bg-orange-300 transition-colors">
                        Leer más
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

const NewsSection: React.FC = () => {
    const newsItems: NewsProps[] = [
        {
            id: 1,
            date: { day: '01', month: 'Sep', year: '2024' },
            image: '/noticias/noticia-1.jpg',
            title: 'Día del Árbol en Quilcas',
            summary: 'En el Día del Árbol, 70 estudiantes de la Facultad de Agronomía de la UNCP han plantado tujas en la jardinería de la Avenida Quilcas y Jirón San Martín. Invitamos a la población a cuidar estas plantas y a denunciar cualquier maltrato. Además, próximamente se instalará un sistema de riego tecnificado para su mantenimiento.',
            location: 'Avenida Quilcas y Jirón San Martín, Quilcas',
            category: 'Ecología'
        }
        ,
        {
            id: 2,
            date: { day: '01', month: 'Sep', year: '2024' },
            image: '/noticias/noticia-1.jpg',
            title: 'Día del Árbol en Quilcas',
            summary: 'En el Día del Árbol, 70 estudiantes de la Facultad de Agronomía de la UNCP han plantado tujas en la jardinería de la Avenida Quilcas y Jirón San Martín. Invitamos a la población a cuidar estas plantas y a denunciar cualquier maltrato. Además, próximamente se instalará un sistema de riego tecnificado para su mantenimiento.',
            location: 'Avenida Quilcas y Jirón San Martín, Quilcas',
            category: 'Ecología'
        }
        ,
    ];

    return (
        <>
            <Prueba
                title="Noticias"
                description="Mantente al día con las últimas noticias y eventos importantes que ocurren en nuestro distrito."
                breadcrumb="Inicio &gt; Noticias"
                image="/places/destination-3.jpg"
            />

            <section className="bg-yellow-50 py-16" id="section_4">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-gray-800">Noticias</h2>
                    {newsItems.map((news, index) => (
                        <NewsBlock key={index} {...news} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default NewsSection;
