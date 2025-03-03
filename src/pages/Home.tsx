import HomeHero from '../components/HomeHero'
import OurPartners from '../components/OurPartners'
import Reasons from '../components/Reasons'
import Services from '../components/Services'
import '../styles/main.scss'

const Home = () => {
  
  return (
    <main >
      <HomeHero/>
      <Reasons/>
      <OurPartners/>
      <Services id="services-anchor"/>
    </main>
      

  )
}

export default Home
