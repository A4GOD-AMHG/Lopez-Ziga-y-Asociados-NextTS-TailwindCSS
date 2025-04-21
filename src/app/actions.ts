'use server'

import { adminDb } from "@/lib/firebase_admin";
import { Resend } from 'resend';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function addToNewsletter(email: string) {
    try {
        await resend.contacts.create({
            email,
            audienceId: process.env.RESEND_AUDIENCE_ID!,
            unsubscribed: false
        })

        return { success: true }
    } catch (error) {
        console.error('Error adding to newsletter:', error)
        return { success: false }
    }
}

async function sendStatusEmail(email: string, status: 'approved' | 'rejected', date?: string) {
    try {
        await resend.emails.send({
            from: 'consultas@tudominio.com',
            to: email,
            subject: `Estado de tu consulta: ${status === 'approved' ? 'Aprobada' : 'Rechazada'}`,
            html: `<p>Tu consulta ha sido <strong>${status === 'approved' ? 'aprobada' : 'rechazada'}</strong>${date ? ` para el ${new Date(date).toLocaleDateString()}` : ''}.</p>`
        })
    } catch (error) {
        console.error('Error enviando email:', error)
    }
}
export async function updateConsultationStatus(id: string, status: 'approved' | 'rejected', date?: string) {
    try {
        console.log(`Actualizando estado a ${status} para consulta ${id}`)

        const updateData: any = { status }
        if (date) {
            updateData.appointmentDate = date
            console.log(`Fecha asignada: ${date}`)
        }

        const docRef = adminDb.collection('consultations').doc(id)
        await docRef.update(updateData)

        const doc = await docRef.get()
        const email = doc.data()?.email

        if (email) {
            console.log(`Enviando email a ${email}`)
            await sendStatusEmail(email, status, date)
        }

        return { success: true }
    } catch (error) {
        console.error(`Error actualizando estado: ${error}`)
        return { success: false, error: 'Error actualizando estado' }
    }
}

export async function logout() {
    try {
        (await cookies()).delete('admin-authenticated')

        redirect('/')
    } catch (error) {
        console.error('Error al cerrar sesión:', error)
        redirect('/admin')
    }
}

export async function createConsultation(formData: FormData) {
    const appointmentDate = formData.get('appointmentDate') as string

    try {
        const consultationData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            service: formData.get('service') as string,
            appointmentDate: new Date(appointmentDate).toISOString(),
            description: formData.get('description') as string || '',
            status: 'pending',
            createdAt: new Date().toISOString()
        }

        const docRef = await adminDb.collection('consultations').add(consultationData)

        await resend.emails.send({
            from: `Consultas <${process.env.RESEND_EMAIL}>`,
            to: consultationData.email,
            subject: 'Consulta recibida',
            html: `<p>Hemos recibido tu consulta para el ${new Date(appointmentDate).toLocaleDateString()}. Te contactaremos pronto.</p>`
        })

        return { success: true, id: docRef.id }
    } catch (error) {
        return { success: false, error: 'Error al crear consulta' }
    }
}

export async function handleAdminLogin(
    prevState: { error?: string },
    formData: FormData
) {
    try {
        const password = formData.get('password')?.toString()

        if (!password) {
            return { error: 'Contraseña requerida' }
        }

        if (password !== process.env.ADMIN_PASSWORD) {
            return { error: 'Contraseña incorrecta' }
        }

        const cookieStore = await cookies();
        cookieStore.set('admin-authenticated', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7,
            path: '/admin',
        })

        redirect('/admin')

    } catch (error) {
        if (error instanceof Error && error.message.startsWith('NEXT_REDIRECT')) {
            throw error;
        }
        return { error: 'Error del servidor' };
    }
}