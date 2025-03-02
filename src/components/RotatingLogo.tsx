import React from 'react'
import {motion} from 'framer-motion'

interface RotatingLogoProps{
    logo: string;
}

const RotatingLogo: React.FC<RotatingLogoProps> = ({logo}) => {
  return (
    <div>
      <motion.img
        src={logo}
        alt="logo"
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
