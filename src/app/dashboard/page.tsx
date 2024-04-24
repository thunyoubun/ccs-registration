"use client";
import React, { useEffect, useState } from "react";
import Table from "../Components/TableRegis";
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import {
  IAPIRegister,
  IRegistrationForm,
} from "../Components/RegistrationForm";

export function DashboardPage() {
  const [participants, setParticipants] = useState<IAPIRegister[]>(
    [] as IAPIRegister[]
  );
  const [searchname, setSearchname] = useState<string>("");
  const [totalParticipants, setTotalParticipants] = useState<number>(0);
  useEffect(() => {
    const fetchdata = async () => {
      await axios.get("/api/register").then((res) => {
        const result: IAPIRegister[] = res.data.data;
        setParticipants(result);
        setTotalParticipants(result.length);
      });
    };
    fetchdata();
  }, []);

  function FillterParticipants() {
    const result = participants.filter(
      (parti) =>
        parti.firstname.toLowerCase().includes(searchname.toLowerCase()) ||
        parti.email.toLowerCase().includes(searchname.toLowerCase()) ||
        parti.lastname.toLowerCase().includes(searchname.toLowerCase())
    );
    return result;
  }
  console.log(participants);
  return (
    <div className="relative">
      <div className="w-auto h-screen bg-gradient-to-r from-red-700 to-blue-800 ">
        <div className="flex flex-col gap-8 h-full p-8">
          <div className="flex gap-2 h-[20%] w-full bg-white p-4 items-center rounded-lg text-black ">
            <Link href={"/"}>
              <FaHome className=" font-semibold text-3xl" />
            </Link>

            <h1 className="flex items-baseline h-fit font-semibold text-start text-3xl">
              / Dashboard
            </h1>
          </div>

          <div className="flex max-h-[80%] rounded-lg bg-white ">
            {/*search bar */}

            <div className="w-full flex flex-col  gap-4  rounded-md p-4">
              <div className="flex  border w-fit py-2 border-1 gap-2 items-center bg-gray-100 rounded-md px-4">
                <BsSearch />
                <input
                  placeholder="Search by Name "
                  className="w-full bg-gray-100 rounded-md px-4"
                  onChange={(e) => setSearchname(e.currentTarget.value)}
                ></input>
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

export default DashboardPage;
