import ServiceDetails from '@/app/components/ServiceDetails';
import dynamic from 'next/dynamic';
import Image from 'next/image';

export const metadata = {
    title: 'Derecho Familiar | López Ziga y Asociados',
    description: 'Soluciones legales en divorcios, custodia y sucesiones. Enfoque humano y profesional en casos familiares.',
    keywords: ['abogados de familia', 'divorcio', 'custodia de menores', 'testamentos'],
}

const slides = [
    {
        title: "Soluciones Legales para Familias",
        description: "Manejo sensible de casos de divorcio, custodia y pensión alimenticia. Protección de derechos familiares con enfoque humano.",
        ctaText: "Agenda tu consulta",
        bgImage: "/images/familiar-bg1.avif",
    },
    {
        title: "Gestión de Sucesiones y Herencias",
        description: "Asesoría especializada en testamentos, sucesiones intestadas y división de bienes familiares.",
        ctaText: "Agenda tu consulta",
        bgImage: "/images/familiar-bg2.avif",
    },
    {
        title: "Protección de Menores, acuerdos de guardia y convivencia",
        description: "Defensa legal especializada en convenios de guardia y custodia, patria potestad, así como régimen de visitas. Respeto total al interés superior del menor.",
        ctaText: "Agenda tu consulta",
        bgImage: "/images/familiar-bg3.avif",
    }
]

const serviceDetails = {
    title: "Derecho Familiar",
    description: "Brindamos acompañamiento legal especializado en materia familiar, priorizando soluciones pacíficas y protección de derechos fundamentales.",
    benefits: [
        "Divorcios voluntarios y contenciosos",
        "Acuerdos de custodia y convivencia",
        "Fijación de pensión alimenticia",
        "Juicios de patria potestad",
        "Sucesiones y testamentos",
        "Adopciones y reconocimientos",
        "Violencia intrafamiliar"
    ],
    process: [
        "Evaluación inicial confidencial",
        "Mediación y negociación",
        "Elaboración de acuerdos",
        "Representación en juicios",
        "Seguimiento post-sentencia"
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

export default async function DerechoFamiliar() {
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
                <HeroCarrousel
                    containerId='carousel-viewport'
                    service="Derecho Familiar"
                />
            </div>
            <ServiceDetails {...serviceDetails} />
        </main>
    )
}