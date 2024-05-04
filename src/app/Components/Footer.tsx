import React from "react";
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";

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
            International CCUS Symposium: &apos;Supercritical&apos; Partways
            Toward Carbon Neutrality
          </h1>
        </div>
        <div className=" text-left text-sm">
          <h1 className="flex justify-center gap-2">
            <MdOutlineMail size={25} className="inline" />
            <div className="flex flex-col">
              <h1>natthanan.p@cmu.ac.th</h1>
              <h1>nuttha_utsaha@cmu.ac.th</h1>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
