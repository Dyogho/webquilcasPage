import React from 'react';
import { Metadata } from 'next';
import NewsDetailPage from '@/components/news/NewsDetailPage';
import Prueba from '@/components/ui/Prueba';

interface Params {
  id: string;
}

async function getNewsData(id: string) {
  // Simulación de datos; aquí obtendrías los datos de la noticia desde una API o base de datos
  const newsData = {
    selectedNews: {
      date: { day: '01', month: 'Sep', year: '2024' },
      image: '/noticias/noticia-1.jpg',
      title: 'Día del Árbol en Quilcas',
      content: 'Para conmemorar el Día del Árbol, 70 estudiantes de la Facultad de Agronomía de la UNCP participaron en una actividad de plantación de tujas en la jardinería pública ubicada en la Avenida Quilcas y Jirón San Martín. Este esfuerzo tiene como objetivo embellecer la zona y contribuir al desarrollo de espacios verdes en nuestra comunidad. Es fundamental que la población colabore en el cuidado de estas nuevas plantas. Se hace un llamado a todos para que vigilen su estado y eviten cualquier daño. El maltrato a las plantas no solo afecta la belleza del entorno, sino también el equilibrio ecológico. En los próximos días, se instalará un sistema de riego tecnificado para asegurar el buen mantenimiento de las tujas. Este sistema permitirá un suministro de agua eficiente, garantizando que las plantas reciban la hidratación necesaria para su crecimiento y desarrollo óptimo. Queremos agradecer a todos los estudiantes de la Facultad de Agronomía de la UNCP por su valiosa contribución. Su dedicación y esfuerzo son un ejemplo de compromiso con el medio ambiente y la comunidad.',
      location: 'Avenida Quilcas y Jirón San Martín, Quilcas',
      category: 'Ecología',
      author: 'Redacción Local',
      tags: ['Medio Ambiente', 'Educación', 'Comunidad'],
      additionalInfo: 'Contactar para más información: contacto@quilcas.org, +1234567890',
    },
    otherNews: [
      {
        date: { day: '28', month: 'Feb', year: '2048' },
        image: '/noticias/noticia-1.jpg',
        title: 'Actividades del Grupo en Febrero',
        content: 'Contenido breve...',
        location: 'National Center, NYC',
        category: 'Eventos',
        author: 'Equipo de Eventos',
        tags: ['Deportes', 'Beneficencia'],
      },
      // Otras noticias...
    ],
  };
  return newsData;
}


export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const data = await getNewsData(params.id);
  return {

    title: data.selectedNews.title,
  };
}

const NewsDetailRoute = async ({ params }: { params: Params }) => {

  const newsData = await getNewsData(params.id);
  return <NewsDetailPage {...newsData} />;
};

export default NewsDetailRoute;
