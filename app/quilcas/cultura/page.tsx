'use client'

import React from 'react'


import { MapPin, Utensils, Calendar, Users, Camera, Mountain } from 'lucide-react';
import { Globe, Leaf, History } from 'lucide-react';
import { ReasonToVisit, TestimonialCard } from '@/components/tourism/TourismComponents';
import AttractionCard from '@/components/tourism/AttractionCard'
import Prueba from '@/components/ui/Prueba';



interface ReasonProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  avatar: string;
}
const attractions = [

  {
    title: "Gastronomía Local",
    description: "Degusta los sabores auténticos de nuestra región, con platos tradicionales y fusiones modernas que resaltan ingredientes locales.",
    images: ["/places/destination-1.jpg", "/places/destination-2.jpg", "/places/destination-3.jpg"],
    icon: Utensils,
    link: "/quilcas/tourism/gastronomy"
  },
  {
    title: "Festividades",
    description: "Sumérgete en la rica cultura de Quilcas participando en nuestras coloridas fiestas y celebraciones tradicionales.",
    images: ["/places/destination-1.jpg", "/places/destination-2.jpg", "/places/destination-3.jpg"],
    icon: Calendar,
    link: "/quilcas/tourism/festivals"
  },
  {
    title: "Cultura y Tradiciones",
    description: "Descubre la herencia cultural de Quilcas a través de su arte, música, danzas y costumbres ancestrales.",
    images: ["/places/destination-1.jpg", "/places/destination-2.jpg", "/places/destination-3.jpg"],
    icon: Users,
    link: "/quilcas/tourism/culture"
  }

];


const reasonsToVisit = [
  { title: "Naturaleza Impresionante", description: "Disfruta de paisajes majestuosos y biodiversidad única.", icon: Globe },
  { title: "Rica Historia", description: "Explora sitios arqueológicos y aprende sobre nuestro pasado.", icon: History },
  { title: "Aventuras al Aire Libre", description: "Practica senderismo, ciclismo y más en nuestros entornos naturales.", icon: Globe },
  { title: "Gastronomía Deliciosa", description: "Prueba platos tradicionales y fusiones modernas con ingredientes locales.", icon: History },
  { title: "Artesanía Local", description: "Llévate a casa recuerdos únicos hechos por artesanos locales.", icon: Leaf },
  { title: "Hospitalidad Cálida", description: "Experimenta la amabilidad y acogida de nuestra gente.", icon: Leaf }
];

const testimonials = [
  {
    name: "María Rodríguez",
    location: "Huancayo, Junin",
    quote: "Quilcas superó todas mis expectativas. La belleza natural y la rica cultura me dejaron sin aliento.",
    avatar: "/avatar/avatar-1.png"
  },
  {
    name: "John Smith",
    location: "Concepcion, Junin",
    quote: "Una experiencia auténtica y memorable. Definitivamente volveré para explorar más de este hermoso lugar.",
    avatar: "/avatar/avatar-1.png"
  },
  {
    name: "Ana García",
    location: "Tambo, Junin",
    quote: "La hospitalidad de la gente de Quilcas es incomparable. Me sentí como en casa desde el primer día.",
    avatar: "/avatar/avatar-1.png"
  }
];



export default function TourismPage() {
  return (

    <>
      <Prueba
        title="Cultura"
        description="Sumérgete en la riqueza cultural de nuestro destino, con eventos, exposiciones, y tradiciones únicas."
        breadcrumb="Inicio &gt; Cultura"
        image="/places/destination-3.jpg"
      />
      <section className="bg-amber-50 py-16">
        {/* <HeroSection /> */}
        <div className="container mx-auto bg-gradient-to-b from-amber-700 to-amber-800 py-16">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Descubre Quilcas</h2>
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-amber-200 transform -translate-x-1/2"></div>
            {attractions.map((attraction, index) => (
              <AttractionCard key={index} {...attraction} index={index} />
            ))}
          </div>
        </div>
      </section>
      <ReasonsToVisitSection reasons={reasonsToVisit} />
      <TestimonialsSection testimonials={testimonials} />
    </>
  )
}


export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/videos/quilcas-scenery.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <div className="z-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenidos a Quilcas</h1>
        <p className="text-xl md:text-2xl mb-8">Descubre la magia de nuestro hermoso pueblo</p>

      </div>
    </section>
  );
}


function ReasonsToVisitSection({ reasons }: { reasons: ReasonProps[] }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800 text-center mb-12">¿Por qué visitar Quilcas?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ReasonToVisit key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
}
function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 text-center mb-12">Lo que dicen nuestros visitantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
