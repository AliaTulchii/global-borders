import OurDirections from '../section/OurDirections'
import HomeHero from '../section/HomeHero'
import OurPartners from '../section/OurPartners'
import Reasons from '../section/Reasons'
import Services from '../section/Services'
import '../styles/main.scss'

const Home = () => {
  
  return (
    <main >
      <HomeHero/>
      <Reasons/>
      <OurPartners/>
      <Services id="services-anchor"/>
      <OurDirections/>
    </main>
      

  )
}

export default Home
