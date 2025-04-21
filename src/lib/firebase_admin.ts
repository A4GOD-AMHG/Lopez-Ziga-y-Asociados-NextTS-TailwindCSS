import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const firebaseAdminConfig = {
    credential: cert({
        projectId: process.env.firebase_project_id,
        privateKey: process.env.firebase_private_key?.replace(/\\n/g, '\n'),
        clientEmail: process.env.firebase_client_email
    })
}

export const adminDb = getFirestore(
    getApps().length === 0 ? initializeApp(firebaseAdminConfig) : getApps()[0]
)