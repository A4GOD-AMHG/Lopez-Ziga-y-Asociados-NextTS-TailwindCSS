'use client'

import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const faqItems = [
    {
        question: "¿Cómo es nuestro proceso?",
        answer:
            "Evaluación inicial gratuita del caso, nuestras asesorías tienen costo. Realizamos asesoría legal cuando no existe un proceso iniciado, para conocer las opciones legales que podemos ofrecer",
    },
    {
        question: "¿Qué sucede en caso que ya exista un proceso legal iniciado?",
        answer:
            "En caso que exista ya un proceso legal, realizamos un diagnóstico legal de ese proceso.",
    },
    {
        question: "¿Qué documentos necesito para iniciar un proceso legal?",
        answer:
            "Depende del tipo de caso. Generalmente necesitarás identificación oficial, documentos relacionados al caso y cualquier contrato o acuerdo previo.",
    },
    {
        question: "¿Cómo protegen mi confidencialidad?",
        answer:
            "Todos nuestros clientes están protegidos por el secreto profesional y acuerdos de confidencialidad. Utilizamos sistemas seguros para manejar documentación sensible.",
    },
    {
        question: "¿Qué sucede si pierdo un caso?",
        answer:
            "Nuestro enfoque es siempre maximizar las posibilidades de éxito. En el improbable caso de resultado negativo, analizamos opciones de apelación y alternativas legales.",
    },
]

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    // Variants para la animación del contenido
    const contentVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: { height: 'auto', opacity: 1 },
    }

    return (
        <main className="relative mt-16 sm:mt-24">
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold text-primary mb-12 text-center">
                        Preguntas Frecuentes
                    </h1>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {faqItems.map((item, index) => {
                            const isOpen = openIndex === index
                            return (
                                <motion.div
                                    key={index}
                                    layout
                                    initial={false}
                                    className={`border-2 rounded-xl bg-white transition-all ${isOpen
                                            ? 'border-primary shadow-lg'
                                            : 'border-gray-200 hover:border-primary/30'
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full flex justify-between items-center p-6 cursor-pointer focus:outline-none"
                                    >
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {item.question}
                                        </h3>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                            className="p-2 rounded-full bg-primary/10"
                                        >
                                            {isOpen ? (
                                                <FiChevronUp className="text-2xl text-primary" />
                                            ) : (
                                                <FiChevronDown className="text-2xl text-primary" />
                                            )}
                                        </motion.div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="content"
                                                variants={contentVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="overflow-hidden border-t-2 border-primary/10"
                                            >
                                                <div className="px-6 pb-6 text-gray-600">
                                                    <p className="text-lg leading-relaxed">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}
