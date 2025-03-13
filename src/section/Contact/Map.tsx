import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {  LatLngExpression } from "leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

// Кастомна іконка для маркера
const customIcon = new L.Icon({
  iconUrl: "/assets/svg/location.svg",
  iconSize: [24, 24], // Розмір іконки
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// const centerOfAzerbaijan: LatLngExpression = [40.1431, 47.5769];

interface MapProps {
    center: LatLngExpression;
    zoom: number;
    scrollWheelZoom?: boolean;
  }
const Map:React.FC<MapProps> = ({center, zoom}) => {
  return (
    <section className='map'>
        <div className="container">
        <MapContainer 
        center={center} 
        zoom={zoom} 
        scrollWheelZoom={true} 
        className="leaflet-container"
        attributionControl={false}
        >
      
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      
      <Marker position={center} icon={customIcon}>
        <Popup>
          <b>Luxen Plaza, SME Office</b> <br />
          AZ1008, Azerbaijan, Baku, Narimanov district <br />
          Shah Ismail Khatai Avenue, 152-158 <br />
          📧 <a href="mailto:office@glb.az">office@glb.az</a>
        </Popup>
      </Marker>
    </MapContainer>
        </div>
    </section>
  )
}

export default Map
