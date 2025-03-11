import OurDirections from '../section/Home/OurDirections'
import Hero from '../section/Home/Hero'
import OurPartners from '../section/OurPartners'
import Reasons from '../section/Reasons'
import Services from '../section/Services'
import '../styles/main.scss'
import Contact from '../section/Contact'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const [t] = useTranslation("global");
  return (
    <main >
      <Hero/>
      <Reasons
      title={t("reasons.reason1")}
      subtitle={t("reasons.reason2")}
      text={t("reasons.reason3")}
      />
      <OurPartners/>
      <Services />
      <OurDirections/>
      <Contact/>
    </main>
      

  )
}

export default Home
