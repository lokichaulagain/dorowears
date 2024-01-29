import { Button } from "@/components/ui/button";
import SingleProductCard from "@/components/website/single-product-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import HeroCarousel from "@/components/website/hero-carousel";
import banner from "../public/banners/1.png";
import MultipleItemCarousel from "@/components/website/multiple-item-carousel";
import OurServices from "@/components/website/our-services";
import Footer from "@/components/website/footer";
import Testimonials from "@/components/website/testimonials";
import Newsletter from "@/components/website/newsletter";
import ProductTabs from "@/components/website/product-tabs";

export default function Home() {
  return (
    <main className=" space-y-10">
      <HeroCarousel />
      <OurServices />

      <>
        <ProductTabs />
        <div className=" grid grid-cols-4 gap-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <SingleProductCard key={index} />
          ))}
        </div>
      </>

      <MultipleItemCarousel title={"Newly Arrived"} />

      <Testimonials />
      <Newsletter />

      <Footer />
    </main>
  );
}
