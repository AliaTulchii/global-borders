import ornament from '../../assets/home/reasons/ornament.png'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <img className='hero__ornament' src={ornament} alt="ornament" />
        <div className='hero__content'>
        <h1 className="hero__title">
        Import of goods to Azerbaijan
        </h1>
        <p className="hero__text">
        We provide a seamless import solution for businesses in Azerbaijan,
        ensuring cost-effective and hassle-free deliveries. 
        </p>
        </div>
        
      </div>
    </section>
  )
}

export default Hero
