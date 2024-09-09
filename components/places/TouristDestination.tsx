'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
interface TouristAttraction {
    id: number;
    nombre: string;
    categoria: string;
    historia: string;
    fotos: string[];
    reconocimientos: string;
    estadoActual: string;
    ubicacion: string;
    coordenadas: [number, number];
    epocaVisita: string;
    actividades: string[];
    horarioVisita: string;
    tarifas: string;
    recomendaciones: string[];
}

const touristAttractions: TouristAttraction[] = [
    {
        id: 1,
        nombre: "Restos Arqueológicos De Chuctoloma",
        categoria: "Sitios Arqueológicos",
        historia: "El topónimo de Chuctoloma es 'loma empedrada'; 'chucto' que en el idioma quechua huanca significa 'empedrado,' y 'loma' en castellano que hace referencia a una elevación de terreno de poca altura. Su nombre es contemporáneo, y se debe a la influencia del cerro que lo cobija.",
        fotos: ["/places/destination-1.jpg", "/places/destination-1.jpg", "/places/destination-1.jpg"],
        reconocimientos: "Declarado Patrimonio Cultural de la Nación mediante Resolución Directoral Nacional N°1317, de fecha del 9 de noviembre del año 2000 por el entonces Instituto Nacional de Cultura.",
        estadoActual: "Se encuentra en regular estado de conservación, la Municipalidad Distrital de Quilcas en coordinación con la Dirección Desconcentrada de Cultura de Junín realizan trabajos de mantenimiento y limpieza del sitio arqueológico.",
        ubicacion: "Actualmente se ubica en el barrio de Ulunmarca a 300 mts. de la plaza principal.",
        coordenadas: [-75.2567, -12.0833],
        epocaVisita: "Todo el Año",
        actividades: ["Caminatas guiadas", "Fotografía", "Observación de flora y fauna local"],
        horarioVisita: "De 8:00 AM a 5:00 PM",
        tarifas: "Adultos: S/. 10, Niños y estudiantes: S/. 5",
        recomendaciones: ["Llevar agua", "Usar protector solar", "Calzado cómodo para caminata"]
    },
    {
        id: 1,
        nombre: "Restos Arqueológicos De Chuctoloma",
        categoria: "Sitios Arqueológicos",
        historia: "El topónimo de Chuctoloma es 'loma empedrada'; 'chucto' que en el idioma quechua huanca significa 'empedrado,' y 'loma' en castellano que hace referencia a una elevación de terreno de poca altura. Su nombre es contemporáneo, y se debe a la influencia del cerro que lo cobija.",
        fotos: ["/places/destination-1.jpg", "/places/destination-1.jpg", "/places/destination-1.jpg"],
        reconocimientos: "Declarado Patrimonio Cultural de la Nación mediante Resolución Directoral Nacional N°1317, de fecha del 9 de noviembre del año 2000 por el entonces Instituto Nacional de Cultura.",
        estadoActual: "Se encuentra en regular estado de conservación, la Municipalidad Distrital de Quilcas en coordinación con la Dirección Desconcentrada de Cultura de Junín realizan trabajos de mantenimiento y limpieza del sitio arqueológico.",
        ubicacion: "Actualmente se ubica en el barrio de Ulunmarca a 300 mts. de la plaza principal.",
        coordenadas: [-75.2567, -12.0833],
        epocaVisita: "Todo el Año",
        actividades: ["Caminatas guiadas", "Fotografía", "Observación de flora y fauna local"],
        horarioVisita: "De 8:00 AM a 5:00 PM",
        tarifas: "Adultos: S/. 10, Niños y estudiantes: S/. 5",
        recomendaciones: ["Llevar agua", "Usar protector solar", "Calzado cómodo para caminata"]
    },
    {
        id: 1,
        nombre: "Restos Arqueológicos De Chuctoloma",
        categoria: "Sitios Arqueológicos",
        historia: "El topónimo de Chuctoloma es 'loma empedrada'; 'chucto' que en el idioma quechua huanca significa 'empedrado,' y 'loma' en castellano que hace referencia a una elevación de terreno de poca altura. Su nombre es contemporáneo, y se debe a la influencia del cerro que lo cobija.",
        fotos: ["/places/destination-1.jpg", "/places/destination-1.jpg", "/places/destination-1.jpg"],
        reconocimientos: "Declarado Patrimonio Cultural de la Nación mediante Resolución Directoral Nacional N°1317, de fecha del 9 de noviembre del año 2000 por el entonces Instituto Nacional de Cultura.",
        estadoActual: "Se encuentra en regular estado de conservación, la Municipalidad Distrital de Quilcas en coordinación con la Dirección Desconcentrada de Cultura de Junín realizan trabajos de mantenimiento y limpieza del sitio arqueológico.",
        ubicacion: "Actualmente se ubica en el barrio de Ulunmarca a 300 mts. de la plaza principal.",
        coordenadas: [-75.2567, -12.0833],
        epocaVisita: "Todo el Año",
        actividades: ["Caminatas guiadas", "Fotografía", "Observación de flora y fauna local"],
        horarioVisita: "De 8:00 AM a 5:00 PM",
        tarifas: "Adultos: S/. 10, Niños y estudiantes: S/. 5",
        recomendaciones: ["Llevar agua", "Usar protector solar", "Calzado cómodo para caminata"]
    },
    {
        id: 1,
        nombre: "Restos Arqueológicos De Chuctoloma",
        categoria: "Sitios Arqueológicos",
        historia: "El topónimo de Chuctoloma es 'loma empedrada'; 'chucto' que en el idioma quechua huanca significa 'empedrado,' y 'loma' en castellano que hace referencia a una elevación de terreno de poca altura. Su nombre es contemporáneo, y se debe a la influencia del cerro que lo cobija.",
        fotos: ["/places/destination-1.jpg", "/places/destination-1.jpg", "/places/destination-1.jpg"],
        reconocimientos: "Declarado Patrimonio Cultural de la Nación mediante Resolución Directoral Nacional N°1317, de fecha del 9 de noviembre del año 2000 por el entonces Instituto Nacional de Cultura.",
        estadoActual: "Se encuentra en regular estado de conservación, la Municipalidad Distrital de Quilcas en coordinación con la Dirección Desconcentrada de Cultura de Junín realizan trabajos de mantenimiento y limpieza del sitio arqueológico.",
        ubicacion: "Actualmente se ubica en el barrio de Ulunmarca a 300 mts. de la plaza principal.",
        coordenadas: [-75.2567, -12.0833],
        epocaVisita: "Todo el Año",
        actividades: ["Caminatas guiadas", "Fotografía", "Observación de flora y fauna local"],
        horarioVisita: "De 8:00 AM a 5:00 PM",
        tarifas: "Adultos: S/. 10, Niños y estudiantes: S/. 5",
        recomendaciones: ["Llevar agua", "Usar protector solar", "Calzado cómodo para caminata"]
    },
    {
        id: 1,
        nombre: "Restos Arqueológicos De Chuctoloma",
        categoria: "Sitios Arqueológicos",
        historia: "El topónimo de Chuctoloma es 'loma empedrada'; 'chucto' que en el idioma quechua huanca significa 'empedrado,' y 'loma' en castellano que hace referencia a una elevación de terreno de poca altura. Su nombre es contemporáneo, y se debe a la influencia del cerro que lo cobija.",
        fotos: ["/places/destination-1.jpg", "/places/destination-1.jpg", "/places/destination-1.jpg"],
        reconocimientos: "Declarado Patrimonio Cultural de la Nación mediante Resolución Directoral Nacional N°1317, de fecha del 9 de noviembre del año 2000 por el entonces Instituto Nacional de Cultura.",
        estadoActual: "Se encuentra en regular estado de conservación, la Municipalidad Distrital de Quilcas en coordinación con la Dirección Desconcentrada de Cultura de Junín realizan trabajos de mantenimiento y limpieza del sitio arqueológico.",
        ubicacion: "Actualmente se ubica en el barrio de Ulunmarca a 300 mts. de la plaza principal.",
        coordenadas: [-75.2567, -12.0833],
        epocaVisita: "Todo el Año",
        actividades: ["Caminatas guiadas", "Fotografía", "Observación de flora y fauna local"],
        horarioVisita: "De 8:00 AM a 5:00 PM",
        tarifas: "Adultos: S/. 10, Niños y estudiantes: S/. 5",
        recomendaciones: ["Llevar agua", "Usar protector solar", "Calzado cómodo para caminata"]
    },
    {
        id: 1,
        nombre: "Restos Arqueológicos De Chuctoloma",
        categoria: "Sitios Arqueológicos",
        historia: "El topónimo de Chuctoloma es 'loma empedrada'; 'chucto' que en el idioma quechua huanca significa 'empedrado,' y 'loma' en castellano que hace referencia a una elevación de terreno de poca altura. Su nombre es contemporáneo, y se debe a la influencia del cerro que lo cobija.",
        fotos: ["/places/destination-1.jpg", "/places/destination-1.jpg", "/places/destination-1.jpg"],
        reconocimientos: "Declarado Patrimonio Cultural de la Nación mediante Resolución Directoral Nacional N°1317, de fecha del 9 de noviembre del año 2000 por el entonces Instituto Nacional de Cultura.",
        estadoActual: "Se encuentra en regular estado de conservación, la Municipalidad Distrital de Quilcas en coordinación con la Dirección Desconcentrada de Cultura de Junín realizan trabajos de mantenimiento y limpieza del sitio arqueológico.",
        ubicacion: "Actualmente se ubica en el barrio de Ulunmarca a 300 mts. de la plaza principal.",
        coordenadas: [-75.2567, -12.0833],
        epocaVisita: "Todo el Año",
        actividades: ["Caminatas guiadas", "Fotografía", "Observación de flora y fauna local"],
        horarioVisita: "De 8:00 AM a 5:00 PM",
        tarifas: "Adultos: S/. 10, Niños y estudiantes: S/. 5",
        recomendaciones: ["Llevar agua", "Usar protector solar", "Calzado cómodo para caminata"]
    },
    {
        id: 1,
        nombre: "Restos Arqueológicos De Chuctoloma",
        categoria: "Sitios Arqueológicos",
        historia: "El topónimo de Chuctoloma es 'loma empedrada'; 'chucto' que en el idioma quechua huanca significa 'empedrado,' y 'loma' en castellano que hace referencia a una elevación de terreno de poca altura. Su nombre es contemporáneo, y se debe a la influencia del cerro que lo cobija.",
        fotos: ["/places/destination-1.jpg", "/places/destination-1.jpg", "/places/destination-1.jpg"],
        reconocimientos: "Declarado Patrimonio Cultural de la Nación mediante Resolución Directoral Nacional N°1317, de fecha del 9 de noviembre del año 2000 por el entonces Instituto Nacional de Cultura.",
        estadoActual: "Se encuentra en regular estado de conservación, la Municipalidad Distrital de Quilcas en coordinación con la Dirección Desconcentrada de Cultura de Junín realizan trabajos de mantenimiento y limpieza del sitio arqueológico.",
        ubicacion: "Actualmente se ubica en el barrio de Ulunmarca a 300 mts. de la plaza principal.",
        coordenadas: [-75.2567, -12.0833],
        epocaVisita: "Todo el Año",
        actividades: ["Caminatas guiadas", "Fotografía", "Observación de flora y fauna local"],
        horarioVisita: "De 8:00 AM a 5:00 PM",
        tarifas: "Adultos: S/. 10, Niños y estudiantes: S/. 5",
        recomendaciones: ["Llevar agua", "Usar protector solar", "Calzado cómodo para caminata"]
    },
    // Añadir más atracciones turísticas aquí...
];
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const AttractionCard: React.FC<{ attraction: TouristAttraction; onSelect: (id: number) => void }> = ({ attraction, onSelect }) => (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <div className="relative h-64">
            <Image src={attraction.fotos[0]} alt={attraction.nombre} layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
                <h2 className="font-bold text-2xl mb-1">{attraction.nombre}</h2>
                <p className="text-sm">{attraction.categoria}</p>
            </div>
        </div>
        <div className="px-6 py-4">
            <p className="text-gray-700 text-base mb-4 line-clamp-3">{attraction.historia.substring(0, 100)}...</p>
            <button
                onClick={() => onSelect(attraction.id)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
            >
                Descubrir más
            </button>
        </div>
    </div>
);


const DetailView: React.FC<{ attraction: TouristAttraction; onBack: () => void }> = ({ attraction, onBack }) => (
    <div className="container mx-auto px-4 py-8">
        <button
            onClick={onBack}
            className="mb-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105"
        >
            ← Volver
        </button>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96">
                <Image src={attraction.fotos[0]} alt={attraction.nombre} layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h1 className="text-4xl font-bold mb-2">{attraction.nombre}</h1>
                    <p className="text-xl">{attraction.categoria}</p>
                </div>
            </div>
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Historia</h2>
                        <p className="mb-6 text-gray-700">{attraction.historia}</p>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Reconocimientos</h2>
                        <p className="mb-6 text-gray-700">{attraction.reconocimientos}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Ubicación</h2>
                        <p className="mb-4 text-gray-700">{attraction.ubicacion}</p>
                        <div className="h-64 rounded-lg overflow-hidden shadow-md">
                            <MapContainer
                                center={[attraction.coordenadas[1], attraction.coordenadas[0]]}
                                zoom={13}
                                style={{ height: '100%', width: '100%' }}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={[attraction.coordenadas[1], attraction.coordenadas[0]]}>
                                    <Popup>{attraction.nombre}</Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-100 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-blue-600">Época de Visita</h3>
                        <p className="text-gray-700">{attraction.epocaVisita}</p>
                    </div>
                    <div className="bg-green-100 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-green-600">Horario de Visita</h3>
                        <p className="text-gray-700">{attraction.horarioVisita}</p>
                    </div>
                    <div className="bg-yellow-100 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-yellow-600">Tarifas</h3>
                        <p className="text-gray-700">{attraction.tarifas}</p>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-600">Actividades</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {attraction.actividades.map((actividad, index) => (
                            <li key={index} className="flex items-center">
                                <span className="mr-2 text-blue-500">•</span>
                                {actividad}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-600">Recomendaciones</h3>
                    <ul className="space-y-2">
                        {attraction.recomendaciones.map((recomendacion, index) => (
                            <li key={index} className="flex items-center">
                                <span className="mr-2 text-blue-500">✓</span>
                                {recomendacion}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

const TouristDestination: React.FC = () => {
    const [selectedAttractionId, setSelectedAttractionId] = useState<number | null>(null);

    const selectedAttraction = touristAttractions.find(attr => attr.id === selectedAttractionId);

    return (
        <div className="bg-gray-100 min-h-screen py-12">
            {selectedAttraction ? (
                <DetailView
                    attraction={selectedAttraction}
                    onBack={() => setSelectedAttractionId(null)}
                />
            ) : (
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold text-center mb-12 text-blue-800">Descubre Nuestros Tesoros Turísticos</h1>
                    <div className="flex flex-wrap justify-center">
                        {touristAttractions.map(attraction => (
                            <AttractionCard
                                key={attraction.id}
                                attraction={attraction}
                                onSelect={setSelectedAttractionId}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TouristDestination;