"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4338CA] to-[#6366F1] flex items-center justify-center shadow-md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[#4338CA] font-bold text-lg leading-none">
              LuminaRare
            </span>
            <span className="text-slate-400 text-[10px] leading-none mt-0.5">
              Iluminando jornadas raras
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link href="/biblioteca" className="px-4 py-2 text-slate-600 hover:text-[#4338CA] hover:bg-[#EDE9FE] text-sm font-medium rounded-lg transition-all">
            Doencas
          </Link>
          <Link href="/chatbot" className="px-4 py-2 text-slate-600 hover:text-[#4338CA] hover:bg-[#EDE9FE] text-sm font-medium rounded-lg transition-all">
            Assistente IA
          </Link>
          <Link href="/rede-de-apoio" className="px-4 py-2 text-slate-600 hover:text-[#4338CA] hover:bg-[#EDE9FE] text-sm font-medium rounded-lg transition-all">
            Rede de Apoio
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/chatbot" className="text-[#4338CA] text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#EDE9FE] transition-colors">
            Tire suas duvidas
          </Link>
          <Link href="/jornada" className="bg-gradient-to-r from-[#4338CA] to-[#6366F1] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-md">
            A Jornada Invisivel
          </Link>
        </div>

        <button
          className="md:hidden text-slate-500 hover:text-[#4338CA] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
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
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-2">
          <a href="/biblioteca" className="text-slate-600 text-sm py-2 px-3 rounded-lg hover:bg-slate-50">
            Doencas Raras
          </a>
          <a href="/chatbot" className="text-slate-600 text-sm py-2 px-3 rounded-lg hover:bg-slate-50">
            Assistente IA
          </a>
          <a href="/rede-de-apoio" className="text-slate-600 text-sm py-2 px-3 rounded-lg hover:bg-slate-50">
            Rede de Apoio
          </a>
          <div className="border-t border-slate-100 mt-2 pt-3">
            <a href="/jornada" className="bg-gradient-to-r from-[#4338CA] to-[#6366F1] text-white px-5 py-3 rounded-xl text-sm font-semibold text-center block">
              A Jornada Invisivel
            </a>
          </div>
        </div>
      )}
    </header>
  )
}