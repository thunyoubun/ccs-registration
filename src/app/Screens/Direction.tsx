import React from "react";

export default function Direction() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-red-700 to-blue-800 py-20 px-20">
      <div className="flex-1 ">
        <div className="flex flex-col">
          <h1 className=" text-3xl text-white  font-semibold text-center p-6">
            Event Direction & Information
          </h1>
          <div className="flex justify-between mt-12">
            <div className="flex flex-col gap-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15485.547317181567!2d100.6167955!3d13.9950625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30de1168e62e2101%3A0x9da7a57659ec3960!2z4LmC4LiZ4LmC4Lin4LmA4LiX4LilIOC4geC4o-C4uOC4h-C5gOC4l-C4niDguJ_guLTguKfguYDguIjguK3guKPguYzguJ7guLLguKPguYzguIQg4Lij4Lix4LiH4Liq4Li04LiV!5e0!3m2!1sth!2sth!4v1712834003533!5m2!1sth!2sth" width="600" height="450" loading="lazy" ></iframe>
              <label htmlFor="" className="text-white text-center text-xl line-clamp-1	">6 June at Novotel Bangkok Future Park Rangsit, Bangkok, Thailand</label>
            </div>
            <div className="flex flex-col gap-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15107.094760451677!2d98.9546953!3d18.8082363!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a68355ea91f%3A0xd393197b614f8352!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI!5e0!3m2!1sth!2sth!4v1712834180863!5m2!1sth!2sth" width="600" height="450" loading="lazy" ></iframe>
              <label htmlFor="" className="text-white text-center text-xl line-clamp-1	">7 June at Chiang Mai University, Chiang Mai, Thailand</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
