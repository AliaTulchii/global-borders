import { useTranslation } from 'react-i18next'
import Contact from '../section/Contact'
import Beneficial from '../section/Prices/Beneficial'
import Covered from '../section/Prices/Covered'
import Hero from '../section/Prices/Hero'
import OurDirections from '../section/Prices/OurDirections'
import ServiceFees from '../section/Prices/ServiceFees'
import Value from '../section/Prices/Value'

const Azerbaijan = () => {
  const [t] = useTranslation("global");
  const itemsCovered = t("azerbaijan.covered.list", { returnObjects: true }) as Record<string, { id: string; text: string }>;
  const itemsBeneficial = t("azerbaijan.beneficials.list", { returnObjects: true }) as Record<string, { id: string; text: string }>;
  return (
    <div className='azerb'>
        <Hero 
        className="azerb-hero hero"
        title={t("azerbaijan.hero.title")}
        text={t("azerbaijan.hero.text")}
        />
        <Covered
        title={t("azerbaijan.covered.title")}
        items={itemsCovered} 
        />
        <Beneficial
        title={t("azerbaijan.beneficials.title")}
        items={itemsBeneficial} 
        />
        <Value/>
        <ServiceFees/>
        <OurDirections/>
        <Contact/>
    </div>
  )
}

export default Azerbaijan
