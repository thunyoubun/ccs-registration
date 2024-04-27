import { useCountDown } from "../Functionalitys/useCountDown";
import Countdown from "./Countdown";
import RegistrationInput from "./RegistrationInput";
import RegistrationMap from "./RegistrationMap";

function RegistrationBody() {
  const [day, hour, minute, second, expired] = useCountDown(new Date("2024-06-03"))
  return (
    <div className="mt-16  w-auto lg:p-16 bg-gradient-to-r from-red-700 to-blue-800 flex justify-center">
      <div className="w-full mb-6 md:m-10 xl:w-fit ">
        {/* Countdown */}
        <Countdown day={day} hour={hour} minute={minute} second={second}  />
        <div className="lg:flex xl:">
          {/* Google Map */}
          <RegistrationMap />
          {/* Registration Form */}
          <RegistrationInput expired={expired} />
        </div>
      </div>
    </div>
  );
}

export default RegistrationBody;
