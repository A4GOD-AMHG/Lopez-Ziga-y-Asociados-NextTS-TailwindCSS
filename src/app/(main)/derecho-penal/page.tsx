
import FeaturedAttorneys from '@/app/components/FeaturedAttorneys'
import Footer from '@/app/components/Footer'
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
        ctaText: "Consulta Gratuita",
        bgImage: "/images/penal-bg1.jpg",
        price: 5000,
    },
    {
        title: "Juicios Orales con Resultados Comprobados",
        description: "Representación experta en el nuevo sistema de justicia penal. Más de 200 casos resueltos exitosamente en los últimos 3 años.",
        ctaText: "Ver Casos de Éxito",
        bgImage: "/images/penal-bg2.jpg",
        price: 4000,
    },
    {
        title: "Defensa en Delitos Federales",
        description: "Especialistas en derecho penal federal: narcotráfico, lavado de dinero, delitos fiscales y delincuencia organizada.",
        ctaText: "Conoce Nuestro Enfoque",
        bgImage: "/images/penal-bg3.jpg",
        price: 6000,
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
        photo: "/images/attorney1.jpg"
    },
    {
        name: "Dra. Valeria Mendoza",
        title: "Experta en Juicios Orales",
        experience: "12 años",
        cases: "320+",
        email: "v.mendoza@lopezziga.com",
        photo: "/images/attorney2.jpg"
    }
]

export default function DerechoPenal() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeroCarousel
                slides={slides}
            />
            <ServiceDetails {...serviceDetails} />
            <FeaturedAttorneys attorneys={attorneys} />
            <TestimonialsCarousel service="penal" />
            <Footer />
        </div>
    )
}