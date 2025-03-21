import shipping from '../../assets/prices/service-fees/shipping.jpg'
import shipping2x from '../../assets/prices/service-fees/shipping@2x.jpg'
import shippingMobile from '../../assets/prices/service-fees/shipping-mobile.jpg'
import shippingMobile2x from '../../assets/prices/service-fees/shipping-mobile@2x.jpg'


import workers from '../../assets/prices/service-fees/workers.jpg'
import workers2x from '../../assets/prices/service-fees/workers@2x.jpg'
import workersMobile from '../../assets/prices/service-fees/workers-mobile.jpg'
import workersMobile2x from '../../assets/prices/service-fees/workers-mobile@2x.jpg'


import NavLink from "../../components/NavLink"


const ServiceFees = () => {
  return (
    <section className="serfees">
        <div className="container">
            <div className="serfees__wrapper" >
                <div className="serfees__img-box">
                <picture>
                        <source media="(max-width: 968px)" srcSet={`${shippingMobile} 1x, ${shippingMobile2x}`}  type="image/jpg"/>
                
                        <source srcSet={`${shipping} 1x, ${shipping2x} 2x`}  type="image/jpg"/>
                        
                        <img className="serfees__img" src={shipping} alt="shipping container" />
                    </picture>
                    
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

            <div  className="serfees__wrapper serfees__wrapper--reverse">
            <div className="serfees__img-box">
            <picture>
                        <source media="(max-width: 968px)" srcSet={`${workersMobile} 1x, ${workersMobile2x} 2x`}  type="image/jpg"/>
                
                        <source srcSet={`${workers} 1x, ${workers2x} 2x`}  type="image/jpg"/>
                        
                        <img className="serfees__img" src={workers} alt="shipping container" />
                    </picture>
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
