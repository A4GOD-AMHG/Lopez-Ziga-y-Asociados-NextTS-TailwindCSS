import ClientMap from '@/app/components/ClientMap';
import { FiMapPin } from 'react-icons/fi';

export default async function ContactPage() {
    return (
        <main className="relative mt-16 sm:mt-24">
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-5xl font-bold text-primary mb-12 text-center">Contáctanos</h1>

                        <div className="flex flex-col lg:flex-row gap-12">
                            <form
                                className="w-full lg:max-w-xl mx-auto space-y-6"
                            >
                                <div>
                                    <label className="block text-gray-700 text-lg mb-2">Nombre completo</label>
                                    <input
                                        type="text"
                                        placeholder="Introduce tu nombre completo"
                                        className="w-full p-4 rounded-lg border bg-white border-gray-300 focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 text-lg mb-2">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Introduce tu correo electrónico"
                                            className="w-full p-4 rounded-lg border bg-white border-gray-300 focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-lg mb-2">Teléfono</label>
                                        <input
                                            type="tel"
                                            placeholder="Introduce tu número de teléfono"
                                            className="w-full p-4 rounded-lg border bg-white border-gray-300 focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-lg mb-2">Mensaje</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Escribe tu mensaje aquí"
                                        className="w-full p-4 rounded-lg border bg-white border-gray-300 focus:ring-2 focus:ring-primary resize-none"
                                    />
                                </div>

                                <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary transition-colors w-full">
                                    Enviar Mensaje
                                </button>
                            </form>

                            <div
                                className="w-full lg:max-w-2xl"
                            >
                                <div className="bg-white p-8 rounded-xl shadow-md">
                                    <h3 className="text-3xl font-bold text-primary mb-6">Nuestras Oficinas</h3>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-4 flex flex-col">
                                            <div className="flex items-center gap-4 mb-4">
                                                <FiMapPin className="text-2xl text-primary" />
                                                <h4 className="text-xl font-semibold">Ciudad de México</h4>
                                            </div>
                                            <p className="text-gray-600 mb-4 grow">
                                                Mexico Méx MX, Valle de Zumpango 15, 53050 Naucalpan de Juárez, Méx., México
                                            </p>
                                            <div className="h-64 rounded-lg overflow-hidden">
                                                <ClientMap lat={19.479645} lng={-99.2361324} />
                                            </div>
                                        </div>

                                        <div className="space-y-4 flex flex-col">
                                            <div className="flex items-center gap-4">
                                                <FiMapPin className="text-2xl text-primary" />
                                                <h4 className="text-xl font-semibold">Saltillo</h4>
                                            </div>
                                            <p className="text-gray-600 mb-4 grow">
                                                Cocoyoc - Oaxtepec 26, El Partidor,<br />
                                                62736 Cocoyoc, Mor.
                                            </p>
                                            <div className="h-64 rounded-lg overflow-hidden">
                                                <ClientMap lat={18.8967001} lng={-98.9837125} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}