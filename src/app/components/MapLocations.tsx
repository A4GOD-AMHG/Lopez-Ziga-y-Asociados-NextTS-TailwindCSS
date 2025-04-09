export default function MapLocations() {
    return (
        <div className="grid gap-4">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.207441257798!2d-99.25472492544122!3d19.504370981804357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21c0d6f83a4c9%3A0x1f6c5a9b0c7d3b1e!2sValle%20de%20Zumpango%2015%2C%20Naucalpan%20de%20Ju%C3%A1rez!5e0!3m2!1ses!2smx!4v1718750000000!5m2!1ses!2smx"
                    width="100%"
                    height="100%"
                    loading="lazy"
                />
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.207441257798!2d-99.25472492544122!3d19.504370981804357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21c0d6f83a4c9%3A0x1f6c5a9b0c7d3b1e!2sCocoyoc%20%E2%80%93%20Oaxtepec%2026%2C%20El%20Partidor!5e0!3m2!1ses!2smx!4v1718750000000!5m2!1ses!2smx"
                    width="100%"
                    height="100%"
                    loading="lazy"
                />
            </div>
        </div>
    )
}