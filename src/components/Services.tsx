import img1 from '../assets/home/services/service1.jpg'
import img2 from '../assets/home/services/service2.jpg'
import img3 from '../assets/home/services/service3.jpg'
import img4 from '../assets/home/services/service4.jpg'
import BtnLink from './Btn/BtnLink'





const data = [
    {
    id: 1,
    title: <>IMPORT OF GOODS TO <br/> AZERBAIJAN</>,
    text: "We provide a seamless import solution for businesses in Azerbaijan, ensuring cost-effective and hassle-free deliveries. Our service includes obtaining necessary permits, organizing optimal transportation, customs clearance, and tax payments. We also handle transport risks and initial goods inspections. Additional services like certification, insurance, and quality control are available to ensure smooth and secure imports.",
    image: img1,
    },
    {
    id: 2,
        title: "Delivery from European Union (EU) countries",
        text: "We transport goods from the EU to China, India, Uzbekistan, and Kazakhstan, ideal for small-scale shipments or first-time importers. Our service covers procurement, transit via Turkey, customs clearance, and tax payments. We also manage transport risks, inspections, certification, insurance, and quality control for secure and compliant deliveries.",
        image: img2,
        },
        {
        id: 3,
            title: <>Delivery of goods from <br/>Turkey</>,
            text: "We facilitate shipments from Turkey to Turkmenistan, Uzbekistan, and Kazakhstan, ideal for small-scale or first-time deliveries. Our service covers purchasing under our contract, customs documentation, and optimized transportation under DAP terms. We handle transport risks, conduct inspections, and offer optional insurance and quality control.",
            image: img3,
            },
            {
            id: 4,
                title: "Development of an individual logistics solution",
                text: "Ideal for small and medium-sized businesses in China, India, Uzbekistan, Turkmenistan, and Kazakhstan seeking cost-effective, high-quality logistics. We provide end-to-end support, including consultation, financial logistics, certification assistance, warehousing, and multimodal transport. Clients benefit from up to 15% cost savings and optimized transportation solutions.",
                image: img4,
                }
]

interface ServicesProps{
    id: string;
}

const Services: React.FC<ServicesProps> = ({id}) => {
  return (
    <section id={id} className="services">
        <div className="container">           
                <h2 className="services__title">
            Services we provide
            </h2>
            
            
            <p className="services__text">
            Our company offers tailored logistics solutions to ensure 
            efficient and cost-effective delivery of goods across key 
            international markets. From Europe to Asia, we handle import,
            transportation, customs clearance, and risk management, providing
            our clients with full-service logistics support.
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
                        <h3 className='services__content-title'>{title}</h3>
                        </div>
                        <div className='services__content-right'>
                            <p className='services__content-text'>{text}</p>

                            <BtnLink/>
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
