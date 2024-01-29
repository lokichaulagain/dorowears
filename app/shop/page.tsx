import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import ProductTabs from "@/components/website/product-tabs";
import SingleProductCard from "@/components/website/single-product-card";
import React from "react";

export default function Page() {
  return (
    <div className="">
      <div className=" grid grid-cols-4 gap-5">
        <div className=" border border-neutral-300 rounded-lg p-2">
          <p className=" text-xl text-teal-600 font-semibold tracking-wider uppercase">Category</p>
          <Separator />

          <ScrollArea className=" h-96 ">
            {Array.from({ length: 10 }).map((_, index) => (
              <p
                className=" mt-2 text-sm tracking-wider font-medium text-neutral-700 cursor-pointer hover:text-teal-600 hover:translate-x-1 duration-300   "
                key={index}>
                Category Name
              </p>
            ))}
          </ScrollArea>
        </div>
        {Array.from({ length: 20 }).map((_, index) => (
          <SingleProductCard key={index} />
        ))}
      </div>
    </div>
  );
}
