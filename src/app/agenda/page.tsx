"use client";
import FooterSponsor from "../Components/FooterSponsor";
import Navbar from "../Components/Navbar";
import ProgrammeBody from "../Components/ProgrammeBody";
import ToTop from "../Components/ToTop";

function ProgrammePage() {
  return (
    <header>
      <div className="relative">
        <Navbar path={"agenda"} />
        <ToTop />
        <ProgrammeBody />
        <FooterSponsor />
      </div>
    </header>
  );
}
export default ProgrammePage;
