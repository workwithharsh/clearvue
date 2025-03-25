import { CallToAction, Category, Faq, FeaturedProducts, Hero, NewArrivals, Services, Testimonial } from "@/components/sections";

/**
 * Home page structure component for route '/'
 * 
 * @returns {JSX.Element}
 */
function HomePage() {
  return (
    <main>
      <Hero />
      <Category />
      <Services />
      <NewArrivals />
      <FeaturedProducts />
      <Testimonial />
      <Faq />
      <CallToAction />
    </main>
  );
}

export default HomePage