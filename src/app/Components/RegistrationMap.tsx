import { useEffect, useState } from "react";

function RegistrationMap() {
  const [secondDate, setSecondDate] = useState<boolean>(false);

  useEffect(() => {
    setSecondDate(false);
  }, []);

  return (
    <div className=" bg-white md:order-none rounded-bl-lg">
      <div className="p-4 bg-white grid grid-cols-1 gap-3">
        {/* <button
          onClick={() => setSecondDate(false)}
          className={`${
            !secondDate
              ? "bg-red-700 text-white rounded shadow-lg"
              : "text-black"
          } p-3 rounded-lg flex justify-center text-center col-span-3`}
          disabled={!secondDate}
        >
          <h1 className="text-xl font-semibold">6 JUNE</h1>
        </button>
        <button
          onClick={() => setSecondDate(true)}
          className={`${
            secondDate
              ? "bg-red-700 text-white rounded shadow-lg"
              : "text-black"
          } p-3 rounded-lg flex justify-center text-center col-span-3`}
          disabled={secondDate}
        >
          <h1 className="text-xl font-semibold">7 JUNE</h1>
        </button> */}
        <h1 className="font-medium text-3xl lg:text-5xl text-center">Location</h1>
      </div>
      <div className="m-4 flex justify-center ">
        {!secondDate ? (
          <iframe
            title="06Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15485.547317181567!2d100.6167955!3d13.9950625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30de1168e62e2101%3A0x9da7a57659ec3960!2z4LmC4LiZ4LmC4Lin4LmA4LiX4LilIOC4geC4o-C4uOC4h-C5gOC4l-C4niDguJ_guLTguKfguYDguIjguK3guKPguYzguJ7guLLguKPguYzguIQg4Lij4Lix4LiH4Liq4Li04LiV!5e0!3m2!1sth!2sth!4v1712834003533!5m2!1sth!2sth"
            width="500"
            height="350"
          ></iframe>
        ) : (
          <iframe
            title="07Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15107.094760451677!2d98.9546953!3d18.8082363!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a68355ea91f%3A0xd393197b614f8352!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI!5e0!3m2!1sth!2sth!4v1712834180863!5m2!1sth!2sth"
            width="500"
            height="350"
          ></iframe>
        )}
      </div>
      <div className="text-center p-2">
        <h3 className="">
          <span className="font-semibold">
            {!secondDate ? "6 - 7 June" : "7 June"}
          </span>
          {!secondDate
            ? ", at Novotel Bangkok Future Park Rangsit, Bangkok, Thailand"
            : ", at Chiang Mai University, Chiang Mai, Thailand"}
        </h3>
      </div>
    </div>
  );
}

export default RegistrationMap;
