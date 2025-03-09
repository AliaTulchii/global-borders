import { useTranslation } from 'react-i18next'
import Contact from '../section/Contact'
import Beneficial from '../section/Prices/Beneficial'
import Covered from '../section/Prices/Covered'
import Hero from '../section/Prices/Hero'
import OurDirections from '../section/Prices/OurDirections'
import ServiceFees from '../section/Prices/ServiceFees'
import Value from '../section/Prices/Value'

const Logistic = () => {
    const [t] = useTranslation("global");
  return (
    <div className='logistic'>
        <Hero 
        className='logistic-hero hero'
        title={t("logistic.hero.title")}
        text={t("logistic.hero.text")}
        />
        <Covered/>
        <Beneficial/>
        <Value/>
        <ServiceFees/>
        <OurDirections/>
        <Contact/>
    </div>
  )
}

export default Logistic
