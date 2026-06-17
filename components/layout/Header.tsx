"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function fecharMenu() {
    setMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-700 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="white"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-indigo-700 font-bold text-xl leading-none">
              LuminaRare
            </span>
            <span className="text-slate-400 text-[10px] leading-none mt-1">
              Iluminando jornadas raras
            </span>
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-full p-1">
          <Link
            href="/biblioteca"
            className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-white hover:text-indigo-700 transition-all"
          >
            Doenças
          </Link>

          <Link
            href="/chatbot"
            className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-white hover:text-indigo-700 transition-all"
          >
            Assistente IA
          </Link>

          <Link
            href="/rede-de-apoio"
            className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-white hover:text-indigo-700 transition-all"
          >
            Rede de Apoio
          </Link>
        </nav>

        {/* Ações Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/chatbot"
            className="text-indigo-700 text-sm font-medium px-4 py-2 rounded-xl hover:bg-violet-50 transition-colors"
          >
            Tire suas dúvidas
          </Link>

          <Link
            href="https://forms.gle/R53NTTgoSU9L5xd29"
            target="_blank" rel="noopener noreferrer"
            className="bg-gradient-to-r from-indigo-700 to-violet-500 text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow-lg shadow-indigo-200 hover:scale-105 transition-all duration-300"
          >
            Iniciar Jornada
          </Link>
        </div>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-slate-500 hover:text-indigo-700 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6L18 18" strokeLinecap="round" />
            ) : (
              <path d="M4 6H20M4 12H20M4 18H20" strokeLinecap="round" />
            )}
          </svg>
        </button>

      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 px-6 py-4 flex flex-col gap-2">
          <Link
            href="/biblioteca"
            onClick={fecharMenu}
            className="text-slate-600 text-sm py-3 px-3 rounded-xl hover:bg-slate-50"
          >
            Doenças Raras
          </Link>

          <Link
            href="/chatbot"
            onClick={fecharMenu}
            className="text-slate-600 text-sm py-3 px-3 rounded-xl hover:bg-slate-50"
          >
            Assistente IA
          </Link>

          <Link
            href="/rede-de-apoio"
            onClick={fecharMenu}
            className="text-slate-600 text-sm py-3 px-3 rounded-xl hover:bg-slate-50"
          >
            Rede de Apoio
          </Link>

          <div className="border-t border-slate-100 mt-2 pt-3">
            <Link
              href="https://forms.gle/R53NTTgoSU9L5xd29"target="_blank" rel="noopener noreferrer"
              onClick={fecharMenu}
              className="block text-center bg-gradient-to-r from-indigo-700 to-violet-500 text-white px-5 py-3 rounded-2xl text-sm font-semibold"
            >
              Iniciar Jornada
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}