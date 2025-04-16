'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { useState, useEffect } from 'react'

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
    service?: string;
}

export default function ConsultationModal({ isOpen, onClose, service }: ConsultationModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [submittedEmails, setSubmittedEmails] = useState<string[]>([])

    useEffect(() => {
        if (isOpen) {
            setFormStatus('idle')
            setIsSubmitting(false)
            setEmail('')
        }
    }, [isOpen])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        if (submittedEmails.includes(email)) {
            setFormStatus('error')
            setIsSubmitting(false)
            return
        }

        try {
            setSubmittedEmails(prev => [...prev, email])
            setFormStatus('success')
            setTimeout(() => {
                onClose()
            }, 2000)
        } catch (error) {
            setFormStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '')
        setPhone(value)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ y: 50, scale: 0.95 }}
                        animate={{ y: 0, scale: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        className="bg-white rounded-xl w-full max-w-2xl relative"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-primary"
                            title="Cerrar"
                        >
                            <FiX className="text-2xl" />
                        </button>

                        <div className="p-8">
                            <h2 className="text-3xl font-bold text-primary mb-6">Agendar Consulta</h2>

                            {formStatus === 'success' ? (
                                <div className="text-center py-8">
                                    <FiCheckCircle className="text-4xl text-primary mb-4 mx-auto" />
                                    <h3 className="text-xl font-bold mb-2">¡Consulta Agendada!</h3>
                                    <p>Nos pondremos en contacto para confirmar los detalles</p>
                                </div>
                            ) : formStatus === 'error' ? (
                                <div className="text-center py-8 text-red-500">
                                    <FiAlertCircle className="text-4xl mb-4 mx-auto" />
                                    <p>
                                        {submittedEmails.includes(email)
                                            ? 'Ya existe una consulta agendada con este correo.'
                                            : 'Error al agendar. Por favor intente nuevamente.'}
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Nombre completo</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Ingrese su nombre completo"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-700 mb-2">Correo electrónico</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="Ingrese su correo electrónico"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2">Teléfono</label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="Ingrese su número de teléfono"
                                                value={phone}
                                                onChange={handlePhoneChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {!service ? <div>
                                        <label htmlFor="area-consulta" className="block text-gray-700 mb-2">Área de consulta</label>
                                        <select
                                            id="area-consulta"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                        >
                                            <option >Derecho Penal (1500)</option>
                                            <option >Derecho Familiar (1000)</option>
                                            <option >Derecho Inmobiliario (1500)</option>
                                        </select>
                                    </div> : <div>Consulta de {service}</div>}

                                    <div>
                                        <label className="block text-gray-700 mb-2">Descripción breve</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Ingrese una descripción breve"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                                        />
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg text-sm">
                                        <p>💰 Costo de consulta: $60 USD</p>
                                        <p>💳 Pago en línea o presencial</p>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-primary text-white p-3 rounded-lg hover:bg-secondary transition-colors disabled:opacity-70"
                                    >
                                        {isSubmitting ? 'Enviando...' : 'Agendar Consulta'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
