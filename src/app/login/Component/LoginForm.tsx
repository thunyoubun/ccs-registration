"use client";
import router from "next/router";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { headers } from "next/headers";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "/api/auth/login",
        {
          username: email,
          password: password,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        Swal.fire({
          title: "Success",
          text: "Login Success",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        //set cookie
        Cookies.set("token", response.data.token);
        router.push("/dashboard");
        return;
      } else {
        Swal.fire({
          title: "Error",
          text: "Please check your username and password",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Please check your username and password",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className=" bg-white p-4 rounded-md  flex flex-col gap-8">
      <div className=" text-center">
        <h1 className=" text-3xl font-semibold">Login</h1>
      </div>

      <div className="flex justify-center   border w-fit py-1 border-1 gap-2 items-center  rounded-3xl px-2 ">
        <input
          className=" rounded-3xl border-none focus:ring-0 "
          placeholder="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FaUserAlt className="mr-2" />
      </div>
      <div className="flex justify-center  border w-fit py-1 border-1 gap-2 items-center  rounded-3xl px-2 ">
        <input
          className=" rounded-3xl border-none focus:ring-0 "
          placeholder="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FaLock className="mr-2" />
      </div>
      <div className=" flex justify-center mt-8">
        <button
          onClick={() => handleSubmit()}
          type="submit"
          className="w-full bg-blue-600 p-2 rounded-md text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
