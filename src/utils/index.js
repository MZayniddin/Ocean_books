import './index.css'

const Overlay = ({setIsSidebarActive}) => {
  return <div className="overlay" onClick={()=>{setIsSidebarActive(false)}}></div>
}

export { Overlay }