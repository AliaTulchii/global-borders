import { useTranslation } from 'react-i18next'
import img1 from '../assets/home/services/service1.jpg'
import img2 from '../assets/home/services/service2.jpg'
import img3 from '../assets/home/services/service3.jpg'
import img4 from '../assets/home/services/service4.jpg'
import BtnLink from '../components/Btn/BtnLink'



const Services = () => {
    const [t] = useTranslation("global");

    const data = [
        {
        id: 1,
        title: <>{t("services.service3")}</>,
        text: <>{t("services.service4")}</>,
        image: img1,
        },
        {
        id: 2,
            title: <>{t("services.service5")}</>,
            text: <>{t("services.service6")}</>,
            image: img2,
            },
            {
            id: 3,
                title: <>{t("services.service7")}</>,
                text: <>{t("services.service8")}</>,
                image: img3,
                },
                {
                id: 4,
                    title: <>{t("services.service9")}</>,
                    text: <>{t("services.service10")}</>,
                    image: img4,
                    }
    ]


  return (
    <section  className="services">
        <div className="container">           
                <h2 className="services__title">
                {t("services.service1")}
            </h2>
            
            
            <p className="services__text">
            {t("services.service2")}
            </p>
            <div className='services__line'></div>
            <div>
                {data.map(({id, title, text, image}) =>(
                    <div className='services__wrapper' key={id}>
                        <div className='services__display-box'>                        
                        <div className='services__display'>
                            <img className='services__img' src={image} alt='image'/>
                        </div> 
                        </div>                  
                    <div className='services__content'>
                    <div className='services__content-left'>
                    <p className='services__number'>0{id}</p>
                    <img className='services__img-mobile' src={image} alt='image'/>
                        
                        <h3 className='services__content-title'>{title}</h3>
                        </div>
                        <div className='services__content-right'>
                            <p className='services__content-text'>{text}</p>

                            <BtnLink className="btn__link" direction={"/directions"}><>{t("learnBtn.text")}</></BtnLink>
                        </div>
                        
                    </div>
                    <div className='services__line'></div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services
