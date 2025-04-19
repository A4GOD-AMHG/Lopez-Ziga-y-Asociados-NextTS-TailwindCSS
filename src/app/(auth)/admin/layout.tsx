import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();
    if (!cookieStore.get('admin-authenticated')?.value) {
        redirect('/admin/login')
    }

    return <>
        {children}
    </>
}