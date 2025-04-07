'use client'

import React, { useEffect } from 'react'
import { PaymentData } from './paymentService'
import Script from 'next/script'

type MercadoPagoButtonProps = {
    paymentData: PaymentData
    onSuccess: () => void
    onError: (message: string) => void
}

export default function MercadoPagoButton({ paymentData, onSuccess, onError }: MercadoPagoButtonProps) {
    useEffect(() => {
        if (typeof window.MercadoPago === 'undefined') return

        const loadMercadoPago = async () => {
            try {
                const mp = new window.MercadoPago('TEST-12345678-1234-1234-1234-123456789012', {
                    locale: 'es-MX'
                })

                const preferenceId = 'mock_preference_id_' + Math.random().toString(36).substring(2)

                mp.checkout({
                    preference: {
                        id: preferenceId
                    },
                    render: {
                        container: '#mercadoPagoButtonContainer',
                        label: 'Pagar con Mercado Pago',
                    },
                    autoOpen: true,
                    theme: {
                        elementsColor: '#70ac60',
                        headerColor: '#70ac60'
                    }
                })
            } catch (error) {
                onError('Error al cargar Mercado Pago')
                console.error(error)
            }
        }

        loadMercadoPago()
    }, [paymentData, onSuccess, onError])

    return (
        <>
            <Script
                src="https://sdk.mercadopago.com/js/v2"
                strategy="lazyOnload"
                onLoad={() => console.log('MercadoPago SDK loaded')}
            />
            <div id="mercadoPagoButtonContainer" className="w-full" />
        </>
    )
}