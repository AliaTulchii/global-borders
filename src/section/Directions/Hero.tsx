import ornament from '../../assets/directions/ornament.png'

const Hero = () => {
  return (
    <section className="hero-directions">
        <img className='hero-directions__ornament hero-directions__ornament-first' src={ornament} alt="ornament" />
        <img className='hero-directions__ornament hero-directions__ornament-second' src={ornament} alt="ornament" />
    </section>
  )
}

export default Hero

