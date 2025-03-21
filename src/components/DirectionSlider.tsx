import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


import azerbaijan from '../assets/home/directions/azerbaijan.jpg'
import azerbaijan2x from '../assets/home/directions/azerbaijan@2x.jpg'
import azerbaijanMobile from '../assets/home/directions/azerbaijan-mobile.jpg'
import azerbaijanMobile2x from '../assets/home/directions/azerbaijan-mobile@2x.jpg'

import eu from '../assets/home/directions/eu.jpg'
import eu2x from '../assets/home/directions/eu@2x.jpg'
import euMobile from '../assets/home/directions/eu-mobile.jpg'
import euMobile2x from '../assets/home/directions/eu-mobile@2x.jpg'

import turkey from '../assets/home/directions/turkey.jpg'
import turkey2x from '../assets/home/directions/turkey@2x.jpg'
import turkeyMobile from '../assets/home/directions/turkey-mobile.jpg'
import turkeyMobile2x from '../assets/home/directions/turkey-mobile@2x.jpg'

import greatBrit from '../assets/home/directions/great-brit.jpg'
import greatBrit2x from '../assets/home/directions/great-brit@2x.jpg'
import greatBritMobile from '../assets/home/directions/great-brit-mobile.jpg'
import greatBritMobile2x from '../assets/home/directions/great-brit-mobile@2x.jpg'




import arrowLeft from '../assets/svg/arrow-left.svg'
import arrowRight from '../assets/svg/arrow-right.svg'
import BtnLink from './Btn/BtnLink'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { useTranslation } from 'react-i18next';





const DirectionSlider = () => {
  const [t] = useTranslation("global");
   
  return (
<Swiper 
spaceBetween={5}
slidesPerView="auto" 
centeredSlides={false}
loop={true}
modules={[Navigation, Pagination, Scrollbar, A11y]}
      
navigation={{
  prevEl: '.custom-prev',
  nextEl: '.custom-next',
}}
      scrollbar={{ draggable: true }}
>
        <SwiperSlide className="slider__card">
            <div className='slider__img-box'>
            <picture>
                        <source media="(max-width: 968px)" srcSet={`${azerbaijanMobile} 1x, ${azerbaijanMobile2x} 2x`}  type="image/jpg"/>
                
                        <source srcSet={`${azerbaijan} 1x, ${azerbaijan2x} 2x`}  type="image/jpg"/>
                        
                        <img className='slider__img' src={azerbaijan} alt="azerbaijan" />
            </picture>
            </div>
            
            <div className="slider__content">
                <h3 className='slider__title'>{t("homeDirection.direction1")}</h3>
                <BtnLink className="btn__link" direction={"/directions"}><>{t("learnBtn.text")}</></BtnLink>
            </div>
        </SwiperSlide>

        <SwiperSlide className='slider__card'>
            <div className='slider__img-box'>
            <picture>
                        <source media="(max-width: 968px)" srcSet={`${euMobile} 1x, ${euMobile2x} 2x`}  type="image/jpg"/>
                
                        <source srcSet={`${eu} 1x, ${eu2x} 2x`}  type="image/jpg"/>
                        
                        <img className='slider__img' src={eu} alt="azerbaijan" />
            </picture>
            </div>
            
            <div className="slider__content">
                <h3 className='slider__title'>{t("homeDirection.direction2")}</h3>
                <BtnLink className="btn__link" direction={"/directions"}><>{t("learnBtn.text")}</></BtnLink>
            </div>
        </SwiperSlide>

        <SwiperSlide className='slider__card'>
            <div className='slider__img-box'>
            <picture>
                        <source media="(max-width: 968px)" srcSet={`${turkeyMobile} 1x, ${turkeyMobile2x} 2x`}  type="image/jpg"/>
                
                        <source srcSet={`${turkey} 1x, ${turkey2x} 2x`}  type="image/jpg"/>
                        
                        <img className='slider__img' src={turkey} alt="azerbaijan" />
            </picture>
            </div>
            
            <div className="slider__content">
                <h3 className='slider__title'>{t("homeDirection.direction3")}</h3>
                <BtnLink className="btn__link" direction={"/directions"}><>{t("learnBtn.text")}</></BtnLink>
            </div>
        </SwiperSlide>

        <SwiperSlide className='slider__card'>
            <div className='slider__img-box'>
            <picture>
                        <source media="(max-width: 968px)" srcSet={`${greatBritMobile} 1x, ${greatBritMobile2x} 2x`}  type="image/jpg"/>
                
                        <source srcSet={`${greatBrit} 1x, ${greatBrit2x} 2x`}  type="image/jpg"/>
                        
                        <img className='slider__img' src={greatBrit} alt="azerbaijan" />
            </picture>
            </div>
            
            <div className="slider__content">
                <h3 className='slider__title'>{t("homeDirection.direction4")}</h3>
                <BtnLink className="btn__link" direction={"/directions"}><>{t("learnBtn.text")}</></BtnLink>
            </div>
        </SwiperSlide>

        <div className="swiper-button-prev custom-prev">
        <img className='slider__svg' src={arrowLeft} alt="prev" />
      </div>
      <div className="swiper-button-next custom-next">
        <img className='slider__svg' src={arrowRight} alt="next" />
      </div>
        </Swiper>
  )
}

export default DirectionSlider
