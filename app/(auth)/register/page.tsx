"use client";

export default function Page() {

  return (
    <div className=" md:px-0 px-4 flex py-10  justify-center items-center">
      <main className="  border rounded-md py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-lg mx-auto gap-12 justify-between flex flex-col lg:max-w-none">
            <div className="max-w-lg space-y-3">
              <h3 className=" text-2xl  text-black font-semibold ">Create an Account</h3>
              <p className="text-gray-700 text-sm ">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
            </div>
            <div className="flex-1  sm:max-w-lg lg:max-w-md">
              <form
                // onSubmit={(e) => e.preventDefault()}
                className="space-y-5">
                <div>
                  <input
                    type="text"
                    required
                    className=" placeholder:text-gray-500 placeholder:text-sm w-full  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-300  rounded-lg"
                    placeholder="User Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    className=" placeholder:text-gray-500 placeholder:text-sm w-full  px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-300  rounded-lg"
                    placeholder="Email"
                  />
                </div>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  className=" placeholder:text-gray-600 placeholder:text-sm  w-full px-3 py-2 mt-5 text-gray-500 bg-transparent outline-none border focus:border-primary-300  rounded-lg"
                />
                <input
                  type="password"
                  required
                  placeholder="Confirm Password"
                  className=" placeholder:text-gray-600 placeholder:text-sm  w-full px-3 py-2 mt-5 text-gray-500 bg-transparent outline-none border focus:border-primary-300  rounded-lg"
                />
                <div className=" flex gap-3 items-center">
                  <input
                    className=" h-4 w-4 cursor-pointer"
                    type="checkbox"
                  />
                  <h1 className=" text-gray-600 cursor-pointer">I agree to terms & Policy.</h1>{" "}
                </div>
                <button
                  type="submit"
                  className="  bg-primary-300 text-white px-10 py-2 rounded-md hover:bg-primary-300">
                  Submit & Register
                </button>
              </form>
              <div className=" my-5 flex items-center">
                <hr className=" h-1  w-full" />
                <span className=" text-gray-700">OR</span>
                <hr className=" h-1 w-full" />
              </div>
              <div className=" md:flex  gap-4">
                <button
                  type="submit"
                  className="  bg-[#3A5999]  hover:scale-105 duration-500 text-white px-5 py-2 rounded-md hover:bg-primary-300">
                  Login With Facebook
                </button>

                <button
                  type="submit"
                  className="  md:mt-0 mt-5 bg-[#D95041] hover:scale-105 duration-500 text-white px-5 py-2 rounded-md hover:bg-primary-300">
                  Login With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
