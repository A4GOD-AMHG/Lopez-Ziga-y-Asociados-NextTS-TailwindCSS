import FeaturedAttorneys from '@/app/components/Services/FeaturedAttorneys';
import ServiceDetails from '@/app/components/ServiceDetails';
import TestimonialsCarousel from '@/app/components/TestimonialsCarrousel';
import dynamic from 'next/dynamic';

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
        bgImage: "/images/familiar-bg1.jpg",
    },
    {
        title: "Gestión de Sucesiones y Herencias",
        description: "Asesoría especializada en testamentos, sucesiones intestadas y división de bienes familiares.",
        ctaText: "Agenda tu consulta",
        bgImage: "/images/familiar-bg2.jpg",
    },
    {
        title: "Protección de Menores, acuerdos de guardia y convivencia",
        description: "Defensa legal especializada en convenios de guardia y custodia, patria potestad, así como régimen de visitas. Respeto total al interés superior del menor.",
        ctaText: "Agenda tu consulta",
        bgImage: "/images/familiar-bg3.jpg",
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
    () => import('@/app/components/Services/HeroCarrousel'),
    { ssr: false, }
);

export default async function DerechoFamiliar() {
    return (
        <main className="min-h-screen mt-16 sm:mt-24 flex flex-col">
            <HeroCarrousel slides={slides} service='Derecho Familiar' />
            <ServiceDetails {...serviceDetails} />
            <FeaturedAttorneys attorneys={attorneys} />
            <TestimonialsCarousel />
        </main>
    )
}