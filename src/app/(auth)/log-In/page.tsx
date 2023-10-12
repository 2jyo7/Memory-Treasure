"use client";
import { account, login } from "@/appwrite/config ";
import { useState } from "react";
import { RiLoginCircleFill } from "react-icons/ri";
import { useRouter } from "next/navigation";


const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await login(email, password);
       router.push("/");
   } catch (error) {
      console.log("error");
   }
} ;

  return (
    <>
       <div className="flex justify-center w-max-2xl bg-slate-700
       px-10 py-10 mt-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 mx-60
       ">
        
         <form  onSubmit={handleSubmit}
         className="flex flex-col
         items-center  ">
          <h1 className="flex justify-center font-bold mx-auto px-4 py-2
          text-2xl"> LogIn Page </h1>
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
          
        <div className="flex gap-2 items-start">
        <button 
        type="submit" 
        className="block text-blue-800 bg-slate-400 rounded
         px-6 py-4 my-8 mx-4 "
        >
          <RiLoginCircleFill size={24}   />
        </button>
        
        </div>
        </form>
        </div>
        </>
      )


};


export default LogIn;