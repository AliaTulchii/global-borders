import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import "../../styles/main.scss";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};



const blackAndWhiteStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#000',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#a9a9a9',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#413838ec',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#a9a9a9',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#a9a9a9',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#a9a9a9',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#a9a9a9',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#a9a9a9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#d3d3d3',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d3d3d3',
      },
    ],
  },
];




interface MapProps{
  center: {
    lat: number;
    lng: number;
  };
  apiKey: string;
}
const Map:React.FC<MapProps> = ({center, apiKey}) => {
  const isMobile = useIsMobile();

  const containerStyle = {
    width: isMobile ? "100%" : "1340px",
    height: isMobile ? "400px" : "839px",
    borderRadius: "12px",
  };



  return (
    <section className='map'>
        <div className="container">
        <LoadScript
        googleMapsApiKey={apiKey} 
        language="en"
        onError={(error) => console.error("Google Maps API загрузка не вдалася", error)}
        >
      <GoogleMap 
      mapContainerStyle={containerStyle} 
      center={center} 
      zoom={10}
      options={{ styles: blackAndWhiteStyle }}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
        </div>
    </section>
  )
}

export default Map
