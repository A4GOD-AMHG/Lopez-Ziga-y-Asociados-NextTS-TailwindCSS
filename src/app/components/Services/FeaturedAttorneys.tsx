import Image from 'next/image'

type Attorney = {
    name: string
    title: string
    experience: string
    cases: string
    email: string
    photo: string
}

export default function FeaturedAttorneys({ attorneys }: { attorneys: Attorney[] }) {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-[#70ac60]">
                    Nuestro Equipo de Expertos Legales
                </h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {attorneys.map((attorney, index) => (
                        <div key={index} className="bg-[#f8f8f8] px-10 sm:px-0 rounded-lg shadow-md overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-1/3 relative h-64 md:h-auto">
                                    <Image
                                        src={attorney.photo}
                                        alt={attorney.name}
                                        placeholder='blur'
                                        priority
                                        blurDataURL={attorney.photo}
                                        fill
                                        className="object-fill"
                                    />
                                </div>

                                <div className="p-6 md:w-2/3">
                                    <h3 className="text-xl font-bold text-[#70ac60] mb-2">
                                        {attorney.name}
                                    </h3>
                                    <p className="text-sm text-[#757575] mb-4">{attorney.title}</p>

                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-[#70ac60] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-sm">{attorney.experience} de experiencia</span>
                                        </div>

                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-[#70ac60] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-sm">{attorney.cases} casos resueltos</span>
                                        </div>

                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-[#70ac60] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <a href={`mailto:${attorney.email}`} className="text-sm hover:text-[#70ac60]">
                                                {attorney.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}