import { useState } from "react"
import MobileNav from "../MobileNav";
import { AnimatePresence } from "framer-motion";


const MobileNavBtn = () => {
    const [isActive, setIsActive] = useState(false);

  return (
    <>
    <div className={`mobile-nav__btn ${isActive ? "mobile-nav__btn-active" : ""}`}  onClick={() => setIsActive(!isActive)}>
    <div className={`mobile-nav__burger ${isActive ? "burger-active" : ""}`}>
    </div>
    </div>
    <AnimatePresence mode="wait">
    {isActive && <MobileNav onClick={() => setIsActive(!isActive)}/>}
    </AnimatePresence>
</>
  )
}

export default MobileNavBtn
