"use client";
import Navbar from "../Components/Navbar";
import ToTop from "../Components/ToTop";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import KeynoteSpeakerData from "../Datas/KeynoteSpeakerData.json";
import RenderPeopleCard from "../Components/RenderPeopleCard";

function KeynoteSpeakerPage() {
  const [activateSlide, setActivateSlide] = useState<boolean>(false);
  const [animation, setAnimation] = useState<string>("animate-fade-left");
  const [activeImage, setActiveImage] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setActivateSlide(false);
      } else {
        setActivateSlide(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const NextKeynote = () => {
    activeImage === KeynoteSpeakerData.keynoteSpeaker.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
    setTimeout(() => {
      setAnimation("animate-fade-right");
    }, 100);
    setAnimation("");
  };

  const PrevKeynote = () => {
    activeImage === 0
      ? setActiveImage(KeynoteSpeakerData.keynoteSpeaker.length - 1)
      : setActiveImage(activeImage - 1);

    setTimeout(() => {
      setAnimation("animate-fade-left");
    }, 100);
    setAnimation("");
  };
  return (
    <header>
      <div className="relative">
        <Navbar path={"/"} />
        <ToTop />
        <div className="mt-20 md:p-20 p-8  bg-gradient-to-r from-red-700 to-blue-800 flex justify-center flex-col">
          <h2 className="text-white text-5xl p-8 text-center font-semibold">
            Keynote Speaker
          </h2>
          <div className="p-2">
            <h1 className="font-semibold text-2xl text-white">Guest Speaker</h1>
            <div className="grid gap-4 my-4 justify-center lg:grid-cols-3 lg:gap-4 lg:mx-2 lg:my-6">
              <RenderPeopleCard data={KeynoteSpeakerData.TechnicalResearchSession} active={activateSlide} />
            </div>
          </div>
          <div className="p-2">
            <h1 className="font-semibold text-2xl text-white">Industrial Panel Discussion: CCS Industry’s Landscape and Its Ecosystem: Opportunities and Challenges</h1>
            <div className="grid gap-4 my-4 justify-center lg:grid-cols-3 lg:gap-4 lg:mx-2 lg:my-6">
              <RenderPeopleCard data={KeynoteSpeakerData.IndustrialPanelDiscussion} active={activateSlide} />
            </div>
          </div>
          <div className="p-2">
            <h1 className="font-semibold text-2xl text-white">Technical & Research Panel Discussion: Toward Tomorrow’s Challenges: What are Next for CCS?</h1>
            <div className="grid gap-4 my-4 justify-center lg:grid-cols-3 lg:gap-4 lg:mx-2 lg:my-6">
              <RenderPeopleCard data={KeynoteSpeakerData.TechnicalResearchPanelDiscussion} active={activateSlide} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </header>
  );
}

export default KeynoteSpeakerPage;
