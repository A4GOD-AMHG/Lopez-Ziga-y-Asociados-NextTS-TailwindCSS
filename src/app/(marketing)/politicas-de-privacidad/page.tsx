export default function PrivacyPage() {
    return (
        <main className="min-h-screen mt-8 sm:mt-12 bg-white">
            <section className="mx-auto py-16 max-w-6xl">
                <div className="bg-white rounded-xl p-8 md:p-12">
                    <h1 className="text-5xl font-bold text-primary mb-8 text-center">
                        Políticas de Privacidad
                    </h1>

                    <div className="space-y-8 text-gray-700">
                        <section>
                            <h2 className="text-3xl font-semibold text-primary mb-4">
                                1. Introducción
                            </h2>
                            <p className="mb-4">
                                En López Ziga & Asociados, S.C., con domicilio en Valle de Zumpango 15,
                                Naucalpan de Juárez, México, estamos comprometidos con la protección de
                                sus datos personales. Esta política rige el tratamiento de la información
                                personal que recopilamos a través de nuestro sitio web y en la prestación
                                de nuestros servicios legales.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-primary mb-4">
                                2. Datos que Recopilamos
                            </h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Datos de identificación (nombre, dirección, Numero de Teléfono)</li>
                                <li>Datos de contacto (correo electrónico, teléfono)</li>
                                <li>Información relacionada con casos legales</li>
                                <li>Datos de navegación (cookies, dirección IP)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-primary mb-4">
                                3. Finalidad del Tratamiento
                            </h2>
                            <p className="mb-4">
                                Los datos personales recabados serán utilizados para:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Prestación de servicios legales especializados</li>
                                <li>Facturación y procesos administrativos</li>
                                <li>Comunicación sobre casos y actualizaciones legales</li>
                                <li>Cumplimiento de obligaciones legales</li>
                                <li>Mejora de nuestros servicios y sitio web</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-primary mb-4">
                                4. Transferencia de Datos
                            </h2>
                            <p className="mb-4">
                                Sus datos personales podrán ser compartidos con:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Autoridades judiciales y administrativas competentes</li>
                                <li>Proveedores de servicios necesarios para la gestión de casos</li>
                                <li>Organismos reguladores cuando sea requerido por ley</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-primary mb-4">
                                5. Derechos ARCO
                            </h2>
                            <p className="mb-4">
                                Usted tiene derecho a:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Acceder a sus datos personales</li>
                                <li>Rectificar información inexacta</li>
                                <li>Cancelar el uso de sus datos</li>
                                <li>Oponerse al tratamiento de los mismos</li>
                            </ul>
                            <p className="mt-4">
                                Para ejercer estos derechos, enviar solicitud a:
                                <a href="mailto:protecciondedatos@lopezzigayasociados.com.mx"
                                    className="text-primary hover:text-secondary ml-1">
                                    protecciondedatos@lopezzigayasociados.com.mx
                                </a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-primary mb-4">
                                6. Medidas de Seguridad
                            </h2>
                            <p>
                                Implementamos protocolos de seguridad SSL, encriptación de datos y
                                controles de acceso físicos y electrónicos para proteger su información.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-primary mb-4">
                                7. Cookies y Tecnologías Web
                            </h2>
                            <p>
                                Utilizamos cookies para analizar el tráfico web y personalizar contenido.
                                Puede administrar su configuración mediante su navegador.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-primary mb-4">
                                8. Cambios a la Política
                            </h2>
                            <p>
                                Nos reservamos el derecho de modificar esta política. Las actualizaciones
                                se publicarán en nuestro sitio web con fecha de vigencia.
                            </p>
                        </section>

                        <section className="pt-6">
                            <p className="text-lg font-semibold">
                                Última actualización: 25 de abril de 2025
                            </p>
                            <p className="mt-4">
                                Para cualquier duda sobre esta política, contacte a nuestro Oficial de
                                Privacidad al teléfono <a href="tel:+525514083982"
                                    className="text-primary hover:text-secondary">+52 55 1408 3982</a>
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    )
}