import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => (
    <div className="nav">
        <ul className="nav-links">
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/contact">
                <li>Contact</li>
            </Link>
            <Link to="/projects">
                <li>Projects</li>
            </Link>
            <Link to="/history">
                <li>History</li>
            </Link>
        </ul>
    </div>
);

export default Nav;
