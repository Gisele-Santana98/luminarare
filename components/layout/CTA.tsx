export default function CTA() {
  return (
    <section id="jornada" className="py-20 px-6 bg-[#4338CA]">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <span className="bg-[#EDE9FE] text-[#4338CA] text-sm font-medium px-4 py-1 rounded-full">
          Experiência interativa
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Você conhece a jornada de quem vive com uma doença rara?
        </h2>
        <p className="text-[#C4B5FD] text-lg leading-relaxed">
          Faça a Jornada Invisível — uma experiência interativa que gera empatia
          e conscientização sobre a realidade de milhões de brasileiros.
        </p>
        
          <a href="/jornada"
          className="bg-white text-[#4338CA] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#EDE9FE] transition-colors"
        >
          Começar a Jornada
        </a>
        <p className="text-[#A5B4FC] text-sm">
          Gratuito · Sem cadastro · Leva menos de 5 minutos
        </p>
      </div>
    </section>
  )
}