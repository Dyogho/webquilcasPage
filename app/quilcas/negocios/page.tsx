// pages/index.tsx
'use client'
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Sidebar from '@/components/business/Sidebar'
import BusinessGrid from '@/components/business/BusinessGrid';
import BusinessDetail from '@/components/business/BusinessDetail';
import HorizontalFilter from '@/components/business/HorizontalFilter';
import Prueba from '@/components/ui/Prueba';

const Map = dynamic(() => import('@/components/business/Map'), { ssr: false });

interface Business {
    id: number;
    name: string;
    category: string;
    lat: number;
    lng: number;
    rating: number;
    price: number;
    description: string;
}

interface ActiveFilters {
    category: string[];
    rating: number;
    price: number;
}

const businesses: Business[] = [
    { id: 1, name: "Restaurante El Sabor", category: "restaurant", lat: -11.938000, lng: -75.260000, rating: 4.5, price: 2, description: "Deliciosa comida española en el corazón de la ciudad." },
    { id: 2, name: "Hotel Celestial", category: "hotel", lat: -11.936500, lng: -75.258500, rating: 4.8, price: 3, description: "Lujoso hotel con vistas panorámicas de la ciudad." },
    { id: 3, name: "Tienda Moda Express", category: "shop", lat: -11.935700, lng: -75.259800, rating: 4.2, price: 2, description: "Las últimas tendencias de moda a precios asequibles." },
    { id: 4, name: "Café Aroma", category: "restaurant", lat: -11.937800, lng: -75.257900, rating: 4.6, price: 1, description: "El mejor café de especialidad en un ambiente acogedor." },
    { id: 5, name: "Hotel Oasis", category: "hotel", lat: -11.938500, lng: -75.260700, rating: 4.3, price: 4, description: "Un refugio de lujo en el bullicio de la ciudad." },
];

export default function Home() {
    const [activeFilters, setActiveFilters] = useState<ActiveFilters>({ category: [], rating: 0, price: 0 });
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
    const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>(businesses);

    useEffect(() => {
        const filtered = businesses.filter(business =>
            (activeFilters.category.length === 0 || activeFilters.category.includes(business.category)) &&
            business.rating >= activeFilters.rating &&
            business.price >= activeFilters.price &&
            business.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBusinesses(filtered);
    }, [activeFilters, searchTerm]);

    return (
        <>
            <Prueba
                title="Negocios"
                description="Descubre oportunidades de negocios, ferias comerciales y recursos para emprendedores en nuestra comunidad."
                breadcrumb="Inicio &gt; Negocios"
                image="/places/destination-3.jpg"
            />

            <div className="bg-gradient-to-r from-green-500 via-orange-500 to-yellow-500 text-white py-12 px-8 rounded-lg shadow-lg mb-8">
                <h1 className="text-4xl font-bold mb-4">Bienvenido a la Sección de Negocios</h1>
                <p className="text-lg leading-relaxed">
                    Explora las mejores opciones de restaurantes, hoteles y tiendas en tu área.
                    Con nuestra búsqueda avanzada, puedes filtrar y encontrar exactamente lo que
                    necesitas. Ya sea un lugar para una cena inolvidable o un hotel de lujo,
                    tenemos lo que buscas.
                </p>
            </div>
            <div className="flex">
                <Head>
                    <title>Búsqueda Avanzada de Negocios</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
                </Head>

                <div className="hidden md:block md:w-80">
                    <Sidebar
                        activeFilters={activeFilters}
                        setActiveFilters={setActiveFilters}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                </div>

                <main className="flex-grow flex flex-col z-0">
                    <div className="flex flex-col xl:flex-row items-start">
                        <Map
                            businesses={filteredBusinesses}
                            selectedBusiness={selectedBusiness}
                            initialPosition={[-11.937099, -75.259263]} // Pasa la coordenada inicial aquí
                        />

                        {selectedBusiness && (
                            <BusinessDetail business={selectedBusiness} onClose={() => setSelectedBusiness(null)} />
                        )}
                    </div>
                    <div className="md:hidden w-full">
                        {<HorizontalFilter activeFilters={activeFilters} setActiveFilters={setActiveFilters} />}
                    </div>

                    <BusinessGrid
                        businesses={filteredBusinesses}
                        onSelectBusiness={setSelectedBusiness}
                    />
                </main>
            </div>
        </>
    );
}
