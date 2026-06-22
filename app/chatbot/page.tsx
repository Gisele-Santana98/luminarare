"use client"

import { useState, useRef, useEffect } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

type Mensagem = {
  id: string
  role: "user" | "assistant"
  content: string
}

const RESPOSTAS_PRE_DEFINIDAS: Record<string, string> = {
  "o que são doenças raras":
    "Doenças raras são condições que afetam um número pequeno de pessoas em relação à população geral. No Brasil, uma doença é considerada rara quando atinge até 65 pessoas em cada 100.000 habitantes. Apesar de individualmente raras, juntas somam mais de 8.000 tipos diferentes, afetando cerca de 13 milhões de brasileiros.",

  "quanto tempo leva para ter um diagnóstico":
    "Infelizmente, o caminho até o diagnóstico costuma ser longo e difícil. A média no Brasil é de 5 a 7 anos entre os primeiros sintomas e a confirmação da doença. Esse período é chamado de 'odisseia diagnóstica' e envolve consultas com múltiplos especialistas, exames e, muitas vezes, diagnósticos incorretos.\n\nLembre-se: esta plataforma tem caráter educativo e não substitui avaliação médica profissional.",

  "o que é a síndrome de marfan":
    "A Síndrome de Marfan é uma doença genética que afeta o tecido conjuntivo do corpo, a 'cola' que sustenta ossos, músculos, órgãos e vasos sanguíneos. As pessoas com Marfan costumam ter estatura elevada, membros longos e podem apresentar alterações cardíacas e visuais.\n\nO acompanhamento médico contínuo é fundamental. Procure um geneticista ou cardiologista para orientação.\n\nLembre-se: esta plataforma tem caráter educativo e não substitui avaliação médica profissional.",

  "como encontrar um especialista em doenças raras":
    "Existem alguns caminhos para encontrar especialistas em doenças raras no Brasil:\n\n• CRER (Centros de Referência em Doenças Raras) distribuídos pelo país\n• Hospital das Clínicas de São Paulo e Rio de Janeiro\n• ABRArare (Associação Brasileira de Doenças Raras)\n• Na aba 'Rede de Apoio' do LuminaRare você encontra hospitais e associações próximos a você\n\nLembre-se: esta plataforma tem caráter educativo e não substitui avaliação médica profissional.",

  "quais são os direitos dos pacientes com doenças raras":
    "No Brasil, pacientes com doenças raras têm direitos garantidos por lei, entre eles:\n\n• Acesso a medicamentos de alto custo pelo SUS (CEAF)\n• Atendimento em Centros de Referência especializados\n• Isenção de IR para portadores de doenças graves\n• Prioridade em filas de perícia do INSS\n• Direito à informação e ao diagnóstico precoce via triagem neonatal\n\nA Política Nacional de Atenção Integral às Pessoas com Doenças Raras (Portaria GM/MS nº 199/2014) é o principal marco legal.",
}

function buscarResposta(input: string): string | null {
  const normalizado = input.toLowerCase().trim()
  for (const chave of Object.keys(RESPOSTAS_PRE_DEFINIDAS)) {
    if (normalizado.includes(chave) || chave.includes(normalizado)) {
      return RESPOSTAS_PRE_DEFINIDAS[chave]
    }
  }
  return null
}

const sugestoes = [
  "O que são doenças raras?",
  "Quanto tempo leva para ter um diagnóstico?",
  "O que é a Síndrome de Marfan?",
  "Como encontrar um especialista em doenças raras?",
]

const MENSAGEM_FALLBACK =
  "Obrigado pela sua pergunta! 💜\n\nO Assistente LuminaRare está em fase de validação e expansão do seu banco de conhecimento. Em breve será capaz de responder perguntas mais específicas sobre doenças raras.\n\nPor enquanto, explore nossa Biblioteca de Doenças ou acesse a Rede de Apoio para encontrar especialistas próximos a você."

