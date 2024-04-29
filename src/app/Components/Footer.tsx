import React from "react";
import Image from "next/image";
import { MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-white h-fit flex justify-center items-center">
      <div className="m-4 w-full  flex flex-col gap-4 items-center justify-center">
        <Image
          src="/images/css-logo-remove.jpg"
          width={200}
          height={200}
          alt={"css-logo"}
        />
        <div className=" text-center text-sm">
          <h1>
          International CCS Symposium: A ‘Supercritical’ Research Toward Industrial Solution
          </h1>
        </div>
        <div className=" text-center text-sm">
          <h1 className="flex justify-center">
            <MdOutlineLocalPhone size={25} className=" inline" /> (+66)
            2-723-4900
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
