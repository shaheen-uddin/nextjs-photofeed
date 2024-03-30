import { getDictionary } from "../[lang]/dictionaries";
import Image from "next/image";
import { formatDate } from "@/utils";

export default async function PhotoDetails({id, lang}) {
    const response = await fetch(`${process.env.BASE_API_URL}/photos/${id}`);
    const photo = await response.json();
    console.log(photo);
    const dictionary = await getDictionary(lang);
  return (
    <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
    {/*   <!-- main photo --> */}
      <div className="col-span-12 lg:col-span-8 border rounded-xl">
        {/* <img className="max-w-full h-full max-h-[70vh] mx-auto" src="https://source.unsplash.com/ztpUS4N1xhY" alt="" /> */}
        <Image 
        src={photo.url}
        width={900}
        height={900}
        alt={photo.title}
        />
      </div>
  {/*     <!-- main photo ends -->

      <!-- details card --> */}
      <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
        <h2 className="text-lg lg:text-2xl font-bold mb-2">
          {photo.title}
        </h2>
        <div className="text-xs lg:text-sm text-black/60 mb-6">
         {photo.tags.map(tag => `#${tag} `)}
        </div>
     {/*    <!-- info rows --> */}
        <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
       {/*    <!-- item start --> */}
          <div className="flex justify-between">
            <span>{dictionary.views}</span>
            <span className="font-bold">{photo.views}</span>
          </div>
        {/*   <!-- item ends -->
          <!-- item start --> */}
          <div className="flex justify-between">
            <span>{dictionary.share}</span>
            <span className="font-bold">{photo.share}</span>
          </div>
       {/*    <!-- item ends -->
          <!-- item start --> */}
          <div className="flex justify-between">
            <span>{dictionary.uploadedOn}</span>
            <span className="font-bold">{formatDate(photo.uploaded)}</span>
          </div>
      {/*     <!-- item ends --> */}
        </div>
      {/*   <!-- info rows ends -->

        <!-- author info --> */}
        <div className="mt-6">
       {/*    <!-- author header --> */}
          <div className="flex justify-between items-center mb-3">
         {/*    <!--  --> */}
            <div className="flex items-center gap-3">
              {/* <img className="size-12 lg:size-14 rounded-full border" src="https://i.pravatar.cc/150?img=53" alt="avatar" /> */}
              <Image 
                src={photo.author.avatar}
                width={50}
                height={50}
                alt={photo.author.name}
              />
              <div className="spacy-y-3">
                <h6 className="lg:text-lg font-bold">{photo.author.name}</h6>
                <p className="text-black/60 text-xs lg:text-sm">{photo.author.followers} {dictionary.followers}</p>
              </div>
            </div>
       {/*      <!-- action --> */}
            <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
              {/* <img src="./assets/icons/follow.svg" className="w-5 h-5" /> */}
              <Image
               src="/icons/follow.svg"
               width={5}
                height={5}
                className="w-5 h-5"
                alt="follow icon"
              
              />
              {dictionary.follow}
            </button>
          </div>
      {/*     <!-- author bio --> */}
          <p className="text-xs lg:text-sm text-black/60">
          {photo.author.bio}
          </p>
        </div>
     {/*    <!-- author info ends -->
        <!-- actions --> */}
        <div className="mt-6">
          <div className="flex items-stretch gap-3">
            <button
              className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
             {/*  <img src="./assets/icons/heart.svg" className="w-5 h-5" /> */}
             <Image 
             src="/icons/heart.svg"
             height={50}
             width={50}
             className="w-5 h-5"
             alt="heart Icon"
             
             />
              {photo.author.followers}
            </button>
            <button
              className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
            
              <Image 
             src="/icons/save.svg"
             height={50}
             width={50}
             className="w-5 h-5"
             alt="save Icon"
             
             />
              {dictionary.save}
            </button>
            <button
              className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
            
              <Image 
             src="/icons/share.svg"
             height={50}
             width={50}
             className="w-5 h-5"
             alt="share Icon"
             
             />

              {dictionary.share}
            </button>
          </div>
        </div>
      </div>
{/*       <!-- details card ends --> */}
    </div>
  )
}
