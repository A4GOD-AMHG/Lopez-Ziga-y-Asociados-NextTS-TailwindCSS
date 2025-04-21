export interface Consultation {
    id: string
    name: string
    email: string
    phone: string
    service: string
    status: 'pending' | 'approved' | 'rejected'
    createdAt: string
    appointmentDate: string
    description?: string
}

export type ConsultationStatus = Consultation['status']