"use client";
import * as XLSX from "xlsx";
import React, { useEffect, useState } from "react";
import Table from "../Components/TableRegis";
import { FaHome } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { RxExit } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import {
  IAPIRegister,
  IRegistrationForm,
} from "../Components/RegistrationForm";

export default function DashboardPage() {
  const [participants, setParticipants] = useState<IAPIRegister[]>(
    [] as IAPIRegister[]
  );
  const [searchname, setSearchname] = useState<string>("");
  const [totalParticipants, setTotalParticipants] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("/api/register").then((res) => {
        const result: IAPIRegister[] = res.data.data;
        setParticipants(result.reverse());
        setTotalParticipants(result.length);
      });
    };
    fetchData();
  }, []);

  function GetExportExcel() {
    try {
      setLoading(true);
      if (participants.length <= 0) {
        setLoading(false);
        return;
      }
      const data = participants.map((parti, index) => {
        return {
          ID: index + 1,
          Firstname: parti.firstname,
          Lastname: parti.lastname,
          Affiliation: parti.affiliation,
          Email: parti.email,
          Roles: parti.roles_duties,
          June06_morning: parti.june06_morning,
          June06_afternoon: parti.june06_afternoon,
          June07_morning: parti.june07_morning,
          June07_afternoon: parti.june07_afternoon,
          Create_at: parti.Create_at,
        };
      });
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils?.json_to_sheet(data);
      XLSX.utils.book_append_sheet(workbook, worksheet, "Participants_data");
      // Save the workbook as an Excel file
      XLSX.writeFile(workbook, `Participants_data.xlsx`);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  function FillterParticipants() {
    const result = participants.filter(
      (parti) =>
        parti.firstname.toLowerCase().includes(searchname.toLowerCase()) ||
        parti.email.toLowerCase().includes(searchname.toLowerCase()) ||
        parti.lastname.toLowerCase().includes(searchname.toLowerCase())
    );
    return result;
  }

  async function logOut() {
    try {
      const response = await axios.post("/api/auth/logout");

      if (response.data.ok) {
        window.location.href = "/login";
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="relative">
      <div className="w-auto h-screen bg-gradient-to-r from-teal-500 to-blue-950 ">
        <div className="flex flex-col gap-8 h-full p-8">
          <div className="flex gap-2 h-20 w-full bg-white px-8 py-4 items-center justify-between rounded-lg text-black ">
            <div className="flex items-center  gap-2">
              <Link href={"/"}>
                <FaHome className=" justify-center flex text-center font-semibold md:text-3xl text-xl" />
              </Link>
              <h1 className="flex items-baseline h-fit font-semibold text-start  md:text-3xl text-xl">
                /
              </h1>
              <h1 className="flex items-baseline h-fit font-semibold text-start  md:text-3xl text-xl">
                Dashboard
              </h1>
            </div>
            <div>
              <button
                className="flex gap-2 items-center"
                onClick={() => logOut()}
              >
                <RxExit className=" justify-center flex text-center font-semibold md:text-3xl text-xl" />
                <h1>Sign Out</h1>
              </button>
            </div>
          </div>

          <div className="flex max-h-[80%] rounded-lg bg-white ">
            {/*search bar */}

            <div className="w-full flex flex-col  gap-4  rounded-md p-4">
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="flex  border md:w-fit w-full py-2 border-1 gap-2 items-center bg-gray-100 rounded-md px-4">
                  <BsSearch />
                  <input
                    placeholder="Search by Name or Email"
                    className="w-full bg-gray-100 rounded-md px-4"
                    onChange={(e) => setSearchname(e.currentTarget.value)}
                  ></input>
                </div>
                <button
                  className=" disabled:bg-blue-500/60 disabled:cursor-not-allowed flex gap-2 justify-center items-center bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2"
                  disabled={participants.length <= 0 || loading}
                  onClick={() => GetExportExcel()}
                >
                  <LuDownload size={20} />
                  {loading ? "Downloading..." : "Export Excel"}
                </button>
              </div>
              <div>
                <h1 className=" font-semibold">
                  Total{" "}
                  <span className=" text-red-500">{totalParticipants}</span>{" "}
                  peoples
                </h1>
              </div>
              <Table data={FillterParticipants()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
