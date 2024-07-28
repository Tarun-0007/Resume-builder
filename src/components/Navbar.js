

import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div className="BrandName">
          <span className="letter1">R</span>
          <span className="letter2">e</span>
          <span className="letter3">s</span>
          <span className="letter4">u</span>
          <span className="letter5">m</span>
          <span className="letter6">e</span>
          <span className="letter7">M</span>
          <span className="letter8">a</span>
          <span className="letter9">k</span>
          <span className="letter10">e</span>
          <span className="letter11">r</span>
        </div>
        <div className="links">
          <a href="/Homepage">HOME</a>
          <a href="/Team">TEAM</a>
          <a href="/ContactUs">CONTACT US</a>
        </div>
        <div className="auth-links">
          <a href="/register" className="register-button">SIGN UP</a>
          <a href="/login" className="login-button">LOGIN</a>
        </div>
      </div>
    </>
  );
}


