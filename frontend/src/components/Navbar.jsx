import React from 'react';

function Navbar(){
  
    return(
        <nav className="navbar">
            <div className="logo">
                <a href="/"><img src={require('../assets/logo.webp')} alt="Logo" /></a>
            </div>
            <div className='nav-links'>
                <a href="/">Home</a>
                <a href="/TaskManagement">Tasks</a>
            </div>
            <div className='right-menu'>
                <a href="/">
                  <i className='fa fa-power-off'></i>
                  <p>Logout</p>
                </a>
            </div>
        </nav>
    );

};

export default Navbar;
