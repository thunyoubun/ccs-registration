"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

import axios from "axios";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { FaFax } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
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
      className="flex flex-col h-fit bg-gradient-to-r from-teal-500 to-blue-950 "
    >
      <div className="flex-1 md:m-20 m-6 ">
        <div className="flex flex-col">
          <h1 className=" text-3xl text-white  font-semibold text-center p-6">
            Venue
          </h1>
        </div>

        <div className="w-full mt-8 flex justify-center px-8 pb-8">
          <div className="w-full bg-white rounded-lg">
            <div className="text-center p-4">
              <h3 className="">
                <span className=" font-semibold">6 -7 June</span>, at room
                Nakorn Rangsit 1 - 2, Novotel Bangkok Future Park Rangsit,
                Bangkok, Thailand
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

        {/* <div className="w-full md:flex grid gap-8 ">
          <div className="w-full md:w-1/2 px-8  ">
            <div className="p-6 flex flex-col justify-center gap-4">
              <h1 className="text-white text-3xl font-semibold">
                Chiang Mai CCS
              </h1>
              <h1 className="text-white">
                (Chiang Mai Research Group for Carbon Capture and Storage)
              </h1>

              <div className="flex gap-2 text-white">
                <GoLocation size={25} className="text-xl " />
                <h1>Chiang Mai University, Chiang Mai 52000, Thailand</h1>
              </div>
              <div className="flex gap-2 text-white">
                <MdOutlineLocalPhone size={25} className=" inline" />
                <h1>053-944128</h1>
              </div>
              <div className="flex gap-2 text-white">
                <FaFax size={25} className="inline" />
                <h1>053-944186</h1>
              </div>
              <div className="flex gap-2 text-white">
                <MdOutlineMail size={25} className=" inline" />
                <div className="flex flex-col">
                  <h1>suparit.t@cmu.ac.th</h1>
                  <h1>natthanan.p@cmu.ac.th</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-8">
            <div className="bg-white h-full rounded-md p-6 shadow-lg">
              <div className="">
                <h1 className=" text-3xl font-semibold">Inquiry Form</h1>
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
                  {errors.name && (
                    <span className="text-sm text-red-500">
                      Please enter a valid name.
                    </span>
                  )}
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
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      Please enter a valid email.
                    </span>
                  )}
                  <label htmlFor="" className="text-black font-semibold">
                    Phone No. <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="string"
                    {...register("phone", {
                      required: true,
                      minLength: 10,
                      maxLength: 10,
                    })}
                    className="p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <span className="text-sm text-red-500">
                      Please enter a valid phone number.
                    </span>
                  )}
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
                  {errors.subject && (
                    <span className="text-sm text-red-500">
                      Please enter a valid subject.
                    </span>
                  )}
                  <label htmlFor="" className="text-black font-semibold">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    placeholder="Enter Message"
                    className="p-2 border border-gray-300 rounded-md"
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <span className="text-sm text-red-500">
                      Please enter a valid message.
                    </span>
                  )}
                  <button
                    type="submit"
                    className="bg-teal-400  hover:bg-teal-700 text-white font-semibold  p-2 rounded-md"
                  >
                    {sending ? "Sending..." : "Send"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
