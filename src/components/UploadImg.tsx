import ImgUpload from '@/appwrite/imageConfig ';
import { useState } from 'react';


export default function UploadImg () {
  
  const [files, setFiles] = useState<any>([]);

    const handleSubmit = async (e: any) => {
    e.preventDefault();
      await ImgUpload();
      
    };
   
     return (
        <div className="flex flex-col items-center justify-center
          gap-8 min-h-screen ">
            
             <form onSubmit={handleSubmit}
             className=" flex flex-col sm:container ">
            
             <label htmlFor="photo"
             className="container text-white font-bold text-2xl
              m-8 p-8 " >Choose a Photo! </label>
            <input
            type="file"
            id="photo" 
            name="photo"
            accept="image/*"
            className=" relative bg-purple-200 border
              hover:bg-purple-300 rounded-lg
              sm:flex sm:w-full sm:h-auto
              border-blue-600 inline-block font-bold text-slate-800
               max-w-4xl mx-5 my-10 px-8 py-5
                cursor-pointer"/>
            
                <button type="submit"
                 className="bg-blue-400 text-white font-bold
                 m-4 p-2 rounded hover:bg-blue-300 w-40">Submit</button>
                </form>
        </div>
     )
};