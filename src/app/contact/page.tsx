import { ContactForm, ContactInfo, Faq, OurStore } from "@/components/sections"

/**
 * Contact page structure component for "/contact" route.
 * 
 * @returns {JSX.Element}
 */
function ContactPage() {
  return (
    <main>
      <ContactInfo />
      <ContactForm />
      <OurStore />
      <Faq />
    </main>
  )
}

export default ContactPage