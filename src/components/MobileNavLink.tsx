import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const slide = {
    initial: {
        x:"80px"
    },
    enter: {
        x: "0px",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        x:"80px"
    }
}

interface MobileNavLinkProps{
    item: {
        title: string;
        href: string;
      };
}
const MobileNavLink:React.FC<MobileNavLinkProps> = ({item}) => {
  return (
    <motion.div 
    variants={slide}
    animate="enter"
    exit="exit"
    initial="initial"
    >
      <Link to={item.href}>
      {item.title}
      </Link>
    </motion.div>
  )
}

export default MobileNavLink
