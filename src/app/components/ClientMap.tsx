'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/app/components/Map'), {
    ssr: false,
});

export default function ClientMap(props: { lat: number; lng: number }) {
    return <Map {...props} />;
}
