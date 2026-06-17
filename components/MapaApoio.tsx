"use client"

import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import { InstituicaoApoio } from "@/lib/rede-apoio"

const iconePadrao = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

const iconeSelecionado = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [32, 52],
  iconAnchor: [16, 52],
  popupAnchor: [1, -42],
})

type Props = {
  instituicoes: InstituicaoApoio[]
  selecionada: number | null
  onSelecionar: (id: number) => void
}

export default function MapaApoio({
  instituicoes,
  selecionada,
  onSelecionar,
}: Props) {
  return (
    <MapContainer
      center={[-15.7801, -47.9292]}
      zoom={4}
      scrollWheelZoom={true}
      className="h-[420px] w-full rounded-2xl"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {instituicoes.map((inst) => (
        <Marker
          key={inst.id}
          position={[inst.lat, inst.lng]}
          icon={inst.id === selecionada ? iconeSelecionado : iconePadrao}
          eventHandlers={{
            click: () => onSelecionar(inst.id),
          }}
        >
          <Popup>
            <div className="flex flex-col gap-1">
              <strong>{inst.nome}</strong>
              <span>{inst.cidade} - {inst.estado}</span>
              <span>{inst.tipo}</span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}