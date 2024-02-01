"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import banner1 from "../../public/slider/slider-1.png";
import banner2 from "../../public/slider/slider-2.png";
import banner3 from "../../public/slider/slider-3.png";

export default function HeroCarousel() {
  return (
    <Carousel className=" ">
      <CarouselContent>
        {lists.map((item, index) => (
          <CarouselItem
            key={index}
            className=" flex flex-col md:flex-row items-center gap-4 ">
            <div className=" md:w-6/12 space-y-2 md:space-y-4 text-neutral-700 p-2">
              <p className=" text-lg md:text-2xl font-medium tracking-wider ">{item.title}</p>
              <p className="text-3xl md:text-5xl font-bold tracking-wider">{item.h1}</p>
              <p className={`${item.h2color} text-3xl  md:text-6xl font-bold tracking-wider text-opacity-90`}>{item.h2}</p>
              <p className=" tracking-wider text-neutral-700">{item.desc}</p>
            </div>

            <div className=" md:w-6/12">
              <Image
                src={item.img}
                alt="img"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" ms-20" />
      <CarouselNext className=" me-20" />
    </Carousel>
  );
}

const lists = [
  {
    title: "Upcoming Offer",
    h1: "Big  Deals From",
    h2: "Manufacturers",
    h2color: "text-pink-500",
    desc: "Save more than 20 % off with cupon card .",
    img: banner1,
    bgcolor: "text-green-50",
  },

  {
    title: "Trade-in Offer",
    h1: "Super value deals",
    h2: "On all products",
    h2color: "text-green-500",
    desc: "Save more than 20 % off with cupon card .",
    img: banner2,
    bgcolor: "text-teal-50",
  },

  {
    title: "Hot Promotion",
    h1: "Fashion Trending",
    h2: "Great Collection",
    h2color: "text-teal-500",
    desc: "Save more than 20 % off with cupon card .",
    img: banner3,
    bgcolor: "text-pink-50",
  },
];
