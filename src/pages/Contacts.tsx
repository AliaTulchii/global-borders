import Contact from "../section/Contact"
import ContactData from "../section/Contact/ContactData"
import Map from "../section/Contact/Map"

const officeCoordinates: [number, number] = [40.4022, 49.8671];

const Contacts = () => {
  return (
    <div>
      <ContactData/>
      <Map center={officeCoordinates} zoom={10}/>
      <Contact/>
    </div>
  )
}

export default Contacts
