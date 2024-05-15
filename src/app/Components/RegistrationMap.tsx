import { useEffect, useState } from "react";

function RegistrationMap() {
  const [secondDate, setSecondDate] = useState<boolean>(false);

  useEffect(() => {
    setSecondDate(false);
  }, []);

  return (
    <div className="md:w-1/2 w-full bg-white md:order-none lg:p-4 xl:p-8 p-4 flex flex-col gap-5 md:rounded-bl-md rounded-none">
      <div className="">
        <h1 className="font-medium uppercase text-3xl lg:text-5xl text-center">
          Location
        </h1>
        <h1 className="text-center p-2">
          <span className="font-semibold">6 June</span>, at room Nakorn Rangsit
          1 - 2, Novotel Bangkok Future Park Rangsit, Bangkok, Thailand
        </h1>
      </div>
      <div className=" flex-grow justify-center relative">
        <iframe
          title="06Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15485.547317181567!2d100.6167955!3d13.9950625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30de1168e62e2101%3A0x9da7a57659ec3960!2z4LmC4LiZ4LmC4Lin4LmA4LiX4LilIOC4geC4o-C4uOC4h-C5gOC4l-C4niDguJ_guLTguKfguYDguIjguK3guKPguYzguJ7guLLguKPguYzguIQg4Lij4Lix4LiH4Liq4Li04LiV!5e0!3m2!1sth!2sth!4v1712834003533!5m2!1sth!2sth"
          width="500"
          height="1000"
          className="w-full md:h-full h-80"
        ></iframe>
      </div>
      {/* <div className="text-center p-2">
        <h3 className="">
          <span className="font-semibold">
            {!secondDate ? "6 - 7 June" : "7 June"}
          </span>
          {!secondDate
            ? ", at Novotel Bangkok Future Park Rangsit, Bangkok, Thailand"
            : ", at Chiang Mai University, Chiang Mai, Thailand"}
        </h3>
      </div> */}
    </div>
  );
}

export default RegistrationMap;
