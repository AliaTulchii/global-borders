import RotatingLogo from '../../components/RotatingLogo'

const ContactData = () => {
  return (
    <section className='data'>
        <div className='container'>
            <h1 className='data__title'>Contacts</h1>
        <div className='data__wrapper'>
            <div className='data__logo-box'>
                <RotatingLogo className={"rotate-logo"}/>
            </div>
            <ul className='data__list'>
                <li className='data__item'>
                    <div className='data__item-left'>
                        <p className='data__item-number'>01</p>
                        <p className='data__item-text'>For consultation</p>
                    </div>
                    <div>
                        <h2 className='data__item-title'>+994 51 205 1011</h2>
                        <p className='data__item-socials'>VIBER, WHATSAPP,  TELEGRAM</p>
                    </div>
                </li>
                <li className='data__item'>
                    <div className='data__item-left'>
                        <p className='data__item-number'>02</p>
                        <p className='data__item-text'>Email</p>
                    </div>
                    <h2 className='data__item-title'>office@glb.az</h2>
                </li>
                <li className='data__item'>
                    <div className='data__item-left'>
                        <p className='data__item-number'>03</p>
                        <p className='data__item-text'>Legal address</p>
                    </div>
                        <h3 className='data__item-subtitle'>AZ1008, Azerbaijan, Baku, Narimanov district, Shah Ismail Khatai Avenue, 152-158, Luxen Plaza, 7th floor, SME office</h3>
                    
                    
                </li>
                <li className='data__item'>
                    <div className='data__item-left'>
                        <p className='data__item-number'>04</p>
                        <p className='data__item-text'>Mail address</p>
                    </div>
                    <h3 className='data__item-subtitle'>AZ1005, Azerbaijan, Baku, Khatai district, Afiaddin Jalilov street, 26</h3>
                </li>
                <li className='data__item'>
                    <div className='data__item-left'>
                        <p className='data__item-number'>05</p>
                        <p className='data__item-text'>Operation time</p>
                    </div>
                    <h3 className='data__item-subtitle'>Monday - Friday: from 9:00 to 18:00</h3>
                </li>
            </ul>
        </div>
        </div>
    </section>
  )
}

export default ContactData
