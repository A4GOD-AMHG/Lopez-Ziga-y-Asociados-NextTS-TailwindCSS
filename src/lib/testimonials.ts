export type testimonialsList = {
    name: string;
    location: string;
    text: string;
    rating: number;
    photo: string;
}[]

export const testimonials: testimonialsList = [
    {
        name: "Eduardo Leonor",
        location: "Ciudad de México",
        text: "Muy bueno me asesoro de un caso que tenia buen servicio que brinda.",
        rating: 5,
        photo: "/images/testimonials/1.png"
    },
    {
        name: "María González",
        location: "Guadalajara",
        text: "Excelente servicio. Me asesoraron en cada paso y lograron reducir significativamente los cargos en mi caso.",
        rating: 4,
        photo: "/images/testimonials/testimonial2.jpg"
    },
    {
        name: "Carlos Rodríguez",
        location: "Monterrey",
        text: "Definitivamente los recomiendo. Su conocimiento del sistema legal mexicano es impresionante.",
        rating: 5,
        photo: "/images/testimonials/testimonial3.jpg"
    },
    {
        name: "Ana Martínez",
        location: "Puebla",
        text: "Fueron muy claros en explicarme mis opciones y los posibles resultados. Me sentí en buenas manos durante todo el proceso.",
        rating: 5,
        photo: "/images/testimonials/testimonial4.jpg"
    }
]