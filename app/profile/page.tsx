"use client";
import { useState } from "react";

export default function Page() {
  const [currentState, setCurrentState] = useState("dashboard");
  return (
    <div className="flex flex-col md:flex-row items-start gap-8 mt-12 ">
      <div className=" border w-full lg:w-3/12 ">
        {lists.map((item: any, index: number) => (
          <div
            key={index}
            onClick={() => setCurrentState(item.value)}
            className={`${currentState === item.value ? " bg-primary-300  text-primary-50" : ""} cursor-pointer`}>
            <p className=" p-3">{item.name}</p>
            <hr />
          </div>
        ))}
      </div>

      <div className="w-full lg:w-9/12">
        {currentState === "dashboard" && <Dashboard />}

        {currentState === "orders" && <Orders />}
        {currentState === "track-you-order" && <Track />}
      </div>
    </div>
  );
}

const lists = [
  {
    name: "Dashboard",
    value: "dashboard",
  },

  {
    name: "Orders",
    value: "orders",
  },

  {
    name: "Track Your Order",
    value: "track-you-order",
  },

  {
    name: "My Address",
    value: "my-address",
  },

  {
    name: "Account Detail",
    value: "account-detail",
  },
];

const Dashboard = () => {
  return (
    <div className=" py-10 flex  w-full">
      <div className=" flex flex-col border rounded-md">
        <div className=" bg-gray-100 border-b py-4">
          <span className=" text-gray-600 font-semibold px-8 ">Hello Rosie!</span>
        </div>
        <div className=" px-8 py-2">From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and edit your password and account details.</div>
      </div>
    </div>
  );
};

const Orders = () => {
  return (
    <div className=" py-9 flex justify-center items-center">
      <div className=" border  w-full  rounded-md">
        <div className=" flex flex-col gap-5">
          <div className=" bg-gray-100 px-4 py-2  text-xl text-black font-semibold">Your Orders</div>

          <div className="  border w-full ">
            <div className=" border-b md:grid hidden md:grid-cols-5 px-2">
              <span className=" px-1  md:border-r  py-2">Order</span>
              <span className=" px-1   md:border-r py-2">Date</span>
              <span className="  px-1  md:border-r  py-2">Status</span>
              <span className=" px-1   md:border-r py-2">Total</span>
              <span className="   px-1  py-2">Actions</span>
            </div>
            <div className=" border-b  grid md:grid-cols-5 px-2">
              <span className=" px-1  md:border-r py-2">#1357</span>
              <span className=" px-1   md:border-r py-2">March 45, 2020</span>
              <span className="  px-1  md:border-r  py-2">Processing</span>
              <span className=" px-1   md:border-r py-2">$125.00 for 2 item</span>
              <span className="   px-1  py-2">view</span>
            </div>

            <div className=" border-b grid md:grid-cols-5 px-2">
              <span className=" px-1  md:border-r py-2">#2468</span>
              <span className=" px-1   md:border-r py-2">June 29, 2020</span>
              <span className="  px-1  md:border-r  py-2">Completed</span>
              <span className=" px-1   md:border-r py-2">$364.00 for 5 item</span>
              <span className="   px-1  py-2">view</span>
            </div>

            <div className=" border-b grid md:grid-cols-5 px-2">
              <span className=" px-1  md:border-r py-2">#2366</span>
              <span className=" px-1   md:border-r py-2">August 02, 2020</span>
              <span className="  px-1  md:border-r  py-2">Completed</span>
              <span className=" px-1   md:border-r py-2">$280.00 for 3 item</span>
              <span className="   px-1  py-2">view</span>
            </div>

            <div className=" border-b grid md:grid-cols-5 px-2">
              <span className=" px-1  md:border-r py-2">#2468</span>
              <span className=" px-1   md:border-r py-2">June 29, 2020</span>
              <span className="  px-1  md:border-r  py-2">Completed</span>
              <span className=" px-1   md:border-r py-2">$364.00 for 5 item</span>
              <span className="   px-1  py-2">view</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Track = () => {
  return (
    <div className=" w-full border rounded-md py-14 ">
      <div className=" p-4">
        <div className=" mx-auto gap-12 justify-between flex flex-col ">
          <div className=" space-y-3">
            <h3 className=" text-2xl  text-black font-semibold ">Orders tracking</h3>
            <p className="text-gray-700 text-sm ">To track your order please enter your OrderID in the box below and press Track button. This was given to you on your receipt and in the confirmation email you should have received.</p>
          </div>
          <div className="flex-1   ">
            <form
              onSubmit={(e) => e.preventDefault()}
              className=" gap-5 grid md:grid-cols-1">
              <div>
                <label className="font-medium">Order ID</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-300 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Billing email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-300 shadow-sm rounded-lg"
                />
              </div>

              <button className=" bg-primary-300 text-white px-10 py-2 rounded-md hover:bg-primary-300">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
