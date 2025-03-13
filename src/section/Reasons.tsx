import { motion, MotionValue  } from "framer-motion";
import { RefObject } from "react";
import RotatingLogo from "../components/RotatingLogo";
import { useTranslation } from "react-i18next";

interface ReasonsProps{
  title: string,
  subtitle: string,
  text: string,
  ornamentY?: MotionValue<number>; 
  sectionRef?: RefObject<HTMLElement | null>; 
  ornament?: string;
}

const Reasons:React.FC<ReasonsProps> = ({title, subtitle, text, ornamentY, sectionRef, ornament}) => {
  const [t] = useTranslation("global");

  return (
    <section ref={sectionRef} className="reasons">
      <div className="reasons__container container">
        <motion.div className="reasons__ornament" style={{ y: ornamentY }}>
          <img src={ornament} alt="ornament" />
        </motion.div>
        <ul className="reasons__list">
          <li className="reasons__item">
            <div className="reasons__choose">
              <h1 className="reasons__title">{title}</h1>
              <h2 className="reasons__subtitle">{subtitle}</h2>
              <p className="reasons__text">{text}</p>
            </div>
            <div className="reasons__box reasons__logo">
              <RotatingLogo className={"rotate-logo"} />
            </div>
          </li>

          <li className="reasons__item">
            <div className="reasons__box reasons__years">
              <h2 className="reasons__years-title">{t("reasons.reason4")}</h2>

              <div>
                <h3 className="reasons__box-subtitle">
                  {t("reasons.reason5")}
                </h3>
                <p className="reasons__box-text">{t("reasons.reason6")}</p>
              </div>
            </div>
            <div className="reasons__box">
              <h2 className="reasons__box-title">{t("reasons.reason7")}</h2>

              <div>
                <h3 className="reasons__box-subtitle">
                  {t("reasons.reason8")}
                </h3>
                <p className="reasons__box-text">{t("reasons.reason9")}</p>
              </div>
            </div>
          </li>

          <li className="reasons__item">
            <div className="reasons__box reasons__box-img"></div>
            <div className="reasons__box">
              <h2 className="reasons__box-title">{t("reasons.reason10")}</h2>

              <p className="reasons__box-text reasons__box-text--last">{t("reasons.reason11")}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Reasons;
