"use client"
import React, { useContext, useEffect, useState } from 'react'
import Inputitem from './Inputitem'
import { Sourcecontext } from '@/context/Sourcecontext';
import { Destinationcontext } from '@/context/Destinationcontext';
import { setRequestMeta } from 'next/dist/server/request-meta';
import CarListOptions from './CarListOptions';

function Search({}) {
  const {source, setSource}=useContext(Sourcecontext);
  const {destination, setDestination}=useContext(Destinationcontext);
  const [distance,setDistance]=useState();
  const calculateDisrance=()=>{
    console.log()
    const dist=google.maps.geometry.spherical.computeDistanceBetween(
      {lat:parseFloat(source.lat),lng:parseFloat(source.lng)},
      {lat:parseFloat(destination.lat),lng:parseFloat(destination.lng)}
    )
    console.log(dist*0.001);
    setDistance(dist*0.001)
  }

  return (
  <div>

    <div className='p-2 md:pd-6 border-[2px] rounded-xl'>
        <p className='text-[20px] font-bold'>Get a ride</p>
        <Inputitem type='source'/>
        <Inputitem type='destination'/>

        <button className='p-3 bg-black w-full mt-5
        text-white rounded-lg'
        onClick={()=>calculateDisrance()}
        >Search</button>
        </div>
          {distance? <CarListOptions distance={distance}/>:null}
    </div>


  )
}

export default Search