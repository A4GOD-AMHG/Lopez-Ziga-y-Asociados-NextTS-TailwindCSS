import Header from "../components/Header/Header"

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            {children}
            <footer className="bg-gray-200 text-gray-700">
                <div className="py-6 text-center">
                    <p className="text-gray-800">
                        © {new Date().getFullYear()} Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </>
    )
}


