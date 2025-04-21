// 'use client'

// import { updateConsultationStatus } from "@/app/actions";
// import { FiCheck, FiX, FiEye } from 'react-icons/fi';
// import { useState } from "react";
// import { Consultation } from "@/types/consultations";

// interface Props {
//     data: Consultation[]
// }

// const statusLabels: Record<string, string> = {
//     pending: 'Pendiente',
//     approved: 'Aprobada',
//     rejected: 'Rechazada'
// }

// export default function ConsultationsTable({ data }: Props) {
//     const [rows, setRows] = useState<Consultation[]>(data)
//     const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
//     const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null)

//     const handleStatusUpdate = async (id: string, status: 'approved' | 'rejected') => {
//         const result = await updateConsultationStatus(id, status)
//         if (result.success) {
//             setRows(prev => prev.map(r => r.id === id ? { ...r, status } : r))
//             setNotification({ type: 'success', message: `Consulta ${status === 'approved' ? 'aprobada' : 'rechazada'} correctamente` })
//         } else {
//             setNotification({ type: 'error', message: 'Error actualizando el estado' })
//         }
//         setTimeout(() => setNotification(null), 3000)
//     }

//     return (
//         <>
//             {notification && (
//                 <div className={`fixed top-4 right-4 p-4 rounded shadow-lg ${notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                     }`}>
//                     {notification.message}
//                 </div>
//             )}

//             <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
//                 <div className="overflow-x-auto">
//                     <table className="min-w-full">
//                         <thead className="bg-gray-50 border-b border-gray-200">
//                             <tr>
//                                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Fecha Cita</th>
//                                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Nombre</th>
//                                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Servicio</th>
//                                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Estado</th>
//                                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Acciones</th>
//                             </tr>
//                         </thead>
//                         <tbody className="divide-y divide-gray-200">
//                             {rows.map(item => (
//                                 <tr key={item.id} className="hover:bg-gray-100 transition-colors odd:bg-white even:bg-gray-50">
//                                     <td className="px-6 py-4 text-sm">
//                                         {item.appointmentDate
//                                             ? new Date(item.appointmentDate).toLocaleDateString('es-MX', {
//                                                 year: 'numeric',
//                                                 month: 'long',
//                                                 day: 'numeric'
//                                             })
//                                             : '-'}
//                                     </td>
//                                     <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.name}</td>
//                                     <td className="px-6 py-4 text-sm text-gray-700 capitalize">{item.service}</td>
//                                     <td className="px-6 py-4">
//                                         <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${item.status === "pending" ? 'bg-yellow-100 text-yellow-800' : item.status === "rejected" ? 'bg-red-100 text-red-400' : 'bg-green-100 text-green-800'}
//                                             }`}>
//                                             {statusLabels[item.status] || item.status}
//                                         </span>
//                                     </td>
//                                     <td className="px-6 py-4">
//                                         <div className="flex flex-wrap items-center space-x-2">
//                                             {item.status === 'pending' && (
//                                                 <>
//                                                     <button
//                                                         onClick={() => handleStatusUpdate(item.id, 'approved')}
//                                                         className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1 transition-colors"
//                                                     >
//                                                         <FiCheck /> Aprobar
//                                                     </button>
//                                                     <button
//                                                         onClick={() => handleStatusUpdate(item.id, 'rejected')}
//                                                         className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1 transition-colors"
//                                                     >
//                                                         <FiX /> Rechazar
//                                                     </button>
//                                                 </>
//                                             )}
//                                             <button
//                                                 onClick={() => setSelectedConsultation(item)}
//                                                 className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 gap-2 rounded-lg text-sm flex items-center transition-colors"
//                                             >
//                                                 <FiEye /> Ver
//                                             </button>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             {selectedConsultation && (
//                 <div onClick={() => setSelectedConsultation(null)}
//                     className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
//                 >
//                     <div onClick={(e) => e.stopPropagation()}
//                         className="bg-white rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden"
//                     >
//                         <div className="flex justify-between items-center p-6 border-b">
//                             <h2 className="text-2xl font-bold text-gray-900">Detalles Completos</h2>
//                             <button
//                                 onClick={() => setSelectedConsultation(null)}
//                                 className="text-gray-500 hover:text-gray-700"
//                                 title="Cerrar detalles"
//                             >
//                                 <FiX className="text-2xl" />
//                             </button>
//                         </div>
//                         <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div className="space-y-1">
//                                 <p className="text-sm font-medium text-gray-500">Nombre</p>
//                                 <p className="text-gray-900">{selectedConsultation.name}</p>
//                             </div>
//                             <div className="space-y-1">
//                                 <p className="text-sm font-medium text-gray-500">Email</p>
//                                 <p className="text-gray-900">{selectedConsultation.email}</p>
//                             </div>
//                             <div className="space-y-1">
//                                 <p className="text-sm font-medium text-gray-500">Teléfono</p>
//                                 <p className="text-gray-900">{selectedConsultation.phone}</p>
//                             </div>
//                             <div className="space-y-1">
//                                 <p className="text-sm font-medium text-gray-500">Servicio</p>
//                                 <p className="text-gray-900 capitalize">{selectedConsultation.service}</p>
//                             </div>
//                             <div className="md:col-span-2 space-y-1">
//                                 <p className="text-sm font-medium text-gray-500">Descripción</p>
//                                 <p className="text-gray-900">{selectedConsultation.description || 'Sin descripción'}</p>
//                             </div>
//                             <div className="space-y-1">
//                                 <p className="text-sm font-medium text-gray-500">Fecha Creación</p>
//                                 <p className="text-gray-900">{new Date(selectedConsultation.createdAt).toLocaleDateString('es-MX')}</p>
//                             </div>
//                             <div className="space-y-1">
//                                 <p className="text-sm font-medium text-gray-500">Fecha Cita</p>
//                                 <p className="text-gray-900">
//                                     {selectedConsultation.appointmentDate
//                                         ? new Date(selectedConsultation.appointmentDate).toLocaleDateString('es-MX')
//                                         : '-'}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     )
// }
