"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import ProductTabs from "@/components/website/product-tabs";
import SingleProductCard from "@/components/website/single-product-card";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [products, setProducts] = useState<any>();
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("https://lokibackend.webxnep.com/api/products");
        setProducts(res?.data?.data?.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  console.log(products);

  const [categories, setCategories] = useState<any>();
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:5010/api/categories", {
          params: {
            category: "661fbe6c8e9bb7874d516848"
          }
        });
        setCategories(res?.data?.data?.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  console.log(categories);



  

  return (
    <div className="">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div className=" border border-neutral-300 rounded-lg p-2">
          <p className=" text-xl text-primary-300 font-semibold tracking-wider uppercase">Category</p>
          <Separator />

          <ScrollArea className=" h-96  ">
            {categories?.map((category: any, index: number) => (
              <p
                className=" mt-2 text-sm tracking-wider font-medium text-neutral-700 cursor-pointer hover:text-primary-300 hover:translate-x-1 duration-300   "
                key={index}>
                {category.name}
              </p>
            ))}
          </ScrollArea>
        </div>
        {products?.map((product: any, index: number) => (
          <SingleProductCard
            key={index}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
