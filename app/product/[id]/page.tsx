"use client";
import "@smastrom/react-rating/style.css";
import shirt from "../../../public/products/shirt2.jpg";
import Image from "next/image";
import SingleProductRightSection from "@/components/website/single-product-right-section";
import SingleProductInfoTabs from "@/components/website/single-product-info-tabs";
import MultipleItemCarousel from "@/components/website/multiple-item-carousel";

export default function Page() {
  return (
    <>
      <div className=" grid grid-cols-2 gap-8">
        <div className="">
          <Image
            src={shirt}
            alt="img"
          />
        </div>
        <SingleProductRightSection />
      </div>
      <SingleProductInfoTabs />

      <MultipleItemCarousel title={"Similar Products"} />


    </>
  );
}
