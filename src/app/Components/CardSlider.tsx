import React, { useEffect, useState } from "react";
import PeopleCard from "./PeopleCard";
import { PeopleCardType } from "./PeopleCard";
import KeynoteSpeakerData from "../Datas/KeynoteSpeakerData.json";

import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const CardSlider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [animation, setAnimation] = useState("animate-fade-left" as string);
  const [cardPerSlide, setCardPerSlide] = useState(3);

  //if window rezie change card per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setCardPerSlide(3);
      } else {
        setCardPerSlide(1);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // we have 13 keynote speaker
  // if we have 13 keynote speaker, we have 5 slide. each slide have 3 card, except last slide
  // next slide
  const clickNext = () => {
    activeImage >= KeynoteSpeakerData.keynoteSpeaker.length - 2
      ? setActiveImage(0)
      : setActiveImage(activeImage + cardPerSlide);
    setTimeout(() => {
      setAnimation("animate-fade-right");
    }, 100);
    setAnimation("");
  };

  // previous slide
  const clickPrev = () => {
    activeImage <= 0
      ? setActiveImage(KeynoteSpeakerData.keynoteSpeaker.length - 2)
      : setActiveImage(activeImage - cardPerSlide);

    setTimeout(() => {
      setAnimation("animate-fade-left");
    }, 100);
    setAnimation("");
  };

  return (
    <div>
      <div className="flex gap-4 justify-center items-center z-0 w-full">
        <button onClick={clickPrev} className="text-black/50 hover:text-black ">
          <IoIosArrowDropleftCircle size={50} />
        </button>
        <div className={` flex gap-4`}>
          {/*show card just 3 in row */}
          {KeynoteSpeakerData.keynoteSpeaker
            .slice(activeImage, activeImage + cardPerSlide)
            .map((auth, index) => (
              <div key={index} className={` ${animation}`}>
                <PeopleCard
                  key={index}
                  name={auth.fullname}
                  srcImage={auth.srcImg}
                  affiliation={auth.affiliation}
                  topics={undefined}
                ></PeopleCard>
              </div>
            ))}
        </div>

        <button onClick={clickNext} className="text-black/50 hover:text-black ">
          <IoIosArrowDroprightCircle size={50} />{" "}
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
