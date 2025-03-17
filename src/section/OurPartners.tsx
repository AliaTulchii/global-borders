import { useTranslation } from "react-i18next";
import partner1 from '../assets/home/partners/partner1.png'
import partner2 from '../assets/home/partners/partner2.png'
import partner3 from '../assets/home/partners/partner3.png'
import partner4 from '../assets/home/partners/partner4.png'
import partner5 from '../assets/home/partners/partner5.png'
import partner6 from '../assets/home/partners/partner6.png'


const OurPartners = () => {
    const [t] = useTranslation("global");
  return (
    <section className="partners container">
      <div className="partners__container" >
        <h2 className="partners__title">{t("partners.partnersTitle")}</h2>
        <div className="partners__ticker">
        <ul className="partners__wrapper">
        <li className="partners__item item1">
            <img src={partner1} alt="partner" />
        </li>
        <li className="partners__item item2">
            <img src={partner2} alt="partner" />
        </li>
        <li className="partners__item item3">
            <img src={partner3} alt="partner" />
        </li>
        <li className="partners__item item4">
        <img src={partner4} alt="partner" />
        </li>
        <li className="partners__item item5">
        <img src={partner5} alt="partner" />
        </li>
        <li className="partners__item item6">
        <img src={partner6} alt="partner" />
        </li>
        </ul>
        
        <ul aria-hidden="true" className="partners__wrapper">
        <li className="partners__item item1">
            <img src={partner1} alt="partner" />
        </li>
        <li className="partners__item item2">
            <img src={partner2} alt="partner" />
        </li>
        <li className="partners__item item3">
            <img src={partner3} alt="partner" />
        </li>
        <li className="partners__item item4">
        <img src={partner4} alt="partner" />
        </li>
        <li className="partners__item item5">
        <img src={partner5} alt="partner" />
        </li>
        <li className="partners__item item6">
        <img src={partner6} alt="partner" />
        </li>
        </ul>
        </div>
        
      </div>
    </section>
  )
}

export default OurPartners
