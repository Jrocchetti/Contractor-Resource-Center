import Header from '@/components/Header'
import Hero from '@/components/Hero'
import QuickAccessGrid from '@/components/QuickAccessGrid'
import ResourcesSection from '@/components/ResourcesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <QuickAccessGrid />
      <ResourcesSection />
      <Footer />
    </main>
  )
}
