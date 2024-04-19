"use client";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Separator } from "@/components/ui/separator";
import shirt from "../../../public/products/shirt2.jpg";
import Image from "next/image";
import { Banknote, Minus, Plus, RefreshCcwDot, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import axios from "axios";

export default function SingleProductRightSection({ product }: any) {
  const [setselectedColor, setSetselectedColor] = useState(colors[0].className);
  const [selectedSize, setSelectedSize] = useState(sizes[0].name);

  console.log(product);


  const [currentCategory, setCurrentCategory] = useState<string>("");
  console.log(currentCategory);



  return (
    <>
      {product && (
        <div className=" text-neutral-700 space-y-3">
          <p className=" text-4xl font-medium tracking-wide">{product.name}</p>
          <div className=" flex items-center justify-between">
            <p className=" text-sm tracking-wide">
              {" "}
              {/* Brand: <span className=" text-primary-500"> Bootstrap</span> */}
            </p>
            <Rating
              style={{ maxWidth: 100 }}
              readOnly
              value={4.7}
            />
          </div>
          <Separator />
          <div className=" flex items-end gap-4">
            <p className=" text-3xl text-primary-300 font-medium">Rs.{product.sp}</p> <span className="line-through">Rs.{product.sp + 0.2 * product.sp}</span>
          </div>
          <Separator />
          <p className=" tracking-wider  leading-relaxed text-neutral-700"> {product.description}</p>
          <div className=" text-sm tracking-wider  text-neutral-700 space-y-4">
            <p className=" flex gap-1">
              <ShieldCheck size={18} />
              <span>High quality material </span>
            </p>

            <p className=" flex gap-1">
              <RefreshCcwDot size={18} />
              <span>30 Day Return Ploicy</span>
            </p>

            <p className=" flex gap-1">
              <Banknote size={18} />
              <span>10% od on every purchase</span>
            </p>
          </div>
          <RadioGroup
            defaultValue="comfortable"
            className="flex">
            {product.colors.split(",").map((color: any, index: number) => (
              <div
                key={index}
                className="flex items-center space-x-2">
                <RadioGroupItem
                  value={color.trim()}
                  id={`r${index + 1}`}
                  className={`bg-${color.toLowerCase()}-500 p-2.5 border-2 border-neutral-200 focus:border-primary-300`}
                />
              </div>
            ))}
          </RadioGroup>

          <div className="flex space-x-4 pt-3">
            {product.sizes.split(",").map((size: any, index: number) => (
              <div
                key={index}
                onClick={() => setSelectedSize(size.trim())}
                className={`${size.trim() === selectedSize ? "border bg-primary-350 rounded-sm" : "border rounded-sm"} p-1 min-w-12 cursor-pointer flex items-center justify-center`}>
                <p className={`${size.trim() === selectedSize ? "text-white" : "text-neutral-700"} rounded-sm uppercase font-medium`}>{size.trim()}</p>
              </div>
            ))}
          </div>

          {/* <div className=" flex items-center pt-3 gap-8">
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
              className=" bg-primary-350 text-white hover:bg-primary-300 hover:text-white py-5">
              Add to cart
            </Button>
          </div> */}
        </div>
      )}
    </>
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
