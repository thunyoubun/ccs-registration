"use client";
import React from "react";
import Image from "next/image";

export default function Organize() {
  return (
    <div className="md:h-fit h-fit bg-white flex flex-col">
      <div className="md:m-20  m-8  flex-1 ">
        <div className="flex justify-center">
          <h1 className=" text-3xl text-black  font-semibold">Organized By</h1>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1   m-4    items-center justify-items-center  justify-center gap-8 ">
          <div className=" w-1/2 flex flex-col gap-4 text-center items-center">
            <Image
              src={"/images/organizes/TCCA_logo_color.png"}
              width={200}
              height={200}
              alt="cmu-logo"
            />
            <h1 className="text-teal-400  text-xl font-semibold">
              Co-Organized{" "}
            </h1>
            <h2 className=" text-black text-base font-normal">
              Thailand CCUS Alliance
            </h2>
          </div>
          <div className=" w-1/2 flex flex-col gap-4 text-center items-center">
            <Image
              src={"/images/organizes/CCS-RC.png"}
              width={400}
              height={400}
              alt="ccs-logo"
            />
            <h1 className="text-teal-400 text-xl font-semibold">
              Co-Organized{" "}
            </h1>
            <h2 className=" text-black text-base font-normal">
              Chiang Mai Carbon Capture & Storage
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
