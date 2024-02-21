// Nav.js
import React from 'react';
import './Header.css'; // Assuming you will create a Nav.css file for styling

function Nav() {
    return (
        <header className="header">
            <img src="./logo192.png" alt="Little Lemon Logo" className="logo" />
            <nav>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order-online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
