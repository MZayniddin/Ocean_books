import { Routes, Route } from 'react-router-dom'

// pages
import Home from "./home/Home";
import Detail from './detail/Detail';
import Filter from './explore/Explore';
import Donate from './donate/Donate';
import AboutUs from './about-us/AboutUs';

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/explore/:category/:id' element={<Filter/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/donate' element={<Donate/>}/>
    </Routes>
  )
}

export default index