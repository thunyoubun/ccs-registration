import { useEffect, useState } from "react";
import { useCountDown } from "../Functionalitys/useCountDown";

function Countdown({ day, hour, minute, second }: { day: number, hour: number, minute: number, second: number }) {
  const [firstLoading, setFirstLoading] = useState<boolean>(false);

  useEffect(() => {
    setFirstLoading(true);
  }, []);
  return (
    <div className="p-4 bg-red-700 border-8 border-white text-white text-center gap-3 lg:flex lg:justify-center rounded-t-md">
      <div className="flex flex-col">
        <h1 className="text-5xl font-medium content-center lg:text-6xl">
          Deadline -
        </h1>
        <h4 className="">(3 June 2024)</h4>
      </div>
      <div className="flex text-center gap-2 justify-center">
        <div>
          <h1 className="font-semibold text-5xl lg:text-6xl">
            {firstLoading ? day : ""}
          </h1>
          <h4 className="">day(s)</h4>
        </div>
        <h1 className="font-semibold text-5xl lg:text-6xl">:</h1>
        <div>
          <h1 className="font-semibold text-5xl lg:text-6xl">
            {firstLoading ? hour : ""}
          </h1>
          <h4>hour(s)</h4>
        </div>
        <h1 className="font-semibold text-5xl lg:text-6xl">:</h1>
        <div>
          <h1 className="font-semibold text-5xl lg:text-6xl">
            {firstLoading ? minute : ""}
          </h1>
          <h4>minute(s)</h4>
        </div>
        <h1 className="font-semibold text-5xl lg:text-6xl">:</h1>
        <div>
          <h1 className="font-semibold text-5xl lg:text-6xl">
            {firstLoading ? second : ""}
          </h1>
          <h4>second(s)</h4>
        </div>
      </div>
    </div>
  );
}
export default Countdown;
