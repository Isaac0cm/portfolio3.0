import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav () {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (

        <div className="nav">
            <ul className="nav-container">
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <li>Home</li>
                </Link>
                <Link to="/about" className="navbar-item" onClick={closeMobileMenu}>
                    <li>About</li>
                </Link>
                <Link to="/contact" className="navbar-item" onClick={closeMobileMenu}>
                    <li>Contact</li>
                </Link>
                <Link to="/projects" className="navbar-item" onClick={closeMobileMenu}>
                    <li>Projects</li>
                </Link>
                <Link to="/history" className="navbar-item" onClick={closeMobileMenu}>
                    <li>History</li>
                </Link>
            </ul>
        </div>
    );
}

export default Nav;
