// "use client"

import { navlinks } from "@/constant/Constent";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TbAirBalloon } from "react-icons/tb";

type props = {
  openNav: () => void;
};

function Navbar({openNav} : props) {

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
    if(window.scrollY > 90){
      setNavBg(true);
    }
    if(window.scrollY < 90){
      setNavBg(false);
    }
   }

    window.addEventListener('scroll', handler)
  return () => window.removeEventListener('scroll', handler)
  },[])

 
  return (
    <div className={`${navBg? "bg-blue-950" : "bg-transparent"} fixed w-full transition-all duration-200 h-[12vh] z-[1000]`}>
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <div className="flex items-center space-x-2 hover:cursor-alias">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
            <TbAirBalloon className="w-6 h-6 text-amber-50" />
          </div>
          <h1 className="text-amber-50 text-xl md:text-2xl font-bold uppercase">
            Tripi
          </h1>
        </div>
        {/* Navlinks  */}
        <div className="hidden lg:flex items-center space-x-6">
          {navlinks.map((link) => (
            <Link href={link.url} key={link.id} className="group">
              <p
                className="relative text-amber-50 text-base font-medium w-fit block
        after:block after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0
        after:origin-right after:transition-transform after:duration-300
        group-hover:after:scale-x-100"
              >
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        {/* button  */}
        <div className="flex items-center space-x-4">
          <button className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg hover:cursor-pointer">
            Book Now
          </button>
        </div>

{/* burger menue  */}
<HiBars3BottomRight onClick={openNav} className="w-8 h-8 text-white hover:cursor-pointer lg:hidden" />

      </div>
    </div>
  );
}

export default Navbar;
