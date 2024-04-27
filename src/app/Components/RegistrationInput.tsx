"use client";
import axios from "axios";
import Swal from "sweetalert2";
import RegistrationForm, { IRegistrationForm } from "./RegistrationForm";
import TextInput from "./TextInput";

function RegistrationInput({ expired }: { expired: number }) {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = RegistrationForm();

  const onSubmit = async (data: IRegistrationForm) => {
    await axios.post("/api/register", data).then((res) => {
      if (res.data.ok) {
        Swal.fire({
          title: "Success!",
          text: "You have successfully registered",
          icon: "success",
          confirmButtonText: "Close",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: res.data.message,
          icon: "error",
          confirmButtonText: "Close",
        });
      }
    });
  };

  return (
    <div className="p-4 bg-white md:rounded-br-lg lg:p-4 xl:p-8">
      <h1 className="font-medium text-3xl lg:text-5xl text-center">
        Registration
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 grid grid-cols-1 gap-x-2 gap-y-2 lg:gap-x-5 lg:gap-y-5 lg:grid-cols-6"
        noValidate
      >
        <div className=" lg:col-span-3">
          {TextInput(
            register,
            "First name",
            "firstname",
            "text",
            errors.firstname
          )}
        </div>
        <div className="col-span-full lg:col-span-3">
          {TextInput(
            register,
            "Last name",
            "lastname",
            "text",
            errors.lastname
          )}
        </div>
        <div className="col-span-full">
          {TextInput(
            register,
            "Affiliation",
            "affiliation",
            "text",
            errors.affiliation
          )}
        </div>
        <div className="col-span-full">
          {TextInput(register, "Email", "email", "email", errors.email)}
        </div>
        <div className="col-span-full">
          <h3 className="font-medium text-xl">Convenience:</h3>
          <div className="flex gap-5 mx-2 md:mx-4 lg:justify-center lg:mx-0">
            <div className="col-span-2">
              <label htmlFor="" className="font-medium">
                6 June 2024:
              </label>
            </div>
            <div className="flex items-center mb-4 col-span-2">
              <input
                className="w-4 h-4 border-rose-700 text-rose-700 focus:ring-blue-900"
                type="checkbox"
                value=""
                {...register("june06.morning")}
                id="06morning"
                disabled={isSubmitting}
              />
              <label className="ms-2" htmlFor="06morning">
                morning
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                className="w-4 h-4 border-rose-700 text-rose-700 focus:ring-blue-900"
                type="checkbox"
                value=""
                {...register("june06.afternoon")}
                id="06afternoon"
                disabled={isSubmitting}
              />
              <label className="ms-2" htmlFor="06afternoon">
                afternoon
              </label>
            </div>
          </div>
          <div className="flex gap-5 mx-2 md:mx-4 lg:justify-center lg:mx-0">
            <div className="col-span-2">
              <label htmlFor="" className="font-medium">
                7 June 2024:
              </label>
            </div>
            <div className="flex items-center mb-4 col-span-2">
              <input
                className="w-4 h-4 border-rose-700 text-rose-700 focus:ring-blue-900"
                type="checkbox"
                value=""
                id="07morning"
                disabled={isSubmitting}
                {...register("june07.morning")}
              />
              <label className="ms-2" htmlFor="07morning">
                morning
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                className="w-4 h-4 border-red-700 text-red-700 focus:ring-blue-900"
                type="checkbox"
                value=""
                id="07afternoon"
                disabled={isSubmitting}
                {...register("june07.afternoon")}
              />
              <label className="ms-2" htmlFor="07afternoon">
                afternoon
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={`${isSubmitting || !!expired? "bg-gray-300 cursor-not-allowed opacity-50":"bg-red-600 hover:bg-red-700 text-white"} p-2  col-span-full rounded-md  font-semibold`}
          disabled={isSubmitting || !!expired}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationInput;
