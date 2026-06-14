const stats = [
  { numero: "1 em 17", label: "pessoas tem uma doença rara no mundo" },
  { numero: "13M+", label: "brasileiros afetados por doenças raras" },
  { numero: "4 a 7 anos", label: "média de espera até o diagnóstico correto" },
  { numero: "8.000+", label: "doenças raras catalogadas no mundo" },
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