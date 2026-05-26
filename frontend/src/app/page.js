import Link from 'next/link'

const estatisticas = [
  { numero: '13M+', descricao: 'Brasileiros com doenças raras' },
  { numero: '4-7 anos', descricao: 'Tempo médio para diagnóstico' },
  { numero: '75%', descricao: 'Casos manifestam na infância' },
  { numero: '+8.000', descricao: 'Doenças raras catalogadas' },
]

const comoFunciona = [
  {
    icone: '💬',
    titulo: 'Converse com nossa IA',
    descricao: 'Descreva seus sintomas em linguagem simples. Nossa IA educativa te orienta sem jargões médicos.',
  },
  {
    icone: '📋',
    titulo: 'Receba direcionamento educativo',
    descricao: 'Você recebe um resumo com informações sobre possíveis condições e especialistas recomendados.',
  },
  {
    icone: '🗺️',
    titulo: 'Encontre apoio perto de você',
    descricao: 'Localize hospitais, associações e centros especializados em doenças raras no seu estado.',
  },
]

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center bg-gradient-to-br from-indigo-50 via-slate-50 to-violet-50">
        <span className="inline-block bg-violet-100 text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
          Plataforma educativa
        </span>
        <h1 className="text-slate-900 text-5xl md:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
          Iluminando jornadas raras.
        </h1>
        <p className="text-slate-600 text-lg max-w-xl mb-10 leading-relaxed">
          LuminaRare reduz a invisibilidade das doenças raras combinando IA,
          educação acessível e direcionamento especializado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            href="/triagem"
            className="bg-indigo-700 text-white font-semibold px-8 py-4 rounded-2xl text-lg hover:bg-indigo-800 transition-colors shadow-md"
          >
            Iniciar Triagem Educativa
          </Link>
          <Link
            href="/biblioteca"
            className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-2xl text-lg border border-indigo-200 hover:bg-indigo-50 transition-colors"
          >
            Explorar Biblioteca
          </Link>
        </div>
        <p className="text-slate-400 text-xs">
          Esta plataforma não realiza diagnósticos médicos. Projeto LuminaRare.
        </p>
      </section>

      {/* Estatísticas */}
      <section className="bg-white border-t border-slate-200 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <span className="block text-center text-indigo-700 text-xs font-semibold tracking-widest uppercase mb-3">
            O problema que enfrentamos
          </span>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold text-center mb-14">
            Doenças raras no Brasil
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {estatisticas.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
                <span className="block text-indigo-700 text-3xl font-bold mb-2">{item.numero}</span>
                <span className="text-slate-600 text-sm leading-relaxed">{item.descricao}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-slate-50 border-t border-slate-200 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <span className="block text-center text-indigo-700 text-xs font-semibold tracking-widest uppercase mb-3">
            Como funciona
          </span>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold text-center mb-14">
            Simples, acessível e educativo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comoFunciona.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <span className="block text-4xl mb-5">{item.icone}</span>
                <h3 className="text-slate-900 text-xl font-semibold mb-3">{item.titulo}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-indigo-700 to-violet-600 px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-5">
            Sua jornada começa aqui.
          </h2>
          <p className="text-indigo-100 text-lg mb-10 leading-relaxed">
            Ninguém deveria enfrentar anos de incerteza sozinho.
            O LuminaRare está aqui para iluminar o caminho.
          </p>
          <Link
            href="/triagem"
            className="bg-white text-indigo-700 font-bold px-10 py-4 rounded-2xl text-lg hover:bg-indigo-50 transition-colors shadow-md inline-block"
          >
            Começar agora — é gratuito
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-indigo-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">L</span>
            </div>
            <span className="text-slate-900 font-semibold">LuminaRare</span>
          </div>
          <p className="text-slate-400 text-xs text-center">
            Plataforma estritamente educativa. Não realiza diagnósticos médicos.
          </p>
          <p className="text-slate-400 text-xs">© 2026 LuminaRare</p>
        </div>
      </footer>

    </main>
  )
}