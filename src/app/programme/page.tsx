"use client";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProgrammeBody from "../Components/ProgrammeBody";
import ToTop from "../Components/ToTop";

function ProgrammePage() {
  return (
    <header>
      <div className="relative">
        <Navbar path={"programme"} />
        <ToTop />
        <ProgrammeBody />
        <Footer />
      </div>
    </header>
  );
}
export default ProgrammePage;
