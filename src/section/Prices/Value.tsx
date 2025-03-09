// import coin from '../../assets/prices/svg/coin.svg'
// import deliver from '../../assets/prices/svg/deliver.svg'
// import glass from '../../assets/prices/svg/glass.svg'
// import tick from '../../assets/prices/svg/tick.svg'
import ornament from '../../assets/prices/ornament-box.png'

interface ValueProps{
    title: string,
    items: Record<string, { id: string; img: string; title: string; text: string }>;
  }
const Value:React.FC<ValueProps> = ({title, items}) => {
    const itemsArray = Object.values(items);

    const columns =
      itemsArray.length <= 3 ? "auto-fit, minmax(200px, 1fr)" : "1fr 1fr";
    
    const listStyle = {
      display: "grid",
      gridTemplateColumns: `repeat(${columns})`,
      gap: "24px",
      justifyContent: "center", 
    };

  return (
    <section className="value">
        <div className="container">
            <h2 className="value__title">
                {title}
            </h2>

            <ul className="value__list" style={listStyle}>
            {Object.values(items).map((item) => (
            <li className="value__item" key={item.id}>
                <img className='value__ornament' src={ornament} alt="ornament"/>
                <img  className=" value__svg" src={item.img} alt="coin" />
                <div className='value__content'>
                        <h3 className='value__subtitle'>
                        {item.title}
                        </h3>
                        <p className='value__text'>
                        {item.text}
                        </p>
                    </div>
            </li>
          ))}
                
            </ul>
        </div>
    </section>
  )
}

export default Value
