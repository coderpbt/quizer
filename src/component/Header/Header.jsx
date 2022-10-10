import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-[#1C2B35]'>
    <div className='w-[1200px] mx-auto'>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink>Item 1</NavLink></li>
              <li tabIndex={0}>
                <NavLink className="justify-between">
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </NavLink>
                <ul className="p-2">
                  <li><NavLink>Submenu 1</NavLink></li>
                  <li><NavLink>Submenu 2</NavLink></li>
                </ul>
              </li>
              <li><NavLink>Item 3</NavLink></li>
            </ul>
          </div>
          <NavLink to='/home' className="text-white font-bold uppercase text-xl">DPI quiz contest</NavLink>
        </div>
        <div className="navbar-end">
          <ul className="flex items-center">
            <li><NavLink to='/' className='text-white mx-4'>Home</NavLink></li>
            <li><NavLink to='/topics' className='text-white mx-4'>Topics</NavLink></li>
            <li><NavLink to='/statistics' className='text-white mx-4'>Statistics</NavLink></li>
            <li><NavLink to='/blog' className='text-white mx-4'>Blog</NavLink></li>
           </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
