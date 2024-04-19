"use client";
import React from "react";

import Navbar from "./Components/Navbar";
import ToTop from "./Components/ToTop";
import Main from "./Screens/Main";
import Schedule from "./Screens/Schedule";
import Keynote from "./Screens/Keynote";
import Organize from "./Screens/Organize";
import Direction from "./Screens/Direction";
import Footer from "./Components/Footer";

export default function Home() {
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
