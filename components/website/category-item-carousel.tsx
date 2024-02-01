"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import React, { useState } from "react";
import shirt1 from "../../public/products/shirt1.jpg";
import shirt2 from "../../public/products/shirt2.jpg";
import { Separator } from "../ui/separator";

export default function CarouselItemCarousel({ title1, title2 }: any) {
  return (
    <div>
      <p className=" text-xl font-semibold  tracking-wider uppercase  text-primary-300">
        {" "}
        {title1} {""}
        <span className=" text-neutral-700">{title2}</span>{" "}
      </p>
      <div className=" flex mb-4 mt-1">
        <Separator />
      </div>
      <Carousel
        opts={{ align: "start", loop: false }}
        className="w-full">
        <CarouselContent className="">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/4 hover:-translate-y-1 duration-300">
              <SingleCategoryCard />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" ms-20 bg-primary-300 text-white hover:bg-primary-350 hover:text-white" />
        <CarouselNext className=" me-20 bg-primary-300 text-white hover:bg-primary-350 hover:text-white" />
      </Carousel>
    </div>
  );
}

function SingleCategoryCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="border   border-primary-100 rounded-xl p-2 text-neutral-700 space-y-1 cursor-pointer  ">
      <Image
        src={isHovered ? shirt2 : shirt1}
        alt="img"
        className="productImage rounded-xl   object-cover "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <p className=" bg-primary-100 p-1 text-neutral-700 rounded-sm text-center  font-medium tracking-wider  text-lg">Clothing</p>
    </div>
  );
}
