"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ScrollToSection } from "../Functionalitys/ScrollTo";

const Navbar = () => {
  //if navbar is not fixed, change background color to bg-white/50
  const [bgColor, setBgColor] = useState("bg-white");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop =
        window.screenY || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` bg-white p-4 w-full fixed top-0 z-50 ${
        scrolled
          ? " block transition-opacity opacity-100 ease-in-out delay-0 "
          : " transition-opacity opacity-0 ease-in-out delay-300 "
      } `}
    >
      <div className=" px-6 flex justify-between items-center">
        {/* Add your logo here */}
        <Link href="/">
          <div className="flex gap-2">
            <div className=" bg-red-600 w-16 h-16"></div>
            <div className="w-fit flex flex-col">
              <h1 className=" font-semibold text-5xl ">ICCSS 2024</h1>
              <h2 className=" font-medium text-xs tracking-tighter">
                {/* International Conference on Information Technology and
                Electrical Engineering */}
                International CCS Symposium: A ‘Supercritical’ Research Toward Industrial Solution
              </h2>
            </div>
          </div>
        </Link>

        <div className="hidden md:flex ">
          <ul className="flex gap-8">
            <li className="hover:scale-105 hover:font-semibold transition ease-out delay-50">
              <button onClick={() => ScrollToSection("keynote-speakers")}>
                Keynote speakers
              </button>
            </li>
            <li className="hover:scale-105 hover:font-semibold transition ease-out delay-50">
              <Link href="/programme">Programme</Link>
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
