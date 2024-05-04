"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ScrollToSection } from "../Functionalitys/ScrollTo";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircle } from "react-icons/io";

interface NavbarProps {
  path: string;
}

const Navbar = ({ path }: NavbarProps) => {
  //if navbar is not fixed, change background color to bg-white/50
  const [bgColor, setBgColor] = useState("bg-white");
  const [isActived, setIsActived] = useState(false);
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
      className={` bg-white px-4 md:px-20 py-2 md:py-4 w-full fixed top-0 z-50 shadow-md ${
        scrolled ? " block " : " hidden"
      } `}
    >
      <div className=" px-6 flex justify-between items-center">
        {/* Add your logo here */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/css-logo-remove.jpg"
            width={100}
            height={100}
            alt={"css-logo"}
            className=" sm:h-24  sm:w-32 h-20 w-24"
          />
          <div className="my-2 invisible lg:visible">
            <h1 className="text-2xl font-semibold">CCUS Symposium</h1>
            <p className="text-sm">
              &apos;Supercritical&apos; Pathways Toward Carbon Neutrality
            </p>
          </div>
        </Link>

        <div className="hidden md:flex ">
          <ul className="flex gap-8">
            {path !== "/" && (
              <li className="hover:scale-105 font-semibold hover:drop-shadow-md transition ease-out delay-50">
                <Link href="/">Home</Link>
              </li>
            )}
            {path !== "keynote-speaker" && (
              <li className="hover:scale-105 font-semibold hover:drop-shadow-md transition ease-out delay-50">
                <Link href="/keynote-speaker">Keynote Speaker</Link>
              </li>
            )}
            {path !== "programme" && (
              <li className="hover:scale-105 font-semibold hover:drop-shadow-md transition ease-out delay-50">
                <Link href="/programme">Programme</Link>
              </li>
            )}
            {path !== "/registration" && (
              <li className="hover:scale-105 font-semibold hover:drop-shadow-md transition ease-out delay-50">
                <Link href="/registration">Registration</Link>
              </li>
            )}
          </ul>
        </div>

        <div className="md:hidden flex items-center z-50">
          <button onClick={() => setIsActived(!isActived)}>
            {!isActived ? (
              <RxHamburgerMenu size={30} />
            ) : (
              <IoMdCloseCircle size={30} className=" text-white" />
            )}
          </button>
        </div>

        <ul
          className={
            !isActived
              ? "hidden z-10"
              : "flex z-40 gap-8 flex-col absolute top-0 left-0 w-full h-screen justify-center items-center uppercase bg-teal-400 transition-opacity opacity-100 ease-in-out delay-100"
          }
        >
          {path !== "/" && (
            <li className="hover:scale-105 font-semibold hover:drop-shadow-md transition ease-out delay-50">
              <Link href="/">
                <h1 className=" uppercase">Home</h1>
              </Link>
            </li>
          )}
          {path !== "/keynote-speaker" && (
            <li className="hover:scale-105 font-semibold hover:drop-shadow-md transition ease-out delay-50">
              <Link href="/keynote-speaker">
                <h1 className=" uppercase">Keynote speakers</h1>
              </Link>
            </li>
          )}
          {path !== "programme" && (
            <li className="hover:scale-105 font-semibold hover:drop-shadow-md transition ease-out delay-50">
              <Link href="/programme">Programme</Link>
            </li>
          )}
          {path !== "/registration" && (
            <li className="hover:scale-105 font-semibold hover:drop-shadow-md transition ease-out delay-50">
              <Link href="/registration">Registration</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
