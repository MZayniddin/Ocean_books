import logo from '../../assets/images/logo.png';
import c from './Header.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Header(){
  const navbar = useRef();

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 120){
        navbar.current.style.background = "#141414"
      }else {
        navbar.current.style.background = "transparent"
      }
    }
  }, [])

  return (
    <header class={c.header} ref={navbar}>
      <div class={c["header-logo"]}>
        <Link className={c.logoLink} to="/">
          <img class={c.logo} src={logo} alt="Logo" />
          <span class={c["logo-text"]}>Ocean Books</span>
        </Link>
      </div>
    </header>  
  )
}