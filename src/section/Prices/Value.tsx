import coin from '../../assets/prices/svg/coin.svg'
import deliver from '../../assets/prices/svg/deliver.svg'
import glass from '../../assets/prices/svg/glass.svg'
import tick from '../../assets/prices/svg/tick.svg'
import ornament from '../../assets/prices/ornament-box.png'
const Value = () => {
  return (
    <section className="value">
        <div className="container">
            <h2 className="value__title">
                How we add value to your business
            </h2>

            <ul className="value__list">
                <li className="value__item">
                    <img className='value__ornament' src={ornament} alt="ornament"/>
                    <img  className=" value__svg" src={coin} alt="coin" />
                    <div className='value__content'>
                        <h3 className='value__subtitle'>
                        Cost optimization
                        </h3>
                        <p className='value__text'>
                        Economic benefit from 15% of the cost of the batch.
                        </p>
                    </div>
                </li>
                <li className="value__item">
                <img className='value__ornament' src={ornament} alt="ornament"/>
                <img className=" value__svg"  src={deliver} alt="deliver" />
                    <div className='value__content'>
                        <h3 className='value__subtitle'>
                        Seamless Customs Processing
                        </h3>
                        <p className='value__text'>
                        Benefit from delievering work with customs and the risks of adjusting the customs value.
                        </p>
                        </div>
                </li>
                <li className="value__item">
                <img className='value__ornament' src={ornament} alt="ornament"/>
                <img className=" value__svg"  src={glass} alt="glass" />
                    <div className='value__content'>
                        <h3 className='value__subtitle'>
                        Quality Control at Loading
                        </h3>
                        <p className='value__text'>
                        Our representatives will perform the initial inspection of the goods when loading them into the vehicle.
                        </p>
                    </div>
                </li>
                <li className="value__item">
                <img className='value__ornament' src={ornament} alt="ornament"/>
                <img className=" value__svg"  src={tick} alt="tick" />
                    <div className='value__content'>
                        <h3 className='value__subtitle'>
                        We Cover Transport Risks
                        </h3>
                        <p className='value__text'>
                        Transport risks are also passed to us.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Value
