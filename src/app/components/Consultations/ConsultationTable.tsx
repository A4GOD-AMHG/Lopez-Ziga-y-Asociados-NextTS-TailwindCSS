'use client'

import { updateConsultationStatus } from "@/app/actions"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from "react"
import { Consultation } from "@/types/consultations"

interface ConsultationsTableProps {
    data: Consultation[]
}

export default function ConsultationsTable({ data }: ConsultationsTableProps) {
    const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null)
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    const handleStatusUpdate = async (id: string, status: 'approved' | 'rejected') => {
        if (status === 'approved' && !selectedDate) {
            alert('Selecciona una fecha para aprobar')
            return
        }

        const result = await updateConsultationStatus(
            id,
            status,
            selectedDate?.toISOString()
        )

        if (result.success) {
            setSelectedDate(null)
        }
    }

    return (
        <>
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha creación</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Servicio</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.service}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${item.status === 'pending'
                                            ? 'bg-yellow-100 text-yellow-800'
                                            : 'bg-green-100 text-green-800'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap space-x-2">
                                        {item.status === 'pending' ? (
                                            <>
                                                <DatePicker
                                                    selected={selectedDate}
                                                    onChange={(date) => setSelectedDate(date)}
                                                    minDate={new Date()}
                                                    filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
                                                    placeholderText="Selecciona fecha"
                                                    className="border rounded p-2 text-sm mr-2"
                                                />
                                                <button
                                                    onClick={() => handleStatusUpdate(item.id, 'approved')}
                                                    className="text-green-600 hover:text-green-900"
                                                >
                                                    ✅ Aprobar
                                                </button>
                                                <button
                                                    onClick={() => handleStatusUpdate(item.id, 'rejected')}
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    ❌ Rechazar
                                                </button>
                                            </>
                                        ) : (
                                            <span className="text-gray-500">Finalizado</span>
                                        )}
                                        <button
                                            onClick={() => setSelectedConsultation(item)}
                                            className="text-blue-600 hover:text-blue-900"
                                        >
                                            👁️ Ver
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedConsultation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
                        <h2 className="text-2xl font-bold mb-4">Detalles de la Consulta</h2>
                        <div className="space-y-3">
                            <p><strong>Nombre:</strong> {selectedConsultation.name}</p>
                            <p><strong>Email:</strong> {selectedConsultation.email}</p>
                            <p><strong>Teléfono:</strong> {selectedConsultation.phone}</p>
                            <p><strong>Servicio:</strong> {selectedConsultation.service}</p>
                            <p><strong>Descripción:</strong> {selectedConsultation.description || 'N/A'}</p>
                            <p><strong>Fecha creación:</strong> {new Date(selectedConsultation.createdAt).toLocaleString()}</p>
                            {selectedConsultation.appointmentDate && (
                                <p><strong>Fecha cita:</strong> {new Date(selectedConsultation.appointmentDate).toLocaleString()}</p>
                            )}
                        </div>
                        <button
                            onClick={() => setSelectedConsultation(null)}
                            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

//     return (
//         <div className="overflow-x-auto">
//             <table className="table-auto w-full">
//                 <thead>
//                     <tr className="bg-gray-100">
//                         <th className="px-4 py-2">Fecha</th>
//                         <th className="px-4 py-2">Nombre</th>
//                         <th className="px-4 py-2">Email</th>
//                         <th className="px-4 py-2">Teléfono</th>
//                         <th className="px-4 py-2">Servicio</th>
//                         <th className="px-4 py-2">Estado</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item) => (
//                         <tr key={item.id} className="border-b">
//                             <td className="px-4 py-2">{new Date(item.createdAt).toLocaleDateString()}</td>
//                             <td className="px-4 py-2">{item.name}</td>
//                             <td className="px-4 py-2">{item.email}</td>
//                             <td className="px-4 py-2">{item.phone}</td>
//                             <td className="px-4 py-2">{item.service}</td>
//                             <td className="px-4 py-2">
//                                 <span className={`px-2 py-1 rounded ${item.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
//                                     {item.status}
//                                 </span>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }