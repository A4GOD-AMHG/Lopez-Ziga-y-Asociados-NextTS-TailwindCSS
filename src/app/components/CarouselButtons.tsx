import React from 'react'

type ButtonProps = {
    onClick: () => void
    className?: string
}

export const PrevButton = ({ onClick, className }: ButtonProps) => (
    <button
        onClick={onClick}
        className={`absolute cursor-pointer top-1/2 left-1 md:left-4 z-10 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transform -translate-y-1/2 ${className}`}
        aria-label="Anterior"
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    </button>
)

export const NextButton = ({ onClick, className }: ButtonProps) => (
    <button
        onClick={onClick}
        className={`absolute cursor-pointer top-1/2 right-1 md:right-4 z-10 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transform -translate-y-1/2 ${className}`}
        aria-label="Siguiente"
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    </button>
)