export default function ChatbotPage() {
  const [mensagens, setMensagens] = useState<Mensagem[]>([
    {
      id: "init",
      role: "assistant",
      content:
        "Olá! Sou o Assistente LuminaRare. Estou aqui para responder suas dúvidas sobre doenças raras de forma simples e acolhedora.\n\nEsta funcionalidade está em fase de validação, algumas perguntas já consigo responder. Como posso te ajudar hoje?",
    },
  ])
  const [input, setInput] = useState("")
  const [carregando, setCarregando] = useState(false)
  const fimRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
  if (mensagens.length > 1) {
    fimRef.current?.scrollIntoView({ behavior: "smooth" })
  }
}, [mensagens])

  function enviar(texto?: string) {
    const mensagem = texto || input
    if (!mensagem.trim() || carregando) return

    const msgUsuario: Mensagem = {
      id: `user-${Date.now()}`,
      role: "user",
      content: mensagem,
    }

    setMensagens((prev) => [...prev, msgUsuario])
    setInput("")
    setCarregando(true)

    setTimeout(() => {
      const resposta = buscarResposta(mensagem) ?? MENSAGEM_FALLBACK

      setMensagens((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: resposta,
        },
      ])
      setCarregando(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-100 via-violet-50 to-violet-100">
      <Header />

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">

          <div className="text-center flex flex-col gap-2">
            <span className="bg-[#EDE9FE] text-[#4338CA] text-sm font-medium px-4 py-1 rounded-full w-fit mx-auto">
              Assistente educativo
            </span>
            <h1 className="text-3xl font-bold text-[#0F172A]">
              Tire suas dúvidas
            </h1>
            <p className="text-[#475569]">
              Respostas em linguagem simples sobre doenças raras. Sem diagnósticos médicos.
            </p>
          </div>

          {/* Banner MVP */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl px-5 py-4 flex gap-3 items-start">
            <span className="text-indigo-500 text-lg mt-0.5">🚧</span>
            <div className="flex flex-col gap-1">
              <span className="text-indigo-800 font-semibold text-sm">
                Funcionalidade em fase de validação
              </span>
              <span className="text-indigo-700 text-sm leading-relaxed">
                O Assistente LuminaRare está sendo desenvolvido para oferecer orientação educativa sobre doenças raras. Nesta versão MVP, responde às perguntas mais frequentes.
              </span>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 text-amber-800 text-sm">
            Esta plataforma possui caráter educativo e não substitui avaliação médica profissional.
          </div>

          {/* Chat */}
          <div className="bg-white rounded-3xl border border-slate-200 flex flex-col h-[600px] md:h-[650px] shadow-sm">
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
              {mensagens.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
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
                  <div className="bg-[#F1F5F9] rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-[#475569] flex gap-1 items-center">
                    <span className="animate-pulse">●</span>
                    <span className="animate-pulse delay-75">●</span>
                    <span className="animate-pulse delay-150">●</span>
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
                placeholder="Digite sua dúvida..."
                aria-label="Mensagem para o assistente"
                className="flex-1 border border-[#E2E8F0] rounded-xl px-4 py-2 text-sm text-[#0F172A] bg-[#F8FAFC] focus:outline-none focus:border-[#4338CA]"
              />
              <button
                onClick={() => enviar()}
                disabled={carregando}
                aria-label="Enviar mensagem"
                className="bg-[#4338CA] text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-[#3730A3] transition-colors disabled:opacity-50"
              >
                Enviar
              </button>
            </div>
          </div>

          {/* Sugestões */}
          <div className="flex flex-wrap gap-2">
            {sugestoes.map((s) => (
              <button
                key={s}
                disabled={carregando}
                onClick={() => enviar(s)}
                className="bg-white border border-[#E2E8F0] text-[#475569] text-sm px-4 py-2 rounded-full hover:border-[#4338CA] hover:text-[#4338CA] transition-colors disabled:opacity-50"
              >
                {s}
              </button>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}