
import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo.svg'
import MultiLang from './MultiLang'
import PhoneBtn from './PhoneBtn'

const Header = () => {
  return (
    <header className='header container'>
      <div className='header__wrapper'>
        <Link className='logo' to={'/'}>
        <img className='logo__img' src={logo} alt="logo" />
        </Link>

        <nav className='header__nav'>
            <Link className='header__nav-item' to={'/'}>Home</Link>
            <Link className='header__nav-item' to={'/directions'}>Services <div className='header__nav-circle'></div></Link>
            <Link className='header__nav-item' to={'/directions'}>Directions <div className='header__nav-circle'></div></Link>
            <Link className='header__nav-item' to={'/contacts'}>Contacts</Link>
        </nav>
        
        <div className='header__btns'>
            <MultiLang/>
            <PhoneBtn/>
        </div>
      </div>
    </header>
  )
}

export default Header
