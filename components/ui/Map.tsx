'use client'

import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { CircleMarker, Popup } from 'react-leaflet';

// Importar componentes del mapa dinámicamente para el cliente
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });

type MapProps = {
    markers: { position: [number, number] }[];
}

export default function Map({ markers }: MapProps) {
    const [center, setCenter] = useState<[number, number]>([0, 0]);

    useEffect(() => {
        if (markers.length > 0) {
            setCenter(markers[0].position);
        }
    }, [markers]);

    if (!markers.length) {
        return <div>No markers available</div>;
    }

    return (
        <div className="relative w-full h-full">
            <MapContainer
                center={center}
                zoom={16}
                style={{ height: '100%', width: '50%' }} // Ajusta el tamaño del mapa
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {markers.map((marker, index) => (
                    <CircleMarker
                        key={index}
                        center={marker.position}
                        radius={10}
                        color='transparent'
                        fillColor="green"
                        opacity={0.5}
                    >
                        <Popup>
                            <h2>Parque central de Quilcas</h2>
                            <p>Latitud: {marker.position[0]}, Longitud: {marker.position[1]}</p>
                        </Popup>
                    </CircleMarker>
                ))}
            </MapContainer>
        </div>
    );
}
