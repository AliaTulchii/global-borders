import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const variants = {
    initial: { y: 0, opacity: 1 },
    hover: { y: "-100%", opacity: 1, transition: { duration: 0.3 } },
  };


const MultiLang = () => {
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  
  return (
    <div className="lang__btns">
      {/* EN */}
      <motion.div initial="initial" whileHover="hover" className="lang">
        <motion.button
          className="lang__btn"
          onClick={() => handleChangeLanguage("en")}
          variants={variants}
        >
          {t("EN")}
        </motion.button>
        <motion.button
          className="lang__btn"
          onClick={() => handleChangeLanguage("en")}
          variants={variants}
        >
          {t("EN")}
        </motion.button>
      </motion.div>

      <p>|</p>

      {/* AZ */}
      <motion.div initial="initial" whileHover="hover" className="lang">
        <motion.button
          className="lang__btn"
          onClick={() => handleChangeLanguage("az")}
          variants={variants}
        >
          {t("AZ")}
        </motion.button>
        <motion.button
          className="lang__btn"
          onClick={() => handleChangeLanguage("az")}
          variants={variants}
        >
          {t("AZ")}
        </motion.button>
      </motion.div>
    </div>
  );
}

export default MultiLang
