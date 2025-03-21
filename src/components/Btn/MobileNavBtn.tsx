import { useEffect, useState } from "react"
import MobileNav from "../MobileNav";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";


const MobileNavBtn = () => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    const isSpecialRoute = location.pathname === "/eu" || location.pathname === "/contacts";

    useEffect(() => {
        if (isActive) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => document.body.classList.remove("no-scroll");
    }, [isActive]);
    
    const closeAndScroll = () => {
        setIsActive(false);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

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
        {isActive && <MobileNav onClick={closeAndScroll}/>}
    </AnimatePresence>
</>
  )
}

export default MobileNavBtn
