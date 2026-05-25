'use client'

import { useState } from 'react'
import Link from 'next/link'

// Dados de cada etapa do formulário
const etapas = [
  {
    id: 1,
    pergunta: 'Qual é a sua relação com a situação?',
    descricao: 'Isso nos ajuda a personalizar as informações para você.',
    opcoes: [
      { valor: 'paciente', label: '🙋 Sou o paciente', descricao: 'Estou experienciando os sintomas' },
      { valor: 'familiar', label: '👨‍👩‍👧 Familiar', descricao: 'Um familiar está com os sintomas' },
      { valor: 'cuidador', label: '🤝 Cuidador', descricao: 'Cuido de alguém com sintomas' },
      { valor: 'estudante', label: '📚 Estudante/Profissional', descricao: 'Busco informações educativas' },
    ],
  },
  {
    id: 2,
    pergunta: 'Há quanto tempo os sintomas estão presentes?',
    descricao: 'O tempo de duração ajuda a entender melhor a situação.',
    opcoes: [
      { valor: 'menos1mes', label: '📅 Menos de 1 mês', descricao: 'Sintomas recentes' },
      { valor: '1a6meses', label: '📆 1 a 6 meses', descricao: 'Sintomas há alguns meses' },
      { valor: '6a12meses', label: '🗓️ 6 meses a 1 ano', descricao: 'Sintomas persistentes' },
      { valor: 'maisde1ano', label: '⏳ Mais de 1 ano', descricao: 'Sintomas de longa data' },
    ],
  },
  {
    id: 3,
    pergunta: 'Quais sintomas estão presentes?',
    descricao: 'Selecione todos que se aplicam. Isso é apenas educativo.',
    multiplo: true,
    opcoes: [
      { valor: 'fadiga', label: '😴 Fadiga extrema' },
      { valor: 'dores', label: '🦴 Dores nas articulações' },
      { valor: 'visao', label: '👁️ Problemas de visão' },
      { valor: 'respiratorio', label: '🫁 Problemas respiratórios' },
      { valor: 'neurologico', label: '🧠 Sintomas neurológicos' },
      { valor: 'crescimento', label: '📏 Alterações no crescimento' },
      { valor: 'digestivo', label: '🫃 Problemas digestivos' },
      { valor: 'pele', label: '🩹 Alterações na pele' },
    ],
  },
]

