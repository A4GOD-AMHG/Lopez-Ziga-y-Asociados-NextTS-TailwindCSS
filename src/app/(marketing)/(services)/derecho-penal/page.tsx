
import FeaturedAttorneys from '@/app/components/Services/FeaturedAttorneys';
import ServiceDetails from '@/app/components/ServiceDetails';
import TestimonialsCarousel from '@/app/components/TestimonialsCarrousel';
import dynamic from 'next/dynamic';

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
    // {
    //     title: "Asesoría Legal Preventiva",
    //     description: "Evita problemas legales con nuestro programa de prevención. Diagnóstico legal gratuito y plan de protección jurídica.",
    //     ctaText: "Iniciar Diagnóstico",
    //     videoUrl: "/videos/demo-legal.mp4",
    //     price: 0,
    //     type: 'video'
    // }
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

export default async function DerechoPenal() {
    return (
        <main className="min-h-screen mt-16 sm:mt-24 flex flex-col">
            <HeroCarrousel
                slides={slides}
                service="Derecho Penal"
            />
            <ServiceDetails {...serviceDetails} />
            <FeaturedAttorneys attorneys={attorneys} />
            <TestimonialsCarousel service="penal" />
        </main>
    )
}