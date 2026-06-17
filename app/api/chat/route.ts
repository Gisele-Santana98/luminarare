import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextRequest, NextResponse } from "next/server"

const instrucao = `Você é o assistente educativo do LuminaRare, uma plataforma brasileira de conscientização sobre doenças raras.

Suas regras:
- Responda SEMPRE em português brasileiro
- Use linguagem simples, acolhedora e humana
- NUNCA realize diagnósticos médicos
- NUNCA sugira medicamentos ou tratamentos específicos
- Sempre oriente o usuário a buscar um médico especialista
- Foque em educação, conscientização e acolhimento
- Ao falar sobre sintomas, sempre inclua:
"Lembre-se: esta plataforma tem caráter educativo e não substitui avaliação médica profissional."

Você pode falar sobre:
- O que são doenças raras
- Como funciona o processo diagnóstico
- Doenças raras específicas de forma educativa
- Como encontrar apoio e centros especializados
- Direitos dos pacientes com doenças raras no Brasil`

type MensagemHistorico = {
  role: "user" | "model"
  parts: Array<{ text: string }>
}

function isHistoricoValido(m: unknown): m is MensagemHistorico {
  if (!m || typeof m !== "object") return false
  const msg = m as Record<string, unknown>
  if (msg.role !== "user" && msg.role !== "model") return false
  if (!Array.isArray(msg.parts) || msg.parts.length === 0) return false
  return msg.parts.every(
    (p) => p && typeof p === "object" && typeof (p as Record<string, unknown>).text === "string"
  )
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { erro: "Serviço temporariamente indisponível." },
      { status: 503 }
    )
  }

  try {
    const body = await req.json()
    const { mensagem, historico = [] } = body

    if (!mensagem || typeof mensagem !== "string" || mensagem.trim() === "") {
      return NextResponse.json(
        { erro: "Mensagem inválida." },
        { status: 400 }
      )
    }

    const genAI = new GoogleGenerativeAI(apiKey)

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-lite",
      systemInstruction: instrucao,
    })

    const historicoFiltrado: MensagemHistorico[] = Array.isArray(historico)
      ? historico.filter(isHistoricoValido).slice(-20)
      : []

    const chat = model.startChat({
      history: historicoFiltrado,
    })

    const result = await chat.sendMessage(mensagem.trim())
    const resposta = result.response.text()

    return NextResponse.json({ resposta })
  } catch (error) {
    console.error("Erro na API do Gemini:", error)

    return NextResponse.json(
      { erro: "Não foi possível processar sua solicitação no momento." },
      { status: 500 }
    )
  }
}