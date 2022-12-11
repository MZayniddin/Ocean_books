import { Routes, Route } from 'react-router-dom'

// pages
import Home from "./home/Home";
import Detail from './detail/Detail';
import Filter from './filter/Filter';

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/explore/:id' element={<Filter/>}/>
    </Routes>
  )
}

export default index