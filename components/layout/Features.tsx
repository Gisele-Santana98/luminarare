const features = [
  {
    icone: "🔍",
    titulo: "Triagem Educativa",
    descricao: "Responda perguntas e receba orientação sobre conteúdos relacionados aos seus sintomas.",
  },
  {
    icone: "🤖",
    titulo: "Assistente com IA",
    descricao: "Tire dúvidas sobre doenças raras com linguagem simples e acolhedora.",
  },
  {
    icone: "📚",
    titulo: "Biblioteca de Doenças",
    descricao: "Conteúdo educativo sobre mais de 300 doenças raras com linguagem acessível.",
  },
  {
    icone: "🗺️",
    titulo: "Rede de Apoio",
    descricao: "Encontre hospitais, associações e centros especializados próximos a você.",
  },
]

export default function Features() {
  return (
    <section id="doencas" className="py-20 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <span className="bg-[#EDE9FE] text-[#4338CA] text-sm font-medium px-4 py-1 rounded-full">
            O que oferecemos
          </span>
          <h2 className="text-3xl font-bold text-[#0F172A] mt-4">
            Nossas funcionalidades
          </h2>
          <p className="text-[#475569] mt-3 max-w-xl mx-auto">
            Ferramentas educativas para reduzir a distância entre sintomas e informação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.titulo}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-[#E2E8F0] hover:border-[#4338CA] hover:shadow-md transition-all"
            >
              <span className="text-3xl">{item.icone}</span>
              <h3 className="text-[#0F172A] font-semibold text-lg">{item.titulo}</h3>
              <p className="text-[#475569] text-sm leading-relaxed">{item.descricao}</p>
              <a href="#" className="text-[#4338CA] text-sm font-medium mt-auto hover:underline">
                Ver mais →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}