"use client";
<<<<<<< HEAD
import React, { useEffect } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
=======
import React from "react";
>>>>>>> e06fe619384913c0e49c0ae1347c34cd7f10ac60

import Navbar from "./Components/Navbar";
import ToTop from "./Components/ToTop";
import Main from "./Screens/Main";
import Schedule from "./Screens/Schedule";
import Keynote from "./Screens/Keynote";
import Organize from "./Screens/Organize";
import Direction from "./Screens/Direction";
import Footer from "./Components/Footer";

export default function Home() {
  useEffect(()=>{
  
  },[])
  return (
    <div className="relative">
      <Navbar path={"/"} />
      <ToTop />
      <Main />
      <Schedule />
      <Keynote />
      <Organize />
      <Direction />
      <Footer />
    </div>
  );
}
