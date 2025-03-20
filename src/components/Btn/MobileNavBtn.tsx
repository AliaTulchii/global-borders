import { useState } from "react"
import MobileNav from "../MobileNav";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";


const MobileNavBtn = () => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();
  
    const isSpecialRoute = location.pathname === "/eu" || location.pathname === "/contacts";
  

  return (
    <>
    <div 
        className={`mobile-nav__btn ${isActive ? "mobile-nav__btn-active" : ""}`}
        onClick={() => setIsActive(!isActive)}
        style={{
            backgroundColor: isSpecialRoute || isActive ? "var(--accent)" : "var(--white)",
        }}
    >
        <div
         className={`mobile-nav__burger ${isActive ? "burger-active" : ""} ${isSpecialRoute ? "burger-page" : ""}`}
         
         ></div>
    </div>

    <AnimatePresence mode="wait">
        {isActive && <MobileNav onClick={() => setIsActive(false)} />}
    </AnimatePresence>
</>
  )
}

export default MobileNavBtn
