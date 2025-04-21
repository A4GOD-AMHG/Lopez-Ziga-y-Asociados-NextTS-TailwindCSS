// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import { FiX, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
// import { useState, useEffect, useTransition } from 'react';
// import { createConsultation } from '@/app/actions';

// import dynamic from "next/dynamic";

// const DatePicker = dynamic<any>(
//     async () => {
//         const mod = await import('react-datepicker');
//         return mod.default;
//     },
//     { ssr: false }
// )
// import 'react-datepicker/dist/react-datepicker.css';


// interface ConsultationModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     service?: string;
// }

// type FormStatus = 'idle' | 'success' | 'error';

// const services = [
//     { "name": "Derecho Penal" },
//     { "name": "Derecho Familiar" },
//     { "name": "Derecho Inmobiliario" }
// ];

// export default function ConsultationModal({ isOpen, onClose, service }: ConsultationModalProps) {
//     const [isPending, startTransition] = useTransition();
//     const [formStatus, setFormStatus] = useState<FormStatus>('idle');
//     const [name, setName] = useState<string>('');
//     const [email, setEmail] = useState<string>('');
//     const [phone, setPhone] = useState<string>('');
//     const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);
//     const [description, setDescription] = useState<string>('');
//     const [serviceSelect, setServiceSelect] = useState<string>(service ?? services[0].name);
//     const [submittedEmails, setSubmittedEmails] = useState<string[]>([]);

