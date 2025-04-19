'use client'

import { updateConsultationStatus } from "@/app/actions"
import { FiCheck, FiX, FiEye, FiCalendar } from 'react-icons/fi'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from "react"
import { Consultation } from "@/types/consultations"

interface ConsultationsTableProps {
    data: Consultation[]
}

const DetailItem = ({ label, value }: { label: string; value: string }) => (
    <div className="space-y-1">
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="text-gray-900">{value}</p>
    </div>
)

export default function ConsultationsTable({ data }: ConsultationsTableProps) {
    const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null)
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    const handleStatusUpdate = async (id: string, status: 'approved' | 'rejected') => {
        console.log(`Intentando ${status} para consulta ID: ${id}`)

        if (status === 'approved' && !selectedDate) {
            alert('Selecciona una fecha para aprobar')
            return
        }

        const result = await updateConsultationStatus(id, status, selectedDate?.toISOString())

        console.log(`Resultado de ${status} para ${id}:`, result)

        if (result.success) {
            setSelectedDate(null)
        }
    }

    return (
        <>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Fecha Cita</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Nombre</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Servicio</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Estado</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Acciones</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {data.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm">
                                        {item.appointmentDate
                                            ? new Date(item.appointmentDate).toLocaleDateString('es-MX', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })
                                            : '-'}
                                    </td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.name}</td>

                                    <td className="px-6 py-4 text-sm text-gray-700 capitalize">{item.service}</td>

                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${item.status === 'pending'
                                            ? 'bg-yellow-100 text-yellow-800'
                                            : 'bg-green-100 text-green-800'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 space-x-2">
                                        {item.status === 'pending' && (
                                            <div className="flex items-center gap-2">
                                                <DatePicker
                                                    selected={selectedDate}
                                                    onChange={setSelectedDate}
                                                    minDate={new Date()}
                                                    filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
                                                    placeholderText="Seleccionar fecha"
                                                    className="border rounded-lg px-3 py-1.5 text-sm shadow-sm focus:ring-2 focus:ring-primary"
                                                />
                                                <button
                                                    title="Aprobar consulta"
                                                    onClick={() => handleStatusUpdate(item.id, 'approved')}
                                                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 transition-colors"
                                                >
                                                    <FiCheck className="inline-block mr-1" /> Aprobar
                                                </button>
                                                <button
                                                    onClick={() => handleStatusUpdate(item.id, 'rejected')}
                                                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 transition-colors"
                                                >
                                                    <FiX className="inline-block mr-1" /> Rechazar
                                                </button>
                                            </div>
                                        )}

                                        <button
                                            onClick={() => setSelectedConsultation(item)}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm ml-2 flex items-center"
                                            title="Ver detalles de la consulta"
                                        >
                                            <FiEye className="mr-1" /> Ver detalles
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedConsultation && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden">
                        <div className="flex justify-between items-center p-6 border-b">
                            <h2 className="text-2xl font-bold text-gray-900">Detalles Completos</h2>
                            <button
                                title="Ver detalles de la consulta"
                                onClick={() => setSelectedConsultation(null)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <FiX className="text-2xl" />
                            </button>
                        </div>

                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <DetailItem label="Nombre" value={selectedConsultation.name} />
                            <DetailItem label="Email" value={selectedConsultation.email} />
                            <DetailItem label="Teléfono" value={selectedConsultation.phone} />
                            <DetailItem label="Servicio" value={selectedConsultation.service} />
                            <div className="md:col-span-2">
                                <DetailItem
                                    label="Descripción"
                                    value={selectedConsultation.description || 'Sin descripción'}
                                />
                            </div>
                            <DetailItem
                                label="Fecha Creación"
                                value={new Date(selectedConsultation.createdAt).toLocaleDateString('es-MX')}
                            />
                            <DetailItem
                                label="Fecha Cita"
                                value={selectedConsultation.appointmentDate
                                    ? new Date(selectedConsultation.appointmentDate).toLocaleDateString('es-MX')
                                    : '-'}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
