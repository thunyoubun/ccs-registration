"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  //if navbar is not fixed, change background color to bg-white/50
  const [bgColor, setBgColor] = useState("bg-white");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`p-4 w-full fixed top-0 ${
        scrolled
          ? "bg-white/80 transition-opacity ease-in-out delay-0 "
          : "bg-white"
      } `}
    >
      <div className="px-6 flex justify-between items-center">
        {/* Add your logo here */}
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

        <div className="  ">
          <ul className="flex gap-8">
            <li className="hover:scale-105 hover:font-semibold transition ease-out delay-50">
              <a href="#">Keynote speakers</a>
            </li>
            <li className="hover:scale-105 hover:font-semibold transition ease-out delay-50">
              <a href="#">Programme</a>
            </li>
            <li className="hover:scale-105 hover:font-semibold transition ease-out delay-50">
              <Link href="/registration">Registration</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
