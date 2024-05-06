"use client";
import axios from "axios";
import Swal from "sweetalert2";
import RegistrationForm, { IRegistrationForm } from "./RegistrationForm";
import TextInput from "./TextInput";

const nameRoles = "Role/duties Related to CCS/CCU Technology";
const mockRoles = [
  "Technology developer/researcher",
  "CCUS industry or users",
  "Both technology developer/researcher and CCUS industry or users",
  "others",
];

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
    <div className="p-4 bg-white md:rounded-br-lg  md:rounded-b-none rounded-b-lg  lg:p-4 xl:p-8">
      <h1 className="font-medium text-3xl lg:text-5xl text-center">RSVP</h1>
      <h2 className="text-red-500  p-2 text-center text-lg">
        <span className=" text-red-600">***</span>Confirmation Email Needed
        <span className="text-red-600">***</span>
      </h2>
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
          <label
            htmlFor=""
            className="block text-sm font-medium text-gray-900 required"
          >
            Role/duties (Related to CCS/CCU Technology)
            <span className="text-red-500">*</span>
          </label>
          <div className="mt-2">
            <select
              id=""
              className="w-full p-1 rounded-md border-0 shadow-sm ring-1 ring-inset ring-teal-500 focus:ring-2 focus:ring-blue-950"
              {...register("roles")}
              required
            >
              {mockRoles.map((selt) => (
                <option key={selt} value={selt}>
                  {selt}
                </option>
              ))}
            </select>
          </div>
          {errors.roles && (
            <span className="text-sm text-red-500">
              Please select your role.
            </span>
          )}
        </div>
        <div className="col-span-full">
          {TextInput(register, "Email", "email", "email", errors.email)}
        </div>
        <div className="col-span-full ">
          <h3 className="font-medium text-xl">Preferred Date:</h3>
          <div className="flex gap-5 mx-2 md:mx-4   lg:justify-center lg:mx-0">
            <div className="col-span-2">
              <label htmlFor="" className="font-medium">
                6 June 2024:
              </label>
            </div>
            <div className="flex items-center mb-4 col-span-2">
              <input
                className="w-4 h-4 border-teal-500 text-teal-500 focus:ring-blue-950"
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
                className="w-4 h-4 border-teal-500 text-teal-500 focus:ring-blue-950"
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
                className="w-4 h-4 border-teal-500 text-teal-500 focus:ring-blue-950"
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
                className="w-4 h-4 border-teal-500 text-teal-500 focus:ring-blue-950"
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
          className={`${
            isSubmitting || !!expired
              ? "bg-gray-300 cursor-not-allowed opacity-50"
              : "bg-teal-500 hover:bg-teal-500 text-white"
          } p-2  col-span-full rounded-md  font-semibold`}
          disabled={isSubmitting || !!expired}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationInput;
