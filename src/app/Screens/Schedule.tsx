"use client";
import React, { useState } from "react";

export default function Schedule() {
  const [activeTab, setActiveTab] = useState(false);

  const handleTab = () => {
    setActiveTab(!activeTab);
  };

  return (
    <div className="h-screen bg-gray-100 pt-20 px-20 ">
      <div className=" flex-1">
        <div className="flex justify-center">
          <h1 className=" text-3xl  font-semibold">Schedule</h1>
        </div>

        <div className=" mt-8 bg-red-700 rounded-t-lg p-2 flex gap-4">
          <div className="w-full flex gap-2">
            <button
              onClick={handleTab}
              className={` ${
                activeTab ? "bg-white text-red-800 shadow-lg" : "text-black"
              }  rounded-lg h-16 w-1/2 flex justify-center items-center text-center `}
            >
              <h1 className="  text-xl font-semibold">6 June</h1>
            </button>
            <button
              onClick={handleTab}
              className={`${
                !activeTab ? "bg-white text-red-800 shadow-lg" : "text-black"
              }  rounded-lg h-16 w-1/2 flex justify-center items-center text-center`}
            >
              <h1 className="  text-xl font-semibold">7 June</h1>
            </button>
          </div>
        </div>
        <div className=" gap-4 bg-white shadow-lg  h-fit rounded-b-lg p-4 flex flex-col items-center  ">
          <div className="w-full h-fit max-h-80 overflow-auto">
            <table className="w-full table-auto ">
              <thead className="">
                <tr className=" border-b-2">
                  <th className="w-1/3 text-center text-2xl">Time</th>
                  <th className="w-1/3 text-center text-2xl">Agenda</th>
                  <th className="w-1/3 text-center text-2xl">
                    Expedition Room
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>09.00 - 10.00</td>
                  <td>Opening Ceremony</td>
                  <td>Ballroom 1</td>
                </tr>
                <tr className="text-center">
                  <td>10.00 - 12.00</td>
                  <td>Keynote Speakers</td>
                  <td>Ballroom 2</td>
                </tr>
                <tr className="text-center">
                  <td>12.00 - 13.00</td>
                  <td>Lunch Break</td>
                  <td>Restaurant</td>
                </tr>
                <tr className="text-center">
                  <td>13.00 - 15.00</td>
                  <td>Parallel Sessions</td>
                  <td>Meeting Room 1</td>
                </tr>
                <tr className="text-center">
                  <td>15.00 - 17.00</td>
                  <td>Parallel Sessions</td>
                  <td>Meeting Room 2</td>
                </tr>
                <tr className="text-center">
                  <td>17.00 - 18.00</td>
                  <td>Closing Ceremony</td>
                  <td>Ballroom 1</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full border"></div>
          <div className="w-full flex justify-center ">
            <button className="  w-fit  bg-white   border-2 border-red-600 rounded-lg p-2 text-black hover:scale-105 transition ease-in-out delay-150 ">
              <h1>Full Schedule and Programme</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
