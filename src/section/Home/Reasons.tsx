import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import ornament from "../../assets/home/reasons/ornament.png";
import RotatingLogo from "../../components/RotatingLogo";
import { useTranslation } from "react-i18next";

const Reasons = () => {
  const [t] = useTranslation("global");
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const ornamentY = useTransform(scrollYProgress, [0, 1], [-150, 200]);

  return (
    <section ref={sectionRef} className="reasons">
      <div className="reasons__container container">
        <motion.div className="reasons__ornament" style={{ y: ornamentY }}>
          <img src={ornament} alt="ornament" />
        </motion.div>
        <ul className="reasons__list">
          <li className="reasons__item">
            <div className="reasons__choose">
              <h1 className="reasons__title">{t("reasons.reason1")}</h1>
              <h2 className="reasons__subtitle">{t("reasons.reason2")}</h2>
              <p className="reasons__text">{t("reasons.reason3")}</p>
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
