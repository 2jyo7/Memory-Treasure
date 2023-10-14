
import { storage } from "@/appwrite/imageConfig ";
import { NextApiRequest } from "next";
import Image from "next/image";
import { NextRequest, NextResponse } from "next/server";
import { useEffect, useState } from "react";

export default function ImageCard () {
  const [imageList, setImageList] = useState<any>();

  const getImage = async () => {
    const images = await storage.listFiles("6527afc975a7ba67ba9f");
    setImageList(images.files);
  };

  const handleDelete = async () => {
    await storage.deleteFile("6527afc975a7ba67ba9f","" );
  };

  useEffect(() => {
    getImage();
  }, []);
 
return (
    <div className="flex justify-between">
            <div className="container flex flex-col justify-center 
            items-center mx-8 space-y-5 mb-5
            border border-gray-600 gap-3 
            sm:flex sm:w-full sm:h-auto
            hover:border-gray-500 bg-blue-950  hover:bg-slate-700">
         {   imageList &&
        imageList.map((i: any) => (
          <div key={i.$id} >
          <div className="flex justify-center w-2/3 ">
            <h1 className="font-bold text-2xl text-white
             m-2 p-2">{i.name}</h1>
          </div>
          <div className="flex justify-center w-full m-3 p-3 ">
                <Image 
                src={"/v1/storage/buckets/6527afc975a7ba67ba9f/files/{i.$id}/view"}
                alt="image-card"
                className="object-contain"
                width={280}
                height={220}
                />
          </div>
            <div className="flex justify-center m-3 p-3 ">
                
            </div>

        </div>
           )) 
      }
        
    </div>
    </div>
 )
 };
