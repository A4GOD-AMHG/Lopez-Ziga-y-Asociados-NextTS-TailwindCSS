'use client'


import { handleAdminLogin } from '@/app/actions'
import { useActionState } from 'react'

const initialState = {
    success: false,
    error: ''
}

export default function LoginPage() {
    const [state, formAction] = useActionState(handleAdminLogin, initialState)

    return (
        <div className="bg-gray-50 flex grow items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 space-y-6 transition-all duration-300 hover:shadow-2xl" >
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-gray-900">Acceso Administrativo</h1>
                    <p className="text-gray-600">Ingresa tus credenciales para continuar</p>
                </div>

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
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <span>{state.error}</span>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-gray-900 cursor-pointer hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Ingresar al Panel
                    </button>
                </form>
            </div>
        </div >
    )
}
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50">
//             <div className="bg-white p-8 rounded-lg shadow-md w-96">
//                 <h1 className="text-2xl font-bold mb-4">Acceso Administrador</h1>
//                 <form action={formAction}>
//                     <input
//                         type="password"
//                         name="password"
//                         required
//                         className="w-full p-2 border rounded mb-4"
//                         placeholder="Contraseña"
//                     />
//                     {state?.error && <p className="text-red-500 mb-4">{state.error}</p>}
//                     <button
//                         type="submit"
//                         className="w-full bg-primary text-white p-2 rounded hover:bg-secondary"
//                     >
//                         Ingresar
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }