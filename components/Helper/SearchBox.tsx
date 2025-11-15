import { MdDateRange } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

function SearchBox() {
  return (
    <>
   
    <div className="flex flex-col bg-white w-full max-w-5xl mx-auto mt-5 p-6 lg:p-8 rounded-lg items-center shadow-lg gap-8">
      
      {/* INPUTS CONTAINER:
          - Mobile (default): `flex-col` stacks the items vertically.
          - Mobile (default): `gap-6` adds space between the stacked items.
          - Large screens (lg:): `flex-row` and `justify-around` create the horizontal layout.
          - Large screens (lg:): `gap-0` removes the gap so `justify-around` can manage spacing.
      */}
      <div className="flex flex-col lg:flex-row lg:justify-around lg:gap-0 w-full gap-6">
        
        {/* --- 1. Location --- */}
        {/* I changed the <p> tag to an <input> to make it a functional form element. */}
        <div className="flex flex-row items-center">
          <div>
            <FaLocationArrow className="text-blue-500 text-4xl" />
          </div>
          <div className="ml-3">
            <label htmlFor="location" className="text-lg font-bold text-gray-900">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Where are you going?"
              className="block border-0 p-0 text-gray-500 focus:outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* --- 2. Start Date --- */}
        {/* I fixed the duplicate IDs. This is now 'sdate'. */}
        <div className="flex flex-row items-center">
          <div>
            <MdDateRange className="text-blue-500 text-4xl" />
          </div>
          <div className="ml-3">
            <label htmlFor="sdate" className="text-lg font-bold text-gray-900">
              Start Date
            </label>
            <input
              type="date"
              name="sdate"
              id="sdate"
              className="block border-0 p-0 text-gray-500 focus:outline-none"
            />
          </div>
        </div>

        {/* --- 3. End Date --- */}
        <div className="flex flex-row items-center">
          <div>
            <MdDateRange className="text-blue-500 text-4xl" />
          </div>
          <div className="ml-3">
            <label htmlFor="edate" className="text-lg font-bold text-gray-900">
              End Date
            </label>
            <input
              type="date"
              name="edate"
              id="edate"
              className="block border-0 p-0 text-gray-500 focus:outline-none"
            />
          </div>
        </div>

        {/* --- 4. Guest --- */}
        {/* I changed the <p> tag to a <button> to make it interactive. */}
        <div className="flex flex-row items-center">
          <div>
            <MdPeopleAlt className="text-blue-500 text-4xl" />
          </div>
          <div className="ml-3">
            <label htmlFor="guest" className="text-lg font-bold text-gray-900">
              Guest
            </label>
            <button
              type="button"
              id="guest"
              // `text-left` aligns it with the inputs
              className="block border-0 p-0 text-gray-500 focus:outline-none text-left"
            >
              1 Guest 1 Room
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH BUTTON:
          - The Link and Button are now full-width on mobile (`w-full`).
          - On large screens, they become auto-width (`lg:w-auto`).
      */}
      
    </div>
    <Link href="#" className="w-full lg:w-auto">
    <button
      className="mt-3 bg-red-500 text-white font-bold w-full lg:w-auto px-12 py-3 rounded-md cursor-pointer hover:border-2 hover:border-red-700 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300
"
    >
      Search
    </button>
  </Link>
  </>
  );
}

export default SearchBox;
