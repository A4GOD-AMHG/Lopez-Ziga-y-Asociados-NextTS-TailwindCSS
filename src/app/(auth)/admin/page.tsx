
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { Consultation } from '@/types/consultations'
import { adminDb } from '@/lib/firebase_admin'
import ConsultationsTable from '@/app/components/Consultations/ConsultationTable'

export default async function AdminPage() {
    const cookieStore = await cookies()
    const isAuthenticated = cookieStore.get('admin-authenticated')?.value === 'true'

    if (!isAuthenticated) {
        redirect('/admin/login')
    }

    const consultationsSnapshot = await adminDb.collection('consultations').get()
    const consultations: Consultation[] = consultationsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data() as Omit<Consultation, 'id'>
    }))

    return (
        <main className="container pt-40 mx-auto px-4 py-8 flex flex-col grow">
            <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Consultas Agendadas</h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">Administrador</span>
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