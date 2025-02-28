
import Btn from '../components/Btn'
import '../styles/main.scss'

const Home = () => {
  return (
    <section className='home'>
      <div className='home__container container'>
        <h1 className='home__title'>Seamless European Imports – Full-Service Logistics from Supplier to Destination</h1>
        <p className='home__text'>
          A full-cycle logistics service: import, export, customs clearance, and financial 
          management. Guaranteed quality, competitive rates, and on-time delivery.
        </p>

        <div className='home__btns'>
          <Btn text={'Get a quote'} destination={'/contacts'} styleBtn={'btn btn__anchor'}/>
          <Btn text={'Our services'} destination={'/directions'} styleBtn={'btn btn__services'}/>
        </div>
      </div>
      

    </section>
  )
}

export default Home
