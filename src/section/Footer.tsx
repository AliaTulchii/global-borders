import { Link } from "react-router-dom"
// import ornament from "../assets/footer/ornament-footer.png"
// import ornamentMob from "../assets/footer/ornament-footer-mobile.png"
import logo from '../assets/footer/logo-white.png'
import NavLink from "../components/NavLink"
import { useTranslation } from "react-i18next"


const Footer = () => {
    const [t] = useTranslation("global");
  return (
    <section className="footer">
    <div className="container">
        {/* <picture>
            <source media="(max-width: 968px)" srcSet={ornamentMob} type="image/png"/>
            <source srcSet={ornament} type="image/png"/>
                        
            <img className="footer__img" src={ornament} alt="ornament" />
        </picture> */}
        
        <div className="footer__content">
            <div className="footer__upper">
                <Link to="/">
            <img className="footer__logo" src={logo} alt="logo" />
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
                <NavLink className="footer__privacy" to='/policy'>
                {t("footer.privacy")}
                </NavLink>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
