"use client"
import Image from "next/image";
import LocationImage from "../../../public/Rectangle 58.png";
import { Contact, Facebook } from "lucide-react";
// import LocationItem from '@/section/LocationItem/LocationItem'
// import LocationIcon from '../../../../image/Vector.png'
// import { FaSquareFacebook } from 'react-icons/fa6'
// import { FaTiktok } from 'react-icons/fa'
import React, { useEffect, useState } from "react";
import { AxiosInstance } from "@/app/(repositories)/config";
import Link from "next/link";

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
        <div className=" h-80 w-80 ">
          <Image
            className="w-full h-full object-cover"
            src={LocationImage}
            alt=""
          />
        </div>

        <div className="lg:basis-[60%] px-3 py-3 lg:px-0 lg:py-0 lg:pl-16">
          <h1 className="text-4xl font-semibold mb-2 text-white">Head Office</h1>
          <p className="text-lg text-darkWheat">Jacket House, Lalitpur, Satdobato</p>
          <div className="text-lg mb-4">
            <span className="mr-2 text-white">9801020304,</span>
            <span className="text-white">01-5544403</span>
          </div>

          <p className="text-white text-lg">We are the manufacture, we are the creator, we are the designer and we provide awesome outfits.</p>
          {/* <h3 className="text-white text-lg mt-4 mb-8">We are the Legacy.</h3> */}

          <div className="w-full flex lg:flex-row flex-col justify-between gap-2 mt-8">
            <span className="flex">
              <Contact color="white" />
              <span className="ml-2 text-white">info@jackethouse.com</span>
            </span>

            <Link target="_blank" href={"https://www.facebook.com/jackethouse9/"}  className="flex items-center">
          <IconFacebook fontSize={24}  className=" text-primary-200"/>
              <span className="ml-2 text-white">Jacket House</span>
            </Link>

            <Link target="_blank" href={"https://www.instagram.com/jackets_house/"}  className="flex">
          <IconInstagram fontSize={24}  className=" text-primary-200"/>
              <span className="ml-2 text-white">jackets_house</span>
            </Link>

            {/* <span className="flex items-start">
              <FaTiktok size={21} color="white" />
              <span className="ml-2 text-white">Jacket House</span>
            </span> */}
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
      <div className=" h-56 w-80  rounded-xl">
        <Image
          className=" h-full w-full  object-cover"
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




function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z"
      />
    </svg>
  );
}



function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
    </svg>
  );
}

