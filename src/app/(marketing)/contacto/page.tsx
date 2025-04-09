import ContactForm from '@/app/components/ContactForm'
import MapLocations from '@/app/components/MapLocations'

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-12">Contacto</h1>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <ContactForm />
                </div>

                <div className="space-y-8">
                    <div className="bg-light p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Nuestras Oficinas</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-primary">Ciudad de México</h3>
                                <p>Valle de Zumpango 15, 53050 Naucalpan de Juárez, Méx.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary">Saltillo</h3>
                                <p>Cocoyoc – Oaxtepec 26, El Partidor, 62736 Cocoyoc, Mor.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-light p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
                        <ul className="space-y-3">
                            <li>📞 +52 55 14 08 39 82</li>
                            <li>✉️ contacto@lopezzigayasociados.com.mx</li>
                        </ul>
                    </div>

                    <MapLocations />
                </div>
            </div>
        </div>
    )
}