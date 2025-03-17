import { useState } from "react"
import MobileNav from "../MobileNav";


const MobileNavBtn = () => {
    const [isActive, setIsActive] = useState(false);

  return (
    <>
    <div className="mobile-nav__btn" onClick={() => setIsActive(!isActive)}>
    <div className={`mobile-nav__burger ${isActive ? "burger-active" : ""}`}>
    </div>
    </div>
    {isActive && <MobileNav/>}
</>
  )
}

export default MobileNavBtn
