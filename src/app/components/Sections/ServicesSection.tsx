'use client'

import { motion } from 'framer-motion'
import { FiBriefcase, FiHome, FiUsers, FiArrowRight } from 'react-icons/fi'

const services = [
    {
        title: 'Derecho Penal',
        icon: <FiBriefcase className="text-7xl text-primary mb-6" />,
        description: 'Defensa legal especializada en delitos económicos y financieros'
    },
    {
        title: 'Derecho Inmobiliario',
        icon: <FiHome className="text-7xl text-primary mb-6" />,
        description: 'Asesoría en transacciones y litigios de bienes raíces'
    },
    {
        title: 'Derecho Familiar',
        icon: <FiUsers className="text-7xl text-primary mb-6" />,
        description: 'Gestión de conflictos familiares y auditorías legales'
    }
]

export default function ServicesSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center text-primary mb-16"
                >
                    Servicios Jurídicos Especializados
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                        >
                            <div className="text-center">
                                <div className="inline-block">{service.icon}</div>
                                <h3 className="text-3xl md:text-3xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6 text-xl">{service.description}</p>
                                <button className="text-primary font-semibold cursor-pointer hover:underline flex items-center justify-center gap-2 mx-auto">
                                    Ver detalles
                                    <FiArrowRight className="text-xl" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}