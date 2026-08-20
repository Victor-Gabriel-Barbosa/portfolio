"use client"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const [values, setValues] = useState<FormState>({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)

  const validate = (state: FormState): FormErrors => {
    const next: FormErrors = {}
    if (!state.name.trim()) next.name = "Informe seu nome."
    if (!state.email.trim()) next.email = "Informe seu email."
    else if (!emailPattern.test(state.email)) next.email = "Email inválido."
    if (!state.message.trim()) next.message = "Escreva uma mensagem."
    else if (state.message.trim().length < 10)
      next.message = "A mensagem deve ter ao menos 10 caracteres."
    return next
  }

  const handleChange =
    (field: keyof FormState) =>
      (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues((prev) => ({ ...prev, [field]: event.target.value }))
        setErrors((prev) => ({ ...prev, [field]: undefined }))
      }

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validation = validate(values)
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    setSubmitting(true)

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("Erro no envio")
      }

      setValues({ name: "", email: "", message: "" })
      toast.success("Mensagem enviada!", {
        description: "Obrigado pelo contato. Responderei em breve.",
      })
    } catch (err) {
      toast.error("Erro ao enviar mensagem", {
        description: "Tente novamente mais tarde ou envie um e-mail direto.",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FieldGroup>
        <Field data-invalid={!!errors.name || undefined}>
          <FieldLabel htmlFor="name">Nome</FieldLabel>
          <Input
            id="name"
            name="name"
            placeholder="Seu nome"
            value={values.name}
            onChange={handleChange("name")}
            aria-invalid={!!errors.name}
            autoComplete="name"
          />
          <FieldError>{errors.name}</FieldError>
        </Field>

        <Field data-invalid={!!errors.email || undefined}>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="voce@email.com"
            value={values.email}
            onChange={handleChange("email")}
            aria-invalid={!!errors.email}
            autoComplete="email"
          />
          <FieldError>{errors.email}</FieldError>
        </Field>

        <Field data-invalid={!!errors.message || undefined}>
          <FieldLabel htmlFor="message">Mensagem</FieldLabel>
          <Textarea
            id="message"
            name="message"
            placeholder="Conte um pouco sobre o seu projeto ou oportunidade..."
            rows={5}
            value={values.message}
            onChange={handleChange("message")}
            aria-invalid={!!errors.message}
          />
          <FieldError>{errors.message}</FieldError>
        </Field>

        <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? "Enviando..." : "Enviar mensagem"}
          {!submitting ? <Send data-icon="inline-end" aria-hidden="true" /> : null}
        </Button>
      </FieldGroup>
    </form>
  )
}
