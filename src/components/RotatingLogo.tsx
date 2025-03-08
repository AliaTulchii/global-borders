import {motion} from 'framer-motion'
import logo from "../assets/home/reasons/logo.png";
import React from 'react';

interface RotatingLogoProps{
  className: string
}

const RotatingLogo: React.FC<RotatingLogoProps> = ({className}) => {
  return (
    <div className={className}>
        <motion.img
        src={logo}
        alt="logo"
        className='logo'
        animate={{ rotate: 360 }} 
        transition={{
          duration: 14, 
          repeat: Infinity, 
          ease: "linear", 
        }}/>
    </div>
  )
}

export default RotatingLogo
