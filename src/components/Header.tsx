
import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo.svg'
import MultiLang from './MultiLang'
import PhoneBtn from './PhoneBtn'
import NavLink from './NavLink'

import { useTranslation } from "react-i18next";


const Header = () => {
  const [t] = useTranslation("global");

  return (
    <header className='header container'>
      <div className='header__wrapper'>
        <Link className='logo' to={'/'}>
        <img className='logo__img' src={logo} alt="logo" />
        </Link>

        <nav className='header__nav'>
            <NavLink className='header__nav-item' to={'/'}>{t("header.home")}</NavLink>
            <NavLink className='header__nav-item' to={'/directions'}>{t("header.services")}&#10625;</NavLink>
            <NavLink className='header__nav-item' to={'/directions'}>{t("header.directions")}&#10625;</NavLink>
            <NavLink className='header__nav-item' to={'/contacts'}>{t("header.contacts")}</NavLink>
        </nav>
        
        <div className='header__btns'>
            <MultiLang/>
            <PhoneBtn/>
        </div>
      </div>
    </header>
  )
}

export default Header
