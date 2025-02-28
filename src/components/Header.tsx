
import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo.svg'
import MultiLang from './MultiLang'
import PhoneBtn from './PhoneBtn'
import NavLink from './NavLink'

const Header = () => {
  return (
    <header className='header container'>
      <div className='header__wrapper'>
        <Link className='logo' to={'/'}>
        <img className='logo__img' src={logo} alt="logo" />
        </Link>

        <nav className='header__nav'>
            <NavLink className='header__nav-item' to={'/'}><p>Home</p></NavLink>
            <NavLink className='header__nav-item' to={'/directions'}> <p>Services</p> <div className='header__nav-circle'></div></NavLink>
            <NavLink className='header__nav-item' to={'/directions'}><p>Directions</p> <div className='header__nav-circle'></div></NavLink>
            <NavLink className='header__nav-item' to={'/contacts'}><p>Contacts</p></NavLink>
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
