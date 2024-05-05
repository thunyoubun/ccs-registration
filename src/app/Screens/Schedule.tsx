"use client";
import React, { useState } from "react";
import ScheduleData from "../Datas/ProgrammeData.json";
import { IProgrammeData } from "../Components/TableProgramme";
import Link from "next/link";

function RowDataSimple({ data }: { data: IProgrammeData[] }) {
  return data.map((schedule) => (
    <tr
      className={`${
        schedule.bgColor ? "bg-teal-500 text-white" : ""
      } text-center rounded-lg shadow-sm`}
      key={schedule.time}
    >
      <td>{schedule.time}</td>
      <td className="text-left" dangerouslySetInnerHTML={{__html: schedule.topic}} />
      <td>{schedule.group != "None" ? schedule.group : ""}</td>
    </tr>
  ));
}

export default function Schedule() {
  const [activeTab, setActiveTab] = useState(true);
  const [selectData, setSelectData] = useState<IProgrammeData[]>(
    ScheduleData.programmeSchedule06
  );

  const handleTab = () => {
    setActiveTab(!activeTab);
  };

  return (
    <div className="md:h-screen h-fit bg-gray-100  p-8 md:p-20 ">
      <div className="  ">
        <div className="flex align-middle justify-center">
          <h1 className=" text-3xl  font-semibold">Schedule</h1>
        </div>

        <div className=" mt-8 bg-teal-500 rounded-t-lg p-2 flex gap-4">
          <div className="w-full flex gap-2">
            <button
              onClick={() => {
                handleTab()
                setSelectData(ScheduleData.programmeSchedule06)
              }}
              className={` ${
                activeTab ? "bg-white text-teal-500 shadow-lg" : "text-black"
              }  rounded-lg h-16 w-1/2 flex justify-center items-center text-center `}
            >
              <h1 className="  text-xl font-semibold">6 June</h1>
            </button>
            <button
              onClick={() => {
                handleTab()
                setSelectData(ScheduleData.programmeSchedule07)
              }}
              className={`${
                !activeTab ? "bg-white text-teal-500 shadow-lg" : "text-black"
              }  rounded-lg h-16 w-1/2 flex justify-center items-center text-center`}
            >
              <h1 className="  text-xl font-semibold">7 June</h1>
            </button>
          </div>
        </div>
        <div className=" gap-4 bg-white shadow-lg  h-fit rounded-b-lg p-4 flex flex-col items-center  ">
          <div className="w-full h-fit max-h-96 md:max-h-80 overflow-auto">
            <table className="w-full table-auto ">
              <thead className="">
                <tr className=" border-b-2">
                  <th className="w-1/3 text-center text-2xl">Time</th>
                  <th className="w-1/3 text-center text-2xl">Agenda</th>
                  <th className="w-1/3 text-center text-2xl">Group</th>
                </tr>
              </thead>
              <tbody>
                {selectData.length > 1? <RowDataSimple data={selectData} />: <tr><td></td><td className="text-center text-xl">To be announced...</td></tr>}
              </tbody>
            </table>
          </div>

          <div className="w-full border"></div>
          <div className="w-full flex justify-center ">
            <button className="  w-fit  bg-white   border-2 border-teal-600 rounded-lg p-2 text-teal-500 hover:scale-105 transition ease-in-out delay-150 ">
              <Link href={"/programme"}>
                <h1>Full Schedule and Programme</h1>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
