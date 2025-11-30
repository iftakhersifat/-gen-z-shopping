import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const links =<>
    <Link to='/'>Home</Link>
    <Link to='/Products'>Products</Link>
    </>
    const moreLinks =<>
    <Link to='/About'>About</Link>
    <Link to='/Contact'>Contact</Link>
    </>
    return (
        <div className="shadow-md sticky top-0 z-50 bg-white">
            <div className="navbar max-w-6xl mx-auto px-6 md:px-6 lg:px-0">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
        <li>
          <a>More</a>
          <ul className="p-2">
            {moreLinks}
          </ul>
        </li>
        
      </ul>
    </div>
    <h1 className="btn btn-ghost text-xl">Gen-Z Shopping</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            {moreLinks}
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;