import { useTranslation } from "react-i18next";


const PrivacyPolicy = () => {
    const [t] = useTranslation("global");
        const items = t("privacy.list", { returnObjects: true }) as Record<string,
         { id: string; 
             subtitle: string;
              text: string; 
              }>;
  return (
    <section className="privacy">
    <div className="container">
        <h1 className="privacy__title">
        {t("privacy.title")}
        </h1>
        <ul className="privacy__list">
        {Object.values(items).map((item) => (
            <li className="privacy__item" key={item.id}>
                <div className="privacy__item--left">
                    <p className="privacy__item-number">{item.id}.</p>
                    <h2 className="privacy__item-subtitle">{item.subtitle}</h2>
                </div>
                <div className="privacy__item--right">
                {item.text.split("\n").map((line, index) => (
                                    <p key={index} className="privacy__item-text">
                                        {line}
                                    </p>
                                ))}
                </div>
              </li>
            ))}
        </ul>
    </div>
    </section>
  )
}

export default PrivacyPolicy
