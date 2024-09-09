'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import NewsDetail from '@/components/news/NewsDetail';
import Prueba from '@/components/ui/Prueba';
import Link from 'next/link';

interface NewsProps {
  date: {
    day: string;
    month: string;
    year: string;
  };
  image: string;
  title: string;
  content: string;
  location: string;
  category: string;
  author: string;
  tags: string[];
  additionalInfo?: string;
}

interface NewsDetailPageProps {
  selectedNews: NewsProps;
  otherNews: NewsProps[];
}

const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ selectedNews, otherNews }) => {
  const router = useRouter(); // Utiliza el hook useRouter

  return (
    <>
      <Prueba
        title="Noticias"
        description="Mantente al día con las últimas noticias y eventos importantes que ocurren en nuestro distrito."
        breadcrumb="Inicio &gt; Noticias"
        image="/places/destination-3.jpg"
      />
      <div className="bg-gray-50 min-h-screen py-12">
        <NewsDetail {...selectedNews} />

        {/* Botón de "Volver" */}
        <div className="flex justify-center">
          <button
            onClick={() => router.back()} // Función para navegar hacia atrás  
            className="mt-6 mb-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors duration-200"
          >
            Volver
          </button>
        </div>

   
      </div>
    </>
  );
};

export default NewsDetailPage;
