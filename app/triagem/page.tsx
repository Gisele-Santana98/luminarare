"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

type Opcao = {
  texto: string
  pesos: Partial<Record<"Genética" | "Neurológica" | "Metabólica" | "apoio" | "chatbot", number>>
}

type Pergunta = {
  id: string
  texto: string
  opcoes: Opcao[]
}

type Resposta = {
  perguntaId: string
  perguntaTexto: string
  respostaTexto: string
}

const perguntas: Pergunta[] = [
  {
    id: "p1",
    texto: "Há quanto tempo você ou alguém que você conhece sente os sintomas?",
    opcoes: [
      { texto: "Menos de 6 meses", pesos: { chatbot: 1 } },
      { texto: "Entre 6 meses e 2 anos", pesos: { chatbot: 1, apoio: 1 } },
      { texto: "Mais de 2 anos sem resposta", pesos: { apoio: 2 } },
    ],
  },
  {
    id: "p2",
    texto: "Os sintomas pioram com o tempo ou permanecem estáveis?",
    opcoes: [
      { texto: "Pioram progressivamente", pesos: { Neurológica: 1, Metabólica: 1 } },
      { texto: "Permanecem estáveis", pesos: { Genética: 1 } },
      { texto: "Vêm em crises ou episódios", pesos: { Metabólica: 1 } },
    ],
  },
  {
    id: "p3",
    texto: "Os sintomas afetam principalmente qual área?",
    opcoes: [
      { texto: "Força, coordenação ou equilíbrio", pesos: { Neurológica: 2 } },
      { texto: "Energia, digestão ou metabolismo", pesos: { Metabólica: 2 } },
      { texto: "Crescimento, pele ou estrutura física", pesos: { Genética: 2 } },
      { texto: "Não sei dizer com certeza", pesos: { chatbot: 1 } },
    ],
  },
  {
    id: "p4",
    texto: "Algum familiar próximo já apresentou sintomas parecidos?",
    opcoes: [
      { texto: "Sim, em mais de uma geração", pesos: { Genética: 2 } },
      { texto: "Sim, apenas um parente", pesos: { Genética: 1 } },
      { texto: "Não que eu saiba", pesos: { chatbot: 1 } },
    ],
  },
  {
    id: "p5",
    texto: "Já houve alguma consulta médica sobre esses sintomas?",
    opcoes: [
      { texto: "Sim, mas sem diagnóstico fechado", pesos: { apoio: 1 } },
      { texto: "Sim, e há suspeita de uma condição rara", pesos: { apoio: 2 } },
      { texto: "Ainda não procurei um médico", pesos: { chatbot: 1 } },
    ],
  },
  {
    id: "p6",
    texto: "Os sintomas surgiram na infância ou na vida adulta?",
    opcoes: [
      { texto: "Desde a infância", pesos: { Genética: 1 } },
      { texto: "Começaram na vida adulta", pesos: { Metabólica: 1, Neurológica: 1 } },
      { texto: "Não tenho certeza do início", pesos: { chatbot: 1 } },
    ],
  },
  {
    id: "p7",
    texto: "Há dificuldade de concentração, memória ou fala?",
    opcoes: [
      { texto: "Sim, com frequência", pesos: { Neurológica: 2 } },
      { texto: "Ocasionalmente", pesos: { Neurológica: 1 } },
      { texto: "Não percebo isso", pesos: { Metabólica: 1, Genética: 1 } },
    ],
  },
  {
    id: "p8",
    texto: "Já precisou de exames laboratoriais frequentes por conta dos sintomas?",
    opcoes: [
      { texto: "Sim, regularmente", pesos: { Metabólica: 2 } },
      { texto: "Algumas vezes", pesos: { Metabólica: 1 } },
      { texto: "Raramente ou nunca", pesos: { chatbot: 1 } },
    ],
  },
  {
    id: "p9",
    texto: "Você sente que falta apoio ou orientação sobre o que fazer agora?",
    opcoes: [
      { texto: "Sim, não sei por onde começar", pesos: { apoio: 2 } },
      { texto: "Um pouco, ainda estou entendendo", pesos: { chatbot: 1 } },
      { texto: "Não, já tenho acompanhamento", pesos: { apoio: 1 } },
    ],
  },
  {
    id: "p10",
    texto: "O que você mais gostaria de encontrar agora?",
    opcoes: [
      { texto: "Informações educativas sobre possíveis condições", pesos: { Genética: 1, Neurológica: 1, Metabólica: 1 } },
      { texto: "Conversar e tirar dúvidas", pesos: { chatbot: 2 } },
      { texto: "Hospitais, associações ou especialistas", pesos: { apoio: 2 } },
    ],
  },
]

type Item =
  | { tipo: "pergunta"; pergunta: Pergunta }
  | { tipo: "resposta"; resposta: Resposta }

