"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import SingleProductCard from "./single-product-card";
import Image from "next/image";
import banner from "../../public/banners/1.png";

export default function HeroCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className=" bg-teal-100">
                <Image
                  src={banner}
                  alt="img"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" ms-20" />
      <CarouselNext className=" me-20"  />
    </Carousel>
  );
}
