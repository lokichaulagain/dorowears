"use client";
import { Delete, DeleteIcon, Home, Trash2 } from "lucide-react";
import React, { useState } from "react";
import shirt from "../../../public/products/shirt1.jpg";
import Image from "next/image";

export default function Page() {
  const [InputData, setInputData] = useState({
    val1: "",
    val2: "",
    val: "3",
  });

  return (
    <div className="max-w-screen-xl mx-auto text-neutral-700">
      <div className="mt-12  grid md:grid-cols-1  overflow-x-auto">
        <div className="w-full table-auto text-sm text-left">
          <div className="flex items-center justify-between font-semibold">
            <p className="py-3 px-6">Image</p>
            <p className="py-3 px-6">Name</p>
            <p className="py-3 px-6">Price</p>
            <p className="py-3 px-6">Quantity</p>
            <p className="py-3 px-6">Subtotal</p>
            <p className="py-3 px-6">Remove</p>
          </div>

          <div className=" border-b text-gray-600 divide-y">
            {/* first */}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                <span className=" h-20 w-20 cursor-pointer ">
                  <Image
                    src={shirt}
                    alt=""
                  />
                </span>
              </div>

              <div className=" w-80">
                <span className=" text-primary-300  font-semibold"> J.Crew Mercantile Womens Short-Sleeve</span>
                <span className="  text-sm"> Maboriosam in a tonto nesciung eget distingy magndapibus.</span>
              </div>

              <div className="px-6 py-4 whitespace-nowrap">$65.00</div>
              <div className="px-6 py-4 whitespace-nowrap">
                <input
                  min={0}
                  className=" px-4 placeholder:text-black w-16 h-10 border rounded-md outline-none"
                  type="number"
                  placeholder="1"
                />
              </div>
              <div className="px-6 py-4 whitespace-nowrap">$65.00</div>
              <div className=" whitespace-nowrap">
                <button className="py-2 leading-none px-6 font-medium  duration-150 hover:bg-gray-50 rounded-lg">
                  <Trash2 className=" text-red-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <div className=" mt-8 flex justify-end items-center">
          <div className=" flex  gap-5">
            <button className=" bg-primary-300 text-white px-10 py-2 rounded-md hover:bg-primary-300">Update Cart</button>
            <button className=" bg-primary-300 text-white px-10 py-2 rounded-md hover:bg-primary-300">Continue Shopping</button>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  );
}

const ContactSection = () => {
  return (
    <div className=" mt-10 flex justify-center">
      <div className=" md:flex md:gap-20 justify-center   items-center  py-5 border-t">
        <div className=" md:px-0 px-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className=" gap-5 grid md:grid-cols-2">
            <div>
              <label className="font-medium">Full name</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-300 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-300 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Phone</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-300 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Address</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-300 shadow-sm rounded-lg"
              />
            </div>

            <button className=" bg-primary-300 text-white px-10 py-2 rounded-md hover:bg-primary-300">Submit</button>
          </form>
        </div>

        <div className="  border md:w-[40vw] w-full  rounded-md">
          <div className=" py-10 px-5 flex flex-col gap-5">
            <div className="  text-xl text-black font-semibold">Cart Totals</div>
            <div className="   border w-full ">
              <div className=" grid md:grid-cols-2 px-2">
                <span className=" md:pr-44 md:border-r py-2">Cart Subtotal</span>
                <span className=" md:px-2 text-primary-300 font-bold py-2">$240.00</span>
              </div>

              <div className=" border-t grid md:grid-cols-2  px-2">
                <span className=" md:pr-52 md:border-r py-2">Shipping</span>
                <span className=" md:px-2  py-2">Free Shipping</span>
              </div>
              <div className="grid md:grid-cols-2 border-t px-2">
                <span className=" md:pr-60 md:border-r py-2">Total</span>
                <span className=" md:px-2 text-xl text-primary-300 font-bold py-2">$240.00</span>
              </div>
            </div>
            <button className=" w-max bg-primary-300 text-white px-10 py-2 rounded-md hover:bg-primary-300">Proceed To CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  );
};
