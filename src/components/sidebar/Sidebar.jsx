import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import c from './Sidebar.module.css'

const Sidebar = ({isSidebarActive, setIsSidebarActive}) => {
  const [categoryArr, setCategoryArr] = useState([]);

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/main/v2/categries/category/")
    .then(response => response.json())
    .then(data => setCategoryArr(data.results))
    .catch(error => console.log(error))
  },[])

  return (
    <div className={isSidebarActive ? `${c.sidebar} ${c.open}` : c["sidebar"]}>
      <h2 className={c["sidebar-title"]}>Categories</h2>
      
      <div className={c["sidebar-category-list"]}>
        <ul>
        {
          categoryArr.map(({name, id}) => 
            <li key={id} className={c["category-list__item"]}>
              <Link className={c["category-list__link"]} to={`/${name}`}>{name}</Link>
            </li>
          )
        }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar