import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const cookieStore = await cookies();
    if (!cookieStore.get('admin-authenticated')?.value) {
        redirect('/login')
    }
    return (<>{children}</>)
}


