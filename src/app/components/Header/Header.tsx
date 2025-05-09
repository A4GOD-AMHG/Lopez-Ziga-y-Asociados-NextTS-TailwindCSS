import Link from "next/link";
import Logo from "../Logo";
import AnimatedLink from "../AnimatedLink";
import Image from "next/image";
import dynamic from "next/dynamic";
// import ReactFacebookPixel from 'react-facebook-pixel';

const MobileMenu = dynamic(
    () => import("./MobileMenu"),
    {
        loading: () => (
            <button title="Menu" className="text-primary focus:outline-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path fillRule="evenodd" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" clipRule="evenodd" />
                </svg>
            </button>
        )
    }
);

export default async function Header() {
    return (
        <header id="header" className="fixed w-full bg-gray-100 bg-opacity-100 backdrop-blur-sm shadow-sm top-0 z-20">
            <div className="container px-3 mx-auto py-0 flex justify-between items-center">
                <div className="w-36 md:w-44 lg:w-48">
                    <Link href="/">
                        <div className="w-36 md:w-44 lg:w-48">
                            <Logo />
                        </div>
                    </Link>
                </div>

                <nav className="hidden lg:flex items-center space-x-8">
                    <AnimatedLink href="/">Inicio</AnimatedLink>
                    <AnimatedLink href="/sobre-nosotros">Sobre Nosotros</AnimatedLink>

                    <div className="relative group">
                        <AnimatedLink href="/derecho" noredirect trailing extraClasses="flex items-center space-x-1 cursor-pointer">
                            <span className="relative text-gray-700 hover:text-gray-900 text-xl font-medium">
                                Servicios
                            </span>
                        </AnimatedLink>

                        <div className="absolute top-10 left-0 bg-gray-100 shadow-lg rounded-lg min-w-[240px]
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                transition-all duration-300">
                            {["penal", "inmobiliario", "familiar"].map((s) => (
                                <AnimatedLink
                                    key={s}
                                    href={`/derecho-${s}`}
                                    extraClasses="block px-4 py-2"
                                    showUnderline={false}
                                >
                                    Derecho {s.charAt(0).toUpperCase() + s.slice(1)}
                                </AnimatedLink>
                            ))}
                        </div>
                    </div>

                    <AnimatedLink href="/contacto">Contacto</AnimatedLink>
                    <AnimatedLink href="/politicas-de-privacidad">Políticas</AnimatedLink>
                    <AnimatedLink href="/preguntas">Preguntas</AnimatedLink>
                </nav>

                <div className="flex items-center space-x-3">
                    <div className="hidden sm:flex items-center space-x-3">
                        <div className="hidden sm:flex items-center bg-gray-100 px-4 py-2 rounded-md">
                            <Image
                                src="/images/mexico-flag.webp"
                                alt="México"
                                width={48}
                                height={32}
                                className="mr-2 w-12 h-auto"
                            />
                        </div>
                        <a
                            href="tel:+525514083982"
                            title="Llama ya!"
                            className="bg-primary hover:bg-secondary text-white px-5 py-2.5 text-lg rounded-lg flex items-center transition-all shadow-md whitespace-nowrap"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M19.44 13c-.22 0-.45-.07-.67-.12a9.44 9.44 0 0 1-1.31-.39 2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2 12.18 12.18 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48 10.33 10.33 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41 19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 3-3v-3a3 3 0 0 0-2.47-2.94zm.5 6a1 1 0 0 1-.99 1.15 17 17 0 0 1-14.72-14.73A1 1 0 0 1 5 4.05h3a1 1 0 0 1 1 .79c.04.27.07.54.1.8.11.69.24 1.36.45 2 .15.51.5 1 1 1.22l.38.19c.56.28 1.1.43 1.63.45.53.02 1.06-.12 1.76-.51.36-.2.75-.32 1.15-.32h.06a6.12 6.12 0 0 1 1.47.32c.45.13.95.17 1.47.12a4.6 4.6 0 0 0 1.57-.43 2.25 2.25 0 0 0 1.27-1.25 8.9 8.9 0 0 0 .46-2.02l.1-.77a1 1 0 0 1 1-.8h3a1 1 0 0 1 1 1z" />
                            </svg>

                            Llama ya!
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=525514083982"
                            title="Escríbenos a WhatsApp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] hover:bg-[#1DA851] text-white px-5 py-2.5 text-lg rounded-lg flex items-center transition-all shadow-md whitespace-nowrap"
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
                        {/* <Link
                            href="/admin"
                            className="bg-gray-800 hover:bg-gray-700 text-white p-2.5 rounded-lg flex items-center transition-all shadow-md group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
                            </svg>
                            Admin
                        </Link> */}
                    </div>

                    <div className="flex sm:hidden items-center space-x-2">
                        <a
                            href="tel:+525514083982"
                            className="flex items-center justify-center bg-primary hover:bg-secondary text-white p-2 rounded-full"
                            title="Llama ya!"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M19.44 13c-.22 0-.45-.07-.67-.12a9.44 9.44 0 0 1-1.31-.39 2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2 12.18 12.18 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48 10.33 10.33 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41 19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 3-3v-3a3 3 0 0 0-2.47-2.94zm.5 6a1 1 0 0 1-.99 1.15 17 17 0 0 1-14.72-14.73A1 1 0 0 1 5 4.05h3a1 1 0 0 1 1 .79c.04.27.07.54.1.8.11.69.24 1.36.45 2 .15.51.5 1 1 1.22l.38.19c.56.28 1.1.43 1.63.45.53.02 1.06-.12 1.76-.51.36-.2.75-.32 1.15-.32h.06a6.12 6.12 0 0 1 1.47.32c.45.13.95.17 1.47.12a4.6 4.6 0 0 0 1.57-.43 2.25 2.25 0 0 0 1.27-1.25 8.9 8.9 0 0 0 .46-2.02l.1-.77a1 1 0 0 1 1-.8h3a1 1 0 0 1 1 1z" />
                            </svg>
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=525514083982"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-[#25D366] hover:bg-[#1DA851] text-white p-2 rounded-full"
                            title="Escríbenos a WhatsApp"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                    </div>
                    <div className="md:hidden">
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </header >
    );
}
