'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import ConsultationModal from '../Consultations/ConsultationModal'

type Slide = {
    title: string
    description: string
    ctaText: string
    bgImage: string
    type?: 'video'
    videoUrl?: string
}

export default function HeroCarrousel({ slides, service }: { slides: Slide[], service: string }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

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

        const currentSlide = slides[selectedIndex]
        const isVideo = currentSlide?.type === 'video'
        const intervalTime = isVideo ? 15000 : 8000

        const interval = setInterval(() => {
            if (!isVideoPlaying) scrollNext()
        }, intervalTime)

        return () => {
            emblaApi.off('select', onSelect)
            clearInterval(interval)
        }
    }, [emblaApi, onSelect, scrollNext, selectedIndex, isVideoPlaying])

    return (
        <div className="relative h-[450px] md:h-[800px] overflow-hidden">
            <div className="embla h-full" ref={emblaRef}>
                <div className="embla__container h-full flex">
                    {slides.map((slide, index) => (
                        <div className="embla__slide flex-[0_0_100%] relative" key={index}>
                            {slide.type === 'video' ? (
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    className="w-full h-full object-cover"
                                    onPlay={() => setIsVideoPlaying(true)}
                                    onPause={() => setIsVideoPlaying(false)}
                                >
                                    <source src={slide.videoUrl} type="video/mp4" />
                                </video>
                            ) : (
                                <Image
                                    src={slide.bgImage}
                                    alt="blur"
                                    placeholder='blur'
                                    blurDataURL={slide.bgImage}
                                    fill
                                    className="object-bottom z-0"
                                    priority={index === 0}
                                />
                            )}
                            <div className="absolute inset-0 bg-black/60 z-0" />

                            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 text-white">
                                <div className="max-w-4xl space-y-6 px-4">
                                    <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-xl">
                                        {slide.title}
                                    </h1>
                                    <p className="text-xl md:text-2xl mb-8 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                                        {slide.description}
                                    </p>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="bg-[#70ac60] hover:bg-[#90c67b] text-white font-bold py-4 px-12 text-xl cursor-pointer rounded-lg 
                                        transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                    >
                                        {slide.ctaText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === selectedIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                        aria-label={`Ir a slide ${index + 1}`}
                    />
                ))}
            </div>

            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} service={service} />
        </div>
    )
}