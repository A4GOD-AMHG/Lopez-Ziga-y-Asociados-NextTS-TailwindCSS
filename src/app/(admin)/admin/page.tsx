
import { Consultation } from '@/types/consultations';
import { adminDb } from '@/lib/firebase_admin';
import { ConsultationsTable } from '@/app/components/Consultations';
import { logout } from '@/app/actions';
import { FiLogOut } from 'react-icons/fi';

export default async function AdminPage() {
    const consultationsSnapshot = await adminDb.collection('consultations').get()
    const consultations: Consultation[] = consultationsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data() as Omit<Consultation, 'id'>
    }));

    return (
        <main className="container pt-40 mx-auto px-4 py-8 flex flex-col grow">
            <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Consultas Agendadas</h1>
                    <div className="flex items-center space-x-4">
                        <form action={logout}>
                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                            >
                                <FiLogOut className="text-lg" />
                                Cerrar sesión
                            </button>
                        </form>
                        <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <ConsultationsTable data={consultations} />
            </div>
        </main>
    )
}