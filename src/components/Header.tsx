import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo.png'
import MultiLang from './MultiLang'
import PhoneBtn from './PhoneBtn'

const Header = () => {
  return (
    <header>
      <div>
        <Link to={'/'}>
        <img src={logo} alt="logo" />
        </Link>

        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/'}>Services</Link>
            <Link to={'/directions'}>Directions</Link>
            <Link to={'/contacts'}>Contacts</Link>
        </nav>
        
        <div>
            <MultiLang/>
            <PhoneBtn/>
        </div>
      </div>
    </header>
  )
}

export default Header
