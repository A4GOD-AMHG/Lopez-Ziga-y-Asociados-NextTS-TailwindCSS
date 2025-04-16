import FeaturedAttorneys from '@/app/components/FeaturedAttorneys'
import HeroCarousel from '@/app/components/HeroCarrousel'
import ServiceDetails from '@/app/components/ServiceDetails'
import TestimonialsCarousel from '@/app/components/TestimonialsCarrousel'

export const metadata = {
    title: 'Derecho Inmobiliario Especializado | López Ziga y Asociados',
    description: 'Expertos en derecho inmobiliario en México. Transacciones seguras, litigios de propiedad y asesoría contractual.',
    keywords: ['abogados inmobiliarios', 'contratos de compraventa', 'litigio de propiedades', 'derecho hipotecario'],
}

const slides = [
    {
        title: "Protección Legal para Transacciones Inmobiliarias",
        description: "Asesoría integral en compraventa, arrendamiento y desarrollo de propiedades. Garantía legal en todas las etapas de su inversión.",
        ctaText: "Agenda tu consulta (1500)",
        bgImage: "/images/inmobiliario-bg1.jpg",
        price: 1500,
    },
    {
        title: "Soluciones en Conflictos de Propiedad",
        description: "Defensa legal especializada en litigios de titularidad, desalojos y pólizas jurídicas de arrendamiento.",
        ctaText: "Agenda tu consulta (1500)",
        bgImage: "/images/inmobiliario-bg2.jpg",
        price: 1500,
    },
    {
        title: "Asesoría en Desarrollo Inmobiliario",
        description: "Gestión legal completa para proyectos de construcción: permisos, contratos con proveedores y cumplimiento normativo.",
        ctaText: "Agenda tu consulta (1500)",
        bgImage: "/images/inmobiliario-bg3.jpg",
        price: 1500,
    }
]

const serviceDetails = {
    title: "Derecho Inmobiliario",
    description: "Con precios de 1500 las asesorías. Brindamos protección legal integral para transacciones y conflictos relacionados con bienes raíces, garantizando seguridad jurídica en todos los procesos.",
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
        name: "Lic. Fernanda Rojas",
        title: "Especialista en Transacciones",
        experience: "10 años",
        cases: "230+",
        email: "f.rojas@lopezziga.com",
        photo: "/images/lawyer3.jpg"
    },
    {
        name: "Dr. Ricardo Vargas",
        title: "Experto en Litigios",
        experience: "8 años",
        cases: "150+",
        email: "r.vargas@lopezziga.com",
        photo: "/images/lawyer4.jpg"
    }
]

export default function DerechoInmobiliario() {
    return (
        <main className="min-h-screen mt-16 sm:mt-24 flex flex-col">
            <HeroCarousel slides={slides} service='Derecho Inmobiliario' />
            <ServiceDetails {...serviceDetails} />
            <FeaturedAttorneys attorneys={attorneys} />
            <TestimonialsCarousel service="inmobiliario" />
        </main>
    )
}