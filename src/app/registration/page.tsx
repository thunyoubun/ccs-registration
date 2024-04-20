"use client";
import Navbar from "../Components/Navbar";
import ToTop from "../Components/ToTop";
import FooterSponsor from "../Components/FooterSponsor";
import RegistrationBody from "../Components/RegistrationBody";

function RegistrationPage() {
  return (
    <header>
      <div className="relative">
        <Navbar path={"/registration"} />
        <ToTop />
        <RegistrationBody />
        {/* Footer */}
        <FooterSponsor />
      </div>
    </header>
  );
}

export default RegistrationPage;
