import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" p-4">
      <div className="px-6 flex justify-between items-center">
        {/* Add your logo here */}
        <div className="flex gap-2">
          <div className=" bg-red-600 w-16 h-16"></div>
          <div className="w-fit">
            <h1 className=" font-semibold text-5xl ">
              ICITEE 2024
              <h1 className=" font-medium text-xs tracking-tighter">
                International Conference on Information Technology and
                Electrical Engineering
              </h1>
            </h1>
          </div>
        </div>

        <div className="  ">
          <ul className="flex gap-8">
            <li className="hover:scale-105 hover:font-semibold transition ease-out delay-50">
              <a href="#">Keynote speakers</a>
            </li>
            <li className="hover:scale-105 hover:font-semibold transition ease-out delay-50">
              <a href="#">Programme</a>
            </li>
            <li className="hover:scale-105 hover:font-semibold transition ease-out delay-50">
              <a href="#">Registration</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
