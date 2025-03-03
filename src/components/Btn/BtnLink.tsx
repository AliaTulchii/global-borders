import {  NavLink } from 'react-router-dom'
import ArrowIcon from '../svg/ArrowIcon'

const BtnLink = () => {
  return (
    <NavLink className='btn__link' to={'/directions'}>
                            <p>Learn more</p> 
                            <ArrowIcon className={"btn__arrow"}/>
                            </NavLink>
  )
}

export default BtnLink
