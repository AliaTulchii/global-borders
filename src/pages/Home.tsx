import OurDirections from '../section/Home/OurDirections'
import Hero from '../section/Home/Hero'
import OurPartners from '../section/Home/OurPartners'
import Reasons from '../section/Home/Reasons'
import Services from '../section/Services'
import '../styles/main.scss'
import Contact from '../section/Home/Contact'

const Home = () => {
  
  return (
    <main >
      <Hero/>
      <Reasons/>
      <OurPartners/>
      <Services />
      <OurDirections/>
      <Contact/>
    </main>
      

  )
}

export default Home
