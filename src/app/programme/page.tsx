"use client";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import TableProgramme from "../Components/TableProgramme";
import ToTop from "../Components/ToTop";

function ProgrammePage() {
  return (
    <header>
      <div className="relative">
        <Navbar path={"programme"} />
        <ToTop />
        <div className="mt-28 bg-gradient-to-r from-red-700 to-blue-800 flex justify-center ">
          <div className="w-full">
            <h2 className="text-white text-5xl font-semibold text-center p-6 my-4 lg:mt-10">
              Programme
            </h2>
            <TableProgramme />
          </div>
        </div>
        <Footer />
      </div>
    </header>
  );
}
export default ProgrammePage;
