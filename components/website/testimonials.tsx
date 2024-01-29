import React from "react";
import Marquee from "react-fast-marquee";
import SingleProductCard from "./single-product-card";

export default function Testimonials() {
  return (
    <Marquee autoFill={true} pauseOnHover={true} pauseOnClick={true} loop={0}>
          <div className="grid grid-cols-6 gap-8">
      {testimonials.map((item, idx) => (
        <div
          key={idx}
          className="bg-gray-100 p-4 rounded-xl">
          <figure>
            <div className="flex items-center gap-x-4">
              <img
                src={item.avatar}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <span className="block text-gray-800 font-semibold">{item.name}</span>
                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
              </div>
            </div>
            <blockquote>
              <p className="mt-6 text-gray-700">{item.quote}</p>
            </blockquote>
          </figure>
        </div>
      ))}
      </div>
    </Marquee>
  );
}

const testimonials = [
  {
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    name: "Martin escobar",
    title: "Founder of meta",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Angela stian",
    title: "Product designer",
    quote: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Karim ahmed",
    title: "DevOp engineer",
    quote: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
  },
];
