"use client";
import Navbar from "../Components/Navbar";
import ToTop from "../Components/ToTop";
import PeopleCard from "../Components/PeopleCard";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import KeynoteSpeakerData from "../Datas/KeynoteSpeakerData.json";

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
        <div className="mt-28 md:p-20 p-8  bg-gradient-to-r from-red-700 to-blue-800 flex justify-center flex-col">
          <h2 className="text-white text-5xl p-8 text-center font-semibold">
            Keynote Speaker
          </h2>
          <div className="grid gap-4 my-4 justify-center lg:grid-cols-3 lg:gap-4 lg:mx-2 lg:my-6">
            {activateSlide ? (
              <div className="flex gap-1">
                <button onClick={() => PrevKeynote()}>
                  <IoIosArrowDropleftCircle size={50} />
                </button>
                <div className="flex gap-4">
                  {KeynoteSpeakerData.keynoteSpeaker
                    .slice(activeImage, activeImage + 1)
                    .map((auth) => (
                      <div key={auth.id} className={` ${animation}`}>
                        <PeopleCard
                          key={auth.id}
                          name={auth.fullname}
                          srcImage={auth.srcImg}
                          affiliation={auth.affiliation}
                        ></PeopleCard>
                      </div>
                    ))}
                </div>
                <button onClick={() => NextKeynote()}>
                  <IoIosArrowDroprightCircle size={50} />
                </button>
              </div>
            ) : (
              <>
                {KeynoteSpeakerData.keynoteSpeaker.map((data) => (
                  <PeopleCard
                    key={data.id}
                    name={data.fullname}
                    srcImage={data.srcImg}
                    affiliation={data.affiliation}
                  />
                ))}
              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </header>
  );
}

export default KeynoteSpeakerPage;
