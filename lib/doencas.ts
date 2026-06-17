export type Doenca = {
  id: number
  nome: string
  categoria: string
  descricao: string

  sintomas: string[]
  prevalencia: string
  quandoProcurarAjuda: string
  especialista: string
  tratamento: string
  curiosidade: string
}

export const doencas: Doenca[] = [
  {
    id: 1,
    nome: "Síndrome de Marfan",
    categoria: "Genética",

    descricao:
      "Doença genética que afeta o tecido conjuntivo do corpo, influenciando ossos, coração e olhos.",

    sintomas: [
      "Estatura elevada",
      "Membros longos",
      "Problemas cardíacos",
      "Alterações visuais",
    ],

    prevalencia: "1 em cada 5.000 pessoas",

    quandoProcurarAjuda:
      "Quando houver histórico familiar, alterações cardíacas ou crescimento corporal incomum.",

    especialista:
      "Geneticista, cardiologista e oftalmologista.",

    tratamento:
      "Acompanhamento médico contínuo, monitoramento cardiovascular e tratamentos específicos conforme os sintomas.",

    curiosidade:
      "A síndrome recebeu esse nome em homenagem ao médico francês Antoine Marfan.",
  },

  {
    id: 2,
    nome: "Fibrose Cística",
    categoria: "Genética",

    descricao:
      "Doença genética que afeta principalmente os pulmões e o sistema digestivo, causando acúmulo de muco espesso.",

    sintomas: [
      "Tosse persistente",
      "Infecções pulmonares frequentes",
      "Dificuldade para ganhar peso",
      "Suor salgado",
    ],

    prevalencia: "1 em cada 2.500 nascimentos",

    quandoProcurarAjuda:
      "Quando houver infecções respiratórias recorrentes ou dificuldades persistentes de crescimento.",

    especialista:
      "Pneumologista e geneticista.",

    tratamento:
      "Fisioterapia respiratória, medicamentos específicos e suporte nutricional.",

    curiosidade:
      "O teste do suor é um dos exames mais utilizados para auxiliar na identificação da doença.",
  },

  {
    id: 3,
    nome: "Esclerose Lateral Amiotrófica (ELA)",
    categoria: "Neurológica",

    descricao:
      "Doença neurológica progressiva que afeta os neurônios responsáveis pelo controle dos músculos voluntários.",

    sintomas: [
      "Fraqueza muscular progressiva",
      "Dificuldade para falar",
      "Dificuldade para engolir",
      "Paralisia gradual",
    ],

    prevalencia: "2 em cada 100.000 pessoas",

    quandoProcurarAjuda:
      "Quando houver perda progressiva de força muscular sem causa aparente.",

    especialista:
      "Neurologista.",

    tratamento:
      "Controle dos sintomas, fisioterapia e acompanhamento multidisciplinar.",

    curiosidade:
      "O físico Stephen Hawking viveu por décadas com ELA.",
  },

  {
    id: 4,
    nome: "Síndrome de Ehlers-Danlos",
    categoria: "Genética",

    descricao:
      "Grupo de doenças hereditárias que afetam o tecido conjuntivo, causando hipermobilidade articular e pele elástica.",

    sintomas: [
      "Articulações muito flexíveis",
      "Pele elástica e frágil",
      "Cicatrização lenta",
      "Dores crônicas",
    ],

    prevalencia: "1 em cada 5.000 pessoas",

    quandoProcurarAjuda:
      "Quando houver luxações frequentes ou hipermobilidade excessiva.",

    especialista:
      "Geneticista e reumatologista.",

    tratamento:
      "Controle da dor, fisioterapia e prevenção de lesões.",

    curiosidade:
      "Existem diferentes subtipos da síndrome, cada um com características próprias.",
  },

  {
    id: 5,
    nome: "Doença de Wilson",
    categoria: "Metabólica",

    descricao:
      "Doença genética rara que causa acúmulo de cobre no fígado, cérebro e outros órgãos vitais.",

    sintomas: [
      "Problemas hepáticos",
      "Tremores",
      "Dificuldade de fala",
      "Alterações de comportamento",
    ],

    prevalencia: "1 em cada 30.000 pessoas",

    quandoProcurarAjuda:
      "Quando houver alterações hepáticas ou neurológicas sem explicação clara.",

    especialista:
      "Hepatologista e neurologista.",

    tratamento:
      "Medicamentos para reduzir o cobre acumulado e dieta específica.",

    curiosidade:
      "O anel de Kayser-Fleischer nos olhos é um sinal clássico da doença.",
  },

  {
    id: 6,
    nome: "Fenilcetonúria (PKU)",
    categoria: "Metabólica",

    descricao:
      "Erro inato do metabolismo que impede o organismo de processar corretamente o aminoácido fenilalanina.",

    sintomas: [
      "Atraso no desenvolvimento",
      "Convulsões",
      "Problemas de comportamento",
      "Odor característico na urina",
    ],

    prevalencia: "1 em cada 10.000 nascimentos",

    quandoProcurarAjuda:
      "Quando houver alterações detectadas no teste do pezinho.",

    especialista:
      "Metabolista e geneticista.",

    tratamento:
      "Dieta rigorosa com controle da ingestão de fenilalanina.",

    curiosidade:
      "O diagnóstico precoce evita complicações neurológicas graves.",
  },

  {
    id: 7,
    nome: "Síndrome de Williams",
    categoria: "Genética",

    descricao:
      "Condição genética caracterizada por deficiência intelectual leve, personalidade sociável e problemas cardíacos.",

    sintomas: [
      "Traços faciais característicos",
      "Problemas cardíacos",
      "Habilidades sociais elevadas",
      "Dificuldades de aprendizado",
    ],

    prevalencia: "1 em cada 10.000 pessoas",

    quandoProcurarAjuda:
      "Quando houver atraso no desenvolvimento associado a alterações cardíacas.",

    especialista:
      "Geneticista, cardiologista e neuropediatra.",

    tratamento:
      "Acompanhamento multidisciplinar focado no desenvolvimento e qualidade de vida.",

    curiosidade:
      "Muitas pessoas com a síndrome demonstram grande interesse por música.",
  },

  {
    id: 8,
    nome: "Porfiria",
    categoria: "Metabólica",

    descricao:
      "Grupo de doenças causadas por defeitos na produção do heme, proteína presente no sangue.",

    sintomas: [
      "Dores abdominais intensas",
      "Sensibilidade à luz solar",
      "Urina escura",
      "Fraqueza muscular",
    ],

    prevalencia: "1 em cada 25.000 pessoas",

    quandoProcurarAjuda:
      "Quando ocorrerem crises recorrentes de dor abdominal associadas a sintomas neurológicos ou sensibilidade à luz.",

    especialista:
      "Hematologista e geneticista.",

    tratamento:
      "Controle das crises, medicamentos específicos e prevenção de gatilhos.",

    curiosidade:
      "Algumas teorias históricas relacionam sintomas da porfiria a lendas sobre vampiros.",
  },
]