'use client'

import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { PaymentData } from './paymentService'
import { getPayPalClientId } from './paymentService'

type PayPalButtonProps = {
    paymentData: PaymentData
    onSuccess: () => void
    onError: (message: string) => void
}

export default function PayPalButton({ paymentData, onSuccess, onError }: PayPalButtonProps) {
    return (
        <PayPalScriptProvider options={{
            clientId: getPayPalClientId(),
            currency: "MXN",
            locale: "es_MX",
            intent: "capture"
        }}>
            <PayPalButtons
                style={{
                    layout: "vertical",
                    color: "gold",
                    shape: "rect",
                    label: "paypal",
                    height: 48
                }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                amount: {
                                    value: paymentData.amount.toString(),
                                    currency_code: "MXN",
                                    breakdown: {
                                        item_total: {
                                            value: paymentData.amount.toString(),
                                            currency_code: "MXN"
                                        }
                                    }
                                },
                                items: [
                                    {
                                        name: paymentData.service,
                                        unit_amount: {
                                            value: paymentData.amount.toString(),
                                            currency_code: "MXN"
                                        },
                                        quantity: "1",
                                        category: "DIGITAL_GOODS"
                                    }
                                ],
                                description: `Servicio legal: ${paymentData.service}`
                            }
                        ],
                        application_context: {
                            shipping_preference: "NO_SHIPPING"
                        }
                    })
                }}
                onApprove={(data, actions) => {
                    return actions.order!.capture().then(details => {
                        console.log('Payment completed:', details)
                        onSuccess()
                    })
                }}
                onError={(err) => {
                    console.error('PayPal error:', err)
                    onError('Error al procesar el pago con PayPal')
                }}
            />
        </PayPalScriptProvider>
    )
}