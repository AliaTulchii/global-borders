import Home from '../pages/Home'
import Direction from '../pages/Directions'
import Contacts from '../pages/Contacts'
import NotFound from '../pages/NotFound'

import {Routes, Route} from 'react-router-dom'
import Prices from '../pages/Prices'

const AnimRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/prices' element={<Prices/>}/>
        <Route path='/directions' element={<Direction/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AnimRoutes
