import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-700 to-violet-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">L</span>
              </div>

              <div>
                <h3 className="font-bold text-xl">LuminaRare</h3>
                <p className="text-slate-400 text-xs">
                  Iluminando jornadas raras
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Plataforma educativa de conscientização sobre doenças raras,
              promovendo informação acessível, acolhimento e apoio para
              pacientes, familiares e cuidadores.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white">
              Navegação
            </h4>

            <div className="flex flex-col gap-3">
              <Link
                href="/biblioteca"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Biblioteca de Doenças
              </Link>

              <Link
                href="/chatbot"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Assistente IA
              </Link>

              <Link
                href="/rede-de-apoio"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Rede de Apoio
              </Link>

              <Link
                href="https://forms.gle/R53NTTgoSU9L5xd29"
                target="_blank"rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Jornada Invisível
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white">
              Aviso Importante
            </h4>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <p className="text-slate-400 text-sm leading-relaxed">
                O LuminaRare possui caráter exclusivamente educativo.
                As informações disponibilizadas não substituem consulta,
                diagnóstico ou acompanhamento médico profissional.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 LuminaRare. Todos os direitos reservados.
          </p>

          <p className="text-slate-500 text-sm">
            Desenvolvido para conscientização e impacto social.
          </p>
        </div>
      </div>
    </footer>
  )
}