'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F0A1E]/90 backdrop-blur-md border-b border-[#1E1535]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#6C3FC5] rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">L</span>
          </div>
          <span className="text-[#F0EAF8] font-semibold text-lg">LuminaRare</span>
        </Link>

        {/* Links — desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/biblioteca" className="text-[#9B8EC4] hover:text-[#F0EAF8] text-sm transition-colors">
            Biblioteca
          </Link>
          <Link href="/triagem" className="text-[#9B8EC4] hover:text-[#F0EAF8] text-sm transition-colors">
            Triagem
          </Link>
          <Link href="/rede-de-apoio" className="text-[#9B8EC4] hover:text-[#F0EAF8] text-sm transition-colors">
            Rede de Apoio
          </Link>
          <Link href="/dashboard" className="text-[#9B8EC4] hover:text-[#F0EAF8] text-sm transition-colors">
            Dashboard
          </Link>
        </div>

        {/* Botão CTA — desktop */}
        <div className="hidden md:block">
          <Link 
            href="/triagem"
            className="bg-[#6C3FC5] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#5A32A3] transition-colors"
          >
            Iniciar Triagem
          </Link>
        </div>

        {/* Botão menu mobile */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden text-[#9B8EC4] hover:text-[#F0EAF8]"
          aria-label="Abrir menu de navegação"
        >
          {menuAberto ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="md:hidden bg-[#160F2A] border-t border-[#1E1535] px-6 py-4 flex flex-col gap-4">
          <Link href="/biblioteca" className="text-[#9B8EC4] hover:text-[#F0EAF8] text-sm">Biblioteca</Link>
          <Link href="/triagem" className="text-[#9B8EC4] hover:text-[#F0EAF8] text-sm">Triagem</Link>
          <Link href="/rede-de-apoio" className="text-[#9B8EC4] hover:text-[#F0EAF8] text-sm">Rede de Apoio</Link>
          <Link href="/dashboard" className="text-[#9B8EC4] hover:text-[#F0EAF8] text-sm">Dashboard</Link>
          <Link href="/triagem" className="bg-[#6C3FC5] text-white text-sm font-medium px-5 py-2.5 rounded-lg text-center">
            Iniciar Triagem
          </Link>
        </div>
      )}
    </nav>
  )
}