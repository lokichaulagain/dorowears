"use client"
import Image from "next/image";
import LocationImage from "../../../public/Rectangle 58.png";
import { Contact } from "lucide-react";
// import LocationItem from '@/section/LocationItem/LocationItem'
// import LocationIcon from '../../../../image/Vector.png'
// import { FaSquareFacebook } from 'react-icons/fa6'
// import { FaTiktok } from 'react-icons/fa'
import React, { useEffect, useState } from "react";
import { AxiosInstance } from "@/app/(repositories)/config";

export default function Location() {
  const [branches, setbranches] = useState<any>();

  const [isLoading1, setIsLoading1] = useState<boolean>(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading1(true);
        const res = await AxiosInstance.get("/branches");
        console.log(res)

        setbranches(res?.data?.data?.results);

        if (res?.data) {
          setIsLoading1(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading1(false);
      } finally {
        setIsLoading1(false);
      }
    };
    fetch();
  }, []);

  console.log(branches)

  return (
    <div>
      <div
        style={{
          backgroundImage: "url('../../../../image/Rectangle 57.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full lg:flex-row flex-col flex justify-center lg:py-16 bg-primary">
        <div className="lg:basis-[25%] lg:h-[50vh] h-[30vh]">
          <Image
            className="w-full h-full object-cover"
            src={LocationImage}
            alt=""
          />
        </div>

        <div className="lg:basis-[60%] px-3 py-3 lg:px-0 lg:py-0 lg:pl-16">
          <h1 className="text-4xl font-semibold mb-2 text-white">Head Office</h1>
          <p className="text-lg text-darkWheat">Satdobato, Chapagaun Dobato, Kathmandu, Nepal</p>
          <div className="text-lg mb-4">
            <span className="mr-2 text-white">9801020304,</span>
            <span className="text-white">01-5544403</span>
          </div>

          <p className="text-white text-lg">We are the manufacture, we are the creator, we are the designer and we provide awesome shits.</p>
          <h3 className="text-white text-lg mt-4 mb-8">We are the Legacy.</h3>

          <div className="w-full flex lg:flex-row flex-col justify-between gap-2">
            <span className="flex">
              <Contact color="white" />
              <span className="ml-2 text-white">info@jackethouse.com</span>
            </span>

            <span className="flex items-center">
              {/* <FaSquareFacebook size={20} color="white" /> */}
              <span className="ml-2 text-white">Jacket House</span>
            </span>

            <span className="flex">
              {/* <InstagramIcon color="white" /> */}
              <span className="ml-2 text-white">1_jacket_house</span>
            </span>

            <span className="flex items-start">
              {/* <FaTiktok size={21} color="white" /> */}
              <span className="ml-2 text-white">Jacket House</span>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 w-[88%] mx-auto">
        <div className="flex items-center my-8">
          <div className="text-3xl lg:text-6xl font-bold mr-4 text-darkWheat">Search for location</div>
          {/* <Image sizes="80px" src={LocationIcon} alt="" /> */}
        </div>

      {branches?.map((branch:any,index:any)=>(
        <LocationItem branch={branch} key={index}/>
      ))  }
        <LocationItem />
        <LocationItem />
      </div>
    </div>
  );
}

function LocationItem({branch}:any) {
  return (
  <>
   {branch &&  <div className="w-full flex py-2 lg:px-8 lg:py-8 border-b-[1px] border-darkWheat items-center">
      <div className="  rounded-xl">
        <Image
          className="w-full h-full object-cover"
          height={1000}
          width={1000}
          src={branch.image}
          alt="img"
        />
      </div>

      <div className="h-32 bg-darkWheat opacity-30 w-[2px] mx-4 lg:mx-16"></div>

      <div className="w-full">
        <h3 className="font-semibold text-lg lg:text-2xl">{branch.name}</h3>
        <h5 className="text-sm lg:text-lg">{branch.address}</h5>
        <div className="text-sm lg:text-lg mb-4">
          <span className="mr-2">{branch.phone},</span>
        </div>

        <div className="w-full flex lg:flex-row flex-col gap-2 justify-between">
          <span className="flex">
            <Contact />
            <span className="ml-2">{branch.email}</span>
          </span>

          {/* <span className="flex items-center">
            <FaFacebookSquare size={20} />
            <span className="ml-2">Jacket House</span>
          </span> */}
{/* 
          <span className="flex">
            <InstagramIcon />
            <span className="ml-2 ">1_jacket_house</span>
          </span> */}

          {/* <span className="flex">
            <FaTiktok />
            <span className="ml-2">Jacket House</span>
          </span> */}
        </div>
      </div>
    </div>}
  </>
  );
}
