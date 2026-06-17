import Header from "@/components/layout/Header"
import Hero from "@/components/layout/Hero"
import Features from "@/components/layout/Features"
import Impact from "@/components/layout/Impact"
import CTA from "@/components/layout/CTA"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <Features />
      <Impact />
      <CTA />
      <Footer />
    </main>
  )
}