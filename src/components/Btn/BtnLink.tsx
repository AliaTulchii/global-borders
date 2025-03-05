import { NavLink } from "react-router-dom";
import ArrowIcon from "../svg/ArrowIcon";
import { useTranslation } from "react-i18next";

const BtnLink = () => {
  const [t] = useTranslation("global");

  return (
    <NavLink className="btn__link" to={"/directions"}>
      <p>
        <>{t("learnBtn.text")}</>
      </p>
      <ArrowIcon className={"btn__arrow"} />
    </NavLink>
  );
};

export default BtnLink;
