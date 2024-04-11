import React, { useEffect, useState } from "react";
import PeopleCard from "./PeopleCard";

const CardSlider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    { id: 1, src: "/images/profile/natthanan.jpg" },
    { id: 2, src: "/images/profile/natthanan.jpg" },
    { id: 3, src: "/images/profile/natthanan.jpg" },
    { id: 4, src: "/images/profile/natthanan.jpg" },
  ];

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  return (
    <div>
      <div className="flex gap-4 justify-center items-center">
        <button
          onClick={clickPrev}
          className="bg-red-600 text-white p-2 rounded-lg"
        >
          Prev
        </button>
        <div className="  rounded-lg">
          <PeopleCard />
        </div>
        <div className="  rounded-lg">
          <PeopleCard />
        </div>
        <div className="  rounded-lg">
          <PeopleCard />
        </div>
        <button
          onClick={clickNext}
          className="bg-red-600 text-white p-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
