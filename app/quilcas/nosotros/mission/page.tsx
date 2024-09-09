import MissionItem from '@/components/ui/MissionItem'
import Image from 'next/image'
import React from 'react'

export default function missionPage() {

  const teamMembers = [
    {
      name: 'Mary, CEO',
      description: 'Aliquam ac justo est. Praesent feugiat cursus est.',
      imgSrc: '/images/team-img1.jpg',
    },
    {
      name: 'Jack, Founder',
      description: 'Maecenas sed diam eget risus varius blandit sit non.',
      imgSrc: '/images/team-img2.jpg',
    },
    {
      name: 'Linda, Manager',
      description: 'Phasellus nec ante in nunc molestie tincidunt ut eu diam.',
      imgSrc: '/images/team-img3.jpg',
    },
  ];


  return (
    <>
      <div className="container mx-auto py-16 px-6 lg:px-16 space-y-16">

        {/* Sección de Misión */}
        <section className=" flex flex-col lg:flex-row-reverse items-center lg:space-x-10 space-y-8 lg:space-y-0">
          <div className="lg:w-1/2 pl-10 ">
            <h2 className="text-4xl font-bold mb-4 text-main">Misión</h2>
            <p className="text-gray-600 text-lg leading-relaxed tracking-wide">
              Promover el desarrollo integral y sostenible del distrito, con un enfoque en la inclusión social, la participación ciudadana, y la conservación de nuestra identidad cultural y natural. Nuestra misión es trabajar junto a nuestra comunidad para construir un futuro próspero para todos.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src="/logo/historia.jpg" alt="Misión del Distrito" className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 object-cover w-full h-72" />
          </div>
        </section>

        {/* Sección de Visión */}
        <section className="flex flex-col lg:flex-row items-center lg:space-x-10 space-y-8 lg:space-y-0">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-main">Visión</h2>
            <p className="text-gray-600 text-lg leading-relaxed tracking-wide">
              Ser reconocidos como un distrito modelo en sostenibilidad, inclusión, y calidad de vida. Aspiramos a un futuro en el que nuestros ciudadanos se sientan orgullosos de su hogar, con acceso equitativo a oportunidades y recursos que fomenten el crecimiento personal y comunitario.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src="/logo/historia.jpg" alt="Visión del Distrito" className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 object-cover w-full h-72" />
          </div>
        </section>
      </div>




      <div
        className="flex flex-col items-center justify-center h-1/2 bg-gray-100 py-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/mission/services-bg.jpg)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
          {/* Card 1 */}
          <div className="group p-6 bg-white hover:bg-[#304352] rounded-lg shadow-lg transition-all duration-300">
            <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto mb-6 transition-all duration-300 transform group-hover:-translate-y-10">
              <Image
                src="/logo/escudo.svg"
                alt="Calidad Garantizada"
                className="object-cover w-full h-full"
                width={160}
                height={160}
              />
            </div>
            <h2 className="text-center text-xl font-bold text-orange-500 transition-all duration-300 transform group-hover:-translate-y-5 group-hover:text-white">
              Calidad Garantizada
            </h2>
            <p className="text-center text-gray-700 opacity-0 transition-all duration-1000 transform group-hover:opacity-100 group-hover:translate-y-1 group-hover:text-white">
              La calidad es nuestra prioridad. Quilcas garantiza que cada producto o servicio ofrecido cumple con los más altos estándares de calidad en nuestros productos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-6 bg-white hover:bg-[#304352] rounded-lg shadow-lg transition-all duration-300">
            <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto mb-6 transition-all duration-300 transform group-hover:-translate-y-10">
              <Image
                src="/logo/escudo.svg"
                alt="Sostenibilidad"
                className="object-cover w-full h-full"
                width={160}
                height={160}
              />
            </div>
            <h2 className="text-center text-xl font-bold text-orange-500 transition-all duration-300 transform group-hover:-translate-y-5 group-hover:text-white">
              Sostenibilidad
            </h2>
            <p className="text-center text-gray-700 opacity-0 transition-all duration-1000 transform group-hover:opacity-100 group-hover:translate-y-1 group-hover:text-white">
              Nuestro compromiso con el medio ambiente es fundamental. Quilcas trabaja continuamente para reducir su impacto ambiental a través de prácticas sostenibles.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-6 bg-white hover:bg-[#304352] rounded-lg shadow-lg transition-all duration-300">
            <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto mb-6 transition-all duration-300 transform group-hover:-translate-y-10">
              <Image
                src="/logo/escudo.svg"
                alt="Innovación Continua"
                className="object-cover w-full h-full"
                width={160}
                height={160}
              />
            </div>
            <h2 className="text-center text-xl font-bold text-orange-500 transition-all duration-300 transform group-hover:-translate-y-5 group-hover:text-white">
              Innovación Continua
            </h2>
            <p className="text-center text-gray-700 opacity-0 transition-all duration-1000 transform group-hover:opacity-100 group-hover:translate-y-1 group-hover:text-white">
              Quilcas se caracteriza por estar a la vanguardia, adoptando nuevas tecnologías y métodos para mejorar constantemente nuestros productos y servicios.
            </p>
          </div>
        </div>
      </div>


    </>
  )
}