export default function Triagem() {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [respostas, setRespostas] = useState({})
  const [concluido, setConcluido] = useState(false)

  const etapa = etapas[etapaAtual]
  const progresso = ((etapaAtual) / etapas.length) * 100

  // Seleciona resposta de escolha única
  function selecionarOpcao(valor) {
    setRespostas(prev => ({ ...prev, [etapa.id]: valor }))
  }

  // Seleciona resposta de múltipla escolha
  function toggleOpcaoMultipla(valor) {
    const atual = respostas[etapa.id] || []
    const jaExiste = atual.includes(valor)
    setRespostas(prev => ({
      ...prev,
      [etapa.id]: jaExiste
        ? atual.filter(v => v !== valor)
        : [...atual, valor]
    }))
  }

  // Avança para próxima etapa
  function avancar() {
    if (etapaAtual < etapas.length - 1) {
      setEtapaAtual(prev => prev + 1)
    } else {
      setConcluido(true)
    }
  }

  // Volta para etapa anterior
  function voltar() {
    setEtapaAtual(prev => prev - 1)
  }

  // Verifica se pode avançar
  const respostaAtual = respostas[etapa?.id]
  const podeAvancar = etapa?.multiplo
    ? respostaAtual && respostaAtual.length > 0
    : !!respostaAtual

  // Tela de resultado
  if (concluido) {
    return (
      <main className="bg-[#0F0A1E] min-h-screen pt-24 px-6 pb-20 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <div className="bg-[#160F2A] border border-[#2D1F54] rounded-2xl p-8 text-center">
            <div className="text-5xl mb-6">✨</div>
            <h2 className="text-[#F0EAF8] text-3xl font-bold mb-4">
              Triagem concluída!
            </h2>
            <p className="text-[#9B8EC4] text-lg mb-8 leading-relaxed">
              Com base nas suas respostas, recomendamos conversar com nosso 
              assistente educativo para obter mais informações sobre os sintomas relatados.
            </p>

            <div className="bg-[#0F0A1E] border border-[#2D1F54] rounded-xl p-6 mb-8 text-left">
              <p className="text-[#A78BFA] text-xs font-medium uppercase tracking-wide mb-3">
                Próximos passos recomendados
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#9B8EC4] text-sm">
                  <span className="text-[#4ADE80] mt-0.5">✓</span>
                  Converse com nosso assistente educativo de IA
                </li>
                <li className="flex items-start gap-3 text-[#9B8EC4] text-sm">
                  <span className="text-[#4ADE80] mt-0.5">✓</span>
                  Explore nossa biblioteca de doenças raras
                </li>
                <li className="flex items-start gap-3 text-[#9B8EC4] text-sm">
                  <span className="text-[#4ADE80] mt-0.5">✓</span>
                  Encontre centros especializados na sua região
                </li>
                <li className="flex items-start gap-3 text-[#9B8EC4] text-sm">
                  <span className="text-[#4ADE80] mt-0.5">✓</span>
                  Consulte sempre um médico especialista
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/assistente"
                className="bg-[#E8622A] text-white font-medium px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Falar com assistente IA
              </Link>
              <Link
                href="/rede-de-apoio"
                className="border border-[#6C3FC5] text-[#A78BFA] font-medium px-8 py-3 rounded-xl hover:bg-[#6C3FC5]/10 transition-colors"
              >
                Ver rede de apoio
              </Link>
            </div>

            <p className="text-[#6B5EA0] text-xs mt-8">
              Esta triagem é estritamente educativa e não substitui avaliação médica.
            </p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-[#0F0A1E] min-h-screen pt-24 px-6 pb-20 flex items-center justify-center">
      <div className="max-w-2xl w-full">

        {/* Barra de progresso */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-[#9B8EC4] mb-2">
            <span>Etapa {etapaAtual + 1} de {etapas.length}</span>
            <span>{Math.round(progresso)}% concluído</span>
          </div>
          <div className="w-full bg-[#1E1535] rounded-full h-2">
            <div
              className="bg-[#6C3FC5] h-2 rounded-full transition-all duration-500"
              style={{ width: `${progresso}%` }}
            />
          </div>
        </div>

        {/* Card principal */}
        <div className="bg-[#160F2A] border border-[#2D1F54] rounded-2xl p-8">
          <h2 className="text-[#F0EAF8] text-2xl font-bold mb-2">
            {etapa.pergunta}
          </h2>
          <p className="text-[#9B8EC4] text-sm mb-8">
            {etapa.descricao}
          </p>

          {/* Opções */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {etapa.opcoes.map(opcao => {
              const selecionado = etapa.multiplo
                ? (respostas[etapa.id] || []).includes(opcao.valor)
                : respostas[etapa.id] === opcao.valor

              return (
                <button
                  key={opcao.valor}
                  onClick={() => etapa.multiplo
                    ? toggleOpcaoMultipla(opcao.valor)
                    : selecionarOpcao(opcao.valor)
                  }
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selecionado
                      ? 'border-[#6C3FC5] bg-[#6C3FC5]/10'
                      : 'border-[#2D1F54] hover:border-[#6C3FC5]/50'
                  }`}
                  aria-pressed={selecionado}
                >
                  <div className="text-[#F0EAF8] font-medium text-sm">
                    {opcao.label}
                  </div>
                  {opcao.descricao && (
                    <div className="text-[#9B8EC4] text-xs mt-1">
                      {opcao.descricao}
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Navegação */}
          <div className="flex justify-between">
            <button
              onClick={voltar}
              disabled={etapaAtual === 0}
              className="text-[#9B8EC4] text-sm hover:text-[#F0EAF8] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Voltar
            </button>
            <button
              onClick={avancar}
              disabled={!podeAvancar}
              className="bg-[#6C3FC5] text-white font-medium px-8 py-3 rounded-xl hover:bg-[#5A32A3] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {etapaAtual === etapas.length - 1 ? 'Concluir triagem' : 'Próximo →'}
            </button>
          </div>
        </div>

      </div>
    </main>
  )
}