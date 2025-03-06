import { Link } from "react-router-dom"
import ornament from "../assets/footer/ornament-footer.png"
import logo from '../assets/footer/logo-white.png'
import NavLink from "../components/NavLink"
import { useTranslation } from "react-i18next"


const Footer = () => {
    const [t] = useTranslation("global");
  return (
    <section className="footer">
      <div className="footer__container container">
        <img className="footer__img" src={ornament} alt="ornament" />
        <div className="footer__content">
            <div className="footer__upper">
                <Link to="/">
            <img src={logo} alt="logo" />
            </Link>

            <nav className="footer__nav">
                <ul className="footer__list">
                    <li className="footer__item">
                        <NavLink className="footer__link" to="/">{t("footer.price")}</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__link" to="/directions">{t("footer.direction")}</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__link" to="/contacts">{t("footer.contacts")}</NavLink>
                    </li>
                </ul>
            </nav>
            </div>
            <div className="footer__line"></div>
            <div className="footer__lower">
                <p className="footer__text">
                    &copy; ООО“Global borders” 2025
                </p>
                <NavLink className="footer__privacy" to='/'>
                {t("footer.privacy")}
                </NavLink>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
