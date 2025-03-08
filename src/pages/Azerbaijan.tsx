import Contact from '../section/Home/Contact'
import Beneficial from '../section/Prices/Beneficial'
import Covered from '../section/Prices/Covered'
import Hero from '../section/Prices/Hero'
import OurDirections from '../section/Prices/OurDirections'
import ServiceFees from '../section/Prices/ServiceFees'
import Value from '../section/Prices/Value'

const Azerbaijan = () => {
  return (
    <div className='azerb'>
        <Hero/>
        <Covered/>
        <Beneficial/>
        <Value/>
        <ServiceFees/>
        <OurDirections/>
        <Contact/>
    </div>
  )
}

export default Azerbaijan
