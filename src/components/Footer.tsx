import { FaInstagramSquare, FaFacebookSquare, } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Footer () {
    return(
        <footer className="flex flex-col w-full h-full
        mt-5 mb-5  border-t border-green-700 
        bg-pink-300  text-2xl font-semibold
        sm:flex sm:w-full sm:h-auto ">
          <div className="flex justify-between items-center 
        flex-wrap mt-10 border border-blue-400 mx-8
        sm:px-16 px-6 py-10 container grid-cols-2">
             
             <p className="text-white flex justify-between space-x-3">
             <Image src="/logo.png"
                   alt="logo-png" 
                   className="rounded border-black "
                   width={80}
                   height={80} />
                @{new Date().getFullYear()} 
             Photo Gallery. All Rights Reserved.</p>
             <div className="text-white" >
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
          </div>
          <div className="flex justify-center mx-80 px-10 py-6
           text-purple-600 bg-slate-300 space-x-8">
            <h1 className="text-blue-600"> Follow Us</h1>
            <FaInstagramSquare size={30} />
            <FaFacebookSquare size={30}/>
            <FaSquareXTwitter size={30}/>
            <BsDiscord size={30}/>
          </div>
          <div className="text-white border mx-40
           flex flex-col items-center  space-x-4
           flex-wrap mt-10 mb-5 ">
            <h3>Call Us</h3>
              <h3>+91 12345678978</h3>
          </div>
        </footer>
    )
 };