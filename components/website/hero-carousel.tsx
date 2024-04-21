"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
// import banner1 from "../../public/slider/slider-1.png";
// import banner2 from "../../public/slider/slider-2.png";
// import banner3 from "../../public/slider/slider-3.png";

import banner1 from "../../public/herobanner/herobanner2.gif";
import banner2 from "../../public/herobanner/herobanner2.gif";
import banner3 from "../../public/herobanner/herobanner2.gif";
import Autoplay from "embla-carousel-autoplay";

import { EmblaOptionsType } from "embla-carousel";

export default function HeroCarousel() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className=" bg-primary-500 p-12 ">
      <CarouselContent>
        {lists.map((item, index) => (
          <CarouselItem
            key={index}
            className=" flex flex-col md:flex-row items-center justify-between gap-4 ">
            <div className=" w-full md:w-7/12 space-y-2 md:space-y-4 text-gray-200 md:p-2">
              <p className=" text-lg md:text-2xl font-medium tracking-wider ">{item.title}</p>
              <p className="text-3xl md:text-5xl font-bold tracking-wider">{item.h1}</p>
              <p className={`${item.h2color} text-3xl  md:text-6xl font-bold tracking-wider text-opacity-90`}>{item.h2}</p>
              <p className=" tracking-wider text-gray-200">{item.desc}</p>
            </div>

            <div className=" w-full md:w-4/12">
              <Image
                height={1000}
                width={1000}
                src={item.img}
                alt="img"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" ms-14" />
      <CarouselNext className=" me-14" />
    </Carousel>
  );
}

const lists = [
  {
    title: "Upcoming Offer",
    h1: "Big  Deals From",
    h2: "Manufacturers",
    h2color: "text-pink-500",
    desc: "Save more 10% on each purchase.",
    img: banner1,
    bgcolor: "text-green-50",
  },

  {
    title: "Trade-in Offer",
    h1: "Super value deals",
    h2: "On all products",
    h2color: "text-green-500",
    desc: "Save more 10% on each purchase.",
    img: banner2,
    bgcolor: "text-teal-50",
  },

  {
    title: "Hot Promotion",
    h1: "Fashion Trending",
    h2: "Great Collection",
    h2color: "text-teal-500",
    desc: "Save more 10% on each purchase.",
    img: banner3,
    bgcolor: "text-pink-50",
  },
];
