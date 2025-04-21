'use client'

import { handleAdminLogin } from '@/app/actions'
import { useActionState } from 'react'

const initialState = {
    success: false,
    error: ''
}

export default function LoginForm() {
    const [state, formAction] = useActionState(handleAdminLogin, initialState)

    return (
        <form action={formAction} className="space-y-4">
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="••••••••"
                />
            </div>

            {state?.error && (
                <div className="bg-red-50 text-red-700 p-3 rounded-lg flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span>{state.error}</span>
                </div>
            )}

            <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center"
            >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                </svg>
                Ingresar al Panel
            </button>
        </form>
    )
}
