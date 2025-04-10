import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { email } = await request.json();

    try {
        console.log(email)
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { error: 'Error procesando la agenda de cita' },
            { status: 500 }
        );
    }
}