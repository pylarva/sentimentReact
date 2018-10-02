import React from 'react';
import logo from './trello.png'; // Tell Webpack this JS file uses this image
import './index.css'

console.log(logo); // /logo.84287d09.png

function HeaderLogo() {
  // Import result is the URL of your image
  return <img className='mlogo' src={logo} alt="Logo" />;
}

export default HeaderLogo;
