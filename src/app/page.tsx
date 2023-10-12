import ImageCard from "@/components/ImageCard ";


export default function Home() {
    return (
        <div className="container grid 2xl:grid-cols-4 xl:grid-cols-3
         md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14;
         flex-col justify-between
         items-center mx-auto my-4 px-10 h-30
         py-5">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        
            
        </div>
    )
};
   