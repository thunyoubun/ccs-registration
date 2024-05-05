import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

export interface PeopleCardType {
  name: string;
  srcImage: string;
  affiliation: string;
  topics: string[] | undefined;
  /* bio: string;
  topic: string;
  abstract: string; */
}

const PeopleCard = ({
  name,
  srcImage,
  affiliation,
  topics,
}: PeopleCardType) => {
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
        <div className=" w-40 h-40 object-bottom object-fill bg-white border-4 border-teal-400  rounded-full mt-4 shadow-lg  overflow-hidden">
          <Image
            src={srcImage}
            width={300}
            height={300}
            alt={name + "-image"}
            className="hover:scale-110 w-40 h-40  transition duration-500 cursor-pointer object-cover object-top "
          ></Image>
        </div>
        <div className="text-white text-center flex flex-col gap-2 ">
          <h1 className=" text-xl">{name}</h1>
          <h1 className="  text-white/50">{affiliation}</h1>
        </div>
        {topics != undefined && topics.length > 0 ? (
          <div className="w-full grid gap-2">
            <h1 className="text-white text-base font-semibold text-center">
              Topics
            </h1>
            <div className="grid gap-1">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-white text-blue-950 text-center rounded-lg w-full p-2 font-medium text-sm lg:text-md"
                  dangerouslySetInnerHTML={{ __html: topic }}
                />
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PeopleCard;
