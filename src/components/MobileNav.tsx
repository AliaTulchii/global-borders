import MobileNavLink from "./MobileNavLink"
import { motion } from "framer-motion";

const menuSlide = {
    initial: {
        x:"100%"
    },
    enter: {
        x: "0%",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        x:"100%"
    }
}


const MobileNav = () => {
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
            href:"/logistics"
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
        <div className="mobile-nav__bod">
            <div className="mobile-nav__nav">
                <div className="mobile-nav__header">
                <p>navigation</p>
                
                </div>
                {
                    navItems.map((item)=> (
                        <MobileNavLink key={item.id} item={item} /> 
                    ))
                }
            </div>
        </div>
    </motion.div>
  )
}

export default MobileNav
