import { useCountDown } from "../Functionalitys/useCountDown";
import Countdown from "./Countdown";
import RegistrationInput from "./RegistrationInput";
import RegistrationMap from "./RegistrationMap";

function RegistrationBody() {
  const [day, hour, minute, second, expired] = useCountDown(
    new Date(2024, 5, 3, 23, 59, 59)
  );
  return (
    <div className=" md:mt-32 mt-28   w-auto lg:p-16 bg-gradient-to-r from-teal-500 to-blue-950 flex justify-center">
      <div className="w-full mb-6 md:m-16 m-4 xl:w-fit ">
        {/* Countdown */}
        <Countdown day={day} hour={hour} minute={minute} second={second} />
        <div className="md:flex block">
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
