import React from "react";
import "../styles/Home.css";
import Cards from "./Cards";
import Footer from "./Footer";

function Home () {
    return (
        <div className="home-container">
            <div className="home-text">
                <p>"After completing <a href='https://platform.manchestercodes.com/' target='_blank' rel='noreferrer'> Manchester Codes</a> excellent bootcamp, finishing in July 2022 I have taken some time to get the other aspects of my world in order. What I mean by this is that I thought I would have no problem welcoming my first child, purchasing a property and changing my career path all at the same time would be absolutly fine. In reality a few months were needed for things to settle down and now I am returning to the laptop and persuing my first forray into coding for a living."</p>
            </ div>
            <Cards />
            <Footer />
        </div>
    
    );
}

export default Home;