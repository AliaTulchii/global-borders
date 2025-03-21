import React from 'react';
import { motion } from "framer-motion";
import { Link, useLocation } from 'react-router-dom';

const slide = {
    initial: {
        x:"80px"
    },
    enter: (i: number)=> ({
        x: "0px",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}
    }),
    exit: (i: number)=> ({
        x:"80px",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}
    })
}

interface MobileNavLinkProps{
    item: {
        id: string;
        title: string;
        href: string;
      };
    onClick: () => void;
}
const MobileNavLink:React.FC<MobileNavLinkProps> = ({item, onClick}) => {
  const location = useLocation();
    const isActive = location.pathname === item.href;
  return (
    <motion.li 
    custom={parseInt(item.id)}
    variants={slide}
    animate="enter"
    exit="exit"
    initial="initial"
    className="mobile-nav__item"
    >
        <p className="mobile-nav__number">{item.id}</p>
      <Link className={`mobile-nav__link ${isActive ? "active" : ""}`}  to={item.href} onClick={onClick} >
      {item.title}
      </Link>
    </motion.li>
  )
}

export default MobileNavLink
