import logo from '../../assets/images/logo.png';
import c from './Header.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi'

export default function Header({setIsSidebarActive, isSidebarActive}){
  const navbar = useRef();
  const [isSearchClicked, setIsSearchClicked] = useState(false)
  useState(()=>{
    fetch("http://127.0.0.1:8000/main/v2/categries/category/2")
    .then(request => request.json()).then(data => console.log(data))
  },[]) 
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
    <header className={c.header} ref={navbar}>
      <div className={c["header-logo"]}>
        <Link className={c.logoLink} to="/">
          <img className={c.logo} src={logo} alt="Logo" />
          <span className={c["logo-text"]}>Ocean Books</span>
        </Link>
      </div>
      <div className={c.header__tools}>
        <form className={c.header__searchbar} onClick={()=>{setIsSearchClicked(true)}} onBlur={()=>{setIsSearchClicked(false)}} style={{boxShadow: isSearchClicked ? "0px 0px 10px var(--light-blue-c)" : ""}}>
          <input type="text" className={c.searchbar__input} placeholder="Search..."/>
          <button className={c.searchbar__button}>
            <HiOutlineSearch className={c["search-icon"]}/>
          </button>
        </form>
        <div className={isSidebarActive ? `${c["menu-btn"]} ${c["open"]}` : c["menu-btn"]} onClick={()=>{setIsSidebarActive(!isSidebarActive)}}>
          <div className={c["menu-btn-burger"]}></div>
        </div>
      </div>
    </header>  
  )
}