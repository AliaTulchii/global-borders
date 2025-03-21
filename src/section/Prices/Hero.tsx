import ornament from '../../assets/home/reasons/ornament.png'
import ornamentMobile from '../../assets/prices/ornament-box.png'


interface HeroProps{
  className: string,
  title: string,
  text: string
}

const Hero:React.FC<HeroProps> = ({className, title, text}) => {

  return (
    <section className={className }>
      <div className="hero__container container">
      <picture>
          <source media="(max-width: 968px)" srcSet={ornamentMobile}  type="image/png"/>                
          <source srcSet={ornament}  type="image/png"/>
          
          <img className='hero__ornament' src={ornament} alt="shipping container" />
      </picture>
        
        <div className='hero__content'>
        <h1 className={`hero__title `}>
        {title}
        </h1>
        <p className="hero__text">
        {text}
        </p>
        </div>
        
      </div>
    </section>
  )
}

export default Hero
