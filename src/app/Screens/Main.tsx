import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import { ScrollToSection } from "../Functionalitys/ScrollTo";

export default function Main() {
  return (
    <div>
      <div
        id="home"
        className=" md:mt-32 mt-28  bg-gradient-to-r from-teal-500 to-blue-950  flex justify-center items-center"
      >
        <div className="md:m-20 m-8 flex flex-col gap-7 justify-center items-center">
          <div className="mx-8 md:mx-20  text-center  ">
            <h1 className=" text-white font-bold  text-5xl">
              {/* The 16th International Conference */}
              International CCUS Symposium:
            </h1>
            <h1 className=" mt-6 text-white font-bold text-5xl">
              {/* on Information Technology and Electrical Engineering */}
              &apos;Supercritical&apos; Pathways Toward Carbon Neutrality
            </h1>
          </div>

          <button
            onClick={() => ScrollToSection("direction")}
            className=" bg-white rounded-3xl w-fit py-1 px-2 shadow-lg transition ease-in-out delay-150 hover:scale-105 "
          >
            <h1>
              <span className="font-semibold">6 June</span>, at room Nakorn
              Rangsit 1- 2, Novotel Bangkok Future Park Rangsit, Bangkok,
              Thailand
              <FaArrowRightLong className="mx-2 inline" />
            </h1>
          </button>

          <Link href="/agenda">
            <button className="mt-6 bg-transparent shadow-xl border-2  text-lg border-white rounded-lg p-2 text-white hover:scale-105 transition ease-in-out delay-150 ">
              <h1>Full Agenda</h1>
            </button>
          </Link>
        </div>
      </div>
      <div
        id="aboutEvent"
        className=" bg-white flex justify-center items-centers"
      >
        <div className="m-8 md:m-20 ">
          <div className=" flex flex-col gap-4">
            <h1 className=" text-teal-400  font-semibold text-3xl text-center">
              About Event
            </h1>
            <h1 className=" font-bold text-2xl text-center">
              {/* The International Symposium for Carbon Capture, Utilization and
              Storage (CCUS) */}
              International CCUS Symposium: &apos;Supercritical&apos; Pathways
              Toward Carbon Neutrality
            </h1>
            <p className=" text-justify">
              Thailand has pledged for carbon neutrality and net zero emissions
              since COP 26, while the Program Management Units (PMUs) continue
              to fund research projects from fundamentals to industrial
              implementation. Conducted in 2023, Thailand&apos;s Carbon Capture
              Utilization and Storage (CCUS) technology roadmap has emphasized
              key technologies to be achieved at specific times and determined
              quantities of CO2 to be captured, utilized, and stored
              permanently. With industry-involved implementation, the industries
              in Thailand&apos;s CO2 ecosystem have proposed that there should
              be a single consortium for CCUS at large, which would help
              investors or technology users to engage with key technology
              developers or researchers in academia more efficiently and
              effectively, as in other leading nations.
            </p>
            <p className=" text-justify">
              In 2023, a few collaborative events and visits at the
              international scale deployed by Thai entities have been observed.
              Key events include: (i) Denmark and Norway Trip, where academia,
              industries, and regulators have joined to visit key CCUS research
              groups and sites; and (ii) Korea Networking, with both sides
              visiting to collaborate on deeper technology transfer in CCS.
            </p>
            <p className=" text-justify">
              Following those activities in the past year, the Thailand CCUS
              Alliance (TCCA) has been formulated as a national CCUS consortium,
              with ongoing collaborations with foreign nations maturing. Thus,
              this international CCS symposium is to be held with the aim of
              being a networking session to kick off the TCCA and bridge the
              industry-academia gap to real-world implementations of CCS
              projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
