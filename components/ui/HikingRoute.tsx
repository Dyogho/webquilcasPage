import Image from 'next/image';

const HikingRoute = () => {
    return (
        <div className="relative bg-white py-12">
            <svg className="absolute top-0 left-0 w-full h-full z-0">
                <path
                    d="M50 100 C 250 200, 350 0, 550 100 S 750 200, 950 100"
                    stroke="red"
                    strokeWidth="2"
                    fill="transparent"
                />
            </svg>
            {/* Section 1: Elbrus */}
            <div className="relative flex flex-col items-center mb-12">
                <div className="w-11/12 md:w-2/3 relative">
                    <Image
                        src="/places/destination-1.jpg"
                        alt="Ascenso a Elbrus"
                        width={900}
                        height={600}
                        className="rounded-lg shadow-lg"
                    />
                    <div className="absolute top-0 left-0 p-4 text-white bg-black bg-opacity-50 rounded-lg">
                        <h2 className="text-2xl font-bold">Ascenso a Elbrus</h2>
                        <p>Descripción breve del ascenso a Elbrus.</p>
                    </div>
                </div>
                <div className="absolute w-px bg-red-500 h-full left-1/2 transform -translate-x-1/2 z-0"></div>
            </div>

            {/* Section 2: Crimea */}
            <div className="relative flex flex-col items-center mb-12">
                <div className="w-11/12 md:w-2/3 relative">
                    <Image
                        src="/places/destination-2.jpg"
                        alt="Excursión en Crimea"
                        width={900}
                        height={600}
                        className="rounded-lg shadow-lg"
                    />
                    <div className="absolute top-0 left-0 p-4 text-white bg-black bg-opacity-50 rounded-lg">
                        <h2 className="text-2xl font-bold">Excursión en Crimea</h2>
                        <p>Descripción breve de la excursión en Crimea.</p>
                    </div>
                </div>
                <div className="absolute w-px bg-red-500 h-full left-1/2 transform -translate-x-1/2 z-0"></div>
            </div>

            {/* Section 3: Altai */}
            <div className="relative flex flex-col items-center mb-12">
                <div className="w-11/12 md:w-2/3 relative">
                    <Image
                        src="/places/destination-3.jpg"
                        alt="Viaje por Altai"
                        width={900}
                        height={600}
                        className="rounded-lg shadow-lg"
                    />
                    <div className="absolute top-0 left-0 p-4 text-white bg-black bg-opacity-50 rounded-lg">
                        <h2 className="text-2xl font-bold">Viaje por Altai</h2>
                        <p>Descripción breve del viaje por Altai.</p>
                    </div>
                </div>
                <div className="absolute w-px bg-red-500 h-full left-1/2 transform -translate-x-1/2 z-0"></div>
            </div>
        </div>
    );
};

export default HikingRoute;
