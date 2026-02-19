import { Header } from './sections/Header'
import { HeroSection } from './sections/HeroSection'
import { VacanciesSection } from './sections/VacanciesSection'
import { AdvantagesSection } from './sections/AdvantagesSection'
import { PartnersSection } from './sections/PartnersSection'
import { AudienceSection } from './sections/AudienceSection'
import { ReviewsSection } from './sections/ReviewsSection'
import { ComparisonSection } from './sections/ComparisonSection'
import { InstallSection } from './sections/InstallSection'
import { FAQSection } from './sections/FAQSection'
import { Footer } from './sections/Footer'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VacanciesSection />
      <AdvantagesSection />
      <PartnersSection />
      <AudienceSection />
      <ReviewsSection />
      <ComparisonSection />
      <InstallSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
