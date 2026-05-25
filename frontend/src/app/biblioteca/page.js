'use client'

import { useState } from 'react'
import { doencas, categorias } from '@/data/doencas'

export default function Biblioteca() {
  // useState guarda qual categoria está selecionada
  // começa com 'Todas' selecionada
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas')

  // filtra as doenças baseado na categoria selecionada
  const doencasFiltradas = categoriaAtiva === 'Todas'
    ? doencas
    : doencas.filter(d => d.categoria === categoriaAtiva)

  return (
    <main className="bg-[#0F0A1E] min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-6xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <p className="text-[#A78BFA] text-sm font-medium tracking-widest uppercase mb-4">
            Conhecimento é o primeiro passo
          </p>
          <h1 className="text-[#F0EAF8] text-4xl md:text-5xl font-bold mb-4">
            Biblioteca de Doenças Raras
          </h1>
          <p className="text-[#9B8EC4] text-lg max-w-2xl mx-auto">
            Informações acessíveis e confiáveis sobre doenças raras, 
            escritas em linguagem simples para todos.
          </p>
        </div>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categorias.map(categoria => (
            <button
              key={categoria}
              onClick={() => setCategoriaAtiva(categoria)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                categoriaAtiva === categoria
                  ? 'bg-[#6C3FC5] text-white'
                  : 'bg-[#160F2A] text-[#9B8EC4] border border-[#2D1F54] hover:border-[#6C3FC5]'
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doencasFiltradas.map(doenca => (
            <CardDoenca key={doenca.id} doenca={doenca} />
          ))}
        </div>

        {/* Aviso ético */}
        <p className="text-[#6B5EA0] text-xs text-center mt-16">
          As informações desta biblioteca são educativas e não substituem consulta médica.
        </p>

      </div>
    </main>
  )
}

// Componente do card — recebe os dados via props
function CardDoenca({ doenca }) {
  const [expandido, setExpandido] = useState(false)

  return (
    <div className="bg-[#160F2A] border border-[#2D1F54] rounded-2xl p-6 hover:border-[#6C3FC5] transition-colors">
      
      {/* Tag da categoria */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-xs font-medium px-3 py-1 rounded-full"
          style={{ backgroundColor: `${doenca.cor}20`, color: doenca.cor }}
        >
          {doenca.categoria}
        </span>
        <span className="text-[#6B5EA0] text-xs">{doenca.prevalencia}</span>
      </div>

      {/* Nome da doença */}
      <h3 className="text-[#F0EAF8] text-xl font-semibold mb-3">
        {doenca.nome}
      </h3>

      {/* Descrição */}
      <p className="text-[#9B8EC4] text-sm leading-relaxed mb-4">
        {doenca.descricao}
      </p>

      {/* Sintomas — aparece ao expandir */}
      {expandido && (
        <div className="mb-4">
          <p className="text-[#A78BFA] text-xs font-medium uppercase tracking-wide mb-2">
            Sintomas comuns
          </p>
          <ul className="space-y-1">
            {doenca.sintomas.map((sintoma, i) => (
              <li key={i} className="text-[#9B8EC4] text-sm flex items-center gap-2">
                <span style={{ color: doenca.cor }}>•</span>
                {sintoma}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Botão expandir */}
      <button
        onClick={() => setExpandido(!expandido)}
        className="text-[#A78BFA] text-sm font-medium hover:text-[#F0EAF8] transition-colors"
        aria-label={expandido ? `Recolher informações sobre ${doenca.nome}` : `Ver mais sobre ${doenca.nome}`}
      >
        {expandido ? '← Ver menos' : 'Ver sintomas →'}
      </button>

    </div>
  )
}