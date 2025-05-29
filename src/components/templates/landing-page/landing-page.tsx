import { CallToAction } from '@/components/templates/landing-page/sections/call-to-action'
import { CustomerStorySection } from '@/components/templates/landing-page/sections/customer-story-section'
import { FeatureSection } from '@/components/templates/landing-page/sections/feature-section'
import { HeroSection } from '@/components/templates/landing-page/sections/hero-section'
import { SupportSection } from '@/components/templates/landing-page/sections/support-section'

export const Landingpage = () => {
  return (
    <article className="flex flex-col text-heading ">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  )
}