//     useEffect(() => {
//         if (isOpen) {
//             setFormStatus('idle');
//             setName('');
//             setEmail('');
//             setPhone('');
//             setAppointmentDate(null);
//             setDescription('');
//             setServiceSelect(service ?? services[0].name);
//         }
//     }, [isOpen, service]);

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         if (!name.trim() || !email.trim() || !phone.trim() || !appointmentDate || !description.trim() || (!service && !serviceSelect)) {
//             return;
//         }
//         const formData = new FormData(e.currentTarget);

//         startTransition(async () => {
//             try {
//                 const result = await createConsultation(formData);
//                 if (result.success) {
//                     setSubmittedEmails((prev) => [...prev, email]);
//                     setFormStatus('success');
//                     setTimeout(onClose, 2000);
//                 } else {
//                     setFormStatus('error');
//                 }
//             } catch {
//                 setFormStatus('error');
//             }
//         });
//     };

//     const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value
//             .replace(/[^\d+]/g, '')
//             .replace(/(\+.*?)\+/, '$1');
//         setPhone(value);
//     };

//     const formatPhoneNumber = (val: string) => {
//         if (val.startsWith('+')) {
//             return val.replace(/(\+\d{2})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
//         }
//         return val.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
//     };

//     const formValid =
//         name.trim() &&
//         email.trim() &&
//         phone.trim() &&
//         appointmentDate &&
//         description.trim() &&
//         (service || serviceSelect);

//     return (
//         <AnimatePresence>
//             {isOpen && (
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     onClick={onClose}
//                     className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
//                 >
//                     <motion.div
//                         initial={{ y: 50, scale: 0.95 }}
//                         animate={{ y: 0, scale: 1 }}
//                         exit={{ y: 50, opacity: 0 }}
//                         onClick={(e) => e.stopPropagation()}
//                         className="bg-white rounded-xl w-full max-w-2xl relative shadow-lg overflow-hidden"
//                     >
//                         <button
//                             onClick={onClose}
//                             className="absolute top-4 right-4 text-gray-500 hover:text-primary"
//                             title="Cerrar"
//                         >
//                             <FiX className="text-2xl" />
//                         </button>

//                         <div className="p-8">
//                             <h2 className="text-4xl font-bold text-primary mb-6 text-center">Agendar Consulta</h2>

//                             {formStatus === 'success' ? (
//                                 <div className="text-center py-8">
//                                     <FiCheckCircle className="text-5xl text-primary mb-4 mx-auto" />
//                                     <h3 className="text-2xl font-bold mb-2">¡Consulta Agendada!</h3>
//                                     <p>Nos pondremos en contacto para confirmar los detalles.</p>
//                                 </div>
//                             ) : formStatus === 'error' ? (
//                                 <div className="text-center py-8 text-red-500">
//                                     <FiAlertCircle className="text-5xl mb-4 mx-auto" />
//                                     <p>
//                                         {submittedEmails.includes(email)
//                                             ? 'Ya existe una consulta agendada con este correo.'
//                                             : 'Error al agendar. Por favor intente nuevamente.'}
//                                     </p>
//                                 </div>
//                             ) : (
//                                 <form onSubmit={handleSubmit} className="space-y-5">
//                                     <div>
//                                         <label className="block text-gray-700 mb-2">Nombre completo</label>
//                                         <input
//                                             autoComplete='off'
//                                             type="text"
//                                             name="name"
//                                             value={name}
//                                             onChange={(e) => setName(e.target.value)}
//                                             required
//                                             placeholder="Ingrese su nombre completo"
//                                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
//                                         />
//                                     </div>

//                                     <div className="grid md:grid-cols-2 gap-4">
//                                         <div>
//                                             <label className="block text-gray-700 mb-2">Correo electrónico</label>
//                                             <input
//                                                 autoComplete='off'
//                                                 type="email"
//                                                 name="email"
//                                                 value={email}
//                                                 onChange={(e) => setEmail(e.target.value)}
//                                                 required
//                                                 placeholder="Ingrese su correo electrónico"
//                                                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
//                                             />
//                                         </div>
//                                         <div>
//                                             <label className="block text-gray-700 mb-2">Teléfono</label>
//                                             <input
//                                                 autoComplete='off'
//                                                 type="tel"
//                                                 name="phone"
//                                                 value={formatPhoneNumber(phone)}
//                                                 onChange={handlePhoneChange}
//                                                 required
//                                                 placeholder="Ingrese su número de teléfono"
//                                                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
//                                             />
//                                         </div>
//                                     </div>

//                                     <div className="grid md:grid-cols-2 gap-4">
//                                         {service ? (
//                                             <div className="text-center mb-4">
//                                                 <span className="inline-block bg-primary/10 text-primary text-lg font-semibold px-6 py-2 rounded-full">
//                                                     {service}
//                                                 </span>
//                                                 <input
//                                                     autoComplete='off' type="hidden" name="service" value={service} />
//                                             </div>
//                                         ) : (
//                                             <div>
//                                                 <label htmlFor="service-select" className="block text-gray-700 mb-2">
//                                                     Área de consulta
//                                                 </label>
//                                                 <select
//                                                     id="service-select"
//                                                     name="service"
//                                                     value={serviceSelect}
//                                                     onChange={(e) => setServiceSelect(e.target.value)}
//                                                     required
//                                                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
//                                                 >
//                                                     {services.map((service) => (<option key={service.name} value={service.name}>{service.name}</option>))}
//                                                 </select>
//                                             </div>
//                                         )}

//                                         <div>
//                                             <label className="block text-gray-700 mb-2">Fecha de consulta</label>
//                                             <DatePicker
//                                                 autoComplete='off'
//                                                 name="appointmentDate"
//                                                 selected={appointmentDate}
//                                                 onChange={(date: Date) => setAppointmentDate(date)}
//                                                 minDate={new Date()}
//                                                 filterDate={(date: Date) => date.getDay() !== 0 && date.getDay() !== 6}
//                                                 dateFormat="dd/MM/yyyy"
//                                                 placeholderText="Selecciona una fecha"
//                                                 required
//                                                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
//                                             />
//                                         </div>
//                                     </div>

//                                     <div>
//                                         <label className="block text-gray-700 mb-2">Descripción breve</label>
//                                         <textarea
//                                             name="description"
//                                             value={description}
//                                             onChange={(e) => setDescription(e.target.value)}
//                                             rows={4}
//                                             placeholder="Ingrese una descripción breve"
//                                             required
//                                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
//                                         />
//                                     </div>

//                                     <button
//                                         type="submit"
//                                         disabled={!formValid || isPending}
//                                         className="w-full bg-primary text-white p-3 rounded-lg hover:bg-secondary transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
//                                     >
//                                         {isPending ? 'Enviando...' : 'Agendar Consulta'}
//                                     </button>
//                                 </form>
//                             )}
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }