"use client";
import React, { useState } from "react";

export default function SingleProductInfoTabs() {
  const [currentTab, setCurrentTab] = useState(headers[0]);

  return (
    <div className=" ">
      <div className=" flex space-x-20 text-neutral-700">
        {headers.map((item: string, index: any) => (
          <p
            onClick={() => setCurrentTab(item)}
            className={`${item === currentTab ? "text-primary-500 underline" : ""} hover:text-primary-500 duration-200  cursor-pointer uppercase tracking-wider font-medium text-lg`}
            key={index}>
            {item}
          </p>
        ))}
      </div>
      {currentTab === "description" && <Description />}
      {currentTab === "additional-info" && <AdditionalInfo />}
      {currentTab === "review" && <Review />}
    </div>
  );
}

const headers = ["description", "additional-info", "review"];

function Description() {
  return <div>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo expedita vel sed inventore dicta rem quasi modi suscipit iste, quisquam architecto aperiam asperiores possimus sit dolorem quaerat, atque unde eius.</div>;
}

function AdditionalInfo() {
  return <div>AdditionalInfo Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maxime illum in molestiae inventore aspernatur animi debitis odit, blanditiis aut molestias voluptatem illo similique voluptas non. Obcaecati tempore eaque itaque?</div>;
}

function Review() {
  return <div>Review Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates odio qui veniam. Soluta corrupti obcaecati, debitis temporibus libero alias illo corporis beatae optio reprehenderit ipsa, officia nihil quibusdam nemo.</div>;
}
