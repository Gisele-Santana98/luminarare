import Link from "next/link"

export default function CTA() {
  return (
    <section
      id="jornada"
      className="py-24 px-6 bg-gradient-to-r from-indigo-700 to-violet-600"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm">
          Experiência Interativa
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Você conhece a jornada de quem vive com uma doença rara?
        </h2>

        <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl">
          Faça a Jornada Invisível, uma experiência interativa criada para
          gerar empatia, conscientização e compreensão sobre a realidade de
          milhões de brasileiros que enfrentam anos em busca de respostas.
        </p>

        <Link
          href="https://forms.gle/R53NTTgoSU9L5xd29"
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-white
            text-indigo-700
            px-10
            py-4
            rounded-2xl
            font-semibold
            text-lg
            shadow-lg
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Começar a Jornada
        </Link>

        <p className="text-indigo-200 text-sm">
          Gratuito • Sem cadastro • Menos de 3 minutos
        </p>
      </div>
    </section>
  )
}