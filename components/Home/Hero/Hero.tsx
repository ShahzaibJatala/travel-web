import SearchBox from "@/components/Helper/SearchBox"


function Hero() {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh] bg-cyan-800">
        {/* overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-70">

            <video src="/images/hero1.mp4" autoPlay muted loop preload="metadata" className="w-full h-full object-cover " />

        </div>

        {/* text content */}
        <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <div className="flex flex-col items-center justify-center w-full h-full ">
                <div data-aos  = "fade-up">
                    <h1 className="text-[30px] mb-4 md:mb-0 md:text-[35px] lg:text-[50px] tracking-[0.7rem] font-bold text-amber-50 text-center uppercase">
                        Lets Enjoy The Nature
                    </h1>
                    <p className="mb-4 md:mb-0 text-amber-50 text-center ">Get the best prices on 2,000,000+ properties,worldwide</p>
                </div>

                {/* srarch box  */}
                <SearchBox />

            </div>

        </div>

    </div>
  )
}

export default Hero