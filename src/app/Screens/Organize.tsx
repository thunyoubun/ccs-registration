"use client";
import React from "react";
import Image from "next/image";

export default function Organize() {
  return (
    <div className="md:h-fit h-fit bg-white flex flex-col gap-8">
      <div className="md:m-20  m-8  flex-1  ">
        <div className="flex justify-center">
          <h1 className=" text-3xl text-teal-400  font-semibold">
            Co-Organized By
          </h1>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1   m-4 items-baseline justify-items-center   justify-center gap-8">
          <div className="  flex flex-col gap-4 text-center items-center">
            <Image
              src={"/images/organizes/TCCA_logo_color.png"}
              width={320}
              height={160}
              alt="cmu-logo"
              className=" object-contain h-40 w-80"
            />
            <h2 className=" text-black text-base font-normal">
              Thailand CCUS Alliance
            </h2>
          </div>
          <div className=" flex flex-col gap-4 text-center items-center">
            <Image
              src={"/images/sponsors/logo-nano.png"}
              width={320}
              height={160}
              alt="NANOTEC-logo"
              className=" object-contain h-40 w-80"
            />
            <h2 className=" text-black text-base font-normal">
              National Nanotechnology Center (NANOTEC)
            </h2>
          </div>
          <div className=" flex flex-col gap-4 text-center items-center">
            <Image
              src={"/images/organizes/CCS-RC.png"}
              width={320}
              height={160}
              alt="ccs-logo"
              className=" object-contain h-40 w-80"
            />
            <h2 className=" text-black text-base font-normal">
              Chiang Mai Research Group for Carbon Capture and Storage
            </h2>
          </div>
        </div>
        <div className=" mt-8  flex-1 ">
          <div className="flex justify-center">
            <h1 className=" text-3xl text-teal-400  font-semibold">Sponsor</h1>
          </div>
          <div className="grid md:grid-cols-1 grid-cols-1   m-4    items-center justify-items-center  justify-center gap-8 ">
            <div className="flex flex-col gap-4 text-center items-center">
              <Image
                src={"/images/sponsors/Sponsor_SCG.jpg"}
                alt={"SCG-logo"}
                width={400}
                height={400}
                className=" object-contain h-40 w-80"
              />
              <h2 className=" text-black text-base font-normal">
                SCG Cement & Green Solutions
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
