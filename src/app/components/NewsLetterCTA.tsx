'use client'

import { useState } from 'react'

export default function NewsletterCTA() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            })
            setSubmitted(true)
        } catch (error) {
            alert('Error al suscribirse')
        }
    }

    return (
        <section className="bg-light py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Mantente Informado</h2>
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="Tu correo electrónico"
                            className="flex-grow p-3 rounded border"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-primary text-white px-6 py-3 rounded hover:bg-secondary transition"
                        >
                            Suscribirse
                        </button>
                    </form>
                ) : (
                    <p className="text-secondary text-xl">¡Gracias por suscribirte!</p>
                )}
            </div>
        </section>
    )
}