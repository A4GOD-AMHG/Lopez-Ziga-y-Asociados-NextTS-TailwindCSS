import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { email } = await request.json();

    try {
        // await resend.contacts.create({
        //     email,
        //     audienceId: process.env.RESEND_AUDIENCE_ID!,
        // });
        console.log(email)
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { error: 'Error al procesar la suscripción' },
            { status: 500 }
        );
    }
}