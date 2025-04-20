import React from 'react';

type ServiceDetailsProps = {
    title: string
    description: string
    benefits: string[]
    process?: string[]
}

export default async function ServiceDetails({ title, description, benefits, process }: ServiceDetailsProps) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#70ac60] mb-6">{title}</h2>
                    <p className="text-lg text-gray-700 mb-8">{description}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-[#70ac60] mb-4">Beneficios</h3>
                            <ul className="space-y-3">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="h-5 w-5 text-[#70ac60] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {process && (
                            <div>
                                <h3 className="text-xl font-semibold text-[#70ac60] mb-4">Nuestro Proceso</h3>
                                <ol className="space-y-3 list-decimal list-inside">
                                    {process.map((step, index) => (
                                        <li key={index} className="text-gray-700">
                                            {step}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}