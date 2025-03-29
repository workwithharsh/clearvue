import {
  CallToAction, Category, Faq, FeaturedProducts, Hero, NewArrivals, Services
} from "@/components/sections";

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
      <Faq />
      <CallToAction />
    </main>
  );
}

export default HomePage