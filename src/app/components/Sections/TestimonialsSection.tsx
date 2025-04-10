'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'

const testimonials = [
    {
        name: 'Carlos Martínez',
        location: 'Empresa Constructora MX',
        text: 'Gracias a su asesoría logramos resolver un complejo litigio de tierras que llevaba años estancado.',
        rating: 5,
        photo: '/images/testimonials/testimonial1.jpg',
    },
    {
        name: 'Ana Rodríguez',
        location: 'Cadena Hotelera Internacional',
        text: 'Manejo impecable de nuestros casos laborales. Los recomiendo ampliamente.',
        rating: 5,
        photo: '/images/testimonials/testimonial2.jpg',
    },
    {
        name: 'Luis Fernández',
        location: 'Startup LegalTech',
        text: 'Su guía legal fue clave para lanzar mi proyecto. Gran equipo, atentos y actualizados.',
        rating: 4,
        photo: '/images/testimonials/testimonial3.jpg',
    },
    {
        name: 'María López',
        location: 'Grupo Industrial LATAM',
        text: 'Eficiencia y humanidad en cada caso. Siempre confiables.',
        rating: 5,
        photo: '/images/testimonials/testimonial4.jpg',
    },
]

export default function TestimonialsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: true,
    })

    useEffect(() => {
        if (!emblaApi) return

        const autoScroll = () => {
            emblaApi.scrollNext()
            setTimeout(autoScroll, 5000)
        }

        const timer = setTimeout(autoScroll, 5000)

        return () => clearTimeout(timer)
    }, [emblaApi])

    const duplicatedTestimonials = [...testimonials, ...testimonials]

    return (
        <section className="bg-white py-24 text-lg">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary mb-16">
                    Lo que dicen nuestros clientes
                </h2>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-3 box-border"
                            >
                                <div className="bg-gray-50 p-8 rounded-xl shadow text-gray-800 h-full text-center">
                                    <div className="flex justify-center mb-6">
                                        <img
                                            src={testimonial.photo}
                                            alt={testimonial.name}
                                            className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                                        />
                                    </div>
                                    <p className="italic mb-6 text-gray-700 leading-relaxed text-lg">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="flex justify-center mb-4 gap-1 text-primary">
                                        {[...Array(5)].map((_, i) => (
                                            <FiStar
                                                key={i}
                                                className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="font-semibold text-gray-900 text-xl">{testimonial.name}</p>
                                    <p className="text-gray-500 text-sm mt-1">{testimonial.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const FiStar = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
)