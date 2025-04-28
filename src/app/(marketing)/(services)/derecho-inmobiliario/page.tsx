import ServiceDetails from '@/app/components/ServiceDetails';
import dynamic from 'next/dynamic';
import Image from 'next/image';

export const metadata = {
    title: 'Derecho Inmobiliario | López Ziga y Asociados',
    description: 'Expertos en derecho inmobiliario en México. Transacciones seguras, litigios de propiedad y asesoría contractual.',
    keywords: ['abogados inmobiliarios', 'contratos de compraventa', 'litigio de propiedades', 'derecho hipotecario'],
}

const slides = [
    {
        title: "Protección Legal para Transacciones Inmobiliarias",
        description: "Asesoría integral en compraventa, arrendamiento y desarrollo de propiedades. Garantía legal en todas las etapas de su inversión.",
        ctaText: "Obtén Asesoría Gratis",
        bgImage: "/images/inmobiliario-bg1.avif",
    },
    {
        title: "Soluciones en Conflictos de Propiedad",
        description: "Defensa legal especializada en litigios de titularidad, desalojos y pólizas jurídicas de arrendamiento.",
        ctaText: "Obtén Asesoría Gratis",
        bgImage: "/images/inmobiliario-bg2.avif",
    },
    {
        title: "Asesoría en Desarrollo Inmobiliario",
        description: "Gestión legal completa para proyectos de construcción: permisos, contratos con proveedores y cumplimiento normativo.",
        ctaText: "Obtén Asesoría Gratis",
        bgImage: "/images/inmobiliario-bg3.avif",
    }
]

const serviceDetails = {
    title: "Derecho Inmobiliario",
    description: "Brindamos protección legal integral para transacciones y conflictos relacionados con bienes raíces, garantizando seguridad jurídica en todos los procesos.",
    benefits: [
        "Revisión y elaboración de contratos",
        "Registro de propiedades",
        "Litigio en controversias de titularidad",
        "Asesoría en hipotecas y créditos",
        "Due diligence inmobiliario",
        "Gestión de arrendamientos",
        "Defensa en desalojos legales"
    ],
    process: [
        "Evaluación inicial del caso",
        "Análisis documental completo",
        "Elaboración de estrategia legal",
        "Negociación o representación judicial",
        "Seguimiento post-proceso legal"
    ]
}

const attorneys = [
    {
        name: "Lic. Alejandro Torres",
        title: "Especialista en Derecho Penal",
        experience: "15 años",
        cases: "450+",
        email: "a.torres@lopezziga.com",
        photo: "/images/lawyer1.jpg"
    },
]

const HeroCarrousel = dynamic(
    () => import('@/app/components/Carousels/HeroCarousel'),
);

export default async function DerechoInmobiliario() {
    return (
        <main className="min-h-screen flex flex-col">
            <div className="relative h-[50vh] mt-12 sm:mt-24 sm:h-[70vh] overflow-hidden">
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
                <HeroCarrousel
                    containerId='carousel-viewport'
                    service="Derecho Inmobiliario"
                />
            </div>

            <ServiceDetails {...serviceDetails} />
        </main>
    )
}