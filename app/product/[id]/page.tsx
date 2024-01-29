"use client";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div>
      <div className=" w-6/12"></div>

      <div className=" w-6/12">
        <p>Colorful Pattern Shirts HD450</p>
        <div>
          Brands: Bootstrap
          <Rating
            style={{ maxWidth: 100 }}
            readOnly
            value={3}
          />
        </div>
        <Separator/>
        <p> <span className=" text-3xl text-teal-600 font-medium">$120.00</span> <span >$200.00 </span> </p>
        <Separator/>
      </div>
    </div>
  );
}
