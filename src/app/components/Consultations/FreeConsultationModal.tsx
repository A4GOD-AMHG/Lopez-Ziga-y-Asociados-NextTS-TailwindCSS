'use client'

import { FiX, FiSend } from 'react-icons/fi';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

interface FreeConsultationModalProps {
    isOpen: boolean;
    service?: string;
    onClose: () => void;
}

const SERVICE_OPTIONS = [
    'Derecho Penal',
    'Derecho Inmobiliario',
    'Derecho Familiar',
];

const CASE_STATUS_OPTIONS = [
    'No iniciado',
    'En trámite',
    'Concluido',
];

const URGENCY_OPTIONS = [
    'Baja',
    'Media',
    'Alta',
];

export default function FreeConsultationModal({
    isOpen,
    service,
    onClose,
}: FreeConsultationModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: service || SERVICE_OPTIONS[0],
        statusCase: CASE_STATUS_OPTIONS[0],
        urgency: URGENCY_OPTIONS[1],
        description: '',
        acceptPolicy: false,
    });

    const maxChars = 200;
    const charsLeft = maxChars - formData.description.length;

    const handleChange = (
        field: keyof typeof formData,
        value: string | boolean
    ) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.acceptPolicy) {
            alert('Por favor, acepte la política de privacidad para continuar.');
            return;
        }

        if (!formData.name || !formData.email) {
            alert('Por favor, complete los campos name y Email.');
            return;
        }

        const message = `Hola, soy ${formData.name} de correo ${formData.email}.
El caso esta en estado ${formData.statusCase}.
Necesito asesoría en el servicio de ${formData.service}.
Tengo una urgencia ${formData.urgency}.
Descripción de mi caso:
${formData.description}`;

        const url = `https://api.whatsapp.com/send?phone=525514083982&text=${encodeURIComponent(
            message
        )}`;

        const resetForm = () => {
            setFormData({
                name: '',
                email: '',
                service: service || SERVICE_OPTIONS[0],
                statusCase: CASE_STATUS_OPTIONS[0],
                urgency: URGENCY_OPTIONS[1],
                description: '',
                acceptPolicy: false,
            });
        };

        resetForm();
        window.open(url, '_blank');
        onClose();
    };

    if (!isOpen) return null;

    return createPortal(
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-start sm:items-center justify-center p-4"
        >
            <div
                onClick={e => e.stopPropagation()}
                className="bg-gradient-to-br bg-white rounded-xl w-full max-w-lg p-6 relative overflow-y-auto max-h-[90vh] shadow-xl"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-primary transition-colors"
                    title="Cerrar"
                >
                    <FiX size={24} />
                </button>

                <h2 className="text-2xl font-bold text-primary mb-4">
                    Agenda tu asesoría gratuita
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1">Nombre completo *</label>
                        <input
                            type="text"
                            required
                            placeholder="Ej: Juan Pérez"
                            className="w-full pl-4 pr-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            value={formData.name}
                            onChange={e => handleChange('name', e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Correo electrónico *</label>
                        <input
                            type="email"
                            required
                            placeholder="ejemplo@correo.com"
                            className="w-full pl-4 pr-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            value={formData.email}
                            onChange={e => handleChange('email', e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-1">Servicio *</label>
                            <select
                                required
                                title="Seleccione un servicio"
                                className="w-full pl-4 pr-4 py-3 border cursor-pointer border-gray-400 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                value={formData.service}
                                onChange={e => handleChange('service', e.target.value)}
                            >
                                {SERVICE_OPTIONS.map(opt => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Estado del caso</label>
                            <select
                                title="Seleccione el estado del caso"
                                className="w-full pl-3 pr-4 py-3 border border-gray-400 rounded-lg cursor-pointer focus:ring-2 focus:ring-primary focus:border-transparent"
                                value={formData.statusCase}
                                onChange={e => handleChange('statusCase', e.target.value)}
                            >
                                {CASE_STATUS_OPTIONS.map(opt => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Urgencia</label>
                            <select
                                title="Seleccione el nivel de urgencia"
                                className="w-full pl-3 pr-4 py-3 border border-gray-400 rounded-lg cursor-pointer focus:ring-2 focus:ring-primary focus:border-transparent"
                                value={formData.urgency}
                                onChange={e => handleChange('urgency', e.target.value)}
                            >
                                {URGENCY_OPTIONS.map(opt => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-800 mb-1">
                            Describe tu caso
                            <span className={`text-sm ml-2 ${charsLeft < 20 ? 'text-red-500' : 'text-gray-500'}`}>
                                ({charsLeft} caracteres restantes)
                            </span>
                        </label>
                        <textarea
                            required
                            maxLength={maxChars}
                            placeholder="Breve descripción (máx. 200 caracteres)"
                            className="w-full p-3 border border-gray-400 rounded-lg resize-none h-32 focus:ring-2 focus:ring-primary focus:border-transparent"
                            value={formData.description}
                            onChange={e => handleChange('description', e.target.value)}
                        />
                    </div>

                    <div className="flex items-start mt-4">
                        <div className="flex items-center h-5">
                            <input
                                type="checkbox"
                                id="privacy-policy"
                                className="absolute opacity-0 w-6 h-6 cursor-pointer"
                                required
                                checked={formData.acceptPolicy}
                                onChange={e => handleChange('acceptPolicy', e.target.checked)}
                            />
                            <div className={`w-5 h-5 border cursor-pointer rounded flex items-center justify-center 
    ${formData.acceptPolicy ? 'bg-primary border-primary' : 'bg-white border-gray-300'}`}>
                                {formData.acceptPolicy && (
                                    <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                        </div>
                        <label
                            htmlFor="privacy-policy"
                            className="ml-3 text-sm cursor-pointer text-gray-600"
                        >
                            Acepto las{' '}
                            <Link
                                href="https://lopezzigayasociados.com.mx/politicas-de-privacidad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                Políticas de privacidad
                            </Link>
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={
                            !formData.name ||
                            !formData.email ||
                            !formData.description ||
                            !formData.acceptPolicy
                        }
                        className={`w-full bg-gradient-to-r ${(!formData.name || !formData.email || !formData.description || !formData.acceptPolicy)
                            ? "cursor-not-allowed opacity-70"
                            : "cursor-pointer hover:opacity-90"
                            } from-primary to-secondary text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-6`}
                    >
                        <FiSend size={20} />
                        Obtener Asesoría Gratis
                    </button>
                </form>
            </div>
        </div>,
        document.body
    );
}