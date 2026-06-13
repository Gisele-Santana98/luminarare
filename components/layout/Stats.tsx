const stats = [
  { numero: "300+", label: "Doenças catalogadas" },
  { numero: "8M+", label: "Brasileiros afetados" },
  { numero: "5+", label: "Anos de jornada média até diagnóstico" },
  { numero: "95%", label: "Sem diagnóstico definido" },
]

export default function Stats() {
  return (
    <section className="bg-[#4338CA] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((item) => (
          <div key={item.label} className="flex flex-col items-center text-center gap-2">
            <span className="text-4xl font-bold text-white">{item.numero}</span>
            <span className="text-[#C4B5FD] text-sm leading-snug">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}