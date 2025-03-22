import Home from '../pages/Home'
import Direction from '../pages/Directions'
import Contacts from '../pages/Contacts'
import NotFound from '../pages/NotFound'

import {Routes, Route} from 'react-router-dom'
import Azerbaijan from '../pages/Azerbaijan'
import EuropeUnion from '../pages/EuropeUnion'
import Turkey from '../pages/Turkey'
import Logistic from '../pages/Logistic'
import PrivacyPolicy from '../pages/PrivacyPolicy'

const AnimRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/azerbaijan' element={<Azerbaijan/>}/>
        <Route path='/eu' element={<EuropeUnion/>}/>
        <Route path='/turkey' element={<Turkey/>}/>
        <Route path='/logistic' element={<Logistic/>}/>


        <Route path='/directions' element={<Direction/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/policy' element={<PrivacyPolicy/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AnimRoutes
