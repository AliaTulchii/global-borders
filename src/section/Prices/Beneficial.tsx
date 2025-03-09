import RotatingLogo from "../../components/RotatingLogo"

interface BeneficialProps{
    title: string,
    items: Record<string, { id: string; text: string }>;
  }
const Beneficial:React.FC<BeneficialProps> = ({title, items}) => {
  return (
    <section className='benef'>
        <div className="container">
        <h2 className="benef__title">
       {title}
       </h2>
       <div className="benef__content">
        <div className="benef__logo ">
            <RotatingLogo className="rotate-logo"/>
        </div>
        

       
        <ul className="benef__list">
        {Object.values(items).map((item) => (
            <li className="benef__item" key={item.id}>
              <p className="benef__order">{item.id}</p>
              <p className="benef__text">{item.text}</p>
            </li>
          ))}
        </ul>
        </div>
        </div>
    </section>
)
}

export default Beneficial
