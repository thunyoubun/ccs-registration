import React from "react";

import axios from "axios";
import { IAPIRegister } from "./RegistrationForm";

interface Applicant {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  affiliation: string;
  convenience: {
    day: [
      {
        date: string;
        evening: boolean;
        morning: boolean;
      },
      {
        date: string;
        evening: boolean;
        morning: boolean;
      }
    ];
  };
}

const TableRegis = ({ data }: { data: IAPIRegister[] }) => {
  return (
    <div className="flex relative  overflow-auto shadow-md sm:rounded-lg">
      <table className=" md:table-fixed w-full flex-grow text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 w-[5%]  text-center py-3">
              No.
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Affiliation
            </th>
            <th scope="col" className="px-6 py-3">
              Roles/Duties
            </th>
            <th scope="col" className="px-6 py-3">
              6 June
            </th>
            <th scope="col" className="px-6 py-3">
              7 June
            </th>
            <th scope="col" className="px-6 py-3">
              Create at
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((applicant, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th className="px-6 py-4 text-center">{index + 1}</th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white overflow-auto"
              >
                {applicant.firstname} {applicant.lastname}
              </th>
              <th className="px-6 py-4 overflow-auto">
                <a
                  className=" text-blue-500 hover:no-underline underline"
                  href={`mailto:${applicant.email.toString()}`}
                >
                  {applicant.email}
                </a>
              </th>
              <th className="px-6 py-4">{applicant.affiliation}</th>
              <th className="px-6 py-4">{applicant.roles_duties}</th>
              <th className="px-6 py-4">
                <td>
                  Morning :{" "}
                  <span
                    className={`${
                      applicant.june06_morning
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {applicant.june06_morning ? "Yes" : "No"}
                  </span>
                </td>
                <td>
                  Evening :{" "}
                  <span
                    className={`${
                      applicant.june06_afternoon
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {applicant.june06_afternoon ? "Yes" : "No"}
                  </span>
                </td>
              </th>
              <th className="px-6 py-4">
                <td>
                  Morning :{" "}
                  <span
                    className={`${
                      applicant.june07_morning
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {applicant.june07_morning ? "Yes" : "No"}
                  </span>
                </td>
                <td>
                  Evening :{" "}
                  <span
                    className={`${
                      applicant.june07_afternoon
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {applicant.june07_afternoon ? "Yes" : "No"}
                  </span>
                </td>
              </th>
              <th className="px-6 py-4">
                {new Date(applicant.Create_at).toLocaleString()}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRegis;
