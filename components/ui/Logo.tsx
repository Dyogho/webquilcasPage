import Image from 'next/image';

export default function Logo() {
    return (
        <div className="flex justify-center items-center ">
            <div className="flex flex-row items-center ">
                <div className="relative w-20 h-20">
                    <Image
                        src="/logo/escudo.svg"
                        alt="Logotipo Quilcas"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className="relative w-60 h-20 ml-4"> 
                    <Image
                        src="/logo/textQuilcas.png"
                        alt="Quilcas Text"
                        fill 
                        style={{ objectFit: 'contain' }} 
                    />
                </div>
            </div>
        </div>
    );
}
