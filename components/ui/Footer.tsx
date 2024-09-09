'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 py-10">
            <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Logo and Description */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-4">Mi Sitio de Turismo</h2>
                    <p className="text-gray-400">
                        Descubre los mejores destinos turísticos, explora culturas fascinantes y planifica tus próximas aventuras con nosotros.
                    </p>
                </div>

                {/* Links Section */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-white transition-colors">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link href="/quilcas/about" className="hover:text-white transition-colors">
                                Acerca de
                            </Link>
                        </li>
                        <li>
                            <Link href="/quilcas/tourism" className="hover:text-white transition-colors">
                                Lugares
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-white transition-colors">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold mb-4">Contacto</h3>
                    <ul className="space-y-2">
                        <li>
                            <p>Dirección:</p>
                            <p className="text-gray-400">Calle Falsa 123, Ciudad, País</p>
                        </li>
                        <li>
                            <p>Correo Electrónico:</p>
                            <a href="mailto:info@misitio.com" className="text-gray-400 hover:text-white transition-colors">
                                info@misitio.com
                            </a>
                        </li>
                        <li>
                            <p>Teléfono:</p>
                            <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                                +1 (234) 567-890
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Media & Subscription Section */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
                    <div className="flex justify-center md:justify-start space-x-4 mb-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>

                    <h3 className="text-xl font-semibold mb-4">¿Eres residente de Quilcas? Únete a esta colaboración</h3>
                    <button
                        type="submit"
                        className="mt-2 sm:mt-0 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Suscribirse
                    </button>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4">
                <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center text-center">
                    <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Mi Sitio de Turismo. Todos los derechos reservados.</p>
                    <p className="text-gray-400 text-sm">Diseñado por equipo Wranglers FIS - UNCP</p>
                </div>
            </div>
        </footer>
    );
}
