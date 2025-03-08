import RotatingLogo from "../../components/RotatingLogo"


const Beneficial = () => {
  return (
    <section className='benef'>
        <div className="container">
        <h2 className="benef__title">
       The service is beneficial for
       </h2>
       <div className="benef__content">
        <RotatingLogo className="benef__logo logo__box"/>
        <ul className="benef__list">
            <li className="benef__item">
                <p className="benef__order">01</p>
                <p className="benef__text">
                    Units and entities from Azerbaijan with a small volume of deliveries,
                    from 2-3 pallets / 1 transport unit (car / container) per month or less.
                </p>
            </li>
            <li className="benef__item">
                <p className="benef__order">02</p>
                <p className="benef__text">
                    For importers of goods for which customs often adjusts the customs value.
                </p>
            </li>
            <li className="benef__item">
                <p className="benef__order">03</p>
                <p className="benef__text">
                    For companies intending to import goods for the first time.
                </p>
            </li>
        </ul>
        </div>
        </div>
    </section>
)
}

export default Beneficial
