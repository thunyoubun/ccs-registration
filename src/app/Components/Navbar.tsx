"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ScrollToSection } from "../Functionalitys/ScrollTo";
import { useRouter } from "next/router";

interface NavbarProps {
  path: string;
}

const Navbar = ({ path }: NavbarProps) => {
  //if navbar is not fixed, change background color to bg-white/50
  const [bgColor, setBgColor] = useState("bg-white");

  const [scrolled, setScrolled] = useState(true);

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
      className={` bg-white px-20 py-4 w-full fixed top-0 z-50 ${
        scrolled ? " block " : " hidden"
      } `}
    >
      <div className=" px-6 flex justify-between items-center">
        {/* Add your logo here */}
        <Link href="/">
          <Image
            src="/images/css-logo-remove.jpg"
            width={100}
            height={100}
            alt={"css-logo"}
          />
        </Link>

        <div className="hidden md:flex ">
          <ul className="flex gap-8">
            {path === "/" && (
              <li className="hover:scale-105 hover:font-semibold transition ease-out delay-50">
                <button onClick={() => ScrollToSection("keynote-speakers")}>
                  <h1>Keynote speakers</h1>
                </button>
              </li>
            )}
            {path !== "programme" && (
              <li className="hover:scale-105 hover:font-semibold transition ease-out delay-50">
                <Link href="/programme">Programme</Link>
              </li>
            )}
            {path !== "/registration" && (
              <li className="hover:scale-105 hover:font-semibold transition ease-out delay-50">
                <Link href="/registration">Registration</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
