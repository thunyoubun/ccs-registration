"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

import axios from "axios";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Direction() {
  const [secondDate, setSecondDate] = useState<boolean>(false);

  const [sending, setSending] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    setSending(true);
    console.log(data);
    axios
      .post("/api/email", data)
      .then((response) => {
        if (response.status === 200) {
          setSending(false);
          reset();
          Swal.fire({
            icon: "success",
            title: "Email Sent",
            text: "Thank you for contacting us",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          setSending(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Please try again later",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later",
        });
        setSending(false);
      });
  }
  return (
    <div
      id="direction"
      className="flex flex-col h-fit bg-gradient-to-r from-red-700 to-blue-800 "
    >
      <div className="flex-1 md:m-20 m-8 ">
        <div className="flex flex-col">
          <h1 className=" text-3xl text-white  font-semibold text-center p-6">
            Event Direction & Information
          </h1>
        </div>

        <div className="w-full mt-8 flex justify-center px-8 pb-8">
          <div className="w-full bg-white rounded-lg">
            {/* Google Map */}
            {/* <div className="p-4 rounded-t-lg bg-white grid grid-cols-1 gap-3 sm:grid-cols-6 rounded-tl-lg">
              <button
                onClick={() => setSecondDate(false)}
                className={`${
                  !secondDate
                    ? "bg-red-600 text-white rounded shadow-lg"
                    : "text-black"
                } p-3 rounded-lg flex justify-center text-center col-span-3`}
                disabled={!secondDate}
              >
                <h1 className="text-xl font-semibold">6 JUNE</h1>
              </button>
              <button
                onClick={() => setSecondDate(true)}
                className={`${
                  secondDate
                    ? "bg-red-600 text-white rounded shadow-lg"
                    : "text-black"
                } p-3 rounded-lg flex justify-center text-center col-span-3`}
                disabled={secondDate}
              >
                <h1 className="text-xl font-semibold">7 JUNE</h1>
              </button>
            </div> */}
            <div className="text-center p-4">
              <h3 className="">
                <span className=" font-semibold">6 -7 June</span>, At Novotel
                Bangkok Future Park Rangsit, Bangkok, Thailand
              </h3>
            </div>
            <div className="mx-4 mb-4 md:h-fit h-72 relative ">
              {!secondDate ? (
                <iframe
                  className="  w-full md:h-96 h-full   "
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15485.547317181567!2d100.6167955!3d13.9950625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30de1168e62e2101%3A0x9da7a57659ec3960!2z4LmC4LiZ4LmC4Lin4LmA4LiX4LilIOC4geC4o-C4uOC4h-C5gOC4l-C4niDguJ_guLTguKfguYDguIjguK3guKPguYzguJ7guLLguKPguYzguIQg4Lij4Lix4LiH4Liq4Li04LiV!5e0!3m2!1sth!2sth!4v1712834003533!5m2!1sth!2sth"
                  width="640"
                  height="480"
                  loading="lazy"
                ></iframe>
              ) : (
                <iframe
                  className="  w-full md:h-96 h-full  "
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15107.094760451677!2d98.9546953!3d18.8082363!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a68355ea91f%3A0xd393197b614f8352!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI!5e0!3m2!1sth!2sth!4v1712834180863!5m2!1sth!2sth"
                  width="640"
                  height="480"
                  loading="lazy"
                ></iframe>
              )}
            </div>
          </div>
        </div>

        <div className="w-full md:flex grid gap-8 ">
          <div className="w-full md:w-1/2 px-8  ">
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
                <MdOutlineLocalPhone size={25} className=" inline" />
                <h1>(+66) 2-723-4900</h1>
              </div>
              <div className="flex gap-2 text-white">
                <MdOutlineMail size={25} className=" inline" />
                <h1>example@gmail.com</h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-8">
            <div className="bg-white h-full rounded-md p-6 shadow-lg">
              <div className="">
                <h1 className=" text-3xl font-semibold">Contact Form</h1>
              </div>
              <div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-2 mt-4"
                >
                  <label htmlFor="" className="text-black font-semibold">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Enter Name"
                    className="p-2 border border-gray-300 rounded-md"
                    {...register("name")}
                  />
                  {errors.name && <span className="text-sm text-red-500">Please enter a valid name.</span>}
                  <label htmlFor="" className="text-black font-semibold">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    type="text"
                    placeholder="example@gmail.com"
                    className="p-2 border border-gray-300 rounded-md"
                    {...register("email")}
                  />
                  {errors.email && <span className="text-sm text-red-500">Please enter a valid email.</span>}
                  <label htmlFor="" className="text-black font-semibold">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("subject", { required: true })}
                    type="text"
                    placeholder="Enter Subject"
                    className="p-2 border border-gray-300 rounded-md"
                    {...register("subject")}
                  />
                  {errors.subject && <span className="text-sm text-red-500">Please enter a valid subject.</span>}
                  <label htmlFor="" className="text-black font-semibold">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    placeholder="Enter Message"
                    className="p-2 border border-gray-300 rounded-md"
                    {...register("message")}
                  ></textarea>
                  {errors.message && <span className="text-sm text-red-500">Please enter a valid message.</span>}
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md"
                  >
                    {sending ? "Sending..." : "Send"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
