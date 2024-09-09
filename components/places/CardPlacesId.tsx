import { Destination } from '@/src/data/destination';
import Link from 'next/link';
import React from 'react'
type CardPlacesIdProps = {
    destinations: Destination[],
    placeId: number

}

export default function CardPlacesId({ destinations, placeId }: CardPlacesIdProps) {
    return (
        <div className="relative w-full">
            <div className="flex flex-wrap justify-center gap-6">
                {destinations.map(
                    (dest) =>
                        dest.id !== placeId && (
                            <Link key={dest.id} href={`/quilcas/tourism/places/${dest.id}`}>
                                <div
                                    className="flex flex-col items-center cursor-pointer hover:bg-gray-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
                                >
                                    <img
                                        src={`/places/${dest.image}.jpg`}
                                        alt={dest.name}
                                        className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg mb-2"
                                    />
                                    <p className="text-base font-medium text-gray-800">{dest.name}</p>
                                </div>
                            </Link>
                        )
                )}
            </div>
        </div>


    )
}
