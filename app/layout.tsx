import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import "leaflet/dist/leaflet.css"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "LuminaRare — Iluminando jornadas raras",
  description: "Plataforma educativa de conscientizacao sobre doencas raras. Informacao acessivel, acolhimento e rede de apoio.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}