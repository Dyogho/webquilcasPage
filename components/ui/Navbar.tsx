'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [header, setHeader] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHeader(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed z-50 w-full transition-all duration-500 ${header
                ? "bg-white shadow-md py-2"
                : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/quilcas/inicio" passHref>
                    <div className="text-main text-2xl md:text-3xl flex items-center space-x-2 cursor-pointer">
                        <Logo />
                    </div>
                </Link>

                <nav className="hidden md:flex space-x-6 text-sm lg:text-base">
                    {[{
                        name: "Inicio",
                        link: "inicio"
                    },
                    {
                        name: "Atracciones",
                        link: "atracciones"
                    }, {
                        name: "Cultura",
                        link: "cultura"
                    }, {
                        name: "Noticias",
                        link: "noticias"
                    }, {
                        name: "Negocios",
                        link: "negocios"
                    }, {
                        name: "Nosotros",
                        link: "nosotros"
                    }].map((item) => (
                        <Link
                            key={item.name}
                            href={`/quilcas/${item.link}`} passHref
                            className={`hover:text-main transition-colors duration-300 ${header ? "text-gray-800" : "text-white"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="text-gray-800" /> : <Menu className={header ? "text-gray-800" : "text-white"} />}
                </button>
            </div>

            {/* Mobile menu */}

            <div
                className={`md:hidden fixed inset-y-0 right-0 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out bg-white shadow-lg w-64 z-50`}
            >
                <div className="flex flex-col h-full justify-center items-center space-y-8">
                    <button
                        className="absolute top-4 right-4 text-gray-800 focus:outline-none"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close Menu"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    {[
                        {
                            name: "Inicio",
                            link: "inicio"
                        },
                        {
                            name: "Atracciones",
                            link: "atracciones"
                        }, {
                            name: "Cultura",
                            link: "cultura"
                        }, {
                            name: "Noticias",
                            link: "noticias"
                        }, {
                            name: "Negocios",
                            link: "negocios"
                        }, {
                            name: "Nosotros",
                            link: "nosotros"
                        }].map((item) => (
                            <Link
                                key={item.name}
                                href={`/quilcas/${item.link}`}
                                className="text-gray-800 hover:text-main transition-colors duration-300 text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                </div>
            </div>
        </header>
    );
}