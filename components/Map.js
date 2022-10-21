import React,{useState} from 'react'

import ReactMapGL,{Marker, Popup} from 'react-map-gl';
import getCenter  from 'geolib/es/getCenter';


const Map = ({searchResults}) => {
    const [selectedLocation, setSelectedLocation] =useState({});

      // Transform the search result object into the format of geolib (latitude and longitude)

      const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
      }))

      // latitude and longitude of the center of locations coordinates
      const center = getCenter(coordinates);

      const [viewport, setViewport] = useState({
        width : "100%",
        height :"100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
      });

  return (
  <ReactMapGL
    mapStyle="mapbox://styles/sagun7/cl9huyp9z000114o7ml9y34kh"
    mapboxAccessToken={process.env.mapbox_key}

    {...viewport}
   
    onViewportChange={(nextViewport)=> setViewport(nextViewport)}
    > 
        {searchResults.map(result=>(
            <div key={result.long}>
                <Marker
                    longitude={result.long}
                    latitude={result.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                > 
                <p 
                    role="img"
                    onClick={()=> setSelectedLocation(result)}
                    className='cursor-pointer text-2xl animate-bounce'
                    aria-label="push-pin"
                >📌</p>
                
                </Marker>
                {/* THis is the popu we should show if we click marker */}

                {selectedLocation.long === result.long ? (
                    <Popup
                        onClose={() => setSelectedLocation({})}
                        closeOnClick ={true}
                        latitude={result.lat}
                        longitude ={result.long}
                        >
                        

                    </Popup>
                ):(false)}
            </div>
        ))}

    </ReactMapGL>


  
  )
}

export default Map