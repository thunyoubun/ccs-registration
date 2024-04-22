"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface Applicant {
  id: number;
  first_name: string;
  last_name: string;
  affiliation: string;
  convenience: {
    day: [
      {
        date: string;
        evening: string;
        morning: string;
      },
      {
        date: string;
        evening: string;
        morning: string;
      }
    ];
  };
}

export function DashboardPage() {
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
    <>
      <div className="relative">
        <div className="w-auto h-auto bg-gradient-to-r from-red-700 to-blue-800 ">
          <h1 className="text-white text-center font-medium text-5xl py-8">
            Registrats
          </h1>
          <div className="rounded-md bg-gray-400 p-6">
            <h1 className="">56</h1>
          </div>
          <div className="my-6 bg-white">
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="text-center">No.</th>
                  <th className="text-center">Full Name</th>
                  <th className="text-center">Affiliation</th>
                  <th className="row-span-4">Convenience</th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th className="row-span-2 text-center">6 June 2024</th>
                  <th className="row-span-2">7 June 2024</th>
                </tr>
              </thead>
              <tbody>
                {applicant?.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">
                      {item.first_name + " " + item.last_name}
                    </td>
                    <td className="text-center">{item.affiliation}</td>
                    <td className="text-center">
                      {item.convenience.day[0].date} | Morning :
                      {item.convenience.day[0].morning.toString()} | Evening :
                      {item.convenience.day[0].evening.toString()}
                    </td>
                    <td className="text-center">
                      {item.convenience.day[1].date} | Morning :
                      {item.convenience.day[1].morning.toString()} | Evening :
                      {item.convenience.day[1].evening.toString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
