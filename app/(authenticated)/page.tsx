"use client";
import HeroCarousel from "@/components/website/hero-carousel";
import MultipleItemCarousel from "@/components/website/multiple-item-carousel";
import OurServices from "@/components/website/our-services";
import Newsletter from "@/components/website/newsletter";
import { Button } from "@/components/ui/button";
import CarouselItemCarousel from "@/components/website/category-item-carousel";
import ProductTabs from "@/components/website/product-tabs";
import SingleProductCard from "@/components/website/single-product-card";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { AxiosInstance } from "../(repositories)/config";

export default function Page() {
  const [products, setProducts] = useState<any>();

  const [isLoading, setisLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setisLoading(true);
        const res = await AxiosInstance.get("/products", {
          params: {
            category: "",
          },
        });
        setProducts(res?.data?.data?.results);
        setisLoading(false);
      } catch (error) {
        console.log(error);
        setisLoading(false);
      }finally{
        setisLoading(false);
      }
    };
    fetch();
  }, []);

  console.log(products);

  const newProducts = products?.slice(0, 10);

  return (
    <main className=" space-y-10">
      <HeroCarousel />
      <OurServices />

      <div>
        {/* <ProductTabs /> */}

        <p className=" text-xl font-semibold  tracking-wider uppercase  text-pink-500">
        {" "}
       Explore
        <span className=" text-neutral-700"> Our Products</span>{" "}
      </p>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
          {products?.map((product: any, index: number) => (
            <SingleProductCard
              key={index}
              product={product}
            />
          ))}







        </div>

        {isLoading && (
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
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
          </div>
        )}
      </div>

      <div className="banner1  w-full p-12  tracking-wider text-primary-700  h-64">
        {/* <div className=" space-y-3 hidden md:block">
          <p className=" font-semibold text-primary-300">Exchange Services</p>
          <p className=" text-xl md:text-3xl  font-medium">
            We are an Apple <br />
            Authorised Service Provider
          </p>
          <div>
            <Link href={"shop"}>
              <Button className=" bg-primary-500 hover:bg-primary-600">Shop Now</Button>
            </Link>
          </div>
        </div> */}
      </div>

      <MultipleItemCarousel
        title1={"Newly"}
        title2={"Arrived"}
        products={newProducts}
      />

      <div className="banner2  w-full p-12  tracking-wider text-primary-700 h-72">
        {/* <div className=" space-y-3 hidden md:block">
          <p className=" font-semibold text-primary-300">Exchange Services</p>
          <p className=" text-xl md:text-3xl  font-medium">
            We are an Apple <br />
            Authorised Service Provider
          </p>
          <div>
            <Link href={"shop"}>
              <Button className=" bg-primary-500 hover:bg-primary-600">Shop Now</Button>
            </Link>
          </div>
        </div> */}
      </div>

      <CarouselItemCarousel
        title1={"Our"}
        title2={"Categories"}
      />

      <div className=" flex gap-4">
        <div className="small-banner-1  w-full p-12  tracking-wider text-primary-700 bg-primary-100">
          <div className=" space-y-3 hidden md:block">
            <p className=" font-semibold text-primary-300 text-sm">  We value our member </p>
            <p className=" text-xl   font-medium">
              Become a member  <br />
            and get up to 10% off
            </p>
            <div>
              <Link href={"shop"}>
                <Button className=" bg-primary-500 hover:bg-primary-600">Shop Now</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end small-banner-2 w-full p-12 tracking-wider text-primary-100 bg-primary-500">
          <div className="space-y-3 hidden md:block text-right">
            <p className="font-semibold text-sm text-primary-100">Exchange Services</p>
            <p className="text-xl font-medium">
             We also offer exchange <br />
           service
            </p>
            <div>
              <Link href={"shop"}>
                <Button className=" text-primary-500 hover:text-primary-500" variant={"outline"}>Shop Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <Newsletter /> */}

      {/* <div className=" flex gap-4">
        <div className="medium-banner-1  w-full p-12  tracking-wider text-primary-700">
          <div className=" space-y-3 hidden md:block">
            <p className=" font-semibold text-primary-300 text-sm">Exchange Services</p>
            <p className=" text-xl   font-medium">
              We are an Apple <br />
              Authorised Service
            </p>
            <div>
              <Link href={"shop"}>
                <Button className=" bg-primary-500 hover:bg-primary-600">Shop Now</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center  medium-banner-2 w-full p-12 tracking-wider text-primary-700">
          <div className="space-y-3 hidden md:block ">
            <p className="font-semibold text-sm text-primary-300">Exchange Services</p>
            <p className="text-xl font-medium">
              We are an Apple <br />
              Authorised Service
            </p>
            <div>
              <Link href={"shop"}>
                <Button className=" bg-primary-500 hover:bg-primary-600">Shop Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
