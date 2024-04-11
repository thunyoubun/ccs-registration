import React from "react";

import { FaPhone } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";

export default function Direction() {
  return (
    <div className="flex flex-col h-fit bg-gradient-to-r from-red-700 to-blue-800 py-20 px-20">
      <div className="flex-1 ">
        <div className="flex justify-center">
          <h1 className=" text-3xl text-white  font-semibold">
            Event Direction & Information
          </h1>
        </div>

        <div className="w-full flex mt-16">
          <div className=" w-1/2 p-8  ">
            <div className="p-6 flex flex-col justify-center gap-4">
              <h1 className="text-white text-3xl font-semibold">Contact Us</h1>
              <h1 className="text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                temporibus hic autem quo quos voluptatem. Quod in molestiae
                suscipit ratione?
              </h1>

              <div className="flex gap-2 text-white">
                <GoLocation size={40} className="text-xl " />
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  quos beatae minus vero consequuntur illum nam excepturi nobis
                </h1>
              </div>
              <div className="flex gap-2 text-white">
                <FaPhone size={25} className=" inline" />
                <h1>(+66) 2-723-4900</h1>
              </div>
              <div className="flex gap-2 text-white">
                <MdOutlineMail size={25} className=" inline" />
                <h1>example@gmail.com</h1>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-8">
            <div className="bg-white h-full rounded-md p-6 shadow-lg">
              <div className="">
                <h1 className=" text-3xl font-semibold">Contact Form</h1>
              </div>
              <div>
                <div className="flex flex-col gap-4 mt-4">
                  <label htmlFor="" className="text-black font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="p-2 border border-gray-300 rounded-md"
                  />
                  <label htmlFor="" className="text-black font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="example@gmail.com"
                    className="p-2 border border-gray-300 rounded-md"
                  />
                  <label htmlFor="" className="text-black font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Subject"
                    className="p-2 border border-gray-300 rounded-md"
                  />
                  <label htmlFor="" className="text-black font-semibold">
                    Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    placeholder="Enter Message"
                    className="p-2 border border-gray-300 rounded-md"
                  ></textarea>
                  <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
