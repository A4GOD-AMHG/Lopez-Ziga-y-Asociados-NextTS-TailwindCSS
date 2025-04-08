'use client'

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

// Componente interno para los enlaces animados
interface AnimatedLinkProps {
    href: string;
    children: React.ReactNode;
    extraClasses?: string;
}

const AnimatedLink = ({ href, children, extraClasses = "" }: AnimatedLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={`relative group inline-block ${extraClasses}`}>
            <span
                className={`text-lg font-medium ${isActive ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"}`}
            >
                {children}
            </span>
            <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-1000 ease-in-out ${isActive ? "w-full" : "w-[1px] group-hover:w-full"
                    }`}
            ></span>
        </Link>
    );
};

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const toggleServices = () => {
        setServicesOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setServicesOpen(false);
    };

    return (
        <header className="bg-gray-100 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div>
                    {pathname === "/" ? (
                        <Logo
                            width={200}
                            height={100}
                            className="object-contain cursor-pointer hover:opacity-90 transition-opacity"
                        />
                    ) : (
                        <Link href="/" className="inline-block">
                            <Logo
                                width={200}
                                height={100}
                                className="object-contain cursor-pointer hover:opacity-90 transition-opacity"
                            />
                        </Link>
                    )}
                </div>

                {/* Navegación Desktop */}
                <nav className="hidden md:flex space-x-8 items-center">
                    <AnimatedLink href="/">Inicio</AnimatedLink>
                    <AnimatedLink href="/sobre-nosotros">Sobre Nosotros</AnimatedLink>
                    <div className="relative">
                        <button
                            onClick={toggleServices}
                            className="flex items-center space-x-1 text-lg font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            <span>Servicios</span>
                            <FiChevronDown />
                        </button>
                        {servicesOpen && (
                            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 transition-opacity duration-300">
                                <AnimatedLink
                                    href="/servicios/derecho-penal"
                                    extraClasses="block px-4 py-2 hover:bg-gray-100"
                                >
                                    Derecho Penal
                                </AnimatedLink>
                                <AnimatedLink
                                    href="/servicios/derecho-inmobiliario"
                                    extraClasses="block px-4 py-2 hover:bg-gray-100"
                                >
                                    Derecho Inmobiliario
                                </AnimatedLink>
                                <AnimatedLink
                                    href="/servicios/derecho-familiar"
                                    extraClasses="block px-4 py-2 hover:bg-gray-100"
                                >
                                    Derecho Familiar
                                </AnimatedLink>
                            </div>
                        )}
                    </div>
                    <AnimatedLink href="/preguntas-frecuentes">Preguntas Frecuentes</AnimatedLink>
                </nav>

                {/* Sección CTA y elementos adicionales */}
                <div className="flex items-center space-x-3">
                    <div className="hidden sm:flex items-center bg-gray-100 px-4 py-2 rounded-md">
                        <Image
                            src="/images/mexico-flag.webp"
                            alt="México"
                            width={48}
                            height={32}
                            className="mr-2"
                        />
                    </div>
                    <a
                        href="tel:+525555555555"
                        className="bg-primary hover:bg-secondary text-white px-5 py-2.5 text-lg rounded-lg flex items-center transition-all shadow-md whitespace-nowrap sm:whitespace-normal"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M19.44 13c-.22 0-.45-.07-.67-.12a9.44 9.44 0 0 1-1.31-.39 2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2 12.18 12.18 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48 10.33 10.33 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41 19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 3-3v-3a3 3 0 0 0-2.47-2.94zm.5 6a1 1 0 0 1-.99 1.15 17 17 0 0 1-14.72-14.73A1 1 0 0 1 5 4.05h3a1 1 0 0 1 1 .79c.04.27.07.54.1.8.11.69.24 1.36.45 2 .15.51.5 1 1 1.22l.38.19c.56.28 1.1.43 1.63.45.53.02 1.06-.12 1.76-.51.36-.2.75-.32 1.15-.32h.06a6.12 6.12 0 0 1 1.47.32c.45.13.95.17 1.47.12a4.6 4.6 0 0 0 1.57-.43 2.25 2.25 0 0 0 1.27-1.25 8.9 8.9 0 0 0 .46-2.02l.1-.77a1 1 0 0 1 1-.8h3a1 1 0 0 1 1 1z" />
                        </svg>
                        Llama ahora
                    </a>
                    <a
                        href="https://wa.me/525555555555"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#1DA851] text-white px-5 py-2.5 text-lg rounded-lg flex items-center transition-all shadow-md whitespace-nowrap sm:whitespace-normal"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Escríbenos
                    </a>
                    {/* Botón menú para mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                            {menuOpen ? <FiX className="h-8 w-8" /> : <FiMenu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú de navegación Mobile */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-screen" : "max-h-0"}`}
            >
                <nav className="px-4 py-2">
                    <ul className="flex flex-col space-y-4">
                        <li>
                            <AnimatedLink href="/" extraClasses="block" >
                                Inicio
                            </AnimatedLink>
                        </li>
                        <li>
                            <AnimatedLink href="/sobre-nosotros" extraClasses="block">
                                Sobre Nosotros
                            </AnimatedLink>
                        </li>
                        <li className="relative">
                            <button
                                onClick={toggleServices}
                                className="flex items-center justify-between w-full text-lg font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
                            >
                                <span>Servicios</span>
                                <FiChevronDown />
                            </button>
                            {servicesOpen && (
                                <ul className="mt-2 pl-4 space-y-2 transition-opacity duration-300">
                                    <li>
                                        <AnimatedLink href="/servicios/derecho-penal" extraClasses="block">
                                            Derecho Penal
                                        </AnimatedLink>
                                    </li>
                                    <li>
                                        <AnimatedLink href="/servicios/derecho-inmobiliario" extraClasses="block">
                                            Derecho Inmobiliario
                                        </AnimatedLink>
                                    </li>
                                    <li>
                                        <AnimatedLink href="/servicios/derecho-familiar" extraClasses="block">
                                            Derecho Familiar
                                        </AnimatedLink>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <AnimatedLink href="/preguntas-frecuentes" extraClasses="block">
                                Preguntas Frecuentes
                            </AnimatedLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
