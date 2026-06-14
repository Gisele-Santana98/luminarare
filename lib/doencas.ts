export type Doenca = {
  id: number
  nome: string
  categoria: string
  descricao: string
  sintomas: string[]
  prevalencia: string
}

export const doencas: Doenca[] = [
  {
    id: 1,
    nome: "Síndrome de Marfan",
    categoria: "Genética",
    descricao: "Doença genética que afeta o tecido conjuntivo do corpo, influenciando ossos, coração e olhos.",
    sintomas: ["Estatura elevada", "Membros longos", "Problemas cardíacos", "Alterações visuais"],
    prevalencia: "1 em cada 5.000 pessoas",
  },
  {
    id: 2,
    nome: "Fibrose Cística",
    categoria: "Genética",
    descricao: "Doença genética que afeta principalmente os pulmões e o sistema digestivo, causando acúmulo de muco espesso.",
    sintomas: ["Tosse persistente", "Infecções pulmonares frequentes", "Dificuldade para ganhar peso", "Suor salgado"],
    prevalencia: "1 em cada 2.500 nascimentos",
  },
  {
    id: 3,
    nome: "Esclerose Lateral Amiotrófica (ELA)",
    categoria: "Neurológica",
    descricao: "Doença neurológica progressiva que afeta os neurônios responsáveis pelo controle dos músculos voluntários.",
    sintomas: ["Fraqueza muscular progressiva", "Dificuldade para falar", "Dificuldade para engolir", "Paralisia gradual"],
    prevalencia: "2 em cada 100.000 pessoas",
  },
  {
    id: 4,
    nome: "Síndrome de Ehlers-Danlos",
    categoria: "Genética",
    descricao: "Grupo de doenças hereditárias que afetam o tecido conjuntivo, causando hipermobilidade articular e pele elástica.",
    sintomas: ["Articulações muito flexíveis", "Pele elástica e frágil", "Cicatrização lenta", "Dores crônicas"],
    prevalencia: "1 em cada 5.000 pessoas",
  },
  {
    id: 5,
    nome: "Doença de Wilson",
    categoria: "Metabólica",
    descricao: "Doença genética rara que causa acúmulo de cobre no fígado, cérebro e outros órgãos vitais.",
    sintomas: ["Problemas hepáticos", "Tremores", "Dificuldade de fala", "Alterações de comportamento"],
    prevalencia: "1 em cada 30.000 pessoas",
  },
  {
    id: 6,
    nome: "Fenilcetonúria (PKU)",
    categoria: "Metabólica",
    descricao: "Erro inato do metabolismo que impede o organismo de processar corretamente o aminoácido fenilalanina.",
    sintomas: ["Atraso no desenvolvimento", "Convulsões", "Problemas de comportamento", "Odor característico na urina"],
    prevalencia: "1 em cada 10.000 nascimentos",
  },
  {
    id: 7,
    nome: "Síndrome de Williams",
    categoria: "Genética",
    descricao: "Condição genética caracterizada por deficiência intelectual leve, personalidade sociável e problemas cardíacos.",
    sintomas: ["Traços faciais característicos", "Problemas cardíacos", "Habilidades sociais elevadas", "Dificuldades de aprendizado"],
    prevalencia: "1 em cada 10.000 pessoas",
  },
  {
    id: 8,
    nome: "Porfiria",
    categoria: "Metabólica",
    descricao: "Grupo de doenças causadas por defeitos na produção do heme, proteína presente no sangue.",
    sintomas: ["Dores abdominais intensas", "Sensibilidade à luz solar", "Urina escura", "Fraqueza muscular"],
    prevalencia: "1 em cada 25.000 pessoas",
  },
]