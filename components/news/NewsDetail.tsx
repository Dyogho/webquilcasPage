import React from 'react';
import Image from 'next/image';

interface NewsDetailProps {
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

const NewsDetail: React.FC<NewsDetailProps> = ({
  date,
  image,
  title,
  content,
  location,
  category,
  author,
  tags,
  additionalInfo
}) => (
  <article className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <header className="mb-8">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">{title}</h1>
      <div className="flex items-center text-gray-600 text-lg mb-4">
        <span className="mr-6">{`${date.day} ${date.month}, ${date.year}`}</span>
        <span className="mr-6">Ubicación: {location}</span>
        <span className="mr-6">Categoría: {category}</span>
        <span>Autor: {author}</span>
      </div>
      <div className="flex flex-wrap mb-6">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full mr-2 mb-2">{tag}</span>
        ))}
      </div>
    </header>

    <figure className="mb-8">
      <Image 
        src={image} 
        alt={title} 
        width={800} 
        height={400} 
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
      <figcaption className="text-sm text-gray-500 mt-2">Imagen relacionada con la noticia</figcaption>
    </figure>

    <div className="prose prose-lg max-w-none text-gray-800 mb-6">
      {content.split('\n\n').map((paragraph, index) => (
        <p key={index} className="mb-6">{paragraph}</p>
      ))}
    </div>

    {additionalInfo && (
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800">Información Adicional</h2>
        <p className="text-gray-700">{additionalInfo}</p>
      </div>
    )}
  </article>
);

export default NewsDetail;
