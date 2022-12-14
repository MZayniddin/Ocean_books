import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


import './index.css';

const BacktoTop = () => {
  const { pathname } = useLocation();
  console.log(pathname)
  const scrollToTop = () =>{
    window.scrollTo(0, 0)
  }
  useEffect(()=>{
    scrollToTop();
  },[pathname]);
}

const Overlay = ({setIsSidebarActive}) => {
  return <div className="overlay" onClick={()=>{setIsSidebarActive(false)}}></div>
}

export { Overlay, BacktoTop }