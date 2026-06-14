"use client"

import { useState } from "react"
import { doencas } from "@/lib/doencas"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const categorias = ["Todas", "Genética", "Neurológica", "Metabólica"]

export default function BibliotecaPage() {
  const [busca, setBusca] = useState("")
  const [categoria, setCategoria] = useState("Todas")

  const filtradas = doencas.filter((d) => {
    const buscaOk = d.nome.toLowerCase().includes(busca.toLowerCase())
    const categoriaOk = categoria === "Todas" || d.categoria === categoria
    return buscaOk && categoriaOk
  })

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Header />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">

          <div className="text-center flex flex-col gap-3">
            <span className="bg-[#EDE9FE] text-[#4338CA] text-sm font-medium px-4 py-1 rounded-full w-fit mx-auto">
              Biblioteca educativa
            </span>
            <h1 className="text-3xl font-bold text-[#0F172A]">
              Doenças Raras
            </h1>
            <p className="text-[#475569] max-w-xl mx-auto">
              Conteúdo educativo em linguagem simples e acessível.
              Esta plataforma não realiza diagnósticos médicos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Buscar doença..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="flex-1 border border-[#E2E8F0] rounded-xl px-5 py-3 text-[#0F172A] bg-white focus:outline-none focus:border-[#4338CA]"
            />
            <div className="flex gap-2 flex-wrap">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoria(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    categoria === cat
                      ? "bg-[#4338CA] text-white"
                      : "bg-white border border-[#E2E8F0] text-[#475569] hover:border-[#4338CA]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtradas.length === 0 ? (
            <div className="text-center py-16 text-[#475569]">
              Nenhuma doença encontrada para essa busca.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtradas.map((doenca) => (
                <div
                  key={doenca.id}
                  className="bg-white rounded-2xl p-6 border border-[#E2E8F0] flex flex-col gap-4 hover:border-[#4338CA] hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="bg-[#EDE9FE] text-[#4338CA] text-xs font-medium px-3 py-1 rounded-full">
                      {doenca.categoria}
                    </span>
                    <span className="text-xs text-[#475569]">{doenca.prevalencia}</span>
                  </div>

                  <h2 className="text-[#0F172A] font-semibold text-lg leading-snug">
                    {doenca.nome}
                  </h2>

                  <p className="text-[#475569] text-sm leading-relaxed">
                    {doenca.descricao}
                  </p>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-medium text-[#0F172A]">Sintomas gerais:</span>
                    <div className="flex flex-wrap gap-1">
                      {doenca.sintomas.map((s) => (
                        <span
                          key={s}
                          className="bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] text-xs px-2 py-1 rounded-lg"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  )
}