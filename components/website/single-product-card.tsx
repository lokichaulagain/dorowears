"use client";
import Image from "next/image";
import React, { useState } from "react";
import shirt1 from "../../public/products/shirt1.jpg";
import shirt2 from "../../public/products/shirt2.jpg";
import { EyeIcon, ShoppingCart } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function SingleProductCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState("comfortable");
  const handleColorChange = (value: any) => {
    setSelectedColor(value);
  };

  return (
    <div className="border border-primary-100 rounded-xl p-2 text-neutral-700 space-y-1 cursor-pointer  ">
      <Image
        src={isHovered ? shirt2 : shirt1}
        alt="img"
        className={`productImage rounded-xl`}
        layout="responsive"
        width={300}
        height={400}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <p className="text-neutral-500 text-sm tracking-wide">Clothing</p>

      <RadioGroup
        value={selectedColor}
        onChange={handleColorChange}
        defaultValue="comfortable"
        className=" flex ">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="default"
            id="r1"
            className="bg-red-500 p-2.5 border-2  border-neutral-200 focus:border-primary-300 "
          />
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="comfortable"
            id="r2"
            className="bg-black p-2.5 border-2  border-neutral-200 focus:border-primary-300 "
          />
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="compact"
            id="r3"
            className="bg-yellow-500 p-2.5 border-2  border-neutral-200 focus:border-primary-300 "
          />
        </div>
      </RadioGroup>

      <p>Colorful Pattern Shirts</p>
      <div className="flex items-center justify-between">
        <p>
          <span className="font-medium text-lg text-primary-300">$238.85</span> <span className="line-through text-sm">$245.8</span>
        </p>

        <div className="flex space-x-2">
          <div className="rounded-full border border-neutral-300 bg-primary-50 p-2 text-primary-300 cursor-pointer hover:bg-primary-300 hover:text-neutral-50 hover:-translate-y-1 duration-300">
            <ShoppingCart size={18} />
          </div>

          <div className="rounded-full border border-neutral-300 bg-primary-50 p-2 text-primary-300 cursor-pointer hover:bg-primary-300 hover:text-neutral-50 hover:-translate-y-1 duration-300">
            <EyeIcon size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
