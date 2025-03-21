
import { useTranslation } from 'react-i18next'
import BtnLink from '../../components/Btn/BtnLink'
import azerbaijan from '../../assets/prices/direction/azerbaijan.jpg'
import azerbaijan2x from '../../assets/prices/direction/azerbaijan@2x.jpg'

import azerbaijanMobile from '../../assets/prices/direction/azerbaijan-mobile.jpg'
import azerbaijanMobile2x from '../../assets/prices/direction/azerbaijan-mobile@2x.jpg'

import eu from '../../assets/prices/direction/eu.jpg'
import eu2x from '../../assets/prices/direction/eu@2x.jpg'

import euMobile from '../../assets/prices/direction/eu-mobile.jpg'
import euMobile2x from '../../assets/prices/direction/eu-mobile@2x.jpg'

import turkey from '../../assets/prices/direction/turkey.jpg'
import turkey2x from '../../assets/prices/direction/turkey@2x.jpg'

import turkeyMobile from '../../assets/prices/direction/turkey-mobile.jpg'
import turkeyMobile2x from '../../assets/prices/direction/turkey-mobile@2x.jpg'

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
            <picture>
                        <source media="(max-width: 968px)" srcSet={`${azerbaijanMobile} 1x, ${azerbaijanMobile2x} 2x`}  type="image/jpg"/>
                
                        <source srcSet={`${azerbaijan} 1x, ${azerbaijan2x} 2x`}  type="image/jpg"/>
                        
                        <img className='price-direct__img' src={azerbaijan} alt="azerbaijan" />
            </picture>
             
            </div>
            
            <div className="price-direct__content">
                <h3 className='price-direct__card-title'>{t("homeDirection.direction1")}</h3>
                <BtnLink className="btn__link btn__link-direct" direction="/directions">Learn more</BtnLink>
            </div>
       
            </li>
            <li  className="price-direct__item price-direct__item-country">
            <div className='price-direct__img-box'>
            <picture>
                        <source media="(max-width: 968px)" srcSet={`${euMobile} 1x, ${euMobile2x} 2x`}  type="image/jpg"/>
                
                        <source srcSet={`${eu} 1x, ${eu2x} 2x`}  type="image/jpg"/>
                        
                        <img className='price-direct__img' src={eu} alt="eu" />
            </picture>
              
            </div>
            
            <div className="price-direct__content">
                <h3 className='price-direct__card-title'>{t("homeDirection.direction2")}</h3>
                <BtnLink className="btn__link btn__link-direct" direction="/directions">Learn more</BtnLink>
            </div>
            </li>

            <li  className="price-direct__item price-direct__item-country">
            <div className='price-direct__img-box'>
            <picture>
                        <source media="(max-width: 968px)" srcSet={`${turkeyMobile} 1x, ${turkeyMobile2x} 2x`}  type="image/jpg"/>
                
                        <source srcSet={`${turkey} 1x, ${turkey2x} 2x`}  type="image/jpg"/>
                        
                        <img className='price-direct__img' src={turkey} alt="turkey" />
            </picture>
              
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
                        We specialize in international logistics and turnkey delivery solutions, 
                    providing reliable and cost-effective transportation services across multiple regions.
                    </p>
                </div>
            
                  <Btn destination='/directions' styleBtn={"price-direct__btn"} text='View all directions'/>

            </li>
        </ul>
        </div>
    </section>
  )
}

export default OurDirections
