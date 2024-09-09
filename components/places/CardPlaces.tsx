'use client'
import { Destination } from '@/src/data/destination';
import Link from 'next/link';

type CardPlacesProps = {
    places: Destination[]; // Asegúrate de que 'places' esté definido como una lista de 'Destination'
}

export default function CardPlaces({ places }: CardPlacesProps) {
    // Añade una verificación de existencia
    if (!places || places.length === 0) {
        return <p>No hay lugares disponibles.</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {places.map((place) => (
                <Link key={place.id} href={`/quilcas/tourism/places/${place.id}`}>
                    <div className="border rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                        <img src={`/places/${place.image}.jpg`} alt={place.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{place.name}</h2>
                            <p className="text-gray-600">{place.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
