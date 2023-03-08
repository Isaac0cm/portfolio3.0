import React from "react";
import { Link } from "react-router-dom";

function Home () {
    return (
        <div className="home">
            <h1>After completing Manchester Codes excellent bootcamp, finishing in July 2022 I have taken some time to get the other aspects of my world in order. What I mean by this is that I thought I would have no problem welcoming my first child, purchasing a property and changing my career path all at the same time would be absolutly fine. In reality a few months were needed for things to settle down and now I am returning to the laptop and persuing my first forray into coding for a living.</h1>
            <ul className="nav-pics">
                <Link to="/">
                    <li><img src='public\images\faceplace.png' alt="home" />
                        Home</li>
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
}

export default Home;