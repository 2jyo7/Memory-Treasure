import ImgUpload from '@/appwrite/imageConfig ';
import { useState } from 'react';


export default function UploadImg () {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [files, setFiles] = useState<File[]>([]);

    const handleSubmit = async (e: any) => {
    e.preventDefault();
      await ImgUpload();
      
    };
   
     return (
        <div className="flex flex-col items-center justify-center
          gap-8 min-h-screen ">
            
             <form onSubmit={handleSubmit}
             className=" flex flex-col sm:container ">
               <label htmlFor="title"
                className="container text-white font-bold text-2xl
                m-3 p-2 ">Title</label>
               <input 
               type="text"
               id="title"
               name="title"
               placeholder="Enter The Image Title"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               className="bg-purple-200 border border-blue-600
               hover:bg-purple-300 rounded
               sm:flex sm:w-full sm:h-auto
               inline-block font-bold text-slate-800
                max-w-4xl mx-3 my-2 px-6 py-2
                 cursor-pointer"
               />
            

            
            <label htmlFor="photo"
             className="container text-white font-bold text-2xl
              m-3 p-3 " >Choose a Photo! </label>
            <input
            type="file"
            id="photo" 
            name="photo"
            accept="image/*"
            className=" relative bg-purple-200 border
              hover:bg-purple-300 rounded-lg
              sm:flex sm:w-full sm:h-auto
              border-blue-600 inline-block font-bold text-slate-800
               max-w-4xl mx-3 my-2 px-6 py-2
                cursor-pointer"/>
            

               
            <label htmlFor="description"
             className="container text-white font-bold text-2xl
              m-3 p-3 " >Write Description here </label>
            <textarea
            rows={8}
            id="description" 
            name="photo"
            placeholder='Enter description here'
            value={desc}
               onChange={(e) => setDesc(e.target.value)}
            className=" bg-purple-200 border
              hover:bg-purple-300 rounded-lg
              sm:flex sm:w-full sm:h-auto
              border-blue-600 inline-block font-bold text-slate-800
              max-w-4xl mx-3 my-2 px-6 py-2 
                cursor-pointer"/>


                <button type="submit"
                 className="bg-blue-400 text-white font-bold
                 m-2 p-2 rounded hover:bg-blue-300 w-40">Submit</button>
                </form>
        </div>
     )
};