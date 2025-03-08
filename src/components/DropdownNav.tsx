import React, { useState } from 'react'
import { motion } from "framer-motion";



  interface DropdownNavProps{
    trigger: React.ReactNode,
    children: React.ReactNode,
    type: "services" | "direction"; 
  }

const DropdownNav: React.FC<DropdownNavProps> = ({trigger, children, type}) => {
    const [isOpen, setIsOpen] = useState(false);


  return (
    <div 
    className='dropdown-nav' 
    onMouseEnter={() => setIsOpen(true)}
    // onClick={() => setIsOpen((prev) => !prev)}
    >
        {trigger}

        {isOpen && (
            <motion.ul
            className={`dropdown-nav__menu ${
              type === "services" ? "dropdown-nav__menu-services" : "dropdown-nav__menu-direction"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {children}
          </motion.ul>
        )} 
    </div>
  )
}

export default DropdownNav
