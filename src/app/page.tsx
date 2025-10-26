import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProblemsSection from './components/ProblemsSection'
import SolutionsSection from './components/SolutionsSection'
import BenefitsSection from './components/BenefitsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AnimatedBackground from './components/AnimatedBackground'
import StructuredData from './components/StructuredData'

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 relative">
        <AnimatedBackground />
        <Header />
        <HeroSection />
        <ProblemsSection />
        <SolutionsSection />
        <BenefitsSection />
        <CTASection />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  )
}

