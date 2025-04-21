

import LoginForm from '@/app/components/LoginForm';

const initialState = {
    success: false,
    error: ''
}

export default async function LoginPage() {

    return (
        <div className="bg-gray-50 flex grow items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 space-y-6 transition-all duration-300 hover:shadow-2xl" >
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-gray-900">Acceso Administrativo</h1>
                    <p className="text-gray-600">Ingresa tus credenciales para continuar</p>
                </div>

                <LoginForm />
            </div>
        </div >
    )
}