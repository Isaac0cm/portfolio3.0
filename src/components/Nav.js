import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav () {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (

        <div className="nav">
            <div className="nav-container">
                <Link to='/' className='nav-logo' onClick={closeMobileMenu}>
                    Isaac Maltby
                    <i class='fa-solid fa-user' />
                </Link>

                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                        Contact
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Nav;
