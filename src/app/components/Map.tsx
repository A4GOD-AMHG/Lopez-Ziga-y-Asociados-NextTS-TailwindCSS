'use client'

import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import { useEffect, useState } from 'react'

const createCustomIcon = (iconUrl: string) => {
    return L.icon({
        iconUrl: iconUrl,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
    })
}

const PrimaryIcon = createCustomIcon('/images/map-marker.svg')
export default function Map({ lat, lng }: { lat: number; lng: number }) {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => { setIsMounted(true) }, []);

    if (!isMounted) return null

    return (
        <MapContainer
            center={[lat, lng]}
            zoom={15}
            scrollWheelZoom={false}
            className="h-full w-full z-0"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={[lat, lng]}
                icon={PrimaryIcon}
            />
        </MapContainer>
    )
}