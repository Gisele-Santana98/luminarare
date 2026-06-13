export default function Hero() {
  return (
    <section className="bg-[#F8FAFC] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <span className="inline-flex w-fit bg-[#EDE9FE] text-[#4338CA] text-sm font-medium px-4 py-1 rounded-full">
            Plataforma educativa e gratuita
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
            Jornada de conscientização em{" "}
            <span className="text-[#4338CA]">Doenças Raras</span>
          </h1>
          <p className="text-[#475569] text-lg leading-relaxed max-w-lg">
            Encontre informação, acolhimento e conexão com redes de apoio
            essenciais para pessoas, famílias e cuidadores no Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#jornada" className="bg-[#4338CA] text-white px-8 py-3 rounded-full font-medium text-center hover:bg-[#3730A3] transition-colors">
              Explorar a Jornada
            </a>
            <a href="#doencas" className="border border-[#4338CA] text-[#4338CA] px-8 py-3 rounded-full font-medium text-center hover:bg-[#EDE9FE] transition-colors">
              Ver Doenças Raras
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-[#EDE9FE] rounded-3xl w-full max-w-md h-80 flex flex-col items-center justify-center gap-4 px-8">
            <div className="w-16 h-16 rounded-full bg-[#4338CA] flex items-center justify-center">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13l-.87.5M4.21 17.5l-.87.5M20.66 17.5l-.87-.5M4.21 6.5l-.87-.5M21 12h-1M4 12H3" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <p className="text-[#4338CA] font-semibold text-xl text-center">
              Iluminando jornadas invisíveis
            </p>
            <p className="text-[#6D28D9] text-sm text-center leading-relaxed">
              Mais de 300 doenças raras catalogadas com linguagem acessível e humana
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}