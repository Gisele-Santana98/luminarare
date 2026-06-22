"use client"

import { useState, useMemo, useEffect, useRef, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { doencas } from "@/lib/doencas"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

function BibliotecaContent() {
  const searchParams = useSearchParams()
  const categoriaUrl = searchParams.get("categoria")

 const categorias = useMemo(() => {
  const unicas = Array.from(new Set(doencas.map((d) => d.categoria)))
  return ["Todas", ...unicas.sort()]
}, [])

const [busca, setBusca] = useState("")
const [categoria, setCategoria] = useState(
  () => (categoriaUrl && categorias.includes(categoriaUrl) ? categoriaUrl : "Todas")
)
const [doencaSelecionada, setDoencaSelecionada] = useState<number | null>(null)
const modalRef = useRef<HTMLDivElement>(null)

  const filtradas = useMemo(() => {
    return doencas.filter((d) => {
      const buscaOk = d.nome.toLowerCase().includes(busca.toLowerCase())
      const categoriaOk = categoria === "Todas" || d.categoria === categoria
      return buscaOk && categoriaOk
    })
  }, [busca, categoria])

  useEffect(() => {
    if (doencaSelecionada === null) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDoencaSelecionada(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    modalRef.current?.focus()

    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [doencaSelecionada])

  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-100 via-violet-50 to-violet-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-violet-200 rounded-full blur-3xl opacity-20 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute top-[40rem] left-0 w-80 h-80 bg-emerald-200 rounded-full blur-3xl opacity-15 -translate-x-1/2 pointer-events-none" />

      <Header />

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">

          {/* Hero */}
          <div className="text-center flex flex-col gap-4">
            <span className="bg-violet-100 text-indigo-700 text-sm font-medium px-4 py-2 rounded-full w-fit mx-auto">
              Biblioteca Educativa
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Doenças Raras
            </h1>

            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore informações confiáveis sobre doenças raras em uma
              linguagem simples e acessível. Esta plataforma tem caráter
              exclusivamente educativo e não realiza diagnósticos médicos.
            </p>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 w-fit mx-auto">
              <span className="text-4xl font-bold text-indigo-700">
                {doencas.length}+
              </span>
              <p className="text-slate-500 text-sm">Doenças disponíveis</p>
            </div>
          </div>

          {categoriaUrl && (
            <div className="bg-violet-50 border border-violet-200 rounded-2xl px-5 py-3 text-sm text-indigo-700 max-w-2xl mx-auto text-center">
              Filtro pré-selecionado com base na sua Triagem: <strong>{categoriaUrl}</strong>
            </div>
          )}

          {/* Busca + filtros */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-md">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Buscar doença rara..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  aria-label="Buscar doença rara"
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categorias.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoria(cat)}
                    aria-pressed={categoria === cat}
                    className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
                      categoria === cat
                        ? "bg-indigo-700 text-white shadow-md"
                        : "bg-white border border-slate-200 text-slate-600 hover:border-indigo-500 hover:text-indigo-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Modal simples de detalhes */}
          {doencaSelecionada && (() => {
            const doenca = doencas.find((d) => d.id === doencaSelecionada)
            if (!doenca) return null
            return (
              <div
                className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
                role="dialog"
                aria-modal="true"
                aria-label={doenca.nome}
                onClick={() => setDoencaSelecionada(null)}
              >
                <div
                  ref={modalRef}
                  tabIndex={-1}
                  className="bg-white rounded-3xl p-8 max-w-lg w-full flex flex-col gap-4 shadow-2xl outline-none"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between">
                    <span className="bg-violet-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                      <span aria-hidden="true">🧬</span> {doenca.categoria}
                    </span>
                    <button
                      onClick={() => setDoencaSelecionada(null)}
                      aria-label="Fechar"
                      className="text-slate-400 hover:text-slate-700 text-xl font-bold"
                    >
                      ✕
                    </button>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">{doenca.nome}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{doenca.descricao}</p>

                  <div>
                    <span className="text-xs font-semibold text-slate-700 block mb-2">
                      Sintomas frequentes
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {doenca.sintomas.map((sintoma) => (
                        <span
                          key={sintoma}
                          className="bg-slate-100 border border-slate-200 text-slate-600 text-xs px-2 py-1 rounded-lg"
                        >
                          {sintoma}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mt-2">
                    Prevalência: {doenca.prevalencia}
                  </p>

                  <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl p-3">
                    Esta plataforma tem caráter educativo e não substitui avaliação médica profissional.
                  </p>
                </div>
              </div>
            )
          })()}

          {/* Resultado */}
          {filtradas.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 py-20 text-center shadow-md">
              <p className="text-slate-500 text-lg">
                Nenhuma doença encontrada para esta pesquisa.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filtradas.map((doenca) => (
                <div
                  key={doenca.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300 transition-all duration-300 flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-violet-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                      <span aria-hidden="true">🧬</span> {doenca.categoria}
                    </span>
                    <span className="text-xs text-slate-500">{doenca.prevalencia}</span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-3">{doenca.nome}</h2>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-grow">
                    {doenca.descricao}
                  </p>

                  <div className="mb-6">
                    <span className="text-xs font-semibold text-slate-700 block mb-2">
                      Sintomas frequentes
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {doenca.sintomas.slice(0, 4).map((sintoma) => (
                        <span
                          key={sintoma}
                          className="bg-slate-100 border border-slate-200 text-slate-600 text-xs px-2 py-1 rounded-lg"
                        >
                          {sintoma}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setDoencaSelecionada(doenca.id)}
                    className="mt-auto text-indigo-700 font-semibold text-sm hover:translate-x-1 transition-all text-left"
                  >
                    Saiba mais →
                  </button>
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

export default function BibliotecaPage() {
  return (
    <Suspense fallback={null}>
      <BibliotecaContent />
    </Suspense>
  )
}