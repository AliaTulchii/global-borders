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
  const itemsCovered = t("logistic.covered.list", { returnObjects: true }) as Record<string, { id: string; text: string }>;
  const itemsBeneficial = t("logistic.beneficials.list", { returnObjects: true }) as Record<string, { id: string; text: string }>;
  
  return (
    <div className='logistic'>
        <Hero 
        className='logistic-hero hero'
        title={t("logistic.hero.title")}
        text={t("logistic.hero.text")}
        />
        <Covered
        title={t("logistic.covered.title")}
        items={itemsCovered}
        />
        <Beneficial
        title={t("logistic.beneficials.title")}
        items={itemsBeneficial}
        />
        <Value/>
        <ServiceFees/>
        <OurDirections/>
        <Contact/>
    </div>
  )
}

export default Logistic
