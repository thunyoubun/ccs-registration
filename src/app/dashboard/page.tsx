"use client";
import { createClient } from "@supabase/supabase-js";
import axios from "axios";
import { useEffect, useState } from "react";

export async function DashboardPage() {
  const [aplicant, setAplicant] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const newData = await axios.get("/api/applicant");
        if (newData.data) {
          setAplicant(newData.data);
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
                {aplicant?.map((aplicant, index) => (
                  <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">
                      {aplicant.first_name + " " + aplicant.last_name}
                    </td>
                    <td className="text-center">{aplicant.affiliation}</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
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
