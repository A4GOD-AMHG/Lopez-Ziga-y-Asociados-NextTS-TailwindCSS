'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { testimonialsByService } from '@/lib/testimonials'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { NextButton, PrevButton } from './CarouselButtons'

export default function TestimonialsCarousel({ service }: { service: string }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: true
    })

    const [selectedIndex, setSelectedIndex] = useState(0)
    const testimonials = testimonialsByService[service as keyof typeof testimonialsByService] || []

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)

        const interval = setInterval(() => {
            emblaApi.scrollNext()
        }, 7500)

        return () => {
            emblaApi.off('select', onSelect)
            clearInterval(interval)
        }
    }, [emblaApi, onSelect])

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-[#70ac60]">
                    Testimonios de nuestros clientes
                </h2>

                <div className="relative max-w-3xl mx-auto">
                    <div className="embla overflow-hidden" ref={emblaRef}>
                        <div className="embla__container flex">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    className="embla__slide flex-[0_0_100%] px-4"
                                    key={index}
                                >
                                    <div className="bg-[#ececec] p-6 rounded-lg shadow-md h-full mx-auto max-w-lg">
                                        <div className="flex items-center mb-4">
                                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#90c67b]">
                                                <Image
                                                    src={testimonial.photo}
                                                    alt={testimonial.name}
                                                    width={64}
                                                    height={64}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="font-bold">{testimonial.name}</h4>
                                                <p className="text-sm text-[#757575]">{testimonial.location}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 italic">"{testimonial.text}"</p>
                                        <div className="mt-4 flex">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center mt-6 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApi?.scrollTo(index)}
                                className={`w-3 h-3 rounded-full ${index === selectedIndex ? 'bg-[#70ac60]' : 'bg-gray-300'}`}
                                aria-label={`Ir al testimonio ${index + 1}`}
                            />
                        ))}
                    </div>

                    <PrevButton
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 md:-translate-x-12 hover:bg-[#90c67b] transition"
                    />
                    <NextButton
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 md:translate-x-12 hover:bg-[#90c67b] transition"
                    />
                </div>
            </div>
        </section>
    )
}