import React from "react";
import { FaPhone } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-white h-44 flex justify-center">
      <div className="m-10 flex flex-col gap-4 items-center justify-center">
        <div className="flex gap-2">
          <div className=" bg-red-600 w-16 h-16"></div>
          <div className="w-fit flex flex-col">
            <h1 className=" font-semibold text-5xl ">ICITEE 2024</h1>
            <h2 className=" font-medium text-xs tracking-tighter">
              International Conference on Information Technology and Electrical
              Engineering
            </h2>
          </div>
        </div>
        <div className=" text-center text-sm">
          <h1>
            15th International Conference on Information Technology and
            Electrical Engineering
          </h1>
        </div>
        <div className=" text-center text-sm">
          <h1 className="flex justify-center">
            <FaPhone size={25} className=" inline" /> (+66) 2-723-4900
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
