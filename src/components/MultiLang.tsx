import { useTranslation } from "react-i18next";


const MultiLang = () => {
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className="lang__btns">
            <button
              className="lang__btn"
              onClick={() => handleChangeLanguage("en")}
            >
              {t("EN")}
            </button>
            <p>|</p>
            <button
              className="lang__btn"
              onClick={() => handleChangeLanguage("az")}
            >
              {t("AZ")}
            </button>
          </div>
  )
}

export default MultiLang
