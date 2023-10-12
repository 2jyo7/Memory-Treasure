"use client";
import { register } from "@/appwrite/config ";
import { useState } from "react";
import {  RiRegisteredFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Link from "next/link";


 const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
     const router = useRouter();

     const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
         const registed: any =  await register(email, password, name);
         if (registed) {
              console.log("registed")
         } else { console.log("error registering") }
         router.push("/log-In")
       } catch (error) {
          console.log("error");
       }
    } ;
    

 return (
 <div className="flex justify-center w-max-2xl bg-slate-700
 px-10 py-10 mt-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 mx-60
 ">
   <form onSubmit={handleSubmit}
   className="flex flex-col
   items-center  ">
    <input 
    className=" flex w-full rounded-md
    placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400
    focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50
    border border-gray-400 mx-6 my-8 px-20 py-3 
      bg-purple-200 text-black font-bold text-2xl "
    type="email"
    placeholder="Enter Your Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
     <input 
     className=" flex w-full rounded-md
     placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400
     focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50
     border border-gray-400 mx-6 my-8 px-20 py-3 
       bg-purple-200 text-black font-bold text-2xl "
    type="Password"
    placeholder="Enter Your Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
    <input
    className=" flex w-full rounded-md
    placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400
    focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50
    border border-gray-400 mx-6 my-8 px-20 py-3 
      bg-purple-200 text-black font-bold text-2xl "
    type="text"
    placeholder="Enter Your Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
  <div className="flex gap-2 items-start">
  
  <button 
  type="submit" 
  className="block text-green-800 bg-slate-400 rounded
   px-6 py-4 my-8  mx-4 ">
    <RiRegisteredFill size={24} />
  </button>
  </div>
   <div className="flex ">
      <p className="bg-gray-700 px-6 py-3"> If registered already ! 
        <Link href={"/log-In"} className=" font-bold text-2xl">&nbsp;LogIn
      </Link></p>
   </div>
  </form>
  </div>
  )
};

  export default SignUp;

