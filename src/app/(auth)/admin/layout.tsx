import { logout } from '@/app/actions';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();
    if (!cookieStore.get('admin-authenticated')?.value) {
        redirect('/admin/login')
    }

    return <>
        <form action={logout}>
            <button
                type="submit"
                className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.576-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.424 0 2.774-.302 4-.838v-2.162z" />
                </svg>
                Cerrar Sesión
            </button>
        </form>
        {children}
    </>
}