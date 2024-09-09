// pages/index.tsx
import React from 'react';
import MainContent from '@/components/places/MainContent';
import Prueba from '@/components/ui/Prueba';
import Prueba1 from '@/components/ui/asda';
import FunFairSection from '@/components/tourism/FunFairSection';
import TouristDestinations from '@/components/places/TouristDestination';

const Home: React.FC = () => (
  <>
    <Prueba
      title="Nuestras Atracciones"
      description="Explora las maravillas de nuestro destino turístico, desde paisajes impresionantes hasta experiencias culturales únicas. ¡Hay algo para todos! "
      breadcrumb="Inicio &gt; Atracciones"
      image="/places/destination-1.jpg"
    />

    {/* <MainContent /> */}
    <TouristDestinations />
    <FunFairSection />
  </>
);

export default Home;
