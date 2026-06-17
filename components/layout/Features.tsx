import Link from "next/link"

const features = [
  {
    icone: "🔍",
    titulo: "Triagem Educativa",
    descricao:
      "Responda perguntas e receba orientações sobre conteúdos relacionados aos seus sintomas.",
    link: "https://forms.gle/R53NTTgoSU9L5xd29",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    icone: "🤖",
    titulo: "Assistente com IA",
    descricao:
      "Tire dúvidas sobre doenças raras com linguagem simples, acolhedora e baseada em informações educativas.",
    link: "/chatbot",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    icone: "📚",
    titulo: "Biblioteca de Doenças",
    descricao:
      "Explore conteúdos educativos sobre doenças raras em uma linguagem acessível e confiável.",
    link: "/biblioteca",
  },
  {
    icone: "🗺️",
    titulo: "Rede de Apoio",
    descricao:
      "Encontre hospitais, associações e centros especializados em doenças raras em todo o Brasil.",
    link: "/rede-de-apoio",
  },
]

export default function Features() {
  return (
    <section
      id="doencas"
      className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="bg-violet-100 text-indigo-700 text-sm font-medium px-4 py-2 rounded-full">
            O que oferecemos
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-5">
            Funcionalidades da Plataforma
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
            Ferramentas educativas desenvolvidas para ampliar o acesso à
            informação, conscientização e apoio sobre doenças raras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.titulo}
              className="
                bg-white
                rounded-3xl
                p-7
                border
                border-slate-100
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                hover:border-indigo-200
                transition-all
                duration-300
                flex
                flex-col
                gap-4
              "
            >
              <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-3xl">
                {item.icone}
              </div>

              <h3 className="text-slate-900 font-bold text-xl">
                {item.titulo}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {item.descricao}
              </p>

              <Link
                href={item.link}
                className="
                  text-indigo-700
                  text-sm
                  font-semibold
                  hover:translate-x-1
                  transition-all
                "
              >
                Acessar →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}