import FeaturedAttorneys from '@/app/components/Services/FeaturedAttorneys';
import ServiceDetails from '@/app/components/ServiceDetails';
import TestimonialsCarousel from '@/app/components/TestimonialsCarrousel';
import dynamic from 'next/dynamic';

export const metadata = {
    title: 'Derecho Inmobiliario | López Ziga y Asociados',
    description: 'Expertos en derecho inmobiliario en México. Transacciones seguras, litigios de propiedad y asesoría contractual.',
    keywords: ['abogados inmobiliarios', 'contratos de compraventa', 'litigio de propiedades', 'derecho hipotecario'],
}

const slides = [
    {
        title: "Protección Legal para Transacciones Inmobiliarias",
        description: "Asesoría integral en compraventa, arrendamiento y desarrollo de propiedades. Garantía legal en todas las etapas de su inversión.",
        ctaText: "Agenda tu consulta",
        bgImage: "/images/inmobiliario-bg1.jpg",
    },
    {
        title: "Soluciones en Conflictos de Propiedad",
        description: "Defensa legal especializada en litigios de titularidad, desalojos y pólizas jurídicas de arrendamiento.",
        ctaText: "Agenda tu consulta",
        bgImage: "/images/inmobiliario-bg2.jpg",
    },
    {
        title: "Asesoría en Desarrollo Inmobiliario",
        description: "Gestión legal completa para proyectos de construcción: permisos, contratos con proveedores y cumplimiento normativo.",
        ctaText: "Agenda tu consulta",
        bgImage: "/images/inmobiliario-bg3.jpg",
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
    () => import('@/app/components/Services/HeroCarrousel'),
    { ssr: false, }
);

export default async function DerechoInmobiliario() {
    return (
        <main className="min-h-screen mt-16 sm:mt-24 flex flex-col">
            <HeroCarrousel slides={slides} service='Derecho Inmobiliario' />
            <ServiceDetails {...serviceDetails} />
            <FeaturedAttorneys attorneys={attorneys} />
            <TestimonialsCarousel service="inmobiliario" />
        </main>
    )
}