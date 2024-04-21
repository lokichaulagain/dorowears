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
import CarouselItemCarousel from "@/components/website/category-item-carousel";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

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
  }, [currentCategory, search]);

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
                  className={`${currentCategory === category._id ? "bg-primary-500 text-white " : "  text-neutral-700 cursor-pointer  hover:bg-primary-100 hover:text-primary-500 hover:translate-x-1 duration-300"} mt-1 text-sm tracking-wider font-medium py-1.5 px-2`}
                  key={index}>
                  {category.name}
                </p>
              ))}
            </ScrollArea>
          </div>

          <div className=" block sm:hidden">
            <Carousel>
              <p className=" text-xl font-semibold  tracking-wider uppercase  text-teal-500">
                Our <span className=" text-neutral-700 ">Categories</span>{" "}
              </p>

              <CarouselContent>
                {categories?.map((category: any, index: number) => (
                  <CarouselItem
                    key={index}
                    onClick={() => setCurrentCategory(category._id)}
                    className="basis-1/4 text-primary-100 mx-2 text-sm flex items-center justify-center flex-col mt-4 mb-4">
                    <Image
                      src={category.image}
                      alt="img"
                      height={100}
                      width={100}
                      className=" rounded-full bg-primary-100  h-14 w-14 object-cover"
                    />

                    <span className=" text-primary-500 text-xs font-medium mt-0.5 text-center">{category.name}</span>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className=" ms-10 bg-primary-300 text-white hover:bg-primary-350 hover:text-white" />
              <CarouselNext className=" me-10 bg-primary-300 text-white hover:bg-primary-350 hover:text-white" />
            </Carousel>
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
