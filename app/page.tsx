import SingleProductCard from "@/components/website/single-product-card";
import HeroCarousel from "@/components/website/hero-carousel";
import MultipleItemCarousel from "@/components/website/multiple-item-carousel";
import OurServices from "@/components/website/our-services";
import Newsletter from "@/components/website/newsletter";
import ProductTabs from "@/components/website/product-tabs";

export default function Home() {
  return (
    <main className=" space-y-10">
      <HeroCarousel />
      <OurServices />

      <>
        <ProductTabs />
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <SingleProductCard key={index} />
          ))}
        </div>
      </>

      <MultipleItemCarousel title={"Newly Arrived"} />
      <Newsletter />
    </main>
  );
}
