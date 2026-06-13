"use client"

import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#4338CA] flex items-center justify-center">
            <span className="text-white text-xs font-bold">L</span>
          </div>
          <span className="text-[#4338CA] font-bold text-xl">LuminaRare</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-[#475569] hover:text-[#4338CA] text-sm transition-colors">Sobre</a>
          <a href="#doencas" className="text-[#475569] hover:text-[#4338CA] text-sm transition-colors">Doenças</a>
          <a href="#jornada" className="text-[#475569] hover:text-[#4338CA] text-sm transition-colors">Jornada</a>
          <a href="#apoio" className="text-[#475569] hover:text-[#4338CA] text-sm transition-colors">Rede de Apoio</a>
          <a href="#chatbot" className="text-[#475569] hover:text-[#4338CA] text-sm transition-colors">Assistente</a>
        </nav>

        
        <a href="#jornada"
          className="hidden md:inline-flex bg-[#4338CA] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#3730A3] transition-colors"
        >
          Começar Jornada
        </a>

        <button
          className="md:hidden text-[#475569]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round"/>
              : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E2E8F0] px-6 py-4 flex flex-col gap-4">
          <a href="#sobre" className="text-[#475569] text-sm">Sobre</a>
          <a href="#doencas" className="text-[#475569] text-sm">Doenças</a>
          <a href="#jornada" className="text-[#475569] text-sm">Jornada</a>
          <a href="#apoio" className="text-[#475569] text-sm">Rede de Apoio</a>
          <a href="#chatbot" className="text-[#475569] text-sm">Assistente</a>
          <a href="#jornada" className="bg-[#4338CA] text-white px-5 py-2 rounded-full text-sm text-center">
            Começar Jornada
          </a>
        </div>
      )}
    </header>
  )
}