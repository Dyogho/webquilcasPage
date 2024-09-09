import Prueba from '@/components/ui/Prueba';
import MissionPage from '../nosotros/mission/page';
import Map from "@/components/ui/Map";
import { markers } from "@/src/data/map";
export default function AboutPage() {
    return (
        <>
            <Prueba
                title="Nosotros"
                description="Conoce más sobre nuestra historia, misión, y el equipo que hace de nuestro distrito un lugar especial."
                breadcrumb="Inicio &gt; Nosotros"
                image="/places/destination-3.jpg"
            />
            <div className="container mx-auto py-16 px-6 lg:px-16 space-y-16">
                {/* Título Principal */}
                <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-800">Acerca del Distrito</h1>

                {/* Sección de Historia */}
                <section className="flex flex-col lg:flex-row items-center lg:space-x-10 space-y-8 lg:space-y-0">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-bold mb-4 text-main">Historia</h2>
                        <p className="text-gray-600 text-lg leading-relaxed tracking-wide">
                            Nuestra historia está llena de eventos significativos que han moldeado el distrito en lo que es hoy. Desde su fundación, ha sido un lugar de crecimiento constante, lleno de cultura, tradiciones y un fuerte sentido de comunidad. Explora los momentos más importantes que definen nuestra identidad.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        {/* <img src="/logo/historia.jpg" alt="Historia del Distrito" className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 object-cover w-full h-72" /> */}

                        <div className="w-full h-[500px]">
                            <Map markers={markers} />
                        </div>

                    </div>
                </section>

                <MissionPage />

                {/* Sección de Estructura Organizativa */}
                <section className="bg-gradient-to-r from-green-200 via-white-200 to-orange-200 rounded-lg p-10 shadow-lg">
                    <h2 className="text-4xl font-bold mb-6 text-main text-center">Estructura Organizativa</h2>
                    <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed tracking-wide">
                        La municipalidad se organiza con el objetivo de garantizar un gobierno eficiente y transparente. A continuación, te presentamos a los líderes y departamentos clave que trabajan para servir a nuestra comunidad.
                    </p>

                    {/* Estructura de Liderazgo */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Alcalde */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <img src="/avatar/avatar-1.png" alt="Alcalde" className="rounded-full w-32 h-32 mx-auto mb-4 shadow-md object-cover" />
                            <h3 className="text-2xl font-semibold text-center text-main">Alcalde</h3>
                            <p className="text-center text-gray-600 mt-2">Juan Pérez</p>
                            <p className="text-sm text-center text-gray-500 leading-relaxed">Responsable de dirigir la municipalidad y representar a los ciudadanos.</p>
                        </div>

                        {/* Secretaria Municipal */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <img src="/avatar/avatar-1.png" alt="Secretaria Municipal" className="rounded-full w-32 h-32 mx-auto mb-4 shadow-md object-cover" />
                            <h3 className="text-2xl font-semibold text-center text-main">Secretaria Municipal</h3>
                            <p className="text-center text-gray-600 mt-2">María López</p>
                            <p className="text-sm text-center text-gray-500 leading-relaxed">Coordina las actividades administrativas de la municipalidad.</p>
                        </div>

                        {/* Departamento de Desarrollo Urbano */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <img src="/avatar/avatar-1.png" alt="Desarrollo Urbano" className="rounded-full w-32 h-32 mx-auto mb-4 shadow-md object-cover" />
                            <h3 className="text-2xl font-semibold text-center text-main">Desarrollo Urbano</h3>
                            <p className="text-center text-gray-600 mt-2">Carlos Mendoza</p>
                            <p className="text-sm text-center text-gray-500 leading-relaxed">Planifica y supervisa los proyectos de infraestructura y urbanismo.</p>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}
