import RotatingLogo from "../../components/RotatingLogo"
import BtnLink from "../../components/Btn/BtnLink"
import ArrowIcon from "../../components/svg/ArrowIcon"
import { useTranslation } from "react-i18next"

const OurDirections = () => {
    const [t] = useTranslation("global");
    const items = t("ourDirections.list", { returnObjects: true }) as Record<string,
     { id: string; 
     mainTitle: string; 
      text1: string; 
      text2: string;
       text3: string;
        text4: string;
         text5: string; 
         subtitle1: string;
          text6: string; 
          text7: string; 
          text8: string;
           text9: string;
            subtitle2: string;
             btn1: string; 
             btn2: string; 
             img: string;}>;
  return (
    <section className="direction">
    <div className="container">
        <div className="direction__wrapper">
            <div className="direction__content">
            <h1 className="direction__title">
            {t("ourDirections.title")}
            </h1>
            <p className="direction__text">
            {t("ourDirections.text")}
            </p>
            </div>
            <div className="direction__logo-box">
                <RotatingLogo className={"rotate-logo"} />
            </div>
        </div>

        <ul className="direction__list">
        {Object.values(items).map((item) => (
            <li className="direction__item" key={item.id}>
              <div>
                <p className="direction__item-number">{item.id}</p>
                <h2 className="direction__item-title">{item.mainTitle}</h2>

                <div className="direction__item-benefits">
                <p className="direction__item-text direction__item-text--bold">{item.text1}</p>
                <p className="direction__item-text">{item.text2}</p>
                <p className="direction__item-text">{item.text3}</p>
                <p className="direction__item-text">{item.text4}</p>
                <p className="direction__item-text">{item.text5}</p>
                </div>               

                <h3 className="direction__item-subtitle">{item.subtitle1}</h3>

                <div className="direction__item-benefits">
                    <p className="direction__item-text">{item.text6}</p>
                    <p className="direction__item-text">{item.text7}</p>
                    <p className="direction__item-text">{item.text8}</p>
                    <p className="direction__item-text">{item.text9}</p>
                </div>

                <h3 className="direction__item-subtitle">{item.subtitle2}</h3>

                <div className="direction__item-btns">
                    <BtnLink className="direction__item-btn btn__link" direction={"#"}>Telegram</BtnLink>
                    <BtnLink className="direction__item-btn btn__link" direction={"#"}>Viber</BtnLink>
                    <BtnLink className="direction__item-btn btn__link" direction={"#"}>WhatsApp</BtnLink>
                </div>

                <button className="direction__item-acordeon">
                {item.btn2}
                    <ArrowIcon className={"btn__arrow"} />
                </button>
                </div>

                <div className="direction__item-img">
                    <img src={item.img} alt="azerb" />
                </div>
            </li>
          ))}
        </ul>
    </div>
    </section>
  )
}

export default OurDirections
