import Countdown from "./Countdown";
import RegistrationInput from "./RegistrationInput";
import RegistrationMap from "./RegistrationMap";

function RegistrationBody() {
  return (
    <div className="mt-16  w-auto lg:p-16 bg-gradient-to-r from-red-700 to-blue-800 flex justify-center">
      <div className="w-full mb-6 md:m-10 xl:w-fit ">
        {/* Countdown */}
        <Countdown targetDate={new Date("2024-06-03")} />
        <div className="lg:flex xl:">
          {/* Google Map */}
          <RegistrationMap />
          {/* Registration Form */}
          <RegistrationInput />
        </div>
      </div>
    </div>
  );
}

export default RegistrationBody;
