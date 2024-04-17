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
    fetch()
  }, []);

  console.log(products)


  return (
    <main className=" space-y-10">
      <HeroCarousel />
      <OurServices />

      <div>
        {/* <ProductTabs /> */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
          {products?.map((product:any, index:number) => (
            <SingleProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="banner1  w-full p-12  tracking-wider text-neutral-700">
        <div className=" space-y-3 hidden md:block">
          <p className=" font-semibold text-primary-300">Exchange Services</p>
          <p className=" text-xl md:text-3xl  font-medium">
            We are an Apple <br />
            Authorised Service Provider
          </p>
          <div>
            <Link href={"shop"}>
              <Button className=" bg-primary-300 hover:bg-primary-300">Shop Now</Button>
            </Link>
          </div>
        </div>
      </div>

      <MultipleItemCarousel
        title1={"Newly"}
        title2={"Arrived"}
      />

      <div className="banner2  w-full p-12  tracking-wider text-neutral-700">
        <div className=" space-y-3 hidden md:block">
          <p className=" font-semibold text-primary-300">Exchange Services</p>
          <p className=" text-xl md:text-3xl  font-medium">
            We are an Apple <br />
            Authorised Service Provider
          </p>
          <div>
            <Link href={"shop"}>
              <Button className=" bg-primary-300 hover:bg-primary-300">Shop Now</Button>
            </Link>
          </div>
        </div>
      </div>

      <CarouselItemCarousel
        title1={"Our"}
        title2={"Categories"}
      />

      <div className=" flex gap-4">
        <div className="small-banner-1  w-full p-12  tracking-wider text-neutral-700">
          <div className=" space-y-3 hidden md:block">
            <p className=" font-semibold text-primary-300 text-sm">Exchange Services</p>
            <p className=" text-xl   font-medium">
              We are an Apple <br />
              Authorised Service
            </p>
            <div>
              <Link href={"shop"}>
                <Button className=" bg-primary-300 hover:bg-primary-300">Shop Now</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end small-banner-2 w-full p-12 tracking-wider text-neutral-700">
          <div className="space-y-3 hidden md:block text-right">
            <p className="font-semibold text-sm text-primary-300">Exchange Services</p>
            <p className="text-xl font-medium">
              We are an Apple <br />
              Authorised Service
            </p>
            <div>
              <Link href={"shop"}>
                <Button className=" bg-primary-300 hover:bg-primary-300">Shop Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />

      <div className=" flex gap-4">
        <div className="medium-banner-1  w-full p-12  tracking-wider text-neutral-700">
          <div className=" space-y-3 hidden md:block">
            <p className=" font-semibold text-primary-300 text-sm">Exchange Services</p>
            <p className=" text-xl   font-medium">
              We are an Apple <br />
              Authorised Service
            </p>
            <div>
              <Link href={"shop"}>
                <Button className=" bg-primary-300 hover:bg-primary-300">Shop Now</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center  medium-banner-2 w-full p-12 tracking-wider text-neutral-700">
          <div className="space-y-3 hidden md:block ">
            <p className="font-semibold text-sm text-primary-300">Exchange Services</p>
            <p className="text-xl font-medium">
              We are an Apple <br />
              Authorised Service
            </p>
            <div>
              <Link href={"shop"}>
                <Button className=" bg-primary-300 hover:bg-primary-300">Shop Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
