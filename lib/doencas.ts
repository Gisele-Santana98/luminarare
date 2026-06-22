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
  
  {
    id: 9,
    nome: "Doença de Huntington",
    categoria: "Neurológica",
    descricao:
      "Doença genética hereditária que causa deterioração progressiva das células nervosas no cérebro, afetando movimentos, cognição e comportamento.",
    sintomas: [
      "Movimentos involuntários (coreia)",
      "Declínio cognitivo progressivo",
      "Alterações de humor e comportamento",
      "Dificuldade para falar e engolir",
    ],
    prevalencia: "3 a 7 em cada 100.000 pessoas",
    quandoProcurarAjuda:
      "Quando houver histórico familiar da doença ou início de movimentos involuntários e alterações cognitivas.",
    especialista: "Neurologista e geneticista.",
    tratamento:
      "Não há cura; o tratamento foca no controle dos sintomas com medicamentos e suporte multidisciplinar.",
    curiosidade:
      "Cada filho de uma pessoa com Huntington tem 50% de chance de herdar o gene da doença.",
  },

  {
    id: 10,
    nome: "Síndrome de Rett",
    categoria: "Neurológica",
    descricao:
      "Transtorno neurológico raro que afeta quase exclusivamente meninas, causando regressão no desenvolvimento após um período inicial normal.",
    sintomas: [
      "Perda de habilidades manuais adquiridas",
      "Movimentos repetitivos das mãos",
      "Dificuldades de comunicação",
      "Problemas de coordenação motora",
    ],
    prevalencia: "1 em cada 10.000 meninas",
    quandoProcurarAjuda:
      "Quando houver regressão no desenvolvimento entre 6 meses e 2 anos de idade.",
    especialista: "Neuropediatra e geneticista.",
    tratamento:
      "Suporte multidisciplinar com fisioterapia, fonoaudiologia e terapia ocupacional.",
    curiosidade:
      "A síndrome foi descrita pela primeira vez pelo médico austríaco Andreas Rett em 1966.",
  },

  {
    id: 11,
    nome: "Acondroplasia",
    categoria: "Genética",
    descricao:
      "Forma mais comum de nanismo, causada por uma mutação genética que afeta o desenvolvimento ósseo.",
    sintomas: [
      "Estatura baixa",
      "Membros curtos em relação ao tronco",
      "Cabeça maior que o habitual",
      "Curvatura acentuada da coluna",
    ],
    prevalencia: "1 em cada 25.000 nascimentos",
    quandoProcurarAjuda:
      "O diagnóstico pode ocorrer ainda na gestação por ultrassonografia.",
    especialista: "Geneticista e ortopedista.",
    tratamento:
      "Acompanhamento ortopédico, fisioterapia e suporte ao desenvolvimento motor.",
    curiosidade:
      "Cerca de 80% dos casos ocorrem em filhos de pais com estatura típica, por mutação espontânea.",
  },

  {
    id: 12,
    nome: "Esclerodermia",
    categoria: "Autoimune",
    descricao:
      "Doença autoimune crônica que causa endurecimento e espessamento da pele e pode afetar órgãos internos.",
    sintomas: [
      "Endurecimento da pele",
      "Fenômeno de Raynaud",
      "Dificuldade para engolir",
      "Fadiga intensa",
    ],
    prevalencia: "1 em cada 10.000 pessoas",
    quandoProcurarAjuda:
      "Quando houver endurecimento progressivo da pele associado a sensibilidade ao frio nas extremidades.",
    especialista: "Reumatologista.",
    tratamento:
      "Controle dos sintomas com imunossupressores, vasodilatadores e acompanhamento contínuo.",
    curiosidade:
      "A doença afeta mais mulheres do que homens, numa proporção de 4 para 1.",
  },

  {
    id: 13,
    nome: "Síndrome de Prader-Willi",
    categoria: "Genética",
    descricao:
      "Condição genética rara que causa hipotonia na infância, deficiência intelectual e fome insaciável na fase adulta.",
    sintomas: [
      "Hipotonia neonatal",
      "Fome compulsiva e constante",
      "Obesidade",
      "Deficiência intelectual leve a moderada",
    ],
    prevalencia: "1 em cada 15.000 pessoas",
    quandoProcurarAjuda:
      "Quando houver hipotonia severa ao nascimento ou ganho de peso excessivo na infância.",
    especialista: "Geneticista, endocrinologista e neuropediatra.",
    tratamento:
      "Controle alimentar rigoroso, terapia com hormônio do crescimento e suporte multidisciplinar.",
    curiosidade:
      "Pessoas com a síndrome nunca sentem saciedade, o que exige supervisão alimentar constante.",
  },

  {
    id: 14,
    nome: "Doença de Gaucher",
    categoria: "Metabólica",
    descricao:
      "Doença de depósito lisossômico causada pela deficiência de uma enzima que resulta no acúmulo de substâncias gordurosas em órgãos.",
    sintomas: [
      "Aumento do fígado e baço",
      "Anemia",
      "Fadiga",
      "Dores ósseas",
    ],
    prevalencia: "1 em cada 40.000 pessoas",
    quandoProcurarAjuda:
      "Quando houver aumento abdominal inexplicável associado a anemia e dores ósseas.",
    especialista: "Hematologista e geneticista.",
    tratamento:
      "Terapia de reposição enzimática disponível no SUS para casos elegíveis.",
    curiosidade:
      "É a doença de depósito lisossômico mais comum no mundo.",
  },

  {
    id: 15,
    nome: "Miastenia Gravis",
    categoria: "Autoimune",
    descricao:
      "Doença autoimune que afeta a junção neuromuscular, causando fraqueza muscular flutuante e fadiga.",
    sintomas: [
      "Ptose palpebral (queda das pálpebras)",
      "Visão dupla",
      "Fraqueza nos membros",
      "Dificuldade para falar e mastigar",
    ],
    prevalencia: "2 em cada 10.000 pessoas",
    quandoProcurarAjuda:
      "Quando houver fraqueza muscular que piora com o esforço e melhora com o repouso.",
    especialista: "Neurologista.",
    tratamento:
      "Inibidores da colinesterase, imunossupressores e, em alguns casos, timectomia.",
    curiosidade:
      "Os sintomas tendem a piorar ao longo do dia e melhorar após descanso.",
  },

  {
    id: 16,
    nome: "Osteogênese Imperfeita",
    categoria: "Genética",
    descricao:
      "Conhecida como 'doença dos ossos de vidro', causa fragilidade óssea extrema por defeito na produção de colágeno.",
    sintomas: [
      "Fraturas frequentes com traumas mínimos",
      "Baixa estatura",
      "Escleróticas azuladas",
      "Perda auditiva progressiva",
    ],
    prevalencia: "1 em cada 15.000 a 20.000 pessoas",
    quandoProcurarAjuda:
      "Quando houver fraturas recorrentes sem trauma proporcional, especialmente na infância.",
    especialista: "Ortopedista e geneticista.",
    tratamento:
      "Bifosfonatos, fisioterapia, cirurgias ortopédicas e suporte multidisciplinar.",
    curiosidade:
      "Existem pelo menos 8 tipos da doença, com graus variados de gravidade.",
  },
]