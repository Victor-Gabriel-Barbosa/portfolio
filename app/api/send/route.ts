import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Campos obrigatórios faltando." }, { status: 400 })
    }

    console.log(process.env.CONTACT_EMAIL!);

    const data = await resend.emails.send({
      from: "Contato <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: `Nova mensagem de contato: ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
    })

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Falha ao enviar o email." }, { status: 500 })
  }
}