import { Routes, Route } from 'react-router-dom'

// pages
import Home from "./Home/Home";

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default index