import Home from '../pages/Home'
import Direction from '../pages/Directions'
import Contacts from '../pages/Contacts'
import NotFound from '../pages/NotFound'

import {Routes, Route} from 'react-router-dom'

const AnimRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/directions' element={<Direction/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AnimRoutes
