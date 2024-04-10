"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ToTop = () => {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible
          ? "visible transition-opacity delay-100 opacity-100  ease-in-out hover:scale-105"
          : " invisible transition-opacity delay-200 opacity-0  ease-in-out scale-0"
      } fixed z-50 bottom-5 right-5 shadow-lg rounded-full `}
    >
      <div className="bg-white border-2 border-red-500 shadow-lg rounded-full p-2">
        <FaArrowUp className="text-2xl text-red-500 " />
      </div>
    </button>
  );
};

export default ToTop;
