"use client";
import "@smastrom/react-rating/style.css";
import shirt from "../../../../public/products/shirt2.jpg";
import Image from "next/image";
import SingleProductRightSection from "@/components/website/single-product-right-section";
import SingleProductInfoTabs from "@/components/website/single-product-info-tabs";
import MultipleItemCarousel from "@/components/website/multiple-item-carousel";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { AxiosInstance } from "@/app/(repositories)/config";

export default function Page() {
  const params = useParams();
  console.log(params);
  const [product, setProduct] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const res = await AxiosInstance.get(`/products/${params?.id}`);
        console.log(res);
        setProduct(res?.data?.data);

        if (res?.data) {
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [params.id]);

  console.log(product);


  const [products, setProducts] = useState<any>();
  const [isLoading1, setIsLoading1] = useState<boolean>(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading1(true);
        const res = await AxiosInstance.get("/products", {
          params: {
            category: product?.category,
          },
        });
        setProducts(res?.data?.data?.results);

        if (res?.data) {
          setIsLoading1(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [product]);

  console.log(products);

  return (
    <>
      {product && (
        <div className="">
          <div className=" grid grid-cols-1  lg:grid-cols-2 gap-8">
            <div className="">
              <Image
                height={1000}
                width={1000}
                src={product.image}
                alt="img"
              />
            </div>
            <SingleProductRightSection product={product} />
          </div>
          {/* <div className=" mt-12">
            <SingleProductInfoTabs  />
          </div> */}
        </div>
      )}

      <div className=" mt-12">
        <MultipleItemCarousel
          title1={"Similar"}
          title2={"Products"}
          products={products}
        />
      </div>
    </>
  );
}
