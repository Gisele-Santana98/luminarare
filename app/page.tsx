import Header from "@/components/layout/Header"
import Hero from "@/components/layout/Hero"
import Stats from "@/components/layout/Stats"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <Hero />
      <Stats />
    </main>
  )
}