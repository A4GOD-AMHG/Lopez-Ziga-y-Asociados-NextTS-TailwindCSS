export default function Footer() {
    return (
        <footer className="bg-[#757575] text-white py-6">
            <div className="container mx-auto px-4 text-center">
                <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}