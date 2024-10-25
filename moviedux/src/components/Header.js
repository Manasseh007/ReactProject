import React from 'react';
import '../styles.css';

export default function  Header() {
    return (
        <div className="header">
            <img className='logo' src='logo.png' alt='moviedux' />
            <h2 className='app-subtitle'>It's time for popcorn! Find your next movie here.</h2>
        </div>
    );
}

//<h1>My Portfolio</h1>
//<div className="header-links">
//    <a href="#about">About</a>
//    <a href="#projects">Projects</a>
//    <a href="#contact">Contact</a>
//</div>