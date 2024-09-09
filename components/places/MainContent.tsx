// components/MainContent.tsx
import React from 'react';
import RouteCard from './RouteCard';

const MainContent: React.FC = () => {
  const routes = [
    {
      imageSrc: "/places/destination-1.jpg",
      title: "Machu Picchu: La Ciudad Perdida de los Incas",
      description: "Explora las ruinas místicas de Machu Picchu, una maravilla arquitectónica inca escondida en las montañas de Perú. Descubre templos antiguos, terrazas vertiginosas y una vista impresionante de los Andes.",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.210037325973!2d-72.54700658518702!3d-13.163061990737448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d9a5f89555555%3A0x3a10370ea4a01a27!2sMachu%20Picchu!5e0!3m2!1sen!2s!4v1652280500000!5m2!1sen!2s",
      buttonText: "Planifica tu viaje"
    },
    {
      imageSrc: "/places/destination-2.jpg",
      title: "Santorini: Joyas del Mar Egeo",
      description: "Sumérgete en la belleza de Santorini, con sus icónicas casas blancas, cúpulas azules y puestas de sol espectaculares. Disfruta de playas de arena negra, vinos locales y la rica historia volcánica de la isla.",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51632.54766781472!2d25.37452032167968!3d36.416277099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499ce86adfd9ff7%3A0xb2a761f740d68afc!2sSantorini!5e0!3m2!1sen!2s!4v1652280600000!5m2!1sen!2s",
      buttonText: "Descubre Santorini"
    },
    {
      imageSrc: "/places/destination-3.jpg",
      title: "Gran Cañón: Maravilla Natural de Arizona",
      description: "Contempla la grandeza del Gran Cañón, una obra maestra geológica tallada por el río Colorado. Realiza caminatas por senderos escénicos, disfruta de vistas panorámicas y descubre la rica biodiversidad del parque.",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407714.6666547063!2d-112.40435033359368!3d36.10459858713643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873312ae759b4d15%3A0x1f38a9bec9912029!2sGrand%20Canyon%20National%20Park!5e0!3m2!1sen!2s!4v1652280700000!5m2!1sen!2s",
      buttonText: "Explora el Gran Cañón"
    }
  ];

  return (
    <div className="flex flex-wrap justify-around py-6">
      {routes.map((route, index) => (
        <RouteCard
          key={index}
          imageSrc={route.imageSrc}
          title={route.title}
          description={route.description}
          mapSrc={route.mapSrc}
          buttonText={route.buttonText}
        />
      ))}
    </div>
  );
};

export default MainContent;
