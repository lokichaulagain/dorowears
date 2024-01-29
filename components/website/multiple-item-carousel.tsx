"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React, { useState } from "react";
import SingleProductCard from "./single-product-card";

export default function MultipleItemCarousel() {
  return (
    <Carousel
      opts={{ align: "start", loop: false }}
      className="w-full">
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/6 hover:-translate-y-1 duration-300">
            <SingleProductCard />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -top-10 left-full " />
      <CarouselNext className="absolute -top-10 right-5  " />
    </Carousel>
  );
}
