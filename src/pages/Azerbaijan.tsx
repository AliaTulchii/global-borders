import Beneficial from '../section/Prices/Beneficial'
import Covered from '../section/Prices/Covered'
import Hero from '../section/Prices/Hero'
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
    </div>
  )
}

export default Azerbaijan
