import { Routes, Route } from 'react-router-dom'

// pages
import Home from "./Home/Home";
import Detail from './detail/Detail';

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
    </Routes>
  )
}

export default index