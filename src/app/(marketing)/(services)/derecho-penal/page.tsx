
import ServiceDetails from '@/app/components/ServiceDetails';
import dynamic from 'next/dynamic';
import Image from 'next/image';

export const metadata = {
    title: 'Derecho Penal | López Ziga y Asociados',
    description: 'Expertos en derecho penal en México. Defensa legal en procesos penales con altas tasas de éxito. Consulta gratuita.',
    keywords: ['abogados penalistas', 'defensa legal méxico', 'derecho penal', 'asesoría penal'],
}

const slides = [
    {
        title: "Defensa Penal Especializada en México",
        description: "Expertos en procesos judiciales complejos: desde delitos menores hasta casos de alta repercusión mediática. Protección legal integral con estrategias personalizadas.",
        ctaText: "Agenda tu Consulta",
        bgImage: "/images/penal-bg1.jpg",
    },
    {
        title: "Juicios Orales con Resultados Comprobados",
        description: "Representación experta en el nuevo sistema de justicia penal. Más de 200 casos resueltos exitosamente en los últimos 3 años.",
        ctaText: "Agenda tu Consulta",
        bgImage: "/images/penal-bg2.jpg",
    },
    {
        title: "Defensa en Delitos Federales",
        description: "Especialistas en derechos penales y federales",
        ctaText: "Agenda tu Consulta",
        bgImage: "/images/penal-bg3.jpg",
    },
]

const serviceDetails = {
    title: "Derecho Penal",
    description: "Nuestro equipo de abogados penalistas cuenta con amplia experiencia en la defensa de casos complejos dentro del sistema de justicia penal mexicano, garantizando una defensa técnica sólida y estrategias legales personalizadas.",
    benefits: [
        "Defensa en todas las etapas del proceso penal",
        "Asesoría especializada en juicios orales",
        "Gestión de libertad bajo fianza",
        "Amparos contra actos de autoridad",
        "Defensa en delitos federales y locales",
        "Reducción de condenas y beneficios penitenciarios",
        "Defensa de víctimas y querellantes"
    ],
    process: [
        "Evaluación inicial gratuita del caso",
        "Análisis estratégico y plan de defensa",
        "Elaboración de defensa técnica personalizada",
        "Representación en audiencias y juicios",
        "Seguimiento post-sentencia y recursos legales"
    ]
}

const HeroCarousel = dynamic(
    () => import('@/app/components/Carousels/HeroCarousel'),
);

export default async function DerechoPenal() {

    return (
        <main className="min-h-screen mt-16 sm:mt-24 flex flex-col">
            <div className="relative h-[450px] md:h-[800px] overflow-hidden">
                <div id="carousel-viewport" className="overflow-hidden h-full w-full">
                    <div className="flex h-full">
                        {slides.map((slide, idx) => (
                            <div
                                className="relative flex-0 min-w-full w-full h-full"
                                key={idx}
                            >
                                <Image
                                    src={slide.bgImage}
                                    alt={slide.title}
                                    fill
                                    placeholder={idx === 0 ? 'blur' : 'empty'}
                                    blurDataURL={idx === 0 ? slide.bgImage : undefined}
                                    priority={idx === 0}
                                    className="object-bottom"
                                />
                                <div className="absolute inset-0 bg-black/60" />
                                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 text-white">
                                    <h1 className="text-3xl md:text-6xl font-bold drop-shadow-xl">
                                        {slide.title}
                                    </h1>
                                    <p className="text-xl md:text-2xl mb-8 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                                        {slide.description}
                                    </p>
                                    <button className="cta-button bg-[#70ac60] cursor-pointer hover:bg-[#90c67b] text-white font-bold py-4 px-12 text-xl rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                        {slide.ctaText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <HeroCarousel
                    containerId='carousel-viewport'
                    service="Derecho Penal"
                />
            </div>

            <ServiceDetails {...serviceDetails} />
        </main>
    )
}