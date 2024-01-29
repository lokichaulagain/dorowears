"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

export default function ProductTabs() {
  const [currentCategory, setCurrentCategory] = useState("all");

  return (
    <div className=" space-x-4 ">
      {categories.map((item: any, index: number) => (
        <Button
          key={index}
          onClick={() => setCurrentCategory(item.value)}
          variant="outline"
          className={`${item.value === currentCategory ? "bg-orange-200 text-teal-600" : "bg-gray-200"}  hover:bg-orange-200 hover:text-teal-600 px-8 py-5 text-neutral-700`}>
          {item.name}
        </Button>
      ))}
    </div>
  );
}

const categories = [
  {
    name: "All",
    value: "all",
  },

  {
    name: "Featured",
    value: "featured",
  },

  {
    name: "Popular",
    value: "popular",
  },

  {
    name: "New Added",
    value: "new-added",
  },
];
