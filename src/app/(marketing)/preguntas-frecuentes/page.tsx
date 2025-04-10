'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const faqItems = [
    {
        question: "¿Cuánto tiempo toma resolver un caso legal?",
        answer: "El tiempo varía según la complejidad del caso. Casos simples pueden resolverse en 3-6 meses, mientras que casos más complejos pueden llevar de 1 a 3 años."
    },
    {
        question: "¿Qué documentos necesito para iniciar un proceso legal?",
        answer: "Depende del tipo de caso. Generalmente necesitarás identificación oficial, documentos relacionados al caso y cualquier contrato o acuerdo previo."
    },
    {
        question: "¿Cómo funcionan las consultas iniciales?",
        answer: "Ofrecemos una consulta inicial de evaluación con costos moderados, deducibles de cualquier servicio contratado posteriormente. Nos permite analizar tu caso y proponer la mejor estrategia legal."
    },
    {
        question: "¿Cómo protegen mi confidencialidad?",
        answer: "Todos nuestros clientes están protegidos por el secreto profesional y acuerdos de confidencialidad. Utilizamos sistemas seguros para manejar documentación sensible."
    },
    {
        question: "¿Trabajan con casos internacionales?",
        answer: "Sí, tenemos experiencia en derecho internacional y colaboramos con una red de despachos en diferentes países para casos transfronterizos."
    },
    {
        question: "¿Qué sucede si pierdo un caso?",
        answer: "Nuestro enfoque es siempre maximizar las posibilidades de éxito. En el improbable caso de resultado negativo, analizamos opciones de apelación y alternativas legales."
    }
]

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <main className="relative mt-16 sm:mt-24">
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold text-primary mb-12 text-center">Preguntas Frecuentes</h1>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className={`border-2 rounded-xl bg-white transition-all ${openIndex === index
                                    ? 'border-primary shadow-lg'
                                    : 'border-gray-200 hover:border-primary/30'
                                    }`}
                            >
                                <motion.button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex justify-between items-center p-6 cursor-pointer"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h3 className="text-xl font-semibold text-left text-gray-800">
                                        {item.question}
                                    </h3>
                                    <div className="p-2 rounded-full bg-primary/10">
                                        {openIndex === index ? (
                                            <FiChevronUp className="text-2xl text-primary" />
                                        ) : (
                                            <FiChevronDown className="text-2xl text-primary" />
                                        )}
                                    </div>
                                </motion.button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-gray-600 border-t-2 border-primary/10">
                                                <p className="text-lg leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}