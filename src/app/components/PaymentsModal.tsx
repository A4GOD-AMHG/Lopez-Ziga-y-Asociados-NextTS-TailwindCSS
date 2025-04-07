'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { PaymentData } from './PaymentProcessor/paymentService'
import MercadoPagoButton from './PaymentProcessor/MercadoPagoButton'
import PayPalButton from './PaymentProcessor/PayPalButton'


type PaymentModalProps = {
    isOpen: boolean
    onClose: () => void
    serviceName: string
    servicePrice: number
}

type FormData = Omit<PaymentData, 'amount'> & {
    paymentMethod: 'mercadoPago' | 'paypal'
}

export default function PaymentModal({ isOpen, onClose, serviceName, servicePrice }: PaymentModalProps) {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm<FormData>({
        defaultValues: {
            service: serviceName,
            paymentMethod: 'mercadoPago'
        }
    })

    const [paymentStep, setPaymentStep] = useState<'form' | 'payment'>('form')
    const [selectedMethod, setSelectedMethod] = useState<'mercadoPago' | 'paypal'>('mercadoPago')
    const [isProcessing, setIsProcessing] = useState(false)
    const [paymentError, setPaymentError] = useState<string | null>(null)

    const onSubmitForm = (data: FormData) => {
        handleClose()
        // setSelectedMethod(data.paymentMethod)
        // setPaymentStep('payment')
    }

    const handlePaymentSuccess = () => {
        setIsProcessing(false)
        reset()
        onClose()
        alert('¡Pago completado con éxito! Nos pondremos en contacto contigo.')
    }

    const handlePaymentError = (message: string) => {
        setIsProcessing(false)
        reset()
        setPaymentError(message)
        setTimeout(() => setPaymentError(null), 5000)
    }

    const handleClose = () => {
        reset()
        onClose()
        setPaymentStep('form')
    }

    const paymentData: PaymentData = {
        name: watch('name'),
        email: watch('email'),
        phone: watch('phone'),
        service: watch('service'),
        details: watch('details'),
        amount: servicePrice
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-[#70ac60]">
                            {paymentStep === 'form' ? 'Datos de contacto' : 'Completa tu pago'}
                        </h3>
                        <button
                            onClick={handleClose}
                            className="text-gray-500 hover:text-gray-700"
                            disabled={isProcessing}
                        >
                            ✕
                        </button>
                    </div>

                    {paymentError && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            {paymentError}
                        </div>
                    )}

                    {paymentStep === 'form' ? (
                        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nombre completo*
                                </label>
                                <input
                                    {...register('name', { required: 'Este campo es obligatorio' })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    disabled={isProcessing}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Correo electrónico*
                                </label>
                                <input
                                    type="email"
                                    {...register('email', {
                                        required: 'Este campo es obligatorio',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Correo electrónico inválido'
                                        }
                                    })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    disabled={isProcessing}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Teléfono*
                                </label>
                                <input
                                    type="tel"
                                    {...register('phone', { required: 'Este campo es obligatorio' })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    disabled={isProcessing}
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Método de pago*
                                </label>
                                <select
                                    {...register('paymentMethod', { required: true })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    disabled={isProcessing}
                                >
                                    <option value="mercadoPago">Mercado Pago</option>
                                    <option value="paypal">PayPal</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Detalles adicionales (opcional)
                                </label>
                                <textarea
                                    {...register('details')}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    disabled={isProcessing}
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className="w-full bg-[#70ac60] hover:bg-[#90c67b] text-white font-bold py-3 px-4 rounded-md transition disabled:opacity-50"
                                >
                                    {isProcessing ? 'Procesando...' : 'Continuar al pago'}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="space-y-6">
                            <div className="bg-gray-50 p-4 rounded-md">
                                <h4 className="font-medium text-gray-700">Resumen del servicio</h4>
                                <p className="text-gray-600">{serviceName}</p>
                                <p className="text-lg font-bold text-[#70ac60] mt-2">
                                    ${servicePrice.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                                </p>
                            </div>

                            <div>
                                {selectedMethod === 'mercadoPago' ? (
                                    <MercadoPagoButton
                                        paymentData={paymentData}
                                        onSuccess={handlePaymentSuccess}
                                        onError={handlePaymentError}
                                    />
                                ) : (
                                    <PayPalButton
                                        paymentData={paymentData}
                                        onSuccess={handlePaymentSuccess}
                                        onError={handlePaymentError}
                                    />
                                )}
                            </div>

                            <button
                                onClick={() => setPaymentStep('form')}
                                disabled={isProcessing}
                                className="w-full text-[#70ac60] hover:text-[#90c67b] font-medium py-2 px-4 rounded-md border border-[#70ac60] transition disabled:opacity-50"
                            >
                                Regresar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}