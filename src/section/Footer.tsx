import { Link } from "react-router-dom"
import ornament from "../assets/footer/ornament-footer.png"
import logo from '../assets/footer/logo-white.png'


const Footer = () => {
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
                        <Link className="footer__link" to="/">Prices</Link>
                    </li>
                    <li className="footer__item">
                        <Link className="footer__link" to="/directions">Directions</Link>
                    </li>
                    <li className="footer__item">
                        <Link className="footer__link" to="/contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
            </div>
            <div className="footer__line"></div>
            <div className="footer__lower">
                <p className="footer__text">
                    &copy; ООО“Global borders” 2025
                </p>
                <Link className="footer__privacy" to='/'>
                Privacy policy
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
