
import { useTranslation } from 'react-i18next'
import BtnLink from '../../components/Btn/BtnLink'
import azerbaijan from '../../assets/prices/direction/azerbaijan.jpg'
import eu from '../../assets/prices/direction/eu.jpg'
import turkey from '../../assets/prices/direction/turkey.jpg'
import Btn from '../../components/Btn/Btn'

const OurDirections = () => {
    const [t] = useTranslation("global");

  return (
    <section className="price-direct">
        <div className="container">
        <h2 className="price-direct__title">Our directions</h2>
        <ul  className="price-direct__list">
            <li  className="price-direct__item price-direct__item-country">                
            <div className='price-direct__img-box'>
              <img className='price-direct__img' src={azerbaijan} alt="image" />
            </div>
            
            <div className="price-direct__content">
                <h3 className='price-direct__card-title'>{t("homeDirection.direction1")}</h3>
                <BtnLink className="btn__link btn__link-direct" direction="/directions">Learn more</BtnLink>
            </div>
       
            </li>
            <li  className="price-direct__item price-direct__item-country">
            <div className='price-direct__img-box'>
              <img className='price-direct__img' src={eu} alt="image" />
            </div>
            
            <div className="price-direct__content">
                <h3 className='price-direct__card-title'>{t("homeDirection.direction2")}</h3>
                <BtnLink className="btn__link btn__link-direct" direction="/directions">Learn more</BtnLink>
            </div>
            </li>
            <li  className="price-direct__item price-direct__item-country">
            <div className='price-direct__img-box'>
              <img className='price-direct__img' src={turkey} alt="image" />
            </div>
            
            <div className="price-direct__content">
                <h3 className='price-direct__card-title'>{t("homeDirection.direction3")}</h3>
                <BtnLink className="btn__link btn__link-direct" direction="/directions">Learn more</BtnLink>
            </div>
            </li>

            <li  className="price-direct__item price-direct__item-last">
                <div >
                    <h3 className='price-direct__subtitle'>All directions</h3>
                    <p className='price-direct__text'>
                        We specialize in international logistics and turnkey delivery solutions, <br/>
                    providing reliable and cost-effective transportation services across multiple regions.
                    </p>
                </div>
            
                  <Btn destination={''} styleBtn={"price-direct__btn"} text='View all directions'/>

            </li>
        </ul>
        </div>
    </section>
  )
}

export default OurDirections
