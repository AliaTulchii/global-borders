import logo from '../assets/logo/logo.svg'
import MultiLang from '../components/MultiLang'
import PhoneBtn from '../components/Btn/PhoneBtn'
import { motion } from "framer-motion";
import NavLink from '../components/NavLink';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import DropdownNav from '../components/DropdownNav'


const variants = {
    initial: { y: 0, opacity: 1 },
    hover: { y: "-100%", opacity: 1, transition: { duration: 0.3 } },
  };

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
            <DropdownNav
              type="services"
              trigger= {
                <NavLink to={'/'}   className='header__nav-item'>
                {t("header.services")}&#10625;
                </NavLink>
              }
              >
                <li className='dropdown__item'>
              <Link 
              to={'/'} 
              className='dropdown__link dropdown__link-services'
              >
              <motion.span initial="initial" whileHover="hover" className="nav-text">
                      <motion.span className="nav-text__top" variants={variants}> 
                      {t("header.services1")}
                      </motion.span>
                      <motion.span className="nav-text__bottom" variants={variants}>
                      {t("header.services1")}
                      </motion.span>
                    </motion.span>
              </Link>
            </li>
            <li className='dropdown__item'>
              <Link  
              className='dropdown__link dropdown__link-services'
              to={'/'}>
              <motion.span initial="initial" whileHover="hover" className="nav-text">
                      <motion.span className="nav-text__top" variants={variants}> 
                      {t("header.services2")}
                      </motion.span>
                      <motion.span className="nav-text__bottom" variants={variants}>
                      {t("header.services2")}
                      </motion.span>
                    </motion.span>
              </Link>
            </li>
            <li className='dropdown__item'>
              <Link  
              className='dropdown__link dropdown__link-services'
              to={'/'}>
              <motion.span initial="initial" whileHover="hover" className="nav-text">
                      <motion.span className="nav-text__top" variants={variants}> 
                      {t("header.services3")}
                      </motion.span>
                      <motion.span className="nav-text__bottom" variants={variants}>
                      {t("header.services3")}
                      </motion.span>
                    </motion.span>
              </Link>
            </li>
            <li className='dropdown__item'>
              <Link  
              className='dropdown__link dropdown__link-services'
              to={'/'}>
              <motion.span initial="initial" whileHover="hover" className="nav-text">
                      <motion.span className="nav-text__top" variants={variants}> 
                      {t("header.services4")}
                      </motion.span>
                      <motion.span className="nav-text__bottom" variants={variants}>
                      {t("header.services4")}
                      </motion.span>
                    </motion.span>
              </Link>
            </li>
                
            </DropdownNav>
            
            <DropdownNav
              type="direction"
              trigger= {
                <NavLink className='header__nav-item' to={'/directions'}>{t("header.directions")}&#10625;</NavLink>
              }
              >
                <li className='dropdown__item'>
              <Link className='dropdown__link dropdown__link-direction' to="/service1">
              <motion.span initial="initial" whileHover="hover" className="nav-text">
                      <motion.span className="nav-text__top" variants={variants}> 
                      {t("header.direction1")}
                      </motion.span>
                      <motion.span className="nav-text__bottom" variants={variants}>
                      {t("header.direction1")}
                      </motion.span>
                    </motion.span>
              </Link>
            </li>
            <li className='dropdown__item'>
              <Link className='dropdown__link dropdown__link-direction' to="/service2">
              <motion.span initial="initial" whileHover="hover" className="nav-text">
                      <motion.span className="nav-text__top" variants={variants}> 
                      {t("header.direction2")}
                      </motion.span>
                      <motion.span className="nav-text__bottom" variants={variants}>
                      {t("header.direction2")}
                      </motion.span>
                    </motion.span>
              </Link>
            </li>
            <li className='dropdown__item'>
              <Link className='dropdown__link dropdown__link-direction' to="/service3">
              <motion.span initial="initial" whileHover="hover" className="nav-text">
                      <motion.span className="nav-text__top" variants={variants}> 
                      {t("header.direction3")}
                      </motion.span>
                      <motion.span className="nav-text__bottom" variants={variants}>
                      {t("header.direction3")}
                      </motion.span>
                    </motion.span>
              </Link>
            </li>
            <li className='dropdown__item'>
              <Link className='dropdown__link dropdown__link-direction' to="/service4">
              <motion.span initial="initial" whileHover="hover" className="nav-text">
                      <motion.span className="nav-text__top" variants={variants}> 
                      {t("header.direction4")}
                      </motion.span>
                      <motion.span className="nav-text__bottom" variants={variants}>
                      {t("header.direction4")}
                      </motion.span>
                    </motion.span>
              </Link>
            </li>
                
            </DropdownNav>

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
