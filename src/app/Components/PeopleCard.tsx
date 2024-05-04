import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

export interface PeopleCardType {
  name: string;
  srcImage: string;
  affiliation: string;
  /* bio: string;
  topic: string;
  abstract: string; */
}

const PeopleCard = ({ name, srcImage, affiliation }: PeopleCardType) => {
  const [fullName, setFullName] = useState("");
  const [srcImg, setSrcImg] = useState("");
  const [aff, setAff] = useState("");

  useEffect(() => {
    setFullName(name);
    if (srcImage.length === 0 || srcImage === undefined || srcImage === null) {
      setSrcImg("/images/default-avatar.jpg");
    } else {
      setSrcImg(srcImage);
    }

    setAff(affiliation);
  }, [name, srcImage, affiliation]);

  return (
    <div
      className={`h-full md:w-80 w-60 bg-transparent/30 p-4 rounded-lg z-0  shadow-lg`}
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <div className=" w-40 h-40 object-bottom bg-white border-4 border-teal-400  rounded-full mt-4 shadow-lg  overflow-hidden">
          <Image
            src={srcImage}
            width={300}
            height={300}
            alt={name + "-image"}
            className="hover:scale-150 scale-125  transition duration-500 cursor-pointer object-cover object-bottom "
          ></Image>
        </div>
        <div className="text-white text-center flex flex-col gap-2 ">
          <h1 className=" text-xl">{name}</h1>
          <h1 className="  text-white/50">{affiliation}</h1>
        </div>
        <div className=""></div>
        {/* <div className="flex flex-col gap-2 max-h-44 overflow-auto">
          <div className="text-center  flex  gap-2 ">
            <div className="bg-white h-fit text-black rounded-2xl w-40 p-1 ">
              <h1 className=" font-semibold">BIO</h1>
            </div>
            <h1 className="  text-white text-left text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati vero temporibus et, odio nisi perspiciatis tempore
              perferendis delectus dolore accusamus!
            </h1>
          </div>
          <div className="text-center  flex  gap-2 ">
            <div className="bg-white h-fit text-black rounded-2xl w-40 p-1 ">
              <h1 className=" font-semibold">TOPIC</h1>
            </div>
            <h1 className="  text-white text-left  text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati vero temporibus et, odio nisi perspiciatis tempore
              perferendis delectus dolore accusamus!
            </h1>
          </div>
          <div className="text-center  flex  gap-2 ">
            <div className="bg-white h-fit text-black rounded-2xl w-40 p-1 ">
              <h1 className=" font-semibold">ABSTRACT</h1>
            </div>
            <h1 className="  text-white text-left  text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati vero temporibus et, odio nisi perspiciatis tempore
              perferendis delectus dolore accusamus!
            </h1>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PeopleCard;
