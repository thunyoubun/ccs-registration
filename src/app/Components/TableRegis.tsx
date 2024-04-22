import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";

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

const TableRegis = () => {
  const [applicant, setApplicant] = useState<Applicant[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const newData = await axios.get("/api/applicant");
        if (newData.data) {
          console.log(newData.data);
          setApplicant(newData.data);
        } else {
          console.error("Error fetching data:");
        }
      } catch (error) {
        console.error("Error fetching data:");
      }
    }
    fetchData();
  }, []);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
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
              6 June
            </th>
            <th scope="col" className="px-6 py-3">
              7 June
            </th>
          </tr>
        </thead>
        <tbody>
          {applicant.map((applicant) => (
            <tr
              key={applicant.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {applicant.first_name} {applicant.last_name}
              </th>
              <th className="px-6 py-4">{applicant.email}</th>
              <th className="px-6 py-4">{applicant.affiliation}</th>
              <th className="px-6 py-4">
                <td>
                  Morning :{" "}
                  <span
                    className={`${
                      applicant.convenience.day[0].morning
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {applicant.convenience.day[0].morning ? "Yes" : "No"}
                  </span>
                </td>
                <td>
                  Evening :{" "}
                  <span
                    className={`${
                      applicant.convenience.day[0].morning
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {applicant.convenience.day[0].morning ? "Yes" : "No"}
                  </span>
                </td>
              </th>
              <th className="px-6 py-4">
                <td>
                  Morning :{" "}
                  <span
                    className={`${
                      applicant.convenience.day[1].morning
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {applicant.convenience.day[1].morning ? "Yes" : "No"}
                  </span>
                </td>
                <td>
                  Evening :{" "}
                  <span
                    className={`${
                      applicant.convenience.day[1].morning
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {applicant.convenience.day[1].morning ? "Yes" : "No"}
                  </span>
                </td>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRegis;
