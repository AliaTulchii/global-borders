import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const variants = {
    initial: { y: 0, opacity: 1 },
    hover: { y: "-100%", opacity: 1, transition: { duration: 0.3 } },
  };

interface NavLinkProps {
    className: string,
    to: string,
    children: React.ReactNode

}
const NavLink:React.FC<NavLinkProps> = ({className, to, children}) => {
  return (
    <Link className={className} to={to}>
      <motion.span initial="initial" whileHover="hover" className="nav-text">
        <motion.span className="nav-text__top" variants={variants}> 
        {children}
        </motion.span>
        <motion.span className="nav-text__bottom" variants={variants}>
        {children}
        </motion.span>
      </motion.span>
    </Link>
  )
}

export default NavLink
