import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


import direction1 from '../assets/home/directions/direction1.jpg'
import direction2 from '../assets/home/directions/direction2.jpg'
import direction3 from '../assets/home/directions/direction3.jpg'
import direction4 from '../assets/home/directions/direction4.jpg'
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
              <img className='slider__img' src={direction1} alt="image" />
            </div>
            
            <div className="slider__content">
                <h3 className='slider__title'>{t("homeDirection.direction1")}</h3>
                <BtnLink/>
            </div>
        </SwiperSlide>

        <SwiperSlide className='slider__card'>
            <div className='slider__img-box'>
              <img className='slider__img' src={direction2} alt="image" />
            </div>
            
            <div className="slider__content">
                <h3 className='slider__title'>{t("homeDirection.direction2")}</h3>
                <BtnLink/>
            </div>
        </SwiperSlide>

        <SwiperSlide className='slider__card'>
            <div className='slider__img-box'>
              <img className='slider__img' src={direction3} alt="image" />
            </div>
            
            <div className="slider__content">
                <h3 className='slider__title'>{t("homeDirection.direction3")}</h3>
                <BtnLink/>
            </div>
        </SwiperSlide>

        <SwiperSlide className='slider__card'>
            <div className='slider__img-box'>
              <img className='slider__img' src={direction4} alt="image" />
            </div>
            
            <div className="slider__content">
                <h3 className='slider__title'>{t("homeDirection.direction4")}</h3>
                <BtnLink/>
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
