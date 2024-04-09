import React from "react";

import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="h-screen">
        <Navbar />
        <div className=" h-2/3 bg-gradient-to-r from-red-700 to-blue-800  flex justify-center items-center">
          <div className=" flex flex-col gap-7 justify-center items-center">
            <div className=" mx-20  text-center  ">
              <h1 className=" text-white font-bold  text-5xl">
                The 16th International Conference
              </h1>
              <h1 className=" mt-6 text-white font-bold text-5xl">
                on Information Technology and Electrical Engineering
              </h1>
            </div>

            <div className=" bg-white rounded-3xl w-fit py-1 px-2">
              <h1>
                26 - 27 October at Le Meridien Chiang Mai, Chiang Mai, Thailand
              </h1>
            </div>

            <button className="mt-6 bg-transparent border-2 border-white rounded-lg p-2 text-white hover:scale-105 transition ease-in-out delay-150 ">
              <h1>Full Schedule and Programme</h1>
            </button>
          </div>
        </div>
        <div className=" bg-white flex justify-center items-centers">
          <div className="m-20 ">
            <div className=" flex flex-col gap-4">
              <h1 className=" text-red-500 font-semibold text-xl text-center">
                About Event
              </h1>
              <h1 className=" font-bold text-3xl text-center">
                The Annual Conference for New Research, Innovative Ideas, and
                Technologies
              </h1>
              <p className=" text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                doloremque harum. Neque, aut eius quos dolore quam molestiae ea
                dolorum fugit dolor obcaecati vitae repellendus consequuntur
                molestias eos enim reiciendis sit eum voluptatibus debitis
                aliquam repellat inventore dolorem! Porro, ipsa quo
                necessitatibus voluptates fugit pariatur accusamus consectetur
                deserunt deleniti rem!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
