import React, { useState } from "react";
import ScheduleData from "../Datas/ProgrammeData.json";

export interface IProgrammeData {
  time: string;
  topic: string;
  description: string[];
  speakers: string[];
  panelists: string[];
  facilitators: string[];
  group: string;
  bgColor: boolean;
}

function RowData({ date }: { date: IProgrammeData[] }) {
  function ExpandRowData(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.hidden = !element.hidden;
    }
  }
  return date.map((schedule, index) => (
    <React.Fragment key={schedule.time + index}>
      <tr
        key={schedule.topic + index}
        className={`${
          schedule.bgColor
            ? "bg-red-600 shadow rounded-lg text-white"
            : " hover:bg-gray-100 text-black"
        } shadow rounded-lg`}
      >
        <td className="font-light text-lg text-center p-2">{schedule.time}</td>
        <td>
          <h3 className="font-medium text-lg">{schedule.topic}</h3>
        </td>
        <td>{schedule.group != "None" ? schedule.group : ""}</td>
      </tr>
      {schedule.description.length > 0 ||
      schedule.speakers.length > 0 ||
      schedule.panelists.length > 0 ||
      schedule.facilitators.length ? (
        <tr
          className="bg-gray-200 rounded-b-lg`"
          key={schedule.time}
          id={schedule.time}
        >
          <td></td>
          <td className="grid gap-2">
            {schedule.description.length > 0 ? (
              <div>
                {schedule.description.map((data) => (
                  <h2 key={data}>{data}</h2>
                ))}
              </div>
            ) : (
              ""
            )}
            {schedule.speakers.length > 0 ? (
              <div>
                <h2 className="font-semibold">Speaker:</h2>
                {schedule.speakers.map((data) => (
                  <h2 key={data}>{data}</h2>
                ))}
              </div>
            ) : (
              ""
            )}
            {schedule.panelists.length > 0 ? (
              <div>
                <h2 className="font-semibold">Panelists:</h2>
                {schedule.panelists.map((data) => (
                  <h2 key={data}>{data}</h2>
                ))}
              </div>
            ) : (
              ""
            )}
            {schedule.facilitators.length > 0 ? (
              <div>
                <h2 className="font-semibold">Facilitator:</h2>
                {schedule.facilitators.map((data) => (
                  <h2 key={data}>{data}</h2>
                ))}
              </div>
            ) : (
              ""
            )}
          </td>
          <td></td>
        </tr>
      ) : (
        <></>
      )}
    </React.Fragment>
  ));
}

function TableProgramme() {
  const [selectSecond, setSelectSecond] = useState<boolean>(false);
  const [selectData, setSelectData] = useState<IProgrammeData[]>(
    ScheduleData.programmeSchedule06
  );

  return (
    <div className="bg-white grid-cols-1 rounded shadow-lg ">
      <div className="rounded-t-sm   bg-white p-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
        <button
          className={`${
            !selectSecond
              ? "bg-red-600 text-white rounded shadow-lg"
              : "text-black"
          } p-3 rounded-lg flex justify-center text-center col-span-3`}
          disabled={!selectSecond}
          onClick={() => {
            setSelectSecond(false);
            setSelectData(ScheduleData.programmeSchedule06);
          }}
        >
          <h1 className="text-xl font-semibold">06 JUNE</h1>
        </button>
        <button
          className={`${
            selectSecond
              ? "bg-red-600 text-white rounded shadow-lg"
              : "text-black"
          } p-3 rounded-lg flex justify-center text-center col-span-3`}
          disabled={selectSecond}
          onClick={() => {
            setSelectSecond(true);
            setSelectData(ScheduleData.programmeSchedule07);
          }}
        >
          <h1 className="text-xl font-semibold">07 JUNE</h1>
        </button>
      </div>
      <div className="flex">
        <table className="table-auto w-full m-4 ">
          <thead className="w-full">
            <tr className="border-b-2">
              <th className="text-center font-medium text-2xl">TIME</th>
              <th className="text-center font-medium text-2xl">AGENDA</th>
              <th className="text-center font-medium text-2xl">GROUP</th>
            </tr>
          </thead>
          <tbody>
            <RowData date={selectData} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TableProgramme;
