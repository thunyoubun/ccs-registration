import React from "react";
import Image from "next/image";

const PeopleCard = () => {
  return (
    <div className="h-full bg-transparent/30 p-4 rounded-lg">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className=" bg-red-600 border-4 border-red-600 rounded-full mt-4 shadow-lg  overflow-hidden">
          <Image
            src={"/images/profile/natthanan.jpg"}
            width={160}
            height={160}
            alt=""
            className="hover:scale-110 transition duration-500 cursor-pointer object-cover "
          ></Image>
        </div>
        <div className="text-white text-center flex flex-col gap-2 ">
          <h1 className=" text-xl">D.Eng. Assoc. Prof. Natthanan Promsuk, </h1>
          <h1 className="  text-white/50">
            Computer Engineering Department, Faculty of Engineering, Chiang Mai
            University, Thailand
          </h1>
        </div>
        <div className="flex flex-col gap-2 max-h-44 overflow-auto">
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
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
