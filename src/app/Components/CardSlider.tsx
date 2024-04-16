import React, { useEffect, useState } from "react";
import PeopleCard from "./PeopleCard";
import { PeopleCardType } from "./PeopleCard";

import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const CardSlider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [data, setData] = useState<PeopleCardType[]>([]);
  const [animation, setAnimation] = useState("animate-fade-left" as string);
  const [cardPerSlide, setCardPerSlide] = useState(3);

  const authData = [
    { name: "a", srcImage: "/images/profile/natthanan.jpg" },
    { name: "b", srcImage: "/images/profile/natthanan.jpg" },
    { name: "c", srcImage: "/images/profile/natthanan.jpg" },
    { name: "d", srcImage: "/images/profile/natthanan.jpg" },
    { name: "e", srcImage: "/images/profile/natthanan.jpg" },
    { name: "f", srcImage: "/images/profile/natthanan.jpg" },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const showCard = (index: number) => {
    setData(authData.slice(index, index + cardPerSlide));
  };

  //if window rezie change card per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setCardPerSlide(3);
      } else {
        setCardPerSlide(1);
      }
      showCard(activeImage);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeImage, showCard]);

  const clickNext = () => {
    activeImage === authData.length - cardPerSlide
      ? setActiveImage(0)
      : setActiveImage(activeImage + cardPerSlide);
    setTimeout(() => {
      setAnimation("animate-fade-right");
    }, 100);
    setAnimation("");
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(authData.length - cardPerSlide)
      : setActiveImage(activeImage - cardPerSlide);

    setTimeout(() => {
      setAnimation("animate-fade-left");
    }, 100);
    setAnimation("");
  };

  return (
    <div>
      <div className="flex gap-4 justify-center items-center z-0">
        <button onClick={clickPrev} className="text-black/50 hover:text-black ">
          <IoIosArrowDropleftCircle size={50} />
        </button>
        <div className={` flex gap-4`}>
          {/*show card just 3 in row */}
          {data.map((auth, index) => (
            <div key={index} className={` ${animation}`}>
              <PeopleCard
                name={auth.name}
                srcImage={auth.srcImage}
              ></PeopleCard>
            </div>
          ))}
        </div>

        <button onClick={clickNext} className="text-black/50 hover:text-black ">
          <IoIosArrowDroprightCircle size={50} />
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
