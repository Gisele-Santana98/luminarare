"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { instituicoes } from "@/lib/rede-apoio"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const MapaApoio = dynamic(() => import("@/components/MapaApoio"), { ssr: false })

const tipos = ["Todos", "Hospital", "Associacao", "Centro Especializado"]

const cores: Record<string, string> = {
  Hospital: "bg-[#EDE9FE] text-[#4338CA]",
  Associacao: "bg-[#D1FAE5] text-[#065F46]",
  "Centro Especializado": "bg-[#FEF3C7] text-[#92400E]",
}

export default function RedeDeApoioPage() {
  const [filtro, setFiltro] = useState("Todos")
  const [selecionada, setSelecionada] = useState<number | null>(null)

  const filtradas = instituicoes.filter(
    (i) => filtro === "Todos" || i.tipo === filtro
  )

  return (
    <div>
      <main className="min-h-screen bg-[#F8FAFC]">
        <Header />
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="text-center flex flex-col gap-3">
              <span className="bg-[#EDE9FE] text-[#4338CA] text-sm font-medium px-4 py-1 rounded-full w-fit mx-auto">
                Rede de apoio
              </span>
              <h1 className="text-3xl font-bold text-[#0F172A]">
                Centros e Associacoes
              </h1>
              <p className="text-[#475569] max-w-xl mx-auto">
                Hospitais, associacoes e centros especializados em doencas raras no Brasil.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#E2E8F0]">
              <MapaApoio
                instituicoes={filtradas}
                selecionada={selecionada}
                onSelecionar={setSelecionada}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {tipos.map((t) => (
                <button
                  key={t}
                  onClick={() => setFiltro(t)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filtro === t
                      ? "bg-[#4338CA] text-white"
                      : "bg-white border border-[#E2E8F0] text-[#475569] hover:border-[#4338CA]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtradas.map((inst) => (
                <div
                  key={inst.id}
                  onClick={() => setSelecionada(inst.id)}
                  className={`bg-white rounded-2xl p-6 border flex flex-col gap-4 cursor-pointer transition-all ${
                    selecionada === inst.id
                      ? "border-[#4338CA] shadow-md"
                      : "border-[#E2E8F0] hover:border-[#4338CA]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${cores[inst.tipo]}`}>
                      {inst.tipo}
                    </span>
                    <span className="text-xs text-[#475569]">{inst.estado}</span>
                  </div>
                  <h2 className="text-[#0F172A] font-semibold leading-snug">
                    {inst.nome}
                  </h2>
                  <div className="flex flex-col gap-1 text-sm text-[#475569]">
                    <span>{inst.cidade}, {inst.estado}</span>
                    <span>{inst.telefone}</span>
                  </div>
                  
                   <a href={inst.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[#4338CA] text-sm font-medium hover:underline mt-auto"
                  >
                    Visitar site
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}