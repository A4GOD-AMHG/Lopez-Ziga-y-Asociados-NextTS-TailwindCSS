"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiSend, FiPhoneCall, FiCheckCircle, FiXCircle, FiX } from "react-icons/fi";
import Logo from "./Logo";

export default function Footer() {
    const path = usePathname();
    const [email, setEmail] = useState<string>("");
    const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [modal, setModal] = useState<{ show: boolean; type: 'success' | 'error'; message: string }>({
        show: false,
        type: 'success',
        message: ''
    });

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setIsValidEmail(false);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setEmail("");
                setModal({
                    show: true,
                    type: 'success',
                    message: '¡Gracias por suscribirte!'
                });
            } else {
                setModal({
                    show: true,
                    type: 'error',
                    message: 'Error al suscribirse. Por favor intenta nuevamente.'
                });
            }
        } catch (error) {
            setModal({
                show: true,
                type: 'error',
                message: 'Error de conexión. Por favor verifica tu conexión a internet.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeModal = () => {
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.classList.add('closing');
            setTimeout(() => {
                setModal(prev => ({ ...prev, show: false }));
            }, 300);
        }
    };

    return (
        <footer className="bg-gray-100 text-gray">
            {modal.show && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-opacity duration-300">
                    <div className={`bg-white rounded-lg p-8 max-w-sm w-full relative transform transition-all duration-300 scale-95 modal-content
                        ${modal.show ? 'animate-fade-in' : 'opacity-0 scale-90'}`}>
                        <div
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <FiX className="text-xl w-6 h-6" />
                        </div>
                        <div className="flex flex-col items-center text-center">
                            {modal.type === 'success' ? (
                                <FiCheckCircle className="text-4xl text-primary mb-4" />
                            ) : (
                                <FiXCircle className="text-4xl text-red-500 mb-4" />
                            )}
                            <p className="text-lg font-medium mb-4">{modal.message}</p>
                            <button
                                onClick={closeModal}
                                className={`px-6 py-2 cursor-pointer rounded-lg ${modal.type === 'success'
                                    ? 'bg-primary hover:bg-secondary'
                                    : 'bg-red-500 hover:bg-red-600'
                                    } text-white transition-colors`}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="container mx-auto px-4 pt-12 pb-6">
                <div className="mb-10 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-semibold mb-6 text-primary">
                            Suscríbete a nuestro boletín legal
                        </h3>
                        <form onSubmit={handleSubmit} className="flex flex-row portrait:flex-col items-center gap-4">
                            <input
                                type="email"
                                placeholder="Ingresa tu correo electrónico"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setIsValidEmail(true);
                                }}
                                className={`flex-grow relative px-6 w-full placeholder:text-gray-600 md:w-auto py-3 rounded-lg border bg-white focus:outline-none 
                                    ${isValidEmail ? "focus:ring-secondary" : "border-red-500 focus:ring-red-500"
                                    }`}
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-primary cursor-pointer w-52 hover:bg-secondary text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors font-medium disabled:opacity-70"
                            >
                                <FiSend className="text-xl" />
                                {isSubmitting ? "Enviando..." : "Suscribirse ahora"}
                            </button>
                        </form>
                        {!isValidEmail && (
                            <p className="text-red-500 absolute text-sm mt-2">Por favor ingresa un correo electrónico válido</p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-3 portrait:grid-cols-1 gap-5 lg:gap-8">
                    <div className="flex flex-col items-start portrait:items-center">
                        <div className="mb-4 h-auto">
                            {path !== "/" && (
                                <Link href="/" passHref>
                                    <Logo
                                        width={220}
                                        height={120}
                                        className="object-contain cursor-pointer hover:opacity-90 transition-opacity" />
                                </Link>
                            )}
                            {path === "/" && (
                                <Logo
                                    width={220}
                                    height={120}
                                    className="object-contain cursor-pointer hover:opacity-90 transition-opacity" />
                            )}
                        </div>
                        <p className="text-gray-700 text-left portrait:text-center text-lg italic pr-12 portrait:px-4">
                            "Justicia y Excelencia Legal, defendiendo sus intereses con los mejores argumentos"
                        </p>
                    </div>

                    <div className="text-left portrait:text-center">
                        <h3 className="text-2xl font-semibold mb-4 text-primary">
                            Enlaces Rápidos
                        </h3>
                        <ul className="space-y-3 portrait:space-y-2">
                            <li><a href="/sobre-nosotros" className="text-gray-500 text-lg font-normal hover:text-gray-700 transition-colors">Sobre Nosotros</a></li>
                            <li><a href="/servicios" className="text-gray-500 text-lg font-normal hover:text-gray-700 transition-colors">Servicios</a></li>
                            <li><a href="/contacto" className="text-gray-500 text-lg font-normal hover:text-gray-700 transition-colors">Contacto</a></li>
                            <li><a href="/preguntas-frecuentes" className="text-gray-500 text-lg font-normal hover:text-gray-700 transition-colors">Preguntas Frecuentes</a></li>
                        </ul>
                    </div>

                    <div className="text-left portrait:text-center">
                        <h3 className="text-2xl font-semibold mb-4 text-primary">
                            Contacto
                        </h3>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-medium text-lg text-gray-600">CDMX</h4>
                                <p>Valle de Zumpango 15<br className="hidden portrait:block" />53050 Naucalpan de Juárez, Méx.</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-lg text-gray-600">Cocoyoc</h4>
                                <p>Cocoyoc - Oaxtepec 26<br className="hidden portrait:block" />62736 El Partidor, Mor.</p>
                            </div>
                            <div className="pt-2">
                                <p className="flex items-center justify-start portrait:justify-center gap-2">
                                    <FiSend className="text-primary" />
                                    <a
                                        href="mailto:contacto@lopezzigayasociados.com.mx"
                                        className="text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        contacto@lopezzigayasociados.com.mx
                                    </a>
                                </p>
                                <p className="flex items-center justify-start portrait:justify-center gap-2 mt-2">
                                    <FiPhoneCall className="text-primary" />
                                    <a
                                        href="tel:+525514083982"
                                        className="text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        +52 5514083982
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-light mt-8 pt-6 text-center">
                    <p className="text-gray-800">
                        © {new Date().getFullYear()} Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}