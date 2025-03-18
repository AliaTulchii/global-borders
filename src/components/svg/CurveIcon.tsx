import {motion } from 'framer-motion'

const CurveIcon = () => {
    const initialPath = `M100 0 L100 ${window.innerHeight} Q-10 ${window.innerHeight/2} 100 0`
    const targetPath = `M100 0 L100 ${window.innerHeight} Q10 ${window.innerHeight/2} 100 0`
    
    const pathAnimation = {
        initial: {
            d: initialPath
        },
        enter:{
            d: targetPath,
            transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
        },
        exit:{
            d: initialPath,
            transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
        }
    }

    return (
    <svg className='svg-curve'>
      <motion.path
      variants={pathAnimation}
      initial="initial"
      animate="enter"
      exit="exit"
      ></motion.path>
    </svg>
  )
}

export default CurveIcon
