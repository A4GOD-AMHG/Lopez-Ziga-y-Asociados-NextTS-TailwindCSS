'use client'

import { motion } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/app/components/Map'), {
    ssr: false,
    loading: () => <div className="h-64 bg-gray-200 animate-pulse rounded-xl" />
})

export default function ContactPage() {
    return (
        <main className="relative mt-16 sm:mt-24">
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-5xl font-bold text-primary mb-12 text-center">Contáctanos</h1>

                        <div className="flex flex-col lg:flex-row gap-12">
                            <motion.form
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="w-full lg:max-w-xl mx-auto space-y-6"
                            >
                                <div>
                                    <label className="block text-gray-700 text-lg mb-2">Nombre completo</label>
                                    <input
                                        type="text"
                                        placeholder="Introduce tu nombre completo"
                                        className="w-full p-4 rounded-lg border bg-white border-gray-300 focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 text-lg mb-2">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Introduce tu correo electrónico"
                                            className="w-full p-4 rounded-lg border bg-white border-gray-300 focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-lg mb-2">Teléfono</label>
                                        <input
                                            type="tel"
                                            placeholder="Introduce tu número de teléfono"
                                            className="w-full p-4 rounded-lg border bg-white border-gray-300 focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-lg mb-2">Mensaje</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Escribe tu mensaje aquí"
                                        className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary resize-none"
                                    />
                                </div>

                                <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary transition-colors w-full">
                                    Enviar Mensaje
                                </button>
                            </motion.form>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="w-full lg:max-w-2xl"
                            >
                                <div className="bg-white p-8 rounded-xl shadow-md">
                                    <h3 className="text-3xl font-bold text-primary mb-6">Nuestras Oficinas</h3>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 mb-4">
                                                <FiMapPin className="text-2xl text-primary" />
                                                <h4 className="text-xl font-semibold">Ciudad de México</h4>
                                            </div>
                                            <p className="text-gray-600 mb-4">
                                                Av. Paseo de la Reforma 509, Cuauhtémoc<br />
                                                CDMX, 06500
                                            </p>
                                            <div className="h-64 rounded-lg overflow-hidden">
                                                <Map lat={19.4326} lng={-99.1332} />
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 mb-4">
                                                <FiMapPin className="text-2xl text-primary" />
                                                <h4 className="text-xl font-semibold">Saltillo</h4>
                                            </div>
                                            <p className="text-gray-600 mb-4">
                                                Blvd. Fundadores 2255, Saltillo<br />
                                                Coahuila, 25280
                                            </p>
                                            <div className="h-64 rounded-lg overflow-hidden">
                                                <Map lat={25.4383} lng={-101.0053} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}