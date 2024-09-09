// components/Map.tsx
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

interface MapProps {
  businesses: Business[];
  selectedBusiness: Business | null;
}

export default function Map({ businesses, selectedBusiness }: MapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: number]: L.Marker }>({});

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([40.416775, -3.703790], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    // Remove existing markers
    Object.values(markersRef.current).forEach(marker => marker.remove());
    markersRef.current = {};

    // Add new markers
    businesses.forEach(business => {
      const marker = L.marker([business.lat, business.lng]).addTo(mapRef.current!);
      marker.bindPopup(`<b>${business.name}</b><br>${business.category}`);
      markersRef.current[business.id] = marker;
    });
  }, [businesses]);

  useEffect(() => {
    if (selectedBusiness && mapRef.current) {
      mapRef.current.setView([selectedBusiness.lat, selectedBusiness.lng], 15);
      markersRef.current[selectedBusiness.id].openPopup();
    }
  }, [selectedBusiness]);

  return <div id="map" className="h-[30rem] w-full" />;
}