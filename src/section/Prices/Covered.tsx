
interface CoveredProps{
  title: string,
  items: Record<string, { id: string; text: string }>;
}

const Covered:React.FC<CoveredProps> = ({title, items}) => {
    return (
    <section className='covered'>
        <div className='container'>
        <h2 className='covered__title'>
            {title}
        </h2>
        <ul className='covered__list'>
        {Object.values(items).map((item) => (
            <li className="covered__item" key={item.id}>
              <p className="covered__order">{item.id}</p>
              <p className="covered__text">{item.text}</p>
            </li>
          ))}
      </ul>
        </div>
     
    </section>
  )
}

export default Covered
