export type InstituicaoApoio = {
  id: number
  nome: string
  tipo: "Hospital" | "Associacao" | "Centro Especializado"
  cidade: string
  estado: string
  telefone: string
  site: string
  lat: number
  lng: number
}

export const instituicoes: InstituicaoApoio[] = [
  {
    id: 1,
    nome: "Hospital das Clinicas de Sao Paulo",
    tipo: "Hospital",
    cidade: "Sao Paulo",
    estado: "SP",
    telefone: "(11) 2661-0000",
    site: "https://www.hc.fm.usp.br",
    lat: -23.5558,
    lng: -46.6697,
  },
  {
    id: 2,
    nome: "Instituto Nacional Fernandes Figueira",
    tipo: "Hospital",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    telefone: "(21) 2554-1700",
    site: "https://www.iff.fiocruz.br",
    lat: -22.9083,
    lng: -43.1729,
  },
  {
    id: 3,
    nome: "Associacao Brasileira de Doencas Raras",
    tipo: "Associacao",
    cidade: "Sao Paulo",
    estado: "SP",
    telefone: "(11) 3392-8090",
    site: "https://www.abdr.org.br",
    lat: -23.5616,
    lng: -46.6557,
  },
  {
    id: 4,
    nome: "Hospital de Clinicas de Porto Alegre",
    tipo: "Hospital",
    cidade: "Porto Alegre",
    estado: "RS",
    telefone: "(51) 3359-8000",
    site: "https://www.hcpa.edu.br",
    lat: -30.0368,
    lng: -51.2090,
  },
  {
    id: 5,
    nome: "Associacao dos Portadores de Fibrose Cistica",
    tipo: "Associacao",
    cidade: "Sao Paulo",
    estado: "SP",
    telefone: "(11) 5572-5614",
    site: "https://www.fibrosecistica.org.br",
    lat: -23.5874,
    lng: -46.6576,
  },
  {
    id: 6,
    nome: "Hospital Universitario Walter Cantidio",
    tipo: "Centro Especializado",
    cidade: "Fortaleza",
    estado: "CE",
    telefone: "(85) 3366-8500",
    site: "https://www.huwc.ufc.br",
    lat: -3.7439,
    lng: -38.5434,
  },
  {
    id: 7,
    nome: "Instituto de Medicina Integral Fernando Figueira",
    tipo: "Centro Especializado",
    cidade: "Recife",
    estado: "PE",
    telefone: "(81) 2122-4100",
    site: "https://www.imip.org.br",
    lat: -8.0631,
    lng: -34.8711,
  },
  {
    id: 8,
    nome: "Associacao Brasileira de Esclerose Lateral Amiotrofica",
    tipo: "Associacao",
    cidade: "Sao Paulo",
    estado: "SP",
    telefone: "(11) 5044-8900",
    site: "https://www.abrela.org.br",
    lat: -23.6012,
    lng: -46.6442,
  },
]