import { ProductFilters, ProductShowcase, ShopHero } from "@/components/sections"

/**
 * Shop page structure component for "/shop" route.
 * 
 * @returns {JSX.Element}
 */
function ShopPage() {
  return (
    <main>
      <ShopHero />
      <ProductFilters />
      <ProductShowcase />
    </main>
  )
}

export default ShopPage