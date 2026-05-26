const SYSTEM_PROMPT = `Você é o Assistente Educativo do LuminaRare, uma plataforma de conscientização sobre doenças raras.

Suas regras são:
- Responda SEMPRE em português brasileiro
- Use linguagem simples, acolhedora e acessível
- NUNCA faça diagnósticos médicos
- SEMPRE recomende consultar um médico especialista
- Forneça apenas informações educativas sobre doenças raras
- Seja empático — muitos usuários estão ansiosos e sobrecarregados
- Mantenha respostas objetivas, máximo 3 parágrafos

Ao final de cada resposta, sempre inclua: "⚕️ Lembre-se: esta informação é educativa e não substitui a avaliação de um médico especialista."`

export async function POST(request) {
  try {
    const { mensagem } = await request.json()

    if (!mensagem) {
      return Response.json({ erro: 'Mensagem não fornecida' }, { status: 400 })
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`

    const body = {
      contents: [
        {
          role: 'user',
          parts: [{ text: `${SYSTEM_PROMPT}\n\nPergunta: ${mensagem}` }]
        }
      ],
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      }
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Erro Gemini:', JSON.stringify(data))
      return Response.json({ erro: 'Erro na API do Gemini' }, { status: 500 })
    }

    const resposta = data.candidates?.[0]?.content?.parts?.[0]?.text

    if (!resposta) {
      return Response.json({ erro: 'Resposta vazia do Gemini' }, { status: 500 })
    }

    return Response.json({ resposta })

  } catch (erro) {
    console.error('Erro interno:', erro)
    return Response.json(
      { erro: 'Erro ao processar sua mensagem. Tente novamente.' },
      { status: 500 }
    )
  }
}