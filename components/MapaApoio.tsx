"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import { InstituicaoApoio } from "@/lib/rede-apoio"

const icone = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

type Props = {
  instituicoes: InstituicaoApoio[]
  selecionada: number | null
  onSelecionar: (id: number) => void
}

export default function MapaApoio({ instituicoes, selecionada, onSelecionar }: Props) {
  return (
    <MapContainer
      center={[-15.7801, -47.9292]}
      zoom={4}
      style={{ height: "420px", width: "100%", borderRadius: "16px" }}
    >
      <TileLayer
        attribution="OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {instituicoes.map((inst) => (
        <Marker
          key={inst.id}
          position={[inst.lat, inst.lng]}
          icon={icone}
          eventHandlers={{ click: () => onSelecionar(inst.id) }}
        >
          <Popup>
            <strong>{inst.nome}</strong>
            <br />
            {inst.cidade} - {inst.estado}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}