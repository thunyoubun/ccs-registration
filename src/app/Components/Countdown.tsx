import { useEffect, useState } from "react";
import { useCountDown } from "../Functionalitys/useCountDown";

function Countdown({ targetDate }: { targetDate: Date }) {
  const [day, hour, minute, second] = useCountDown(targetDate);
  const [firstLoading, setFirstLoading] = useState<boolean>(false);

  useEffect(() => {
    setFirstLoading(true);
  }, []);
  return (
    <div className="p-4 bg-red-700 rounded-t-lg text-white text-center gap-3 lg:flex lg:justify-center">
      <h1 className="text-3xl font-medium content-center md:text-5xl">
        TIME TO END -
      </h1>
      <div className="flex text-center gap-3 justify-center">
        <div>
          <h1 className="font-semibold text-4xl lg:text-6xl">
            {day && firstLoading ? day : ""}
          </h1>
          <h4 className="">day(s)</h4>
        </div>
        <h1 className="font-semibold text-4xl lg:text-6xl">:</h1>
        <div>
          <h1 className="font-semibold text-4xl lg:text-6xl">
            {hour && firstLoading ? hour : ""}
          </h1>
          <h4>hour(s)</h4>
        </div>
        <h1 className="font-semibold text-4xl lg:text-6xl">:</h1>
        <div>
          <h1 className="font-semibold text-4xl lg:text-6xl">
            {minute && firstLoading ? minute : ""}
          </h1>
          <h4>minute(s)</h4>
        </div>
        <h1 className="font-semibold text-4xl lg:text-6xl">:</h1>
        <div>
          <h1 className="font-semibold text-4xl lg:text-6xl">
            {second && firstLoading ? second : ""}
          </h1>
          <h4>second(s)</h4>
        </div>
      </div>
    </div>
  );
}
export default Countdown;
