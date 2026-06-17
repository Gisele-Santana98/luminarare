import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import "leaflet/dist/leaflet.css"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "LuminaRare — Iluminando Jornadas Raras",
  description:
    "Plataforma educativa de conscientização sobre doenças raras. Informação acessível, acolhimento, orientação e rede de apoio.",
  keywords: [
    "doenças raras",
    "saúde",
    "educação em saúde",
    "conscientização",
    "pacientes",
    "rede de apoio",
    "doenças genéticas",
    "assistente IA",
    "LuminaRare",
  ],
  authors: [
    {
      name: "Equipe LuminaRare",
    },
  ],
  openGraph: {
    title: "LuminaRare — Iluminando Jornadas Raras",
    description:
      "Informação acessível, acolhimento e conscientização sobre doenças raras.",
    type: "website",
    locale: "pt_BR",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}