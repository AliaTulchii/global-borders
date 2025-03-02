import { useTranslation } from 'react-i18next';
import Btn from './Btn'

const HomeHero = () => {
    const [t] = useTranslation("global");
  return (
    
    <section className='home'>
      <div className='home__container container'>     
        <h1 className='home__title'>{t("home.title")}</h1>
        <p className='home__text'>
        {t("home.description")}
        </p>

        <div className='home__btns'>
          <Btn text={t("home.quote")} destination={'/contacts'} styleBtn={'btn btn__anchor'}/>
          <Btn text={t("home.service")} destination={'/directions'} styleBtn={'btn btn__services'}/>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
