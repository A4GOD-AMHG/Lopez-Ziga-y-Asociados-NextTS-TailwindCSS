'use client';

import { useState } from "react";
import AnimatedLink from "../AnimatedLink";

export default function MobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <>
            <button title="menu" onClick={() => setMenuOpen((o) => !o)} className="text-primary focus:outline-none">
                {menuOpen ?
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 6.707a1 1 0 011.414-1.414L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707z"
                            clipRule="evenodd"
                        />
                    </svg>
                    :
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path fillRule="evenodd" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" clipRule="evenodd" />
                    </svg>
                }
            </button>

            <div className={`absolute right-0 lg:hidden pl-5 mt-4 bg-gray-100 rounded-bl-2xl origin-top
                        shadow-lg transform transition-transform duration-300
                        ${menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}>
                <ul className="space-y-1 text-right px-4 py-3">
                    {[
                        { href: "/", label: "Inicio" },
                        { href: "/sobre-nosotros", label: "Sobre Nosotros" },
                    ].map(({ href, label }) => (
                        <li key={href}>
                            <AnimatedLink href={href} onClick={() => setMenuOpen(false)}>
                                {label}
                            </AnimatedLink>
                        </li>
                    ))}

                    <li>
                        <button
                            title="services"
                            onClick={() => setServicesOpen((o) => !o)}
                            className="flex items-center justify-end w-full text-gray-700 text-xl font-medium gap-1"
                        >
                            Servicios
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-5 w-5 ${servicesOpen && "rotate-180"}`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <div className={`overflow-hidden transition-all mt-1 duration-300 ${servicesOpen ? "max-h-40" : "max-h-0"}`}>
                            {["penal", "inmobiliario", "familiar"].map((s) => (
                                <AnimatedLink
                                    key={s}
                                    href={`/derecho-${s}`}
                                    onClick={() => setMenuOpen(false)}
                                    extraClasses="block text-right py-1"
                                    showUnderline={false}
                                >
                                    Derecho {s.charAt(0).toUpperCase() + s.slice(1)}
                                </AnimatedLink>
                            ))}
                        </div>
                    </li>

                    <li>
                        <AnimatedLink href="/contacto" onClick={() => setMenuOpen(false)}>
                            Contacto
                        </AnimatedLink>
                    </li>
                    <li>
                        <AnimatedLink href="/politicas-de-privacidad" onClick={() => setMenuOpen(false)}>
                            Políticas de Privacidad
                        </AnimatedLink>
                    </li>
                    <li>
                        <AnimatedLink href="/preguntas" onClick={() => setMenuOpen(false)}>
                            Preguntas
                        </AnimatedLink>
                    </li>
                </ul>
            </div>
        </>
    );
}
