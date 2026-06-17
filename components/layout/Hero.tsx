import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-violet-50 via-white to-slate-50 pt-24 pb-32 overflow-hidden">

      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />

      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-20">

        {/* Conteúdo */}
        <div className="flex-1 flex flex-col gap-8">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
            Sua jornada
            <span className="block bg-gradient-to-r from-indigo-700 to-violet-500 bg-clip-text text-transparent">
              merece ter nome.
            </span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl">
            Milhões de pessoas convivem durante anos com sintomas sem respostas.
            O LuminaRare conecta informação confiável, apoio especializado e
            orientação educativa em uma experiência simples, acessível e humana.
          </p>

          {/* Selos */}
          <div className="flex flex-wrap gap-3">
            <span className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700">
              ✓ Educativo
            </span>
            <span className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700">
              ✓ Acessível
            </span>
            <span className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700">
              ✓ Sem diagnóstico médico
            </span>
            <span className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700">
              ✓ Informação confiável
            </span>
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://forms.gle/R53NTTgoSU9L5xd29"
              target="_blank"rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-700 to-violet-500 text-white px-8 py-4 rounded-2xl font-semibold text-center shadow-lg hover:scale-105 transition-all duration-300"
            >
              Iniciar Jornada
            </Link>

            <Link
              href="/biblioteca"
              className="border-2 border-indigo-700 text-indigo-700 px-8 py-4 rounded-2xl font-semibold text-center hover:bg-violet-50 transition-all"
            >
              Explorar Doenças Raras
            </Link>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <p className="text-2xl font-bold text-slate-900">13M+</p>
              <p className="text-xs text-slate-500">brasileiros afetados</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <p className="text-2xl font-bold text-slate-900">8.000+</p>
              <p className="text-xs text-slate-500">doenças catalogadas</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <p className="text-2xl font-bold text-slate-900">4-7 anos</p>
              <p className="text-xs text-slate-500">média até o diagnóstico</p>
            </div>
          </div>

        </div>

        {/* Mockup Chat */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-xl">

            <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-[0_20px_60px_rgba(79,70,229,0.15)] flex flex-col gap-6">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-700 to-violet-500 flex items-center justify-center text-white">
                  ✦
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Assistente LuminaRare</p>
                  <p className="text-xs text-slate-500">Educativo e acolhedor</p>
                </div>
                <span className="ml-auto w-3 h-3 rounded-full bg-emerald-400" />
              </div>

              <div className="flex flex-col gap-3">
                <div className="bg-slate-50 p-4 rounded-2xl">
                  Olá! Estou aqui para ajudar você a entender doenças raras de
                  forma simples e acessível.
                </div>

                <div className="bg-violet-100 p-4 rounded-2xl self-end max-w-xs text-indigo-700">
                  O que são doenças raras?
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl">
                  São condições que afetam menos de 65 pessoas a cada 100 mil
                  habitantes.
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-violet-100 text-indigo-700 px-3 py-1 rounded-full text-xs">Especialistas</span>
                <span className="bg-violet-100 text-indigo-700 px-3 py-1 rounded-full text-xs">Sintomas</span>
                <span className="bg-violet-100 text-indigo-700 px-3 py-1 rounded-full text-xs">Apoio</span>
                <span className="bg-violet-100 text-indigo-700 px-3 py-1 rounded-full text-xs">Direitos</span>
              </div>

            </div>

            <div className="absolute -bottom-4 -right-4 bg-emerald-100 rounded-2xl px-4 py-3 shadow-md z-10">
              <p className="text-emerald-700 text-xs font-semibold">Sem diagnóstico médico</p>
              <p className="text-emerald-600 text-xs">100% educativo</p>
            </div>

          </div>
        </div>

      </div>

    </section>
  )
}