import { useTranslation } from "react-i18next";
import Hero from "../section/Directions/Hero"
import OurDirections from "../section/Directions/OurDirections"
import Reasons from "../section/Reasons"
import OurPartners from "../section/OurPartners";
import Contact from "../section/Contact";


const Direction = () => {
  const [t] = useTranslation("global");
  return (
    <main>
      <Hero/>
      <OurDirections/>
      <Reasons 
      title={t("ourDirections.title2")}
      subtitle={t("ourDirections.subtitle")}
      text={t("ourDirections.text2")}
      />
      <OurPartners/>
      <Contact/>
    </main>
  )
}

export default Direction
