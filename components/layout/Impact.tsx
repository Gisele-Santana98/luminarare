import Link from "next/link"

const dados = [
  { numero: "1 em 17", label: "pessoas no mundo têm uma doença rara" },
  { numero: "13M+", label: "brasileiros vivem com doenças raras" },
  { numero: "5 anos", label: "é a média de espera até o diagnóstico" },
  { numero: "8.000+", label: "doenças raras catalogadas no mundo" },
]

export default function Impact() {
  return (
    <section className="py-20 px-6 bg-[#EDE9FE]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="flex-1 flex flex-col gap-6">
          <span className="bg-white text-[#4338CA] text-sm font-medium px-4 py-1 rounded-full w-fit">
            Por que isso importa
          </span>

          <h2 className="text-3xl font-bold text-[#0F172A]">
            A invisibilidade tem números
          </h2>

          <p className="text-[#475569] leading-relaxed">
            Milhões de pessoas convivem com sintomas sem respostas.
            O LuminaRare nasceu para transformar essa realidade —
            aproximando pessoas da informação, do acolhimento e das redes de apoio.
          </p>

          <Link
            href="/jornada"
            className="bg-[#4338CA] text-white px-8 py-3 rounded-full font-medium w-fit hover:bg-[#3730A3] transition-colors"
          >
            Fazer a Jornada Invisível
          </Link>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-6">
          {dados.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-6 flex flex-col gap-2 border border-[#E2E8F0]"
            >
              <span className="text-3xl font-bold text-[#4338CA]">
                {item.numero}
              </span>

              <span className="text-[#475569] text-sm leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}