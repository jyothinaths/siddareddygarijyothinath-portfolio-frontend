import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/Styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='titleLog'>
        <h1>About<span style={{color:'blue',fontSize: '30px', lineHeight: '1'}}>M</span>e.</h1>
      </div>
      <div className='navtab'>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about-me'>About</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
          <li><Link to='/experience'>Experience</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
