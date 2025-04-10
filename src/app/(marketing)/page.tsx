'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/app/components/Sections/HeroSection'
import ServicesSection from '@/app/components/Sections/ServicesSection'
import StatsSection from '@/app/components/Sections/StatsSection'
import TeamSection from '@/app/components/Sections/TeamSection'
import TestimonialsSection from '@/app/components/Sections/TestimonialsSection'

export default function HomePage() {
    return (
        <main className="relative">
            <HeroSection />
            <ServicesSection />
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="py-20 bg-gray-50"
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-5xl font-bold text-primary mb-4">Sobre Nosotros</h2>
                        <h3 className="text-3xl md:text-3xl font-semibold text-gray-800 mb-8">
                            Más de 20 años de experiencia
                        </h3>
                        <div className="text-xl text-gray-700 space-y-6">
                            <p>
                                En Lopez Ziga & Asociados, contamos con más de 20 años de experiencia ofreciendo soluciones legales estratégicas a personas físicas y/o empresas en el ámbito del Derecho Público y Derecho Privado. Desde 2018, operamos como un despacho legal independiente, dedicado a brindar servicios jurídicos especializados para compañías que buscan una protección legal sólida y efectiva.
                            </p>
                            <p>
                                Nos especializamos en atender las necesidades legales de empresas en áreas clave como el derecho penal, derecho laboral y de derecho administrativo. Nuestro equipo de abogados garantiza transparencia y acceso constante a los expedientes digitales de nuestros clientes empresariales, proporcionando un asesoramiento continuo y personalizado.
                            </p>
                            <p>
                                Trabajamos junto a ti y/o a tu empresa para proteger sus intereses y crear estrategias legales que resuelvan conflictos de manera ágil y justa. Nuestro enfoque está basado en la confianza y la colaboración, brindando soluciones integrales adaptadas a las necesidades específicas de cada organización.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <div className="bg-white p-8 rounded-xl shadow-md">
                                <h3 className="text-3xl font-bold text-primary mb-4">Misión</h3>
                                <p className='text-xl'>
                                    Diseñar estrategias legales personalizadas para empresas, con el objetivo de resolver conflictos de forma rápida y eficiente, garantizando el cumplimiento normativo y la justicia en cada caso.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md">
                                <h3 className="text-3xl font-bold text-primary mb-4">Visión</h3>
                                <p className='text-xl'>
                                    Ser reconocidos como una firma legal líder en el ámbito empresarial en Naucalpan, Estado de México y Oaxtepec, Morelos, brindando asesoría jurídica confiable y soluciones efectivas a compañías de diversas industrias.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <StatsSection />
            <TeamSection />
            <TestimonialsSection />
        </main>
    )
}