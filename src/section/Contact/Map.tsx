import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";
import "../../styles/main.scss";

const containerStyle = {
  width: "1406px",
  height: "839px", 
  borderRadius: "12px",
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
  return (
    <section className='map'>
        <div className="container">
        <LoadScript googleMapsApiKey={apiKey} language="az">
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
