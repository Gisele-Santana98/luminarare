"use client"

import { useMemo, useState } from "react"
import dynamic from "next/dynamic"
import { instituicoes } from "@/lib/rede-apoio"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const MapaApoio = dynamic(
  () => import("@/components/MapaApoio"),
  { ssr: false }
)

const cores: Record<string, string> = {
  Hospital: "bg-[#EDE9FE] text-[#4338CA]",
  Associacao: "bg-[#D1FAE5] text-[#065F46]",
  "Centro Especializado": "bg-[#FEF3C7] text-[#92400E]",
}

const COR_FALLBACK = "bg-slate-100 text-slate-600"

export default function RedeDeApoioPage() {
  const [filtro, setFiltro] = useState("Todos")
  const [selecionada, setSelecionada] = useState<number | null>(null)

  const tipos = useMemo(() => {
    const unicos = Array.from(new Set(instituicoes.map((i) => i.tipo)))
    return ["Todos", ...unicos.sort()]
  }, [])

  const filtradas = useMemo(
    () => instituicoes.filter((i) => filtro === "Todos" || i.tipo === filtro),
    [filtro]
  )

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Header />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">

          <div className="text-center flex flex-col gap-3">
            <span className="bg-[#EDE9FE] text-[#4338CA] text-sm font-medium px-4 py-1 rounded-full w-fit mx-auto">
              Rede de apoio
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Rede Nacional de Apoio
            </h1>

            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Hospitais, associações e centros especializados em doenças raras
              para ajudar pacientes, familiares e cuidadores em todo o Brasil.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <MapaApoio
              instituicoes={filtradas}
              selecionada={selecionada}
              onSelecionar={setSelecionada}
            />
          </div>

          <div className="flex gap-2 flex-wrap justify-center">
            {tipos.map((t) => (
              <button
                key={t}
                onClick={() => setFiltro(t)}
                aria-pressed={filtro === t}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filtro === t
                    ? "bg-[#4338CA] text-white shadow-md"
                    : "bg-white border border-[#E2E8F0] text-[#475569] hover:border-[#4338CA] hover:text-[#4338CA]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtradas.map((inst) => (
              <div
                key={inst.id}
                onClick={() => setSelecionada(inst.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelecionada(inst.id)}
                aria-pressed={selecionada === inst.id}
                className={`bg-white rounded-3xl p-6 border flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                  selecionada === inst.id
                    ? "border-[#4338CA] shadow-lg"
                    : "border-[#E2E8F0] hover:border-[#4338CA] hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      cores[inst.tipo] ?? COR_FALLBACK
                    }`}
                  >
                    {inst.tipo}
                  </span>

                  <span className="text-xs text-slate-500">
                    {inst.estado}
                  </span>
                </div>

                <h2 className="text-slate-900 font-bold text-lg leading-snug">
                  {inst.nome}
                </h2>

                <div className="flex flex-col gap-1 text-sm text-slate-600">
                  <span>{inst.cidade}, {inst.estado}</span>
                  <span>{inst.telefone}</span>
                </div>

                
                <a href={inst.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar site de ${inst.nome}`}
                  onClick={(e) => e.stopPropagation()}
                  className="text-[#4338CA] text-sm font-medium hover:underline mt-auto"
                >
                  Visitar site →
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}