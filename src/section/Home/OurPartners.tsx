import { useTranslation } from "react-i18next";

const OurPartners = () => {
    const [t] = useTranslation("global");
  return (
    <section className="partners container">
      <div className="partners__container" >
        <h2 className="partners__title">{t("partners.partnersTitle")}</h2>
        <div className="partners__wrapper">
        <div className="partners__item item1">
            {/* <img src={partner1} alt="partner" /> */}
        </div>
        <div className="partners__item item2">
            {/* <img src={partner2} alt="partner" /> */}
        </div>
        <div className="partners__item item3">
            {/* <img src={partner3} alt="partner" /> */}
        </div>
        <div className="partners__item item4">
        {/* <img src={partner4} alt="partner" /> */}
        </div>
        <div className="partners__item item5">
        {/* <img src={partner5} alt="partner" /> */}
        </div>
        <div className="partners__item item6">
        {/* <img src={partner6} alt="partner" /> */}
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default OurPartners
