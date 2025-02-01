import { DropdownProvider } from './context/DropdownContext';
import { BrowserRouter } from 'react-router-dom'

import './App.css'

import Routes from './Routes.jsx'
import Logo from './components/Logo.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <DropdownProvider>
      <BrowserRouter>
        <div className="app">
          <Nav asideOrDropdown="dropdown-menu" />
          <Logo />
          <Nav asideOrDropdown="aside-menu" />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    </DropdownProvider>
  );
}

export default App;