// import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const faqItems = [
    {
        question: "¿Cómo es nuestro proceso?",
        answer: "Evaluación inicial gratuita del caso, nuestras asesorías tienen costo. Realizamos asesoría legal cuando no existe un proceso iniciado, para conocer las opciones legales que podemos ofrecer",
    },
    {
        question: "¿Que sucede en caso que ya exista un proceso legal iniciado?",
        answer: "En caso que exista ya un proceso legal, realizamos un diagnóstico legal de ese proceso."
    },
    {
        question: "¿Qué documentos necesito para iniciar un proceso legal?",
        answer: "Depende del tipo de caso. Generalmente necesitarás identificación oficial, documentos relacionados al caso y cualquier contrato o acuerdo previo."
    },
    {
        question: "¿Cómo protegen mi confidencialidad?",
        answer: "Todos nuestros clientes están protegidos por el secreto profesional y acuerdos de confidencialidad. Utilizamos sistemas seguros para manejar documentación sensible."
    },
    {
        question: "¿Qué sucede si pierdo un caso?",
        answer: "Nuestro enfoque es siempre maximizar las posibilidades de éxito. En el improbable caso de resultado negativo, analizamos opciones de apelación y alternativas legales."
    }
]

export default async function FAQPage() {
    // const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <main className="relative mt-16 sm:mt-24">
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold text-primary mb-12 text-center">Preguntas Frecuentes</h1>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className={`border-2 rounded-xl bg-white transition-all 
                                    }`}

                            // ${openIndex === index
                            // ? 'border-primary shadow-lg'
                            // : 'border-gray-200 hover:border-primary/30'
                            >
                                <button
                                    // onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex justify-between items-center p-6 cursor-pointer"
                                >
                                    <h3 className="text-xl font-semibold text-left text-gray-800">
                                        {item.question}
                                    </h3>
                                    <div className="p-2 rounded-full bg-primary/10">
                                        {/* {openIndex === index ? (
                                            <FiChevronUp className="text-2xl text-primary" />
                                        ) : (
                                            <FiChevronDown className="text-2xl text-primary" />
                                        )} */}
                                    </div>
                                </button>

                                {/* {openIndex === index && (
                                    <div
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-gray-600 border-t-2 border-primary/10">
                                            <p className="text-lg leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                )} */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}