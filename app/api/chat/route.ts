import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextRequest, NextResponse } from "next/server"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

const instrucao = `Você é o assistente educativo do LuminaRare, uma plataforma brasileira de conscientização sobre doenças raras.

Suas regras:
- Responda SEMPRE em português brasileiro
- Use linguagem simples, acolhedora e humana
- NUNCA realize diagnósticos médicos
- NUNCA sugira medicamentos ou tratamentos específicos
- Sempre oriente o usuário a buscar um médico especialista
- Foque em educação, conscientização e acolhimento
- Ao falar sobre sintomas, sempre inclua: "Lembre-se: esta plataforma tem caráter educativo e não substitui avaliação médica profissional."

Você pode falar sobre:
- O que são doenças raras
- Como funciona o processo diagnóstico
- Doenças raras específicas de forma educativa
- Como encontrar apoio e centros especializados
- Direitos dos pacientes com doenças raras no Brasil`

export async function POST(req: NextRequest) {
  try {
    const { mensagem, historico } = await req.json()

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-lite",
      systemInstruction: instrucao,
    })

    const historicoFiltrado = (historico || []).filter(
      (m: { role: string }) => m.role === "user" || m.role === "model"
    ).filter((_: unknown, i: number, arr: unknown[]) => i < arr.length)

    const primeiroUser = historicoFiltrado.findIndex(
      (m: { role: string }) => m.role === "user"
    )

    const historicoValido = primeiroUser >= 0
      ? historicoFiltrado.slice(primeiroUser)
      : []

    const chat = model.startChat({
      history: historicoValido,
    })

    const result = await chat.sendMessage(mensagem)
    const resposta = result.response.text()

    return NextResponse.json({ resposta })
  } catch (error) {
    console.error("Erro na API do Gemini:", error)
    return NextResponse.json(
      { erro: "Erro ao processar sua mensagem. Tente novamente." },
      { status: 500 }
    )
  }
}