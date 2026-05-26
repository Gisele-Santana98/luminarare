'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function Assistente() {
  const [mensagens, setMensagens] = useState([
    {
      role: 'assistant',
      content: 'Olá! Sou o assistente educativo do LuminaRare. Estou aqui para te ajudar com informações sobre doenças raras em linguagem simples e acessível. Como posso te ajudar hoje?'
    }
  ])
  const [input, setInput] = useState('')
  const [carregando, setCarregando] = useState(false)
  const fimDaConversa = useRef(null)

  // Rola para o final sempre que chega mensagem nova
  useEffect(() => {
    fimDaConversa.current?.scrollIntoView({ behavior: 'smooth' })
  }, [mensagens])

  async function enviarMensagem() {
    if (!input.trim() || carregando) return

    const novaMensagem = { role: 'user', content: input }
    const inputAtual = input

    setMensagens(prev => [...prev, novaMensagem])
    setInput('')
    setCarregando(true)

    try {
      // Monta histórico no formato do Gemini
      const historico = mensagens.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }))

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mensagem: inputAtual, historico })
      })

      const data = await response.json()

      if (data.erro) throw new Error(data.erro)

      setMensagens(prev => [...prev, {
        role: 'assistant',
        content: data.resposta
      }])

    } catch (erro) {
      setMensagens(prev => [...prev, {
        role: 'assistant',
        content: 'Desculpe, ocorreu um erro. Por favor, tente novamente.'
      }])
    } finally {
      setCarregando(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      enviarMensagem()
    }
  }

  return (
    <main className="bg-[#0F0A1E] min-h-screen pt-20 flex flex-col">

      {/* Cabeçalho */}
      <div className="border-b border-[#1E1535] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#6C3FC5] rounded-full flex items-center justify-center text-lg">
            🤖
          </div>
          <div>
            <div className="text-[#F0EAF8] font-semibold">Assistente LuminaRare</div>
            <div className="text-[#4ADE80] text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-[#4ADE80] rounded-full inline-block"></span>
              Online — Modo educativo
            </div>
          </div>
        </div>
        <Link
          href="/triagem"
          className="text-[#A78BFA] text-sm hover:text-[#F0EAF8] transition-colors"
        >
          Fazer triagem →
        </Link>
      </div>

      {/* Aviso ético */}
      <div className="bg-[#160F2A] border-b border-[#1E1535] px-6 py-2">
        <p className="text-[#9B8EC4] text-xs text-center">
          ⚠️ Este assistente fornece orientações educativas e informativas. Não realiza diagnósticos médicos.
        </p>
      </div>

      {/* Área de mensagens */}
      <div className="flex-1 overflow-y-auto px-4 py-6 max-w-3xl w-full mx-auto">
        <div className="space-y-4">
          {mensagens.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 bg-[#6C3FC5] rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-1">
                  🤖
                </div>
              )}
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#6C3FC5] text-white rounded-tr-sm'
                    : 'bg-[#160F2A] text-[#F0EAF8] border border-[#2D1F54] rounded-tl-sm'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Indicador de digitando */}
          {carregando && (
            <div className="flex justify-start">
              <div className="w-8 h-8 bg-[#6C3FC5] rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">
                🤖
              </div>
              <div className="bg-[#160F2A] border border-[#2D1F54] px-4 py-3 rounded-2xl rounded-tl-sm">
                <div className="flex gap-1 items-center h-4">
                  <span className="w-2 h-2 bg-[#6C3FC5] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-[#6C3FC5] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-[#6C3FC5] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={fimDaConversa} />
        </div>
      </div>

      {/* Input de mensagem */}
      <div className="border-t border-[#1E1535] px-4 py-4 max-w-3xl w-full mx-auto">
        <div className="flex gap-3 items-end">
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite seus sintomas ou dúvidas em linguagem simples..."
            rows={1}
            aria-label="Campo de mensagem para o assistente"
            className="flex-1 bg-[#160F2A] border border-[#2D1F54] rounded-xl px-4 py-3 text-[#F0EAF8] text-sm placeholder-[#6B5EA0] focus:outline-none focus:border-[#6C3FC5] resize-none"
          />
          <button
            onClick={enviarMensagem}
            disabled={!input.trim() || carregando}
            aria-label="Enviar mensagem"
            className="bg-[#6C3FC5] text-white px-5 py-3 rounded-xl hover:bg-[#5A32A3] transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
          >
            ➤
          </button>
        </div>
        <p className="text-[#6B5EA0] text-xs text-center mt-2">
          Enter para enviar · Shift+Enter para nova linha
        </p>
      </div>

    </main>
  )
}