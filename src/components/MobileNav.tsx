import MobileNavLink from "./MobileNavLink"
import { motion } from "framer-motion";
import CurveIcon from "./svg/CurveIcon";
import logoMobile from '../assets/logo/logo-mobile.png'
import BtnLink from "./Btn/BtnLink";


const menuSlide = {
    initial: {
        x:"calc(100% + 100px)"
    },
    enter: {
        x: "0%",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        x:"calc(100% + 100px)",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
    }
}

interface MobileNavProps{
    onClick: () => void;
}

const MobileNav:React.FC<MobileNavProps> = ({onClick}) => {
    const navItems =[
        {
            id: '01',
            title:"Home",
            href:"/"
        },
        {
            id: '02',
            title:"Import to Azerbaijan",
            href:"/azerbaijan"
        },
        {
            id: '03',
            title:"EU Imports",
            href:"/eu"
        },
        {
            id: '04',
            title:"Turkey Imports",
            href:"/turkey"
        },
        {
            id: '05',
            title:"Logistics Solutions",
            href:"/logistic"
        },
        {
            id: '06',
            title:"Directions",
            href:"/directions"
        },
        {
            id: '07',
            title:"Contacts",
            href:"/contacts"
        }
    ]

  return (
    <motion.div 
    variants={menuSlide} 
    animate="enter"
    exit="exit"
    initial="initial"
    className="mobile-nav__menu"
    >
        <div className="mobile-nav__body">
            <div className="mobile-nav__nav">
                <div className="mobile-nav__header">
                <img src={logoMobile} alt="logo" className="mobile-nav__logo"/>
                
                </div>
                <ul className="mobile-nav__list">
                    {
                    navItems.map((item)=> (
                        <MobileNavLink key={item.id} item={item} onClick={onClick}/> 
                    ))
                    }
                </ul>
                
                
            </div>
            <div className="mobile-nav__footer">
                    <div className="mobile-nav__footer-top">
                        <p className="mobile-nav__footer-text">Contact us</p>
                        <h2 className="mobile-nav__footer-title">Let&apos;s talk</h2>
                        <BtnLink className="mobile-nav__footer-btn" direction="/contacts"> </BtnLink>
                    </div>
                    <div className="mobile-nav__footer-line"></div>
                    <div className="mobile-nav__footer-top">
                        <p className="mobile-nav__footer-company">&copy; ООО“Global borders” 2025</p>
                    </div>
                </div>
        </div>
        <CurveIcon/>
    </motion.div>
  )
}

export default MobileNav
