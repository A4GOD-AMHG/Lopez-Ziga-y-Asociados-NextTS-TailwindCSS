'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FiUsers, FiBriefcase, FiAward, FiPercent } from 'react-icons/fi'
import { motion, useInView } from 'framer-motion'

export default function Home() {
    const sectionRefs = {
        about: useRef(null),
        services: useRef(null),
        stats: useRef(null),
        team: useRef(null)
    }

    const stats = [
        { id: 1, title: 'Casos Ganados', value: 95, icon: <FiAward /> },
        { id: 2, title: 'Tasa de Éxito', value: 98, icon: <FiPercent /> },
        { id: 3, title: 'Clientes Satisfechos', value: 1500, icon: <FiUsers /> },
        { id: 4, title: 'Experiencia Legal', value: 20, icon: <FiBriefcase /> }
    ]

    return (
        <>
            {/* Hero Section with Parallax */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="bg-[url('/images/law-bg.jpg')] bg-cover bg-center h-full w-full absolute inset-0" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        López Ziga & Asociados
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Protegiendo sus derechos con excelencia legal desde 1998
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-block bg-secondary text-white px-8 py-4 rounded-lg text-lg hover:bg-primary transition-all"
                    >
                        Consulta Gratuita
                    </Link>
                </motion.div>
            </section>

            {/* About Section */}
            <motion.section
                ref={sectionRefs.about}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="py-20 bg-gray-50"
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-primary mb-8">
                            Más de 20 años de experiencia
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            En Lopez Ziga & Asociados, contamos con más de 20 años de experiencia ofreciendo soluciones legales estratégicas a personas físicas y empresas en el ámbito del Derecho Público y Derecho Privado.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Misión</h3>
                                <p className="text-gray-600">Proporcionar representación legal excepcional con integridad y dedicación.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Visión</h3>
                                <p className="text-gray-600">Ser el despacho líder en soluciones legales innovadoras en México.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Services Section */}
            <motion.section
                ref={sectionRefs.services}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="py-20"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-primary mb-12">
                        Servicios Legales Especializados
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Derecho Penal',
                                icon: <FiBriefcase className="text-6xl text-primary mb-4" />,
                                description: 'Defensa legal especializada en procesos penales complejos'
                            },
                            {
                                title: 'Derecho Inmobiliario',
                                icon: <FiAward className="text-6xl text-primary mb-4" />,
                                description: 'Soluciones jurídicas para transacciones inmobiliarias'
                            },
                            {
                                title: 'Derecho Familiar',
                                icon: <FiUsers className="text-6xl text-primary mb-4" />,
                                description: 'Protección legal para asuntos familiares y sucesorios'
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
                            >
                                {service.icon}
                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <Link
                                    href={`/servicios/${service.title.toLowerCase().replace(/ /g, '-')}`}
                                    className="text-primary hover:underline"
                                >
                                    Conoce más →
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <motion.section
                ref={sectionRefs.stats}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="py-20 bg-primary text-white"
            >
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6"
                            >
                                <div className="text-4xl mb-4">{stat.icon}</div>
                                <Counter target={stat.value} />
                                <h3 className="text-xl font-medium mt-2">{stat.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Team Section */}
            <motion.section
                ref={sectionRefs.team}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="py-20 bg-gray-50"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-primary mb-12">
                        Nuestro Equipo
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden"
                            >
                                <img
                                    src={`https://source.unsplash.com/random/600x400?lawyer=${index}`}
                                    alt="Abogado"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-primary mb-2">Nombre Abogado</h3>
                                    <p className="text-gray-600 mb-4">Especialista en Derecho Penal</p>
                                    <p className="text-gray-700">Más de 15 años de experiencia en casos complejos</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </>
    )
}

// Componente para animación de contadores
const Counter = ({ target }: { target: number }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            const interval = setInterval(() => {
                setCount((prev) => {
                    if (prev >= target) {
                        clearInterval(interval)
                        return prev
                    }
                    return prev + 1
                })
            }, 50)

            return () => clearInterval(interval)
        }
    }, [isInView, target])

    return <span ref={ref} className="text-5xl font-bold block">{count}+</span>
}