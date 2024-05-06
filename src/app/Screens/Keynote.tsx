"use client";
import React from "react";
import CardSlider from "../Components/CardSlider";

export default function Keynote() {
  return (
    <div
      id="keynote-speakers"
      className=" h-fit bg-gradient-to-r from-teal-500 to-blue-950  p-8 md:p-20"
    >
      <div className="flex-1  ">
        <div className="flex justify-center">
          <h1 className=" text-3xl text-white  font-semibold">Speakers</h1>
        </div>

        <div className=" w-full mt-8">
          <CardSlider />
        </div>
      </div>
    </div>
  );
}
