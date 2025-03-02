import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logo from '../assets/home/reasons/logo.png'
import ornament from '../assets/home/reasons/ornament.png'
import RotatingLogo from './RotatingLogo'

const Reasons = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end end"],
      });
    
      const ornamentY = useTransform(scrollYProgress, [0, 1], [-250, 300]); 
    
  return (
    <section ref={sectionRef} className='reasons'>
        <div className="container">
        <motion.div
          className="reasons__ornament"
          style={{ y: ornamentY }}
        >
          <img src={ornament} alt="ornament" />
        </motion.div>
        <ul className="reasons__list">
            <li className="reasons__item">
                <div className="reasons__choose">
                    <h1 className="reasons__title">Reasons to choose us</h1>
                    <h2 className="reasons__subtitle">We sell a wide range 
                        of goods from European manufacturers with a high 
                        professional reputation and at competitive prices.
                    </h2>
                    <p className="reasons__text">
                    Being a professional supplier, we independently organize
                    commodity, financial, customs and transport logistics.
                    With 10-year partnerships we offer special prices for
                    the supply of goods from the countries of the European
                    Union. Traditionally, our customers are importers and 
                    companies from Azerbaijan, China, India, Uzbekistan and 
                    Kazakhstan.
                    </p>
                </div>
                <div className="reasons__box reasons__logo">
                    <RotatingLogo logo={logo}/>
                </div>
            </li>

            <li className="reasons__item">
                <div className="reasons__box reasons__years">
                    <h2 className='reasons__years-title'>
                        10 years
                    </h2>

                    <div>
                        <h3 className='reasons__box-subtitle'>
                        of experience in international logistics
                        </h3>
                        <p className='reasons__box-text'>
                        We efficiently manage global deliveries, optimizing routes and reducing costs.
                        </p>
                    </div>
                </div>
                <div className="reasons__box">
                <h2 className='reasons__box-title'>
                Partnership
                    </h2>

                    <div>
                        <h3 className='reasons__box-subtitle'>
                        with leading European manufacturers
                        </h3>
                        <p className='reasons__box-text'>
                        We collaborate with trusted suppliers, ensuring high quality and competitive pricing.
                        </p>
                    </div>
                </div>
            </li>

            <li className="reasons__item">
                <div className="reasons__box reasons__box-img">
                </div>
                <div className="reasons__box">
                <h2 className='reasons__box-title'>
                Our mission
                    </h2>

                    
                        <p className='reasons__box-text'>
                        to make quality products from the best world manufacturers available to more people.
                        </p>
                    
                </div>
            </li>
        </ul>
        </div>
      
    </section>
  )
}

export default Reasons
