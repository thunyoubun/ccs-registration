import Image from "next/image";
import Link from "next/link"
import { useEffect, useState } from "react";

function NavbarProgramme(){
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop =
        window.screenY || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return(
        <div
      className={` bg-white p-4 w-full fixed top-0 z-50 ${
        scrolled
          ? " block transition-opacity opacity-100 ease-in-out delay-0 "
          : " transition-opacity opacity-0 ease-in-out delay-300 "
      } `}
    >
      <div className=" px-6 flex justify-between items-center">
        {/* Add your logo here */}
        <Link href="/">
          <div className="flex">
            <Image src={"/images/css-logo.jpg"} alt={"CSSU-logo"} width={128} height={128} />
          </div>
        </Link>

        <div className="hidden md:flex ">
          <ul className="flex gap-8">
            <li className="hover:scale-105 hover:font-semibold transition ease-out delay-50">
              <Link href="/registration">Registration</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default NavbarProgramme