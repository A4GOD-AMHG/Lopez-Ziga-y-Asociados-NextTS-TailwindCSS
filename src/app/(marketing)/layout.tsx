import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import 'leaflet/dist/leaflet.css'

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}


