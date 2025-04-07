export interface PaymentData {
    name: string
    email: string
    phone: string
    service: string
    details?: string
    amount: number
}

export const processPayment = async (method: 'mercadoPago' | 'paypal', data: PaymentData): Promise<boolean> => {
    console.log(`Processing ${method} payment for ${data.service}`)
    console.log('Payment data:', data)

    await new Promise(resolve => setTimeout(resolve, 1500))

    return true
}

export const createMercadoPagoPreference = async (data: PaymentData): Promise<string> => {
    console.log('Creating MercadoPago preference for:', data)
    await new Promise(resolve => setTimeout(resolve, 1000))
    return 'mock_preference_id_12345'
}

export const getPayPalClientId = (): string => {
    return process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'test'
}