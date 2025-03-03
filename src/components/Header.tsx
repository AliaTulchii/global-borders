import logo from '../assets/logo/logo.svg'
import MultiLang from './MultiLang'
import PhoneBtn from './PhoneBtn'
import { motion } from "framer-motion";
import NavLink from './NavLink';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import DropdownNav from './DropdownNav'


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
                <ScrollLink  className='header__nav-item' 
                to="services-anchor" 
                smooth={true} 
                duration={500} >
                {t("header.services")}&#10625;
                </ScrollLink>
              }
              >
                <li className='dropdown__item'>
              <ScrollLink  
              className='dropdown__link dropdown__link-services'
              to="services-anchor" 
              smooth={true} 
              duration={500}

              >
              <motion.span initial="initial" whileHover="hover" className="nav-text">
                      <motion.span className="nav-text__top" variants={variants}> 
                      {t("header.services1")}
                      </motion.span>
                      <motion.span className="nav-text__bottom" variants={variants}>
                      {t("header.services1")}
                      </motion.span>
                    </motion.span>
              </ScrollLink>
            </li>
            <li className='dropdown__item'>
              <ScrollLink  
              className='dropdown__link dropdown__link-services'
              to="services-anchor" 
              smooth={true} 
              duration={500}>
              <motion.span initial="initial" whileHover="hover" className="nav-text">
                      <motion.span className="nav-text__top" variants={variants}> 
                      {t("header.services2")}
                      </motion.span>
                      <motion.span className="nav-text__bottom" variants={variants}>
                      {t("header.services2")}
                      </motion.span>
                    </motion.span>
              </ScrollLink>
            </li>
            <li className='dropdown__item'>
              <ScrollLink  
              className='dropdown__link dropdown__link-services'
              to="services-anchor" 
              smooth={true} 
              duration={500}>
              <motion.span initial="initial" whileHover="hover" className="nav-text">
                      <motion.span className="nav-text__top" variants={variants}> 
                      {t("header.services3")}
                      </motion.span>
                      <motion.span className="nav-text__bottom" variants={variants}>
                      {t("header.services3")}
                      </motion.span>
                    </motion.span>
              </ScrollLink>
            </li>
            <li className='dropdown__item'>
              <ScrollLink  
              className='dropdown__link dropdown__link-services'
              to="services-anchor" 
              smooth={true} 
              duration={500}>
              <motion.span initial="initial" whileHover="hover" className="nav-text">
                      <motion.span className="nav-text__top" variants={variants}> 
                      {t("header.services4")}
                      </motion.span>
                      <motion.span className="nav-text__bottom" variants={variants}>
                      {t("header.services4")}
                      </motion.span>
                    </motion.span>
              </ScrollLink>
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
