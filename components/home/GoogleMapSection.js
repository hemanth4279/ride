import React, { useContext, useEffect, useState } from 'react'
import { DirectionsRenderer, GoogleMap, MarkerF, OverlayView, OverlayViewF, useJsApiLoader } from '@react-google-maps/api';
import { Sourcecontext } from '@/context/Sourcecontext';
import { Destinationcontext } from '@/context/Destinationcontext';

function GoogleMapSection() {
  const containerStyle = {
    width: '100%',
    height: window.innerWidth*0.45
  };
  //const [center, setCenter] =useState ({
    //const center={
    //lat: -3.745,
    //: -38.523
    //});
  //const { isLoaded } = useJsApiLoader({
    //id: 'google-map-script',
    //googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
  //})
    const {source, setSource}=useContext(Sourcecontext);
    const {destination,setdestination}=useContext(Destinationcontext);

    const [center, setCenter] =useState ({
    lat: -3.745,
    lng: -38.523
  })

  const [map, setMap] = React.useState(null)
  const [directionRoutePoints,setDirectionRoutePoints]=useState([]);

  useEffect(()=>{
    if(destination?.length!=[]&&map)
    {
      setCenter({
        lat:destination.lat,
        lng:destination.lng
      })
    }

    if(source.length!=[]&&destination.length!=[])
    {
      directionRoute();
    }
  }, [destination])

  useEffect(()=>{
    if(source.length!=[]&&map)
    {
      setCenter({
        lat:source.lat,
        lng:source.lng
      })
    }
    if(source.length!=[]&&destination.length!=[])
      {
        directionRoute();
      }
},[source])

  const directionRoute=()=>{
    const DirectionService=new google.maps.DirectionsService();

    DirectionService.route({
      origin:{lat:source.lat,lng:source.lng},
      destination:{lat:destination.lat,lng:destination.lng},
      travelMode:google.maps.TravelMode.DRIVING
    },(result,status)=>{
      if(status===google.maps.DirectionsStatus.OK)
      {
        setDirectionRoutePoints(result)
      }
      else{
        console.error('Error');
      }
    })
  }

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={map=>setMap(map)}
        options={{mapId:'3284151d60faa0be'}}
      >

{destination.length!=[]? <MarkerF
        position={{ lat:destination.lat,lng:destination.lng }}
      icon={{
        url:"/destination.jpeg",
        scaledSize:{
          width:20,
          height:20
        }
        }}
      >
        <OverlayViewF
        position={{ lat:destination.lat,lng:destination.lng }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div className='p-2 bg-white font-bold inline-block'>
            <p className='text-black text-[16px]'>{destination.label}</p>
          </div>
        </OverlayViewF>
      </MarkerF>:null}

{source.length!=[]? <MarkerF
        position={{ lat:source.lat,lng:source.lng }}
      icon={{
        url:"/source.jpeg",
        scaledSize:{
          width:20,
          height:20
        }
        }}
      >
        <OverlayViewF
        position={{ lat:source.lat,lng:source.lng }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div className='p-2 bg-white font-bold inline-block'>
            <p className='text-black text-[16px]'>{source.label}</p>
          </div>
        </OverlayViewF>
      </MarkerF>:null}


      <DirectionsRenderer
      directions={directionRoutePoints}
      options={{
        polylineOptions:{
          strokeColor:'#800080',
          strokeWeight:6
        },
        suppressMarkers:true
        }}
      />

      </GoogleMap>
  )
}

export default GoogleMapSection