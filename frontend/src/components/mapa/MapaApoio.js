'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Corrige ícone padrão do Leaflet no Next.js
const icone = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

const centros = [
  {
    id: 1,
    nome: 'Hospital das Clínicas de São Paulo',
    tipo: 'Hospital',
    endereco: 'Av. Dr. Enéas de Carvalho Aguiar, 255 — São Paulo, SP',
    telefone: '(11) 2661-0000',
    especialidade: 'Centro de referência em doenças raras',
    lat: -23.5558,
    lng: -46.6704,
  },
  {
    id: 2,
    nome: 'Hospital de Clínicas de Porto Alegre',
    tipo: 'Hospital',
    endereco: 'R. Ramiro Barcelos, 2350 — Porto Alegre, RS',
    telefone: '(51) 3359-8000',
    especialidade: 'Serviço de genética médica',
    lat: -30.0346,
    lng: -51.2177,
  },
  {
    id: 3,
    nome: 'Instituto da Criança — ICr USP',
    tipo: 'Hospital',
    endereco: 'Av. Dr. Enéas de Carvalho Aguiar, 647 — São Paulo, SP',
    telefone: '(11) 2661-8500',
    especialidade: 'Doenças raras em pediatria',
    lat: -23.5575,
    lng: -46.6685,
  },
  {
    id: 4,
    nome: 'CRER — Centro de Reabilitação',
    tipo: 'Centro de Reabilitação',
    endereco: 'Av. Fued José Sebba, 205 — Goiânia, GO',
    telefone: '(62) 3096-3600',
    especialidade: 'Reabilitação para doenças raras',
    lat: -16.6869,
    lng: -49.2648,
  },
  {
    id: 5,
    nome: 'APAE São Paulo',
    tipo: 'Associação',
    endereco: 'R. Ascendino Reis, 724 — São Paulo, SP',
    telefone: '(11) 5549-4000',
    especialidade: 'Apoio a pessoas com doenças genéticas raras',
    lat: -23.5962,
    lng: -46.6401,
  },
  {
    id: 6,
    nome: 'Hospital Universitário Walter Cantídio',
    tipo: 'Hospital',
    endereco: 'R. Coronel Nunes de Melo, 1315 — Fortaleza, CE',
    telefone: '(85) 3366-8500',
    especialidade: 'Doenças raras e genética clínica',
    lat: -3.7418,
    lng: -38.5476,
  },
  {
    id: 7,
    nome: 'Hospital de Base do Distrito Federal',
    tipo: 'Hospital',
    endereco: 'SMHS Área Especial — Brasília, DF',
    telefone: '(61) 3315-1600',
    especialidade: 'Centro de referência em doenças raras',
    lat: -15.7835,
    lng: -47.9089,
  },
  {
    id: 8,
    nome: 'Associação Brasileira de Doenças Raras — ABRADR',
    tipo: 'Associação',
    endereco: 'São Paulo, SP',
    telefone: '(11) 99999-0000',
    especialidade: 'Apoio e advocacy para doenças raras',
    lat: -23.5489,
    lng: -46.6388,
  },
]

const coresTipo = {
  'Hospital': '#6C3FC5',
  'Associação': '#E8622A',
  'Centro de Reabilitação': '#1D9E75',
}

export default function MapaApoio() {
  return (
    <MapContainer
      center={[-15.7801, -47.9292]}
      zoom={5}
      style={{ height: '100%', width: '100%', borderRadius: '16px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {centros.map(centro => (
        <Marker
          key={centro.id}
          position={[centro.lat, centro.lng]}
          icon={icone}
        >
          <Popup>
            <div style={{ minWidth: '200px' }}>
              <div style={{
                background: coresTipo[centro.tipo] || '#6C3FC5',
                color: 'white',
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '11px',
                display: 'inline-block',
                marginBottom: '8px'
              }}>
                {centro.tipo}
              </div>
              <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '4px' }}>
                {centro.nome}
              </div>
              <div style={{ fontSize: '12px', color: '#555', marginBottom: '4px' }}>
                📍 {centro.endereco}
              </div>
              <div style={{ fontSize: '12px', color: '#555', marginBottom: '4px' }}>
                📞 {centro.telefone}
              </div>
              <div style={{ fontSize: '12px', color: '#6C3FC5', fontStyle: 'italic' }}>
                {centro.especialidade}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}