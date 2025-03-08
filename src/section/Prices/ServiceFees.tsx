import shipping from '../../assets/prices/service-fees/shipping.jpg'
import workers from '../../assets/prices/service-fees/workers.jpg'
import NavLink from "../../components/NavLink"


const ServiceFees = () => {
  return (
    <section className="serfees">
        <div className="container">
            <div className="serfees__wrapper" >
                <div className="serfees__img-box">
                    <img className="serfees__img" src={shipping} alt="shipping container" />
                </div>
                <div className="serfees__content">
                    <div >
                        <h2 className="serfees__title">
                            Service Fees
                        </h2>
                        <p className="serfees__text">
                        The price of a standard service for importing goods to Azerbaijan according to your order
                        500 USD (Depends on non-tariff regulatory measures).
                        </p>
                        <p className="serfees__text">
                        We are ready to take on transport logistics.
                        In addition to money, you will save your time, nerves and faith in progress.
                        </p>
                    </div>

                    <div>
                    <h3 className="serfees__subtitle">
                    For more information, placing orders
                    </h3>
                    <ul className="serfees__list">
                        <li className="serfees__item">
                        <NavLink className="serfee__link" to="">Viber</NavLink>
                        </li>
                        <li className="serfees__item">
                        <NavLink className="serfee__link" to="">Whatsapp</NavLink>
                        </li>
                        <li className="serfees__item">
                        <NavLink className="serfee__link" to="">Telegram</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

            <div  className="serfees__wrapper serfees__wrapper--reverse">
            <div className="serfees__img-box">
                    <img className="serfees__img" src={workers} alt="workers" />
                </div>
                <div className="serfees__content">
                    <div >
                        <h2 className="serfees__title">
                        You can order an additional service
                        </h2>
                        <p className="serfees__text">
                        Insurance of goods
                        Survey or control and preparation of independent quality control reports for goods.
                        </p>
                    </div>

                    <div>
                    <h3 className="serfees__subtitle">
                    For more advices
                    </h3>
                    <ul className="serfees__list">
                    
                        <li className="serfees__item">
                            <NavLink className="serfee__link" to="">Viber</NavLink>
                        </li>
                        <li className="serfees__item">
                        <NavLink className="serfee__link" to="">Whatsapp</NavLink>
                        </li>
                        <li className="serfees__item">
                        <NavLink className="serfee__link" to="">Telegram</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceFees
