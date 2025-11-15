import Link from "next/link";
import { FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa";


function Footer() {
    return (
        <div className="pt-16 pb-16">
            <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* 1 part  */}
                <div className="space-y-5">
                    <h1 className="text-lg font-bold">Company</h1>
                    <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">About us</p>
                    <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Careers</p>
                    <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Blogs</p>
                    <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Gift Cards</p>
                    <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Magazine</p>
                </div>
                {/* 2 part  */}
                <div className="space-y-5">
                    <h1 className="text-lg font-bold">Support</h1>
                    <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Contact</p>
                    <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Legal Notice</p>
                    <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Privacy Policy</p>
                    <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Terms & Condations</p>
                    <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Sitemap</p>
                </div>
                {/* 3 part  */}
                <div className="space-y-5">
                    <h1 className="text-lg font-bold">Other Services</h1>
                    <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Car Hire</p>
                    <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Activity Finder</p>
                    <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Tour List</p>
                    <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Flight Finder</p>
                    <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Tour Agents</p>
                </div>
                {/* 4 part  */}
                <div className="space-y-1">
                    <h1 className="text-lg font-bold">Contact Us</h1>
                    <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">Our Mobile Number</p>
                    <Link href="tel:+923270475152" className="text-blue-800 font-semibold cursor-pointer text-md hover:text-blue-950">+92 327 0475152</Link>
                    <p className="text-gray-800 font-bold cursor-pointer text-sm mt-4 hover:text-blue-950">Our E-mail</p>
                    <Link href="mailto:unknown@example.com" className="text-blue-800 font-semibold cursor-pointer text-md hover:text-blue-950">unknown@example.com</Link>
                </div>


            </div>

            {/* Bottom section  */}
            <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                <p className="text-center md:text-left">Copyright © 2024 SAJDev.solution. All rights reserved</p>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <span>Social : </span>
                    <Link href="#" className="text-gray-500 hover:text-gray-800"><FaTwitter /></Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-800"><FaFacebook /></Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-800"><FaTiktok /></Link>

                </div>

            </div>


        </div>
    )
}

export default Footer;