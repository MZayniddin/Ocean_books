import { Routes, Route } from 'react-router-dom'

// pages
import Home from "./home/Home";
import Detail from './detail/Detail';
import Filter from './explore/Explore';
import Donate from './donate/Donate';

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/explore/:category/:id' element={<Filter/>}/>
      <Route path='/donate' element={<Donate/>}/>
    </Routes>
  )
}

export default index