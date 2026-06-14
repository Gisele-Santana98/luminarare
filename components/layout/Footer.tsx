export default function Footer() {
  return (
    <footer className="bg-[#0F172A] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#4338CA] flex items-center justify-center">
              <span className="text-white text-xs font-bold">L</span>
            </div>
            <span className="text-white font-bold text-lg">LuminaRare</span>
          </div>
          <p className="text-[#94A3B8] text-sm max-w-xs leading-relaxed">
            Iluminando jornadas raras.Plataforma educativa de conscientização sobre doenças raras.
            Não realizamos diagnósticos médicos.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-white font-medium text-sm">Plataforma</span>
          <a href="#doencas" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Biblioteca de Doenças</a>
          <a href="#jornada" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Jornada Invisível</a>
          <a href="#apoio" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Rede de Apoio</a>
          <a href="#chatbot" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Assistente IA</a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-white font-medium text-sm">Aviso importante</span>
          <p className="text-[#94A3B8] text-sm max-w-xs leading-relaxed">
            Esta plataforma possui caráter educativo e não substitui avaliação médica profissional.
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[#1E293B] flex flex-col md:flex-row justify-between gap-2">
        <p className="text-[#475569] text-xs">© 2025 LuminaRare. Todos os direitos reservados.</p>
        <p className="text-[#475569] text-xs">Feito com propósito para impacto social.</p>
      </div>
    </footer>
  )
}