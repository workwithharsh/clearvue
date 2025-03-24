import { CallToAction, Category, Faq, FeaturedProducts, Hero, NewArrivals, Services, Testimonial } from "@/components/sections";

function HomePage() {
  return (
    <main>
      <Hero />
      <Category />
      <Services />
      <NewArrivals />
      <FeaturedProducts />
      <Testimonial />
      <Faq/>
      <CallToAction/>
    </main>
  );
}

export default HomePage