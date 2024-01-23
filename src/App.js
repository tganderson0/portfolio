import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import { useState } from 'react';
import ErrorPage from './pages/ErrorPage';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <BrowserRouter>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button text-3xl m-2"><i className="fa-solid fa-bars"></i></label>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li><a>Home</a></li>
            <li><a>About Me</a></li>
            <li><a>Projects</a></li>
            <li><a><i className="fa-brands fa-github text-4xl"></i></a></li>
            <li><a><i className="fa-brands fa-linkedin text-4xl"></i></a></li>
          </ul>
        </div>
      </div>

      
    </BrowserRouter>
  );
}

export default App;
