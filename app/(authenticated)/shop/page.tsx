"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import ProductTabs from "@/components/website/product-tabs";
import SingleProductCard from "@/components/website/single-product-card";
import axios from "axios";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AxiosInstance } from "@/app/(repositories)/config";
import { Suspense } from "react";

export default function Page() {
  const searchParams = useSearchParams();

  const search = searchParams.get("category");

  const [categories, setCategories] = useState<any>();
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await AxiosInstance.get("/categories");
        setCategories(res?.data?.data?.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  console.log(categories);

  const pathname = usePathname();

  console.log(pathname);

  console.log(pathname.split("/")[0]);

  const [currentCategory, setCurrentCategory] = useState<string | null>(search);
  console.log(currentCategory);

  const [products, setProducts] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const res = await AxiosInstance.get("/products", {
          params: {
            category: currentCategory,
          },
        });
        setProducts(res?.data?.data?.results);

        if (res?.data) {
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [currentCategory]);

  console.log(products);

  return (
    <div className="">
      <Suspense>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div className=" border border-neutral-300 rounded-lg p-2 hidden md:block">
            <p className=" text-xl text-primary-500 font-semibold tracking-wider uppercase">Category</p>
            <Separator />

            <ScrollArea className=" h-96  ">
              {categories?.map((category: any, index: number) => (
                <p
                  onClick={() => setCurrentCategory(category._id)}
                  className=" mt-1 text-sm tracking-wider font-medium text-neutral-700 cursor-pointer py-1.5 px-2 hover:bg-primary-500 hover:text-primary-200 hover:translate-x-1 duration-300   "
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

          {isLoading && (
            <>
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="border border-primary-100 rounded-xl p-2 text-neutral-700 space-y-1 cursor-pointer animate-pulse">
                  <div className=" h-72  bg-gray-300 rounded-xl"></div>

                  <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>

                  <div className="h-6 w-40 bg-gray-300 rounded mb-2"></div>

                  <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>

                  <div className=" flex items-center justify-between">
                    <div className="h-4 w-20 bg-gray-300 rounded"></div>

                    <div className="flex space-x-2">
                      <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                      <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </Suspense>
    </div>
  );
}
