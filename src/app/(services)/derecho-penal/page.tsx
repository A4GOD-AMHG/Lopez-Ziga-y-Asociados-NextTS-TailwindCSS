
import FeaturedAttorneys from '@/app/components/FeaturedAttorneys'
import HeroCarousel from '@/app/components/HeroCarrousel'
import ServiceDetails from '@/app/components/ServiceDetails'
import TestimonialsCarousel from '@/app/components/TestimonialsCarrousel'



export const metadata = {
    title: 'Defensa Penal Especializada | López Ziga y Asociados',
    description: 'Expertos en derecho penal en México. Defensa legal en procesos penales con altas tasas de éxito. Consulta gratuita.',
    keywords: ['abogados penalistas', 'defensa legal méxico', 'juicios orales', 'asesoría penal'],
}

const slides = [
    {
        title: "Defensa Penal Especializada en México",
        description: "Expertos en procesos judiciales complejos: desde delitos menores hasta casos de alta repercusión mediática. Protección legal integral con estrategias personalizadas.",
        ctaText: "Agenda tu Consulta (1500)",
        bgImage: "/images/penal-bg1.jpg",
        price: 1500,
    },
    {
        title: "Juicios Orales con Resultados Comprobados",
        description: "Representación experta en el nuevo sistema de justicia penal. Más de 200 casos resueltos exitosamente en los últimos 3 años.",
        ctaText: "Agenda tu Consulta (1500)",
        bgImage: "/images/penal-bg2.jpg",
        price: 1500,
    },
    {
        title: "Defensa en Delitos Federales",
        description: "Especialistas en derechos penales y federales",
        ctaText: "Agenda tu Consulta (1500)",
        bgImage: "/images/penal-bg3.jpg",
        price: 1500,
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
    description: "Con precios de 1500 las asesorías. Nuestro equipo de abogados penalistas cuenta con amplia experiencia en la defensa de casos complejos dentro del sistema de justicia penal mexicano, garantizando una defensa técnica sólida y estrategias legales personalizadas.",
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
    {
        name: "Dra. Valeria Mendoza",
        title: "Experta en Juicios Orales",
        experience: "12 años",
        cases: "320+",
        email: "v.mendoza@lopezziga.com",
        photo: "/images/lawyer2.jpg"
    }
]

export default function DerechoPenal() {
    return (
        <main className="min-h-screen mt-16 sm:mt-24 flex flex-col">
            <HeroCarousel
                slides={slides}
                service="Derecho Penal"
            />
            <ServiceDetails {...serviceDetails} />
            <FeaturedAttorneys attorneys={attorneys} />
            <TestimonialsCarousel service="penal" />
        </main>
    )
}