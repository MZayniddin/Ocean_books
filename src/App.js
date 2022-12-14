import { useState } from 'react';
import Routes from './routes/index'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import { BacktoTop, Overlay } from './utils';

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  return (
    <div>
      <Header setIsSidebarActive={setIsSidebarActive} isSidebarActive={isSidebarActive}/>
      <Sidebar setIsSidebarActive={setIsSidebarActive} isSidebarActive={isSidebarActive}/>
      <Routes/>
      {isSidebarActive ? <Overlay setIsSidebarActive={setIsSidebarActive}/> : null}
      <Footer/>
      <BacktoTop/>
    </div>
  );
}

export default App;
