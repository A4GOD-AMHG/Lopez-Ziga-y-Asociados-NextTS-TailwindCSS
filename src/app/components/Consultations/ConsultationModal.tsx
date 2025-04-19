'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { useState, useEffect, useTransition } from 'react'
import { createConsultation } from '@/app/actions'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface ConsultationModalProps {
    isOpen: boolean
    onClose: () => void
    service?: string
}

type FormStatus = 'idle' | 'success' | 'error'

export default function ConsultationModal({ isOpen, onClose, service }: ConsultationModalProps) {
    const [isPending, startTransition] = useTransition()
    const [formStatus, setFormStatus] = useState<FormStatus>('idle')
    const [email, setEmail] = useState<string>('')
    const [appointmentDate, setAppointmentDate] = useState<Date | null>(null)
    const [phone, setPhone] = useState<string>('')
    const [submittedEmails, setSubmittedEmails] = useState<string[]>([])

    useEffect(() => {
        if (isOpen) {
            setFormStatus('idle')
            setEmail('')
            setPhone('')
        }
    }, [isOpen])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        startTransition(async () => {
            try {
                const result = await createConsultation(formData)

                if (result.success) {
                    setSubmittedEmails(prev => [...prev, email])
                    setFormStatus('success')
                    setTimeout(onClose, 2000)
                } else {
                    setFormStatus('error')
                }
            } catch (error) {
                setFormStatus('error')
            }
        })
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
            .replace(/[^\d+]/g, '')
            .replace(/(\+.*?)\+/, '$1')

        setPhone(value)
    }

    const formatPhoneNumber = (phone: string) => {
        if (phone.startsWith('+')) {
            return phone.replace(/(\+\d{2})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4')
        }
        return phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')
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
                                            name="name"
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
                                                name="email"
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
                                                name="phone"
                                                required
                                                placeholder="Ingrese su número de teléfono"
                                                value={formatPhoneNumber(phone)}
                                                onChange={handlePhoneChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {!service ? (
                                        <div>
                                            <label htmlFor="area-consulta" className="block text-gray-700 mb-2">
                                                Área de consulta
                                            </label>
                                            <select
                                                id="area-consulta"
                                                name="service"
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                            >
                                                <option value="Derecho Penal">Derecho Penal ($1500)</option>
                                                <option value="Derecho Familiar">Derecho Familiar ($1000)</option>
                                                <option value="Derecho Inmobiliario">Derecho Inmobiliario ($1500)</option>
                                            </select>
                                        </div>
                                    ) : (
                                        <input type="hidden" name="service" value={service} />
                                    )}

                                    <div>
                                        <label className="block text-gray-700 mb-2">Fecha de consulta</label>
                                        <DatePicker
                                            required
                                            name="appointmentDate"
                                            minDate={new Date()}
                                            filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
                                            selected={appointmentDate}
                                            onChange={(date) => setAppointmentDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                            placeholderText="Selecciona una fecha"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Descripción breve</label>
                                        <textarea
                                            name="description"
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
                                        disabled={isPending}
                                        className="w-full bg-primary text-white p-3 rounded-lg hover:bg-secondary transition-colors disabled:opacity-70"
                                    >
                                        {isPending ? 'Enviando...' : 'Agendar Consulta'}
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