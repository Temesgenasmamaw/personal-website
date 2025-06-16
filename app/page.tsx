import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import FeaturedProjects from '@/components/FeaturedProjects'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <FeaturedProjects />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}