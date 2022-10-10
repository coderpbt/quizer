import React from 'react';
import { Link } from 'react-router-dom';

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
              <li><a>Item 1</a></li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <Link to='/home' className="font-bold uppercase text-white text-xl">DPI quiz contest</Link>
        </div>
        <div className="navbar-end">
          <ul className="flex items-center">
            <li><Link to='/home' className='text-white mx-4'>Home</Link></li>
            <li><Link to='/topics' className='text-white mx-4'>Topics</Link></li>
            <li><Link to='/statistics' className='text-white mx-4'>Statistics</Link></li>
            <li><Link to='/blog' className='text-white mx-4'>Blog</Link></li>
           </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;