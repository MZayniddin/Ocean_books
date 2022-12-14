import logo from "../../assets/images/logo.png";
import c from "./Header.module.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

export default function Header({ setIsSidebarActive, isSidebarActive }) {
  const navbar = useRef();
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isResutDivActive, setResutDivActive] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 120) {
        navbar.current.style.background = "#141414";
      } else {
        navbar.current.style.background = "#000";
      }
    };
  }, []);

  useEffect(()=>{
    if(searchInput.length !== 0 ){
      fetch(`http://localhost:8000/main/v1/products/list/?search=${searchInput}`)
      .then(response => response.json())
      .then(data => setSearchResult(data))
      .catch(error => console.error(error))
    }
  },[searchInput])

  return (
    <header className={c.header} ref={navbar}>
      <div className={c["header-logo"]}>
        <Link className={c.logoLink} to="/">
          <img className={c.logo} src={logo} alt="Logo" />
          <span className={c["logo-text"]}>Ocean Books</span>
        </Link>
      </div>
      <div className={c.header__tools}>
        <div className={c.header__search}>
          <form
            className={c.header__searchbar}
            onClick={() => {
              setIsSearchClicked(true);
            }}
            onBlur={() => {
              setIsSearchClicked(false);
            }}
            style={{
              boxShadow: isSearchClicked
                ? "0px 0px 10px var(--light-blue-c)"
                : "",
            }}
          >
            <input
              onFocus={()=>{setResutDivActive(true)}}
              onBlur={()=>{setResutDivActive(false)}}
              type="text"
              className={c.searchbar__input}
              placeholder="Search..."
              onChange={(e) => {setSearchInput(e.target.value)}}
            />
            <button className={c.searchbar__button}>
              <HiOutlineSearch className={c["search-icon"]} />
            </button>
          </form>
          <div style={isResutDivActive ? {display: "block"} : {display: "none"}} className={c["header__search-result"]}>
            <ul>
            {
              searchResult.map(book => 
                <li key={book.id}>
                  <Link to={`/detail/${book.id}`}>
                    <img src={book.image} alt="" />
                    <div className={c["book-info"]}>
                      <div className={c["book-title"]}>
                        {book.name}
                      </div>
                      <span>{book.author.name}</span>
                    </div>
                  </Link>
                </li>
              )
            }
            <li style={searchResult.length === 0 ? {display: "block"} : {display: "none"}}>
              <div>Hech narsa topilmadi</div>
            </li>
            </ul>
          </div>
        </div>
        <div
          className={
            isSidebarActive ? `${c["menu-btn"]} ${c["open"]}` : c["menu-btn"]
          }
          onClick={() => {
            setIsSidebarActive(!isSidebarActive);
          }}
        >
          <div className={c["menu-btn-burger"]}></div>
        </div>
      </div>
    </header>
  );
}
