"use client";
import React from "react";
import Slider from "react-slick";
import PeopleCard from "../Components/PeopleCard";
import CardSlider from "../Components/CardSlider";

export default function Keynote() {
  const authorsData = [
    { name: "Author 1", image: "/author1.jpg", bio: "Bio of Author 1" },
    { name: "Author 2", image: "/author2.jpg", bio: "Bio of Author 2" },
    // เพิ่มข้อมูลผู้แต่งต่อไปตามต้องการ
  ];

  return (
    <div className="h-screen bg-gradient-to-r from-red-700 to-blue-800 pt-20 px-20">
      <div className="flex-1">
        <div className="flex justify-center">
          <h1 className=" text-3xl text-white  font-semibold">
            Keynote Speakers
          </h1>
        </div>

        {/* <div className="mt-8 flex gap-10 justify-center h-full ">
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
        </div> */}

        <div className=" w-full mt-8">
          <CardSlider />
        </div>
      </div>
    </div>
  );
}
