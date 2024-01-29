import { Button } from "@/components/ui/button";
import SingleProductCard from "@/components/website/single-product-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import HeroCarousel from "@/components/website/hero-carousel";
import banner from "../public/banners/1.png";
import MultipleItemCarousel from "@/components/website/multiple-item-carousel";
import OurServices from "@/components/website/our-services";
import Footer from "@/components/website/footer";
import Testimonials from "@/components/website/testimonials";

export default function Home() {
  return (
    <main className=" overflow-x-hidden">
      <Button variant="outline">Button</Button>
      <div className="">
        <HeroCarousel />
      </div>

      <div className=" grid grid-cols-5 gap-5">
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
        <SingleProductCard />
      </div>

      <div className="p-20">
        <MultipleItemCarousel />
      </div>

      <div className=" w-8/12 mx-auto">
        <OurServices />
      </div>

<Testimonials/>
      <Footer />
    </main>
  );
}
