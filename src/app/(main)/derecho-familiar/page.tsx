
import Footer from '@/components/Footer'
import HeroCarousel from '@/components/HeroCarrousel'
import ServiceDetails from '@/components/ServiceDetails'
import TestimonialsCarousel from '@/components/TestomonialsCarrousel'


export const metadata = {
    title: 'Defensa Penal Especializada | López Ziga y Asociados',
    description: 'Expertos en derecho penal en México. Defensa legal en procesos penales con altas tasas de éxito. Consulta gratuita.',
    keywords: ['abogados penalistas', 'defensa legal méxico', 'juicios orales', 'asesoría penal'],
}

const slides = [
    {
        title: "Defensa Penal Especializada",
        description: "Protección legal integral en procesos penales con los mejores estrategas legales",
        ctaText: "Consultar caso",
        bgImage: "/images/penal-bg.jpg",
        price: 5000,
    },
    {
        title: "Asesoría en Juicios Orales",
        description: "Representación experta en el nuevo sistema de justicia penal",
        ctaText: "Agendar consulta",
        bgImage: "/images/penal-bg2.jpg",
        price: 4000,
    }
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

export default function DerechoFamiliar() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeroCarousel
                slides={slides}
            />
            <ServiceDetails {...serviceDetails} />
            <TestimonialsCarousel service="penal" />
            <Footer />
        </div>
    )
}