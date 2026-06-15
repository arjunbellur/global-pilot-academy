import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import ProgramsPreviewSection from '@/components/sections/ProgramsPreviewSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PhotoGallerySection from '@/components/sections/PhotoGallerySection'

export default function HomePage() {
  return (
    <>
      <div style={{height:'100vh',display:'flex',flexDirection:'column',overflow:'hidden'}}>
        <Navbar />
        <HeroSection />
      </div>
      <main id="homepage-content">
        <FeaturesSection />
        <ProgramsPreviewSection />
        <TestimonialsSection />
        <PhotoGallerySection />
      </main>
      <Footer />
    </>
  )
}
