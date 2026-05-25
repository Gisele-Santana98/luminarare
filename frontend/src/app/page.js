export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0A1E] flex flex-col items-center justify-center px-6">
      <p className="text-[#A78BFA] text-sm font-medium tracking-widest uppercase mb-4">
        Plataforma educativa
      </p>
      <h1 className="text-[#F0EAF8] text-4xl md:text-6xl font-bold text-center leading-tight mb-6">
        Iluminando jornadas raras.
      </h1>
      <p className="text-[#9B8EC4] text-lg text-center max-w-xl mb-10">
        LuminaRare reduz a invisibilidade das doenças raras combinando IA, 
        educação acessível e direcionamento especializado.
      </p>
      <button className="bg-[#E8622A] text-white font-medium px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity">
        Iniciar Triagem Educativa
      </button>
      <p className="text-[#6B5EA0] text-xs mt-16">
        Esta plataforma não realiza diagnósticos médicos. Projeto LuminaRare.
      </p>
    </main>
  )
}