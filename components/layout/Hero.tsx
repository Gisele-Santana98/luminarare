export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-[#EDE9FE]/30 to-slate-50 py-24 px-6 overflow-hidden">

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EDE9FE] rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D1FAE5] rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-2 bg-[#EDE9FE] text-[#4338CA] text-sm font-semibold px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#4338CA] animate-pulse" />
              Plataforma educativa e gratuita
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Sua jornada
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4338CA] to-[#6366F1]">
                merece ter nome.
              </span>
            </h1>

            <p className="text-slate-500 text-xl leading-relaxed max-w-lg">
              Milhoes de pessoas convivem com sintomas sem respostas. O LuminaRare transforma informacao complexa em orientacao humana, acessivel e confiavel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/jornada" className="bg-gradient-to-r from-[#4338CA] to-[#6366F1] text-white px-8 py-4 rounded-xl font-semibold text-center hover:opacity-90 transition-opacity shadow-lg shadow-indigo-200">
              Iniciar a Jornada Invisivel
            </a>
            <a href="/biblioteca" className="border-2 border-[#4338CA] text-[#4338CA] px-8 py-4 rounded-xl font-semibold text-center hover:bg-[#EDE9FE] transition-colors">
              Explorar Doencas Raras
            </a>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">13M+</span>
              <span className="text-slate-500 text-xs">brasileiros afetados</span>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">8.000+</span>
              <span className="text-slate-500 text-xs">doencas catalogadas</span>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">4-7 anos</span>
              <span className="text-slate-500 text-xs">media ate o diagnostico</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col gap-6">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4338CA] to-[#6366F1] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Assistente LuminaRare</p>
                  <p className="text-slate-400 text-xs">Educativo e acolhedor</p>
                </div>
                <span className="ml-auto w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              <div className="flex flex-col gap-3">
                <div className="bg-slate-50 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-700 leading-relaxed">
                  Ola! Estou aqui para responder suas duvidas sobre doencas raras de forma simples e acolhedora.
                </div>
                <div className="bg-[#EDE9FE] rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-[#4338CA] self-end max-w-xs">
                  O que sao doencas raras?
                </div>
                <div className="bg-slate-50 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-700 leading-relaxed">
                  Doencas raras afetam menos de 65 pessoas em 100.000. No Brasil, sao mais de 13 milhoes de pessoas nessa jornada.
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex-1 bg-slate-100 rounded-xl px-4 py-2.5 text-sm text-slate-400">
                  Digite sua duvida...
                </div>
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4338CA] to-[#6366F1] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

            </div>

            <div className="absolute -bottom-4 -right-4 bg-[#D1FAE5] rounded-2xl px-4 py-3 shadow-md border border-white">
              <p className="text-emerald-700 text-xs font-semibold">Sem diagnostico medico</p>
              <p className="text-emerald-600 text-xs">100% educativo</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}