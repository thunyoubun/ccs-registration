"use client";
import React, { useEffect, useState } from "react";
import Table from "../Components/TableRegis";
import { FaHome } from "react-icons/fa";

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

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("/api/register").then((res) => {
        const result: IAPIRegister[] = res.data.data;
        setParticipants(result);
        setTotalParticipants(result.length);
      });
    };
    fetchData();
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
              <div className="flex  border md:w-fit w-full py-2 border-1 gap-2 items-center bg-gray-100 rounded-md px-4">
                <BsSearch />
                <input
                  placeholder="Search by Name or Email"
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
