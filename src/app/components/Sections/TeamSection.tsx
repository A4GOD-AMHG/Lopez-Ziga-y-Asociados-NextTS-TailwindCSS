'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useState } from 'react'

const teamMembers = [
    { id: 1, name: 'Lic. Eduardo López', role: 'Derecho Penal', exp: '20+ años' },
    { id: 2, name: 'Lic. Ana Martínez', role: 'Derecho Inmobiliario', exp: '15 años' },
    { id: 3, name: 'Lic. Carlos Rodríguez', role: 'Derecho Familiar', exp: '12 años' },
    { id: 4, name: 'Lic. Mario Ramírez', role: 'Derecho Penal', exp: '10 años' },
    { id: 5, name: 'Lic. Diego Fernández', role: 'Derecho Familiar', exp: '8 años' }
]

export default function TeamSection() {
    const [showAll, setShowAll] = useState(false)

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
                    Nuestro Equipo Legal
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {teamMembers.slice(0, 3).map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 rounded-xl p-6 text-center"
                        >
                            <img
                                src={`/images/lawyer${member.id}.jpg`}
                                alt={member.name}
                                className="w-full h-96 object-contain rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                            <p className="text-gray-600 mb-2">{member.role}</p>
                            <p className="text-sm text-gray-500">Experiencia: {member.exp}</p>
                        </motion.div>
                    ))}

                    <AnimatePresence>
                        {showAll &&
                            teamMembers.slice(3).map((member, index) => (
                                <motion.div
                                    key={member.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-50 rounded-xl p-6 text-center"
                                >
                                    <img
                                        src={`/images/lawyer${member.id}.jpg`}
                                        alt={member.name}
                                        className="w-full h-96 object-contain rounded-lg mb-4"
                                    />
                                    <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                                    <p className="text-gray-600 mb-2">{member.role}</p>
                                    <p className="text-sm text-gray-500">Experiencia: {member.exp}</p>
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </div>

                <motion.button
                    onClick={() => setShowAll(prev => !prev)}
                    className="mx-auto mt-8 flex items-center cursor-pointer gap-2 text-primary font-semibold"
                    whileHover={{ scale: 1.05 }}
                >
                    {showAll ? 'Ver menos' : 'Ver todo el equipo'}
                    {showAll ? (
                        <FiChevronUp className="text-xl" />
                    ) : (
                        <FiChevronDown className="text-xl" />
                    )}
                </motion.button>
            </div>
        </section>
    )
}
