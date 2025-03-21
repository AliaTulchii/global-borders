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
  const itemsCovered = t("turkey.covered.list", { returnObjects: true }) as Record<string, { id: string; text: string }>;
  const itemsBeneficial = t("turkey.beneficials.list", { returnObjects: true }) as Record<string, { id: string; text: string }>;
  const itemsValue = t("turkey.value.list", { returnObjects: true }) as Record<string, { id: string; img: string; title: string; text: string }>;


  return (
    <main className='turkey'>
        <Hero
        className="turkey-hero hero"
        title={t("turkey.hero.title")}
        text={t("turkey.hero.text")}
        />
        <Covered
        title={t("turkey.covered.title")}
        items={itemsCovered}
        />
        <Beneficial
        title={t("turkey.beneficials.title")}
        items={itemsBeneficial}
        />
        <Value
        title={t("turkey.value.title")}
        items={itemsValue}
        />
        <ServiceFees/>
        <OurDirections/>
        <Contact/>
    </main>
  )
}

export default Turkey