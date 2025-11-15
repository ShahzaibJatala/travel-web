
import { navlinks } from "@/constant/Constent";
import Link from "next/link";
import { type } from "os";
import { CgClose } from "react-icons/cg";

type props = {
  showNav:Boolean;
  hideNav:() => void;
}


function MobileNav({showNav, hideNav} : props) {

   const navopen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <>
      {/* overlay  */}
      <div className={`fixed ${navopen} inset-0 transform transition-all duration-500 z-[1000] bg-black opacity-70 w-full h-screen`}>
        {/* navlinks  */}
        <div className={`${navopen} text-white fixed justify-center items-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-950 space-y-6 z-[1001]`}>
          {navlinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] ">
                {link.label}
              </p>
            </Link>
          ))}
        {/* close button  */}
        <CgClose onClick={hideNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"/>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
