import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { useState } from 'react';
import ErrorPage from './pages/ErrorPage';
import AboutMe from './pages/AboutMe';

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
          <Route exact path='/about' element={<AboutMe />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li><a href="/">Home</a></li>
            <li><a href='/about'>About Me</a></li>
            <li><a href='/projects'>Projects</a></li>
            <li><a href='https://github.com/tganderson0'><i className="fa-brands fa-github text-4xl"></i></a></li>
            <li><a href='https://www.linkedin.com/in/taylor-anderson-16887022b/'><i className="fa-brands fa-linkedin text-4xl"></i></a></li>
          </ul>
        </div>
      </div>

      
    </BrowserRouter>
  );
}

export default App;
