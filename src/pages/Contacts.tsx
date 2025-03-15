import Contact from "../section/Contact"
import ContactData from "../section/Contact/ContactData"
import Map from "../section/Contact/Map"

const center = {
  lat: 40.406451, // Широта (Latitude)
  lng: 49.867073, // Довгота (Longitude)
};

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const Contacts = () => {
  return (
    <div>
      <ContactData/>
      <Map center={center} apiKey={GOOGLE_MAPS_API_KEY}/>
      <Contact/>
    </div>
  )
}

export default Contacts
