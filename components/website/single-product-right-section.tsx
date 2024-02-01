"use client";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Separator } from "@/components/ui/separator";
import shirt from "../../../public/products/shirt2.jpg";
import Image from "next/image";
import { Banknote, Minus, Plus, RefreshCcwDot, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SingleProductRightSection() {
  const [setselectedColor, setSetselectedColor] = useState(colors[0].className);
  const [selectedSize, setSelectedSize] = useState(sizes[0].name);
  return (
    <div className=" text-neutral-700 space-y-3">
      <p className=" text-4xl font-medium tracking-wide">Colorful Pattern Shirts HD450</p>
      <div className=" flex items-center justify-between">
        <p className=" text-sm tracking-wide">
          {" "}
          Brand: <span className=" text-primary-500"> Bootstrap</span>
        </p>
        <Rating
          style={{ maxWidth: 100 }}
          readOnly
          value={3}
        />
      </div>
      <Separator />
      <div className=" flex items-end gap-4">
        <p className=" text-3xl text-primary-300 font-medium">$120.00</p> <span>$200.00 </span>
      </div>
      <Separator />
      <p className=" tracking-wider  leading-relaxed text-neutral-700"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt eius earum excepturi nemo qui,  asperiores quis  quam est cupiditate!</p>
      <div className=" text-sm tracking-wider  text-neutral-700 space-y-4">
        <p className=" flex gap-1">
          <ShieldCheck size={18} />
          <span>1 Year Brand Warrenty </span>
        </p>

        <p className=" flex gap-1">
          <RefreshCcwDot size={18} />
          <span>30 Day Return Ploicy</span>
        </p>

        <p className=" flex gap-1">
          <Banknote size={18} />
          <span>Cash on Delivery</span>
        </p>
      </div>
      <div className=" flex space-x-4 pt-3">
        {colors.map((item: any, index: any) => (
          <div
            key={index}
            onClick={() => setSetselectedColor(item.className)}
            className={`${item.className === setselectedColor ? "border-2  border-primary-500 rounded-full" : ""} h-8 w-8  cursor-pointer  flex items-center justify-center `}>
            <div className={`${item.className}  h-6 w-6  rounded-full `}></div>
          </div>
        ))}
      </div>
      <div className=" flex space-x-4 pt-3">
        {sizes.map((item: any, index: any) => (
          <div
            key={index}
            onClick={() => setSelectedSize(item.name)}
            className={`${item.name === selectedSize ? "border  bg-primary-500 rounded-sm  " : " border rounded-sm "} p-1 min-w-12  cursor-pointer  flex items-center justify-center `}>
            <p className={`${item.className} ${item.name === selectedSize && "text-white"}    rounded-sm uppercase font-medium text-neutral-700 `}>{item.name}</p>
          </div>
        ))}
      </div>
      <div className=" flex items-center pt-3 gap-8">
        <div className=" flex items-center text-neutral-700 gap-2 border rounded-sm p-1">
          <Minus
            size={20}
            className=" cursor-pointer"
          />
          <input
            type="number"
            defaultValue={1}
            className=" w-12 px-2   rounded-sm border-0  "
          />
          <Plus
            size={18}
            className=" cursor-pointer"
          />
        </div>
        <Button
          variant="outline"
          className=" bg-primary-500 text-white hover:bg-primary-300 hover:text-white py-5">
          Add to cart
        </Button>
      </div>
    </div>
  );
}

const colors = [
  {
    name: "red",
    className: "bg-green-500",
  },

  {
    name: "red",
    className: "bg-red-500",
  },

  {
    name: "red",
    className: "bg-yellow-500",
  },

  {
    name: "red",
    className: "bg-blue-500",
  },

  {
    name: "red",
    className: "bg-purple-500",
  },

  {
    name: "red",
    className: "bg-gray-500",
  },
];

const sizes = [
  {
    name: "m",
  },

  {
    name: "xl",
  },

  {
    name: "lg",
  },

  {
    name: "xxl",
  },

  {
    name: "xm",
  },

  {
    name: "xxxl",
  },
];
