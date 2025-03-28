import { BrandStory, CallToAction, MeetOwner, OurStore, WhyChooseUs } from "@/components/sections"

/**
 * About page structure component for "/about" route.
 * 
 * @returns {JSX.Element}
 */
function AboutPage() {
  return (
    <main>
      <BrandStory />
      <MeetOwner />
      <WhyChooseUs />
      <OurStore />
      <CallToAction />
    </main>
  )
}

export default AboutPage