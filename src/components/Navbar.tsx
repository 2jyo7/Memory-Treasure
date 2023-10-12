import Image from "next/image";
import Link from "next/link";

 
 export default function Navbar () {
    return(
        <nav className="relative  h-40 px-8 py-4 w-full  flex justify-between items-center
         bg-pink-300 border border-blue-800 text-3xl font-semibold
         sm:flex sm:w-full sm:h-auto ">
            <div>
                <Image src="/logo1.png"
                   alt="logo-png" 
                   className="rounded border-black "
                   width={200}
                   height={150} />
           </div>
          
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 
            -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-40">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/log-In"}>LogIn</Link>
                </li>
                <li>
                    <Link href={"/sign-up"}>SignUp</Link>
                </li>
            </ul>
    
        </nav>
    )
 };