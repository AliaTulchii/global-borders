import React from 'react'
import { Link } from 'react-router-dom'

interface BtnProps {
  text: string;
  destination: string;
  styleBtn: string;
}

const Btn: React.FC<BtnProps> = ({text, destination, styleBtn}) => {
  console.log(styleBtn)
  return (
    <Link to={destination} className={styleBtn}>
        {text}
    </Link>
  )
}

export default Btn
