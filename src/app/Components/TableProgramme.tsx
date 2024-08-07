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
  return date.map((schedule, index) => (
    <React.Fragment key={schedule.time + index}>
      <tr
        key={schedule.topic + index}
        className={`${
          schedule.bgColor
            ? "bg-teal-500 shadow  text-white"
            : " hover:bg-gray-100 text-black"
        } border `}
      >
        <td className="font-light text-lg text-center p-2">{schedule.time}</td>
        <td>
          <h3
            className="font-medium text-lg"
            dangerouslySetInnerHTML={{ __html: schedule.topic }}
          />
        </td>
        <td className="text-center w-[10%]">
          {schedule.group != "None" ? schedule.group : ""}
        </td>
      </tr>
      {schedule.description.length > 0 ||
      schedule.speakers.length > 0 ||
      schedule.panelists.length > 0 ||
      schedule.facilitators.length ? (
        <tr className="bg-gray-200" key={schedule.time} id={schedule.time}>
          <td></td>
          <td colSpan={2} className="gap-2">
            {schedule.speakers.length > 0 ? (
              <div>
                <h2 className="font-semibold">Speaker:</h2>
                <ul>
                  {schedule.speakers.map((data) => (
                    <li
                      className="p-1"
                      key={data}
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
            {schedule.description.length > 0 ? (
              <div>
                {schedule.description.map((data) => (
                  <h2
                    className="p-1"
                    key={data}
                    dangerouslySetInnerHTML={{ __html: data }}
                  />
                ))}
              </div>
            ) : (
              ""
            )}
            {schedule.panelists.length > 0 ? (
              <div>
                <h2 className="font-semibold">Panelists:</h2>
                <ul
                  className={`${
                    schedule.panelists.length > 1 ? "list-disc mx-4" : ""
                  }`}
                >
                  {schedule.panelists.map((data) => (
                    <li
                      className="p-1"
                      key={data}
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
            {schedule.facilitators.length > 0 ? (
              <div>
                <h2 className="font-semibold">Facilitator:</h2>
                <ul
                  className={`${
                    schedule.facilitators.length > 1 ? "list-disc mx-4" : ""
                  }`}
                >
                  {schedule.facilitators.map((data) => (
                    <li
                      className="p-1"
                      key={data}
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
          </td>
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
    <div className=" grid-cols-1  shadow-lg md:m-16 m-4">
      <div className="rounded-t-md bg-teal-500 p-3 grid gap-3 ">
        <button
          className={`${
            !selectSecond
              ? "bg-white text-teal-500 rounded shadow-lg"
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
        {/* <button
          className={`${
            selectSecond
              ? "bg-white text-teal-500 rounded shadow-lg"
              : "text-black"
          } p-3 rounded-lg flex justify-center text-center col-span-3`}
          disabled={selectSecond}
          onClick={() => {
            setSelectSecond(true);
            setSelectData(ScheduleData.programmeSchedule07);
          }}
        >
          <h1 className="text-xl font-semibold">07 JUNE</h1>
        </button> */}
      </div>
      <div className="flex bg-white w-full  overflow-auto rounded-b-md">
        <table className=" table-fixed w-full m-4">
          <thead className="w-full bg-slate-300">
            <tr className="border-b-2">
              <th className="text-center font-medium text-2xl w-[15%]">TIME</th>
              <th className="text-center font-medium text-2xl">AGENDA</th>
              <th className="text-center font-medium text-2xl w-[20%]"></th>
            </tr>
          </thead>
          <tbody className="w-full">
            {selectData.length > 0 ? (
              <RowData date={selectData} />
            ) : (
              <React.Fragment>
                <tr>
                  <td></td>
                  <td className="text-center text-xl">To be announced...</td>
                </tr>
              </React.Fragment>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TableProgramme;
