import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LuminaRare — Iluminando jornadas raras',
  description: 'Plataforma educativa de conscientização e apoio sobre doenças raras.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-slate-50`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}