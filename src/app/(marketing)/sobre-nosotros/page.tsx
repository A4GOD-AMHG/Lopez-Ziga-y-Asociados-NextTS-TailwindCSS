import TeamSection from '@/app/components/Sections/LegalTeamSection'

export default async function AboutPage() {
    return (
        <main className="relative mt-16 sm:mt-24">
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div
                        className="max-w-6xl mx-auto text-center"
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-12">Nuestra Historia</h1>

                        <p className="text-xl sm:text-2xl text-gray-800 space-y-8 mb-16">
                            Fundado en el 18 de diciembre del año 2018, Lopez Ziga & Asociados nació de la visión de crear un despacho legal diferente: más ágil, transparente y enfocado en resultados concretos para personas físicas y morales.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <div>
                                <h3 className="text-4xl font-bold text-primary mb-6">Misión</h3>
                                <p className='text-xl sm:text-2xl text-gray-800 '>
                                    Diseñar estrategias legales personalizadas para personas físicas y personas morales, con el objetivo de resolver conflictos de forma rápida y eficiente, garantizando el cumplimiento normativo y la justicia en cada caso.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-bold text-primary mb-6">Visión</h3>
                                <p className='text-xl sm:text-2xl text-gray-800 '>
                                    Ser reconocidos como una firma legal confiable en el ámbito en Ciudad de México,  Estado de México y Estado de Morelos, brindando asesoría jurídica con apoyo a los criterios emitidos por la suprema corte de justicia de la nación, y la corte interamericana de derechos humanos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TeamSection />
        </main>
    )
}