"use client";
import Image from "next/image";
import React, { useState } from "react";
import shirt1 from "../../public/products/shirt1.jpg";
import shirt2 from "../../public/products/shirt2.jpg";
import { EyeIcon, ShoppingCart } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";

export default function SingleProductCard({ product }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState("comfortable");
  const handleColorChange = (value: any) => {
    setSelectedColor(value);
  };

  console.log(product);

  return (
    <>
      {product && (
        <div className="border border-primary-100 rounded-xl p-2 text-neutral-700 space-y-1 cursor-pointer  ">
          <Link href={`/product/${product.productId}`}>
          <div className=" h-72 ">
          <Image
              src={isHovered ? product.image : product.image}
              alt="img"
              className={`productImage rounded-xl object-cover `}
              layout="responsive"
              width={300}
              height={300}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
          </Link>

          <p className="text-neutral-500 text-sm tracking-wide">Clothing</p>

          <RadioGroup
            value={selectedColor}
            onChange={handleColorChange}
            defaultValue="comfortable"
            className="flex">
            {product.colors.split(",").map((color: any, index: number) => (
              <div
                key={index}
                className="flex items-center space-x-2">
                <RadioGroupItem
                  value={color.trim()}
                  id={`r${index + 1}`}
                  className={`bg-${color.toLowerCase()}-500 p-2.5 border-2 border-neutral-200 focus:border-primary-500`}
                />
              </div>
            ))}
          </RadioGroup>

          <p>{product.name}</p>
          <div className="flex items-center justify-between">
            <p>
              <span className="font-medium text-lg text-primary-500">Rs.{product.sp}</span> <span className="line-through text-sm  bg-opacity-90">Rs.{product.sp + 0.2 * product.sp}</span>
            </p>

            <div className="flex space-x-2">
              {/* <Link
                href={"/cart"}
                className="rounded-full border border-neutral-300 bg-primary-50 p-2 text-primary-500 cursor-pointer hover:bg-primary-500 hover:text-neutral-50 hover:-translate-y-1 duration-300">
                <ShoppingCart size={18} />
              </Link> */}

              <Link
                href={`/product/${product.productId}`}
                className="rounded-full border border-neutral-300 bg-primary-50 p-2 text-primary-500 cursor-pointer hover:bg-primary-500 hover:text-neutral-50 hover:-translate-y-1 duration-300">
                <EyeIcon size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
