import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import "leaflet/dist/leaflet.css"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50">{children}</body>
    </html>
  )
}