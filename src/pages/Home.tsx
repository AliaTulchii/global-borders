import OurDirections from '../section/Home/OurDirections'
import Hero from '../section/Home/Hero'
import OurPartners from '../section/OurPartners'
import Reasons from '../section/Reasons'
import Services from '../section/Services'
import '../styles/main.scss'
import Contact from '../section/Contact'
import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import ornament from "../assets/home/reasons/ornament.png";

const Home = () => {
  const [t] = useTranslation("global");
  const sectionRef =  useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const ornamentY = useTransform(scrollYProgress, [0, 1], [-150, 200]);

  return (
    <main >
      <Hero/>
      <Reasons
      title={t("reasons.reason1")}
      subtitle={t("reasons.reason2")}
      text={t("reasons.reason3")}
      ornamentY={ornamentY}
      sectionRef={sectionRef}
      ornament={ornament}
      />
      <OurPartners/>
      <Services />
      <OurDirections/>
      <Contact/>
    </main>
      

  )
}

export default Home
