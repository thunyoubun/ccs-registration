import React from "react";

interface ScheduleTableProps {
  activeTab: boolean;
}

const ScheduleTable = ({ activeTab }: ScheduleTableProps) => {
  //make 2 data of tables, one for each day
  const data1 = [
    {
      time: "09.00 - 10.00",
      grandBallroom: "Opening Ceremony",
      expeditionRoom: "Ballroom 1",
    },
    {
      time: "10.00 - 12.00",
      grandBallroom: "Keynote Speakers",
      expeditionRoom: "Ballroom 2",
    },
    {
      time: "12.00 - 13.00",
      grandBallroom: "Lunch Break",
      expeditionRoom: "Restaurant",
    },
    {
      time: "13.00 - 15.00",
      grandBallroom: "Parallel Sessions",
      expeditionRoom: "Meeting Room 1",
    },
    {
      time: "15.00 - 17.00",
      grandBallroom: "Parallel Sessions",
      expeditionRoom: "Meeting Room 2",
    },
    {
      time: "17.00 - 18.00",
      grandBallroom: "Closing Ceremony",
      expeditionRoom: "Ballroom 1",
    },
  ];

  const data2 = [
    {
      time: "09.00 - 10.00",
      grandBallroom: "Opening Ceremony",
      expeditionRoom: "Ballroom 1",
    },
    {
      time: "10.00 - 12.00",
      grandBallroom: "Keynote Speakers",
      expeditionRoom: "Ballroom 2",
    },
    {
      time: "12.00 - 13.00",
      grandBallroom: "Lunch Break",
      expeditionRoom: "Restaurant",
    },
    {
      time: "13.00 - 15.00",
      grandBallroom: "Parallel Sessions",
      expeditionRoom: "Meeting Room 1",
    },
    {
      time: "15.00 - 17.00",
      grandBallroom: "Parallel Sessions",
      expeditionRoom: "Meeting Room 2",
    },
    {
      time: "17.00 - 18.00",
      grandBallroom: "Closing Ceremony",
      expeditionRoom: "Ballroom 1",
    },
  ];

  return (
    <div className=" gap-4 bg-white shadow-lg  h-fit rounded-b-lg p-4 flex flex-col items-center  ">
      <div className="w-full h-fit max-h-80 overflow-auto">
        <table className="w-full table-auto ">
          <thead className="">
            <tr className=" border-b-2">
              <th className="w-1/3 text-center text-2xl">Time</th>
              <th className="w-1/3 text-center text-2xl">Grand Ballroom</th>
              <th className="w-1/3 text-center text-2xl">Expedition Room</th>
            </tr>
          </thead>
          {activeTab ? (
            <tbody>
              {data1.map((item, index) => (
                <tr key={index} className="text-center">
                  <td>{item.time}</td>
                  <td>{item.grandBallroom}</td>
                  <td>{item.expeditionRoom}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {data2.map((item, index) => (
                <tr key={index} className="text-center">
                  <td>{item.time}</td>
                  <td>{item.grandBallroom}</td>
                  <td>{item.expeditionRoom}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      <div className="w-full border"></div>
      <div className="w-full flex justify-center ">
        <button className="  w-fit  bg-white   border-2 border-red-600 rounded-lg p-2 text-black hover:scale-105 transition ease-in-out delay-150 ">
          <h1>Full Schedule and Programme</h1>
        </button>
      </div>
    </div>
  );
};

export default ScheduleTable;
