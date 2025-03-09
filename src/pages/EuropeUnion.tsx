import { useTranslation } from 'react-i18next'
import Contact from '../section/Contact'
import Beneficial from '../section/Prices/Beneficial'
import Covered from '../section/Prices/Covered'
import Hero from '../section/Prices/Hero'
import OurDirections from '../section/Prices/OurDirections'
import ServiceFees from '../section/Prices/ServiceFees'
import Value from '../section/Prices/Value'

const EuropeUnion = () => {
    const [t] = useTranslation("global");
  const itemsCovered = t("eu.covered.list", { returnObjects: true }) as Record<string, { id: string; text: string }>;
  const itemsBeneficial = t("eu.beneficials.list", { returnObjects: true }) as Record<string, { id: string; text: string }>;
  const itemsValue = t("eu.value.list", { returnObjects: true }) as Record<string, { id: string; img: string; title: string; text: string }>;

  return (
    <div className='eu'>
        <Hero 
        className='eu-hero hero'
        title={t("eu.hero.title")}
        text={t("eu.hero.text")}
        />
        <Covered
        title={t("eu.covered.title")}
        items={itemsCovered}
        />
        <Beneficial
        title={t("eu.beneficials.title")}
        items={itemsBeneficial} 
        />
        <Value
        title={t("eu.value.title")}
        items={itemsValue} 
        />
        <ServiceFees/>
        <OurDirections/>
        <Contact/>
    </div>
  )
}

export default EuropeUnion
