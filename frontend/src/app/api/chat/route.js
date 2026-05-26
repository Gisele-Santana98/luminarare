import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const SYSTEM_PROMPT = `Você é o Assistente Educativo do LuminaRare, uma plataforma de conscientização sobre doenças raras.

Suas regras são:
- Responda SEMPRE em português brasileiro
- Use linguagem simples, acolhedora e acessível
- NUNCA faça diagnósticos médicos
- SEMPRE recomende consultar um médico especialista
- Forneça apenas informações educativas sobre doenças raras
- Seja empático — muitos usuários estão ansiosos e sobrecarregados
- Quando não souber algo, diga honestamente
- Mantenha respostas objetivas, máximo 3 parágrafos

Ao final de cada resposta, sempre inclua: "⚕️ Lembre-se: esta informação é educativa e não substitui a avaliação de um médico especialista."`

export async function POST(request) {
  try {
    const { mensagem, historico } = await request.json()

    if (!mensagem) {
      return Response.json({ erro: 'Mensagem não fornecida' }, { status: 400 })
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

    // Monta o histórico da conversa
    const chat = model.startChat({
      history: historico || [],
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
      systemInstruction: SYSTEM_PROMPT,
    })

    const result = await chat.sendMessage(mensagem)
    const resposta = result.response.text()

    return Response.json({ resposta })

  } catch (erro) {
    console.error('Erro na API do Gemini:', erro)
    return Response.json(
      { erro: 'Erro ao processar sua mensagem. Tente novamente.' },
      { status: 500 }
    )
  }
}