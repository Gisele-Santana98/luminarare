'use client'

import dynamic from 'next/dynamic'

// Importação dinâmica — o mapa não funciona no servidor, só no browser
const MapaApoio = dynamic(
  () => import('@/components/mapa/MapaApoio'),
  { ssr: false, loading: () => (
    <div className="h-full flex items-center justify-center bg-[#160F2A] rounded-2xl">
      <p className="text-[#9B8EC4]">Carregando mapa...</p>
    </div>
  )}
)

const centrosLista = [
  { tipo: 'Hospital', cor: '#6C3FC5', quantidade: 6 },
  { tipo: 'Associação', cor: '#E8622A', quantidade: 2 },
  { tipo: 'Reabilitação', cor: '#1D9E75', quantidade: 1 },
]

export default function RedeDeApoio() {
  return (
    <main className="bg-[#0F0A1E] min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-6xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <p className="text-[#A78BFA] text-sm font-medium tracking-widest uppercase mb-4">
            Você não está sozinho
          </p>
          <h1 className="text-[#F0EAF8] text-4xl md:text-5xl font-bold mb-4">
            Rede de Apoio
          </h1>
          <p className="text-[#9B8EC4] text-lg max-w-2xl mx-auto">
            Encontre hospitais, associações e centros especializados 
            em doenças raras próximos a você.
          </p>
        </div>

        {/* Legenda */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {centrosLista.map(item => (
            <div key={item.tipo} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: item.cor }}
              />
              <span className="text-[#9B8EC4] text-sm">{item.tipo}</span>
            </div>
          ))}
        </div>

        {/* Mapa */}
        <div className="h-[500px] rounded-2xl overflow-hidden border border-[#2D1F54] mb-8">
          <MapaApoio />
        </div>

        {/* Aviso */}
        <div className="bg-[#160F2A] border border-[#2D1F54] rounded-xl p-4 text-center">
          <p className="text-[#9B8EC4] text-sm">
            📍 Clique nos marcadores do mapa para ver informações detalhadas sobre cada centro.
            Os dados são informativos — confirme disponibilidade diretamente com cada instituição.
          </p>
        </div>

      </div>
    </main>
  )
}