"use client";
import React, { useState } from "react";
import ScheduleTable from "../Components/ScheduleTable";

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

        <ScheduleTable activeTab={activeTab} />
      </div>
    </div>
  );
}
