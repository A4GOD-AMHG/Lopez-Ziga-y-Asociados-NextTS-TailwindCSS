'use client'

import { motion } from 'framer-motion'
import TeamSection from '@/app/components/Sections/TeamSection'

export default function AboutPage() {
    return (
        <main className="relative mt-24">
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto text-center"
                    >
                        <h1 className="text-5xl font-bold text-primary mb-12">Nuestra Historia</h1>

                        <div className="text-xl text-gray-700 space-y-8 mb-16">
                            <p>
                                Fundado en 2004, Lopez Ziga & Asociados nació de la visión de crear un despacho legal
                                diferente: más ágil, transparente y enfocado en resultados concretos para empresas.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <motion.div
                                initial={{ scale: 0.9 }}
                                whileInView={{ scale: 1 }}
                                className="bg-white p-8 rounded-xl shadow-md"
                            >
                                <h3 className="text-3xl font-bold text-primary mb-4">Valores Fundamentales</h3>
                                <ul className="text-left text-xl space-y-4 list-disc pl-6">
                                    <li>Ética profesional inquebrantable</li>
                                    <li>Transparencia en cada proceso</li>
                                    <li>Innovación en estrategias legales</li>
                                    <li>Compromiso con resultados</li>
                                </ul>
                            </motion.div>

                            <div className="space-y-8">
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
                    </motion.div>
                </div>
            </section>

            <TeamSection />
        </main>
    )
}