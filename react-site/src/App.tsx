import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import PropertyStrip from './components/PropertyStrip'
import AuthoritySection from './components/AuthoritySection'
import ReportPreview from './components/ReportPreview'
import UrgencySection from './components/UrgencySection'
import OwnershipSection from './components/OwnershipSection'
import PricingSection from './components/PricingSection'
import RoiSection from './components/RoiSection'
import LeadForm from './components/LeadForm'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import StickyPhone from './components/StickyPhone'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <PropertyStrip />
      <AuthoritySection />
      <ReportPreview />
      <UrgencySection />
      <OwnershipSection />
      <PricingSection />
      <RoiSection />
      <LeadForm />
      <FinalCta />
      <Footer />
      <StickyPhone />
    </div>
  )
}
