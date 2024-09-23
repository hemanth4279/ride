"use client"
import GoogleMapSection from "@/components/home/GoogleMapSection";
import GoogleMap from "@/components/home/GoogleMapSection";
import Search from "@/components/home/Search";
import { Destinationcontext } from "@/context/Destinationcontext";
import { Sourcecontext } from "@/context/Sourcecontext";
import { UserButton } from "@clerk/nextjs";
import { LoadScript } from "@react-google-maps/api";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [source, setSource]=useState(Sourcecontext)
  const [destination,setdestination]=useState(Destinationcontext)

  return (
    
    <Sourcecontext.Provider value={{source, setSource }}>
      <Destinationcontext.Provider value={{destination, setdestination}}>
        <LoadScript
        libraries={['places']}
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>

          <div className="relative">
              <UserButton />

    <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
      <div>
        <Search/>
      </div>
      <div className="col-span-2">
        <GoogleMapSection/>
      </div>
    </div>
    </div>
    </LoadScript>
    </Destinationcontext.Provider>
    </Sourcecontext.Provider>
  );
}
