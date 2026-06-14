"use client"

import { useState, useRef, useEffect } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

type Mensagem = {
  role: "user" | "assistant"
  content: string
}

const sugestoes = [
  "O que são doenças raras?",
  "Quanto tempo leva para ter um diagnóstico?",
  "O que é a Síndrome de Marfan?",
  "Como encontrar um especialista em doenças raras?",
]

export default function ChatbotPage() {
  const [mensagens, setMensagens] = useState<Mensagem[]>([
    {
      role: "assistant",
      content: "Olá! Sou o assistente educativo do LuminaRare. Estou aqui para responder suas dúvidas sobre doenças raras de forma simples e acolhedora. Como posso te ajudar hoje?",
    },
  ])
  const [input, setInput] = useState("")
  const [carregando, setCarregando] = useState(false)
  const fimRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fimRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [mensagens])

  async function enviar(texto?: string) {
    const mensagem = texto || input
    if (!mensagem.trim() || carregando) return

    const novasMensagens: Mensagem[] = [
      ...mensagens,
      { role: "user", content: mensagem },
    ]
    setMensagens(novasMensagens)
    setInput("")
    setCarregando(true)

    try {
      const historico = mensagens.map((m) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      }))

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensagem, historico }),
      })

      const data = await res.json()

      setMensagens([
        ...novasMensagens,
        {
          role: "assistant",
          content: data.resposta || data.erro || "Erro ao obter resposta.",
        },
      ])
    } catch {
      setMensagens([
        ...novasMensagens,
        {
          role: "assistant",
          content: "Desculpe, ocorreu um erro. Tente novamente.",
        },
      ])
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div>
      <main className="min-h-screen bg-[#F8FAFC]">
        <Header />

        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">

            <div className="text-center flex flex-col gap-2">
              <span className="bg-[#EDE9FE] text-[#4338CA] text-sm font-medium px-4 py-1 rounded-full w-fit mx-auto">
                Assistente educativo
              </span>
              <h1 className="text-3xl font-bold text-[#0F172A]">
                Tire suas duvidas
              </h1>
              <p className="text-[#475569]">
                Respostas em linguagem simples sobre doencas raras. Sem diagnosticos medicos.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 text-amber-800 text-sm">
              Esta plataforma possui carater educativo e nao substitui avaliacao medica profissional.
            </div>

            <div className="bg-white rounded-2xl border border-[#E2E8F0] flex flex-col" style={{ height: "480px" }}>
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
                {mensagens.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-[#4338CA] text-white rounded-br-sm"
                          : "bg-[#F1F5F9] text-[#0F172A] rounded-bl-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {carregando && (
                  <div className="flex justify-start">
                    <div className="bg-[#F1F5F9] rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-[#475569]">
                      Digitando...
                    </div>
                  </div>
                )}
                <div ref={fimRef} />
              </div>

              <div className="border-t border-[#E2E8F0] p-4 flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && enviar()}
                  placeholder="Digite sua duvida..."
                  className="flex-1 border border-[#E2E8F0] rounded-xl px-4 py-2 text-sm text-[#0F172A] bg-[#F8FAFC] focus:outline-none focus:border-[#4338CA]"
                />
                <button
                  onClick={() => enviar()}
                  disabled={carregando}
                  className="bg-[#4338CA] text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-[#3730A3] transition-colors disabled:opacity-50"
                >
                  Enviar
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {sugestoes.map((s) => (
                <button
                  key={s}
                  onClick={() => enviar(s)}
                  className="bg-white border border-[#E2E8F0] text-[#475569] text-sm px-4 py-2 rounded-full hover:border-[#4338CA] hover:text-[#4338CA] transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}