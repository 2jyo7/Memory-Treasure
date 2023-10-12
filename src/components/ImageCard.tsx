import Image from "next/image";

export default function ImageCard () {
 return (
    <div>
        <div className="container flex flex-col justify-between items-center mx-8
            border border-gray-600
            sm:flex sm:w-full sm:h-auto
            hover:border-gray-500 bg-blue-950">
          <div className="flex justify-center w-2/3 ">
            <h1 className="font-bold text-2xl text-white
             m-2 p-2"> Image Label</h1>
          </div>
          <div className="flex justify-center w-full m-3 p-3 ">
                <Image 
                src={"/Sky.jpg"}
                alt="image-card"
                className="object-contain"
                width={280}
                height={220}
                />
          </div>
            <div className="flex justify-center m-3 p-3 ">
                <p className="font-bold text-2xl text-white">
                     Image Descriptions.</p>
            </div>

        </div>
    </div>
 )
};