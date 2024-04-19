"use client";
import React from "react";

export default function Page() {
  return (
    <div className=" md:px-0 px-4   my-20 flex justify-center items-center ">
      <div className=" flex    border rounded-md">
        <div className="flex-col gap-5 md:px-8 px-2 py-10">
          <h1 className=" text-2xl  text-black font-semibold mb-4">Login</h1>
          <input
            type="email"
            name="email"
            required
            className=" placeholder:text-gray-600 placeholder:text-sm w-full  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-300  rounded-lg"
            placeholder="Your Email"
          />
          <input
            type="password"
            required
            placeholder="Password"
            className=" placeholder:text-gray-600 placeholder:text-sm  w-full px-3 py-2 mt-5 text-gray-500 bg-transparent outline-none border focus:border-primary-300  rounded-lg"
          />
          <div className=" flex  justify-between   items-center  py-4">
            <div className=" flex gap-3 items-center">
              <input
                className=" h-4 w-4 cursor-pointer"
                type="checkbox"
              />
              <h1 className=" text-gray-600 cursor-pointer">Remember me</h1>{" "}
            </div>
            <div className=" text-gray-500 text-sm cursor-pointer">Forgot password?</div>
          </div>
          <button
            type="submit"
            className="  bg-primary-300 text-white px-10 py-2 rounded-md hover:bg-primary-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
