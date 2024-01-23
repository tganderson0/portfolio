import React, { useEffect } from "react";
import {
  Link
} from "react-router-dom";
const NavigationBar = ({setMenuOpen}) => {
  //Comes from this: https://reacthustle.com/blog/how-to-close-daisyui-dropdown-with-one-click
  const handleClick = () => {
    setMenuOpen(false)
    const elem = document.activeElement;
    if(elem){
      elem?.blur();
    }
  };

  return (
    <>
      <div className="navbar bg-base-100 w-full border-primary drop-shadow-md">
        <div className="md:hidden">
          <div className="navbar-start">
            <div className="dropdown">
              <label 
                tabIndex={0}
                className="btn btn-ghost btn-circle"
                onClick={() => {setMenuOpen(true)}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li onClick={handleClick}><Link to="/" className="btn btn-ghost normal-case text-xl w-full my-2">Home</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <nav className="w-full invisible md:visible">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavigationBar;