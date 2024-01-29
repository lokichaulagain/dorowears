"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React, { useState } from "react";
import SingleProductCard from "./single-product-card";
import { Separator } from "../ui/separator";

export default function MultipleItemCarousel({title}:any) {
  return (
    <div>
      <p className=" text-xl font-semibold  tracking-wider uppercase  text-teal-600">{title}</p>
      <div className=" flex mb-4 mt-1">
        <Separator />
      </div>
      <Carousel
        opts={{ align: "start", loop: false }}
        className="w-full">
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/4 hover:-translate-y-1 duration-300">
              <SingleProductCard />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" ms-20" />
        <CarouselNext className=" me-20  " />
      </Carousel>
    </div>
  );
}