function calcularResultado(respostasPesos: Opcao["pesos"][]) {
  const total: Record<string, number> = {
    Genética: 0,
    Neurológica: 0,
    Metabólica: 0,
    apoio: 0,
    chatbot: 0,
  }

  respostasPesos.forEach((pesos) => {
    Object.entries(pesos).forEach(([chave, valor]) => {
      total[chave] = (total[chave] || 0) + (valor || 0)
    })
  })

  const entradas = Object.entries(total).sort((a, b) => b[1] - a[1])
  const [chaveTop] = entradas[0]

  if (chaveTop === "apoio") {
    return {
      titulo: "Rede de Apoio",
      descricao:
        "Pelas suas respostas, o próximo passo mais útil é buscar orientação especializada e conexão com quem já passa por situação parecida.",
      href: "/rede-de-apoio",
      cta: "Ver Rede de Apoio",
    }
  }

  if (chaveTop === "chatbot") {
    return {
      titulo: "Assistente Educativo",
      descricao:
        "Você ainda tem dúvidas sobre o que está sentindo. Converse com o assistente educativo para entender melhor antes do próximo passo.",
      href: "/chatbot",
      cta: "Conversar com o Assistente",
    }
  }

  return {
    titulo: `Categoria: ${chaveTop}`,
    descricao: `Suas respostas indicam maior relação com condições da categoria ${chaveTop}. Explore a biblioteca educativa para entender melhor.`,
    href: `/biblioteca?categoria=${encodeURIComponent(chaveTop)}`,
    cta: "Explorar Biblioteca",
  }
}

export default function TriagemPage() {
  const [itens, setItens] = useState<Item[]>([])
  const [indiceAtual, setIndiceAtual] = useState(0)
  const [digitando, setDigitando] = useState(false)
  const [pesosColetados, setPesosColetados] = useState<Opcao["pesos"][]>([])
  const fimRef = useRef<HTMLDivElement>(null)
  const finalizado = indiceAtual >= perguntas.length
  
useEffect(() => {
  if (finalizado) return

   // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronizando com setTimeout, padrão correto
  setDigitando(true)

  const timeout = setTimeout(() => {
    setItens((prev) => [...prev, { tipo: "pergunta", pergunta: perguntas[indiceAtual] }])
    setDigitando(false)
  }, 900)

  return () => clearTimeout(timeout)
}, [indiceAtual, finalizado])

  useEffect(() => {
    fimRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }, [itens, digitando, finalizado])

  function responder(opcao: Opcao) {
    const pergunta = perguntas[indiceAtual]

    setItens((prev) => [
      ...prev,
      {
        tipo: "resposta",
        resposta: {
          perguntaId: pergunta.id,
          perguntaTexto: pergunta.texto,
          respostaTexto: opcao.texto,
        },
      },
    ])

    setPesosColetados((prev) => [...prev, opcao.pesos])
    setIndiceAtual((prev) => prev + 1)
  }

  function reiniciar() {
    setItens([])
    setIndiceAtual(0)
    setPesosColetados([])
  }

  const progresso = Math.min((indiceAtual / perguntas.length) * 100, 100)
  const resultado = finalizado ? calcularResultado(pesosColetados) : null

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Header />

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">

          <div className="text-center flex flex-col gap-2">
            <span className="bg-[#EDE9FE] text-[#4338CA] text-sm font-medium px-4 py-1 rounded-full w-fit mx-auto">
              Triagem Educativa
            </span>
            <h1 className="text-3xl font-bold text-[#0F172A]">
              Vamos entender sua situação
            </h1>
            <p className="text-[#475569]">
              Responda com calma. Esta triagem é educativa e não substitui avaliação médica.
            </p>
          </div>

          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-700 to-violet-500 transition-all duration-500"
              style={{ width: `${progresso}%` }}
            />
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-6 p-6 min-h-[400px] max-h-[600px] overflow-y-auto">

            {itens.map((item, i) =>
              item.tipo === "resposta" ? (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-700 flex-shrink-0" />
                    <span className="text-xs text-slate-400 uppercase tracking-wide">
                      Etapa {Math.floor(i / 2) + 1}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 pl-5">{item.resposta.perguntaTexto}</p>
                  <div className="pl-5">
                    <span className="bg-[#4338CA] text-white text-sm px-4 py-2 rounded-2xl rounded-bl-sm inline-block">
                      {item.resposta.respostaTexto}
                    </span>
                  </div>
                </div>
              ) : (
                <div key={i} className="flex flex-col gap-3">
                  <div className="bg-[#F1F5F9] text-[#0F172A] rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed max-w-[85%]">
                    {item.pergunta.texto}
                  </div>
                  {i === itens.length - 1 && !digitando && (
                    <div className="flex flex-col gap-2 pl-2">
                      {item.pergunta.opcoes.map((opcao) => (
                        <button
                          key={opcao.texto}
                          onClick={() => responder(opcao)}
                          className="text-left bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-700 hover:border-indigo-500 hover:text-indigo-700 transition-colors"
                        >
                          {opcao.texto}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}

            {digitando && (
              <div className="bg-[#F1F5F9] rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-[#475569] w-fit">
                Digitando...
              </div>
            )}

            {finalizado && resultado && (
              <div className="flex flex-col gap-4 bg-violet-50 border border-violet-200 rounded-3xl p-6 mt-2">
                <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wide">
                  Resultado da sua triagem
                </span>
                <h2 className="text-xl font-bold text-slate-900">{resultado.titulo}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{resultado.descricao}</p>

                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <Link
                    href={resultado.href}
                    className="bg-[#4338CA] text-white px-6 py-3 rounded-2xl text-sm font-semibold text-center hover:bg-[#3730A3] transition-colors"
                  >
                    {resultado.cta}
                  </Link>
                  <button
                    onClick={reiniciar}
                    className="border border-slate-300 text-slate-600 px-6 py-3 rounded-2xl text-sm font-medium hover:border-indigo-500 hover:text-indigo-700 transition-colors"
                  >
                    Refazer triagem
                  </button>
                </div>

                <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl p-3 mt-2">
                  Esta plataforma tem caráter educativo e não substitui avaliação médica profissional.
                </p>
              </div>
            )}

            <div ref={fimRef} />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}