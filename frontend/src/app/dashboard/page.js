'use client'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend
} from 'recharts'

const dadosPrevalencia = [
  { doenca: 'Fibrose Cística', casos: 2500 },
  { doenca: 'Sínd. de Marfan', casos: 5000 },
  { doenca: 'Fenilcetonúria', casos: 10000 },
  { doenca: 'Gaucher', casos: 40000 },
  { doenca: 'Turner', casos: 2500 },
  { doenca: 'ELA', casos: 50000 },
]

const dadosFaixaEtaria = [
  { faixa: 'Infância', percentual: 75 },
  { faixa: 'Adolescência', percentual: 12 },
  { faixa: 'Adultos', percentual: 10 },
  { faixa: 'Idosos', percentual: 3 },
]

const dadosCategoria = [
  { name: 'Genéticas', value: 72, cor: '#6C3FC5' },
  { name: 'Metabólicas', value: 12, cor: '#E8622A' },
  { name: 'Neurológicas', value: 8, cor: '#3B82F6' },
  { name: 'Outras', value: 8, cor: '#1D9E75' },
]

const dadosDiagnostico = [
  { ano: '2018', meses: 84 },
  { ano: '2019', meses: 78 },
  { ano: '2020', meses: 72 },
  { ano: '2021', meses: 65 },
  { ano: '2022', meses: 58 },
  { ano: '2023', meses: 52 },
  { ano: '2024', meses: 48 },
]

const estatisticas = [
  { numero: '13M+', label: 'Brasileiros afetados', cor: '#6C3FC5' },
  { numero: '8.000+', label: 'Doenças catalogadas', cor: '#E8622A' },
  { numero: '4-7 anos', label: 'Tempo médio de diagnóstico', cor: '#3B82F6' },
  { numero: '75%', label: 'Casos na infância', cor: '#1D9E75' },
]

const tooltipStyle = {
  backgroundColor: '#160F2A',
  border: '1px solid #2D1F54',
  borderRadius: '8px',
  color: '#F0EAF8',
}

export default function Dashboard() {
  return (
    <main className="bg-[#0F0A1E] min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-6xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <p className="text-[#A78BFA] text-sm font-medium tracking-widest uppercase mb-4">
            Dados e conscientização
          </p>
          <h1 className="text-[#F0EAF8] text-4xl md:text-5xl font-bold mb-4">
            Dashboard
          </h1>
          <p className="text-[#9B8EC4] text-lg max-w-2xl mx-auto">
            Visualize dados sobre doenças raras no Brasil e entenda 
            a dimensão desse desafio de saúde pública.
          </p>
        </div>

        {/* Cards de estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {estatisticas.map((item, i) => (
            <div key={i} className="bg-[#160F2A] border border-[#2D1F54] rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: item.cor }}>
                {item.numero}
              </div>
              <div className="text-[#9B8EC4] text-sm">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Gráficos — linha 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* Gráfico de barras — prevalência */}
          <div className="bg-[#160F2A] border border-[#2D1F54] rounded-2xl p-6">
            <h3 className="text-[#F0EAF8] font-semibold mb-1">
              Prevalência por doença
            </h3>
            <p className="text-[#9B8EC4] text-xs mb-6">
              1 caso a cada X pessoas na população
            </p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={dadosPrevalencia}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D1F54" />
                <XAxis dataKey="doenca" tick={{ fill: '#9B8EC4', fontSize: 10 }} />
                <YAxis tick={{ fill: '#9B8EC4', fontSize: 10 }} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="casos" fill="#6C3FC5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Gráfico de pizza — categorias */}
          <div className="bg-[#160F2A] border border-[#2D1F54] rounded-2xl p-6">
            <h3 className="text-[#F0EAF8] font-semibold mb-1">
              Distribuição por categoria
            </h3>
            <p className="text-[#9B8EC4] text-xs mb-6">
              Percentual de doenças raras por tipo
            </p>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={dadosCategoria}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {dadosCategoria.map((entry, index) => (
                    <Cell key={index} fill={entry.cor} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
                <Legend
                  formatter={(value) => (
                    <span style={{ color: '#9B8EC4', fontSize: '12px' }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráficos — linha 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Gráfico de linha — tempo de diagnóstico */}
          <div className="bg-[#160F2A] border border-[#2D1F54] rounded-2xl p-6">
            <h3 className="text-[#F0EAF8] font-semibold mb-1">
              Evolução do tempo de diagnóstico
            </h3>
            <p className="text-[#9B8EC4] text-xs mb-6">
              Tempo médio em meses — tendência de melhora
            </p>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={dadosDiagnostico}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D1F54" />
                <XAxis dataKey="ano" tick={{ fill: '#9B8EC4', fontSize: 11 }} />
                <YAxis tick={{ fill: '#9B8EC4', fontSize: 11 }} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line
                  type="monotone"
                  dataKey="meses"
                  stroke="#E8622A"
                  strokeWidth={2}
                  dot={{ fill: '#E8622A', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Gráfico de barras — faixa etária */}
          <div className="bg-[#160F2A] border border-[#2D1F54] rounded-2xl p-6">
            <h3 className="text-[#F0EAF8] font-semibold mb-1">
              Manifestação por faixa etária
            </h3>
            <p className="text-[#9B8EC4] text-xs mb-6">
              Percentual de casos por fase da vida
            </p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={dadosFaixaEtaria}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D1F54" />
                <XAxis dataKey="faixa" tick={{ fill: '#9B8EC4', fontSize: 11 }} />
                <YAxis tick={{ fill: '#9B8EC4', fontSize: 11 }} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}%`]} />
                <Bar dataKey="percentual" fill="#1D9E75" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Fonte dos dados */}
        <p className="text-[#6B5EA0] text-xs text-center">
          Dados baseados em estimativas da OMS, CONITEC e literatura científica sobre doenças raras no Brasil. 
          Fins exclusivamente educativos.
        </p>

      </div>
    </main>
  )
}