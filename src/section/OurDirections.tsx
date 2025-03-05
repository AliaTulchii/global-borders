import { useTranslation } from "react-i18next";
import DirectionSlider from "../components/DirectionSlider"


const Directions = () => {
  const [t] = useTranslation("global");
  return (
    <section className="directions">
      <div className="container">
        <h2 className="directions__title">{t("homeDirection.title")}</h2>
        <p className="directions__text">{t("homeDirection.text")}</p>

        <DirectionSlider/>
      </div>
    </section>
  )
}

export default Directions
