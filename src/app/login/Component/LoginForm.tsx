import router from "next/router";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/profile");
    } else {
      // Handle errors
    }
  };

  return (
    <div className=" bg-white p-4 rounded-md  flex flex-col gap-8">
      <div className=" text-center">
        <h1 className=" text-3xl font-semibold">Login</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center   border w-fit py-1 border-1 gap-2 items-center  rounded-3xl px-2 ">
          <input
            className=" rounded-3xl border-none focus:ring-0 "
            placeholder="Email"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <FaUserAlt className="mr-2" />
        </div>
        <div className="flex justify-center mt-4  border w-fit py-1 border-1 gap-2 items-center  rounded-3xl px-2 ">
          <input
            className=" rounded-3xl border-none focus:ring-0 "
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <FaLock className="mr-2" />
        </div>
        <div className=" flex justify-center mt-8">
          <button
            type="submit"
            className="w-full bg-blue-600 p-2 rounded-md text-white"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
