import Link from 'next/link'

// Dados das estatísticas
const estatisticas = [
  { numero: '13 Milhões', descricao: 'Pessoas com doenças raras no Brasil' },
  { numero: '4 a 7 anos', descricao: 'Tempo médio para diagnóstico correto' },
  { numero: '75%', descricao: 'Casos se manifestam na infância' },
  { numero: '+8.000', descricao: 'Doenças raras catalogadas no mundo' },
]

// Dados de como funciona
const comoFunciona = [
  {
    icone: '💬',
    titulo: 'Converse com nossa IA',
    descricao: 'Descreva seus sintomas em linguagem simples. Nossa IA educativa te orienta com informações acessíveis e sem jargões médicos.',
  },
  {
    icone: '📋',
    titulo: 'Receba direcionamento educativo',
    descricao: 'Com base na conversa, você recebe um resumo educativo com possíveis condições relacionadas e especialistas recomendados.',
  },
  {
    icone: '🗺️',
    titulo: 'Encontre apoio perto de você',
    descricao: 'Localize hospitais, associações e centros especializados em doenças raras no seu estado.',
  },
]

export default function Home() {
  return (
    <main className="bg-[#0F0A1E] min-h-screen">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center">
        <p className="text-[#A78BFA] text-sm font-medium tracking-widest uppercase mb-4">
          Plataforma educativa
        </p>
        <h1 className="text-[#F0EAF8] text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
          Iluminando jornadas raras.
        </h1>
        <p className="text-[#9B8EC4] text-lg text-center max-w-xl mb-10 leading-relaxed">
          LuminaRare reduz a invisibilidade das doenças raras combinando IA,
          educação acessível e direcionamento especializado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/triagem"
            className="bg-[#E8622A] text-white font-medium px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity"
          >
            Iniciar Triagem Educativa
          </Link>
          <Link
            href="/biblioteca"
            className="border border-[#6C3FC5] text-[#A78BFA] font-medium px-8 py-4 rounded-xl text-lg hover:bg-[#6C3FC5]/10 transition-colors"
          >
            Explorar Biblioteca
          </Link>
        </div>
        <p className="text-[#6B5EA0] text-xs mt-16">
          Esta plataforma não realiza diagnósticos médicos. Projeto LuminaRare.
        </p>
      </section>

      {/* Seção de Estatísticas */}
      <section className="px-6 py-20 border-t border-[#1E1535]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#A78BFA] text-sm font-medium tracking-widest uppercase text-center mb-4">
            O problema que enfrentamos
          </p>
          <h2 className="text-[#F0EAF8] text-3xl md:text-4xl font-bold text-center mb-16">
            Doenças raras no Brasil
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {estatisticas.map((item, index) => (
              <div
                key={index}
                className="bg-[#160F2A] border border-[#2D1F54] rounded-2xl p-6 text-center"
              >
                <div className="text-[#A78BFA] text-3xl md:text-4xl font-bold mb-2">
                  {item.numero}
                </div>
                <div className="text-[#9B8EC4] text-sm leading-relaxed">
                  {item.descricao}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Como Funciona */}
      <section className="px-6 py-20 border-t border-[#1E1535]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#A78BFA] text-sm font-medium tracking-widest uppercase text-center mb-4">
            Como funciona
          </p>
          <h2 className="text-[#F0EAF8] text-3xl md:text-4xl font-bold text-center mb-16">
            Simples, acessível e educativo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comoFunciona.map((item, index) => (
              <div
                key={index}
                className="bg-[#160F2A] border border-[#2D1F54] rounded-2xl p-8"
              >
                <div className="text-4xl mb-4">{item.icone}</div>
                <h3 className="text-[#F0EAF8] text-xl font-semibold mb-3">
                  {item.titulo}
                </h3>
                <p className="text-[#9B8EC4] text-sm leading-relaxed">
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-6 py-20 border-t border-[#1E1535] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[#F0EAF8] text-3xl md:text-4xl font-bold mb-6">
            Sua jornada começa aqui.
          </h2>
          <p className="text-[#9B8EC4] text-lg mb-10 leading-relaxed">
            Ninguém deveria enfrentar anos de incerteza sozinho. O LuminaRare
            está aqui para iluminar o caminho.
          </p>
          <Link
            href="/triagem"
            className="bg-[#E8622A] text-white font-medium px-10 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity"
          >
            Começar agora — é gratuito
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1E1535] px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#6C3FC5] rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">L</span>
            </div>
            <span className="text-[#F0EAF8] font-semibold">LuminaRare</span>
          </div>
          <p className="text-[#6B5EA0] text-xs text-center">
            Esta plataforma é estritamente educativa e não realiza diagnósticos médicos.
          </p>
          <p className="text-[#6B5EA0] text-xs">
            © 2026 LuminaRare. Projeto universitário.
          </p>
        </div>
      </footer>

    </main>
  )
}