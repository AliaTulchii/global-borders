import { useTranslation } from 'react-i18next'
import Contact from '../section/Contact'
import Beneficial from '../section/Prices/Beneficial'
import Covered from '../section/Prices/Covered'
import Hero from '../section/Prices/Hero'
import OurDirections from '../section/Prices/OurDirections'
import ServiceFees from '../section/Prices/ServiceFees'
import Value from '../section/Prices/Value'

const Turkey = () => {
    const [t] = useTranslation("global");
  return (
    <div className='turkey'>
        <Hero
        className="turkey-hero hero"
        title={t("turkey.hero.title")}
        text={t("turkey.hero.text")}
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

export default Turkey