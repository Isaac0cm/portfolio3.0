import React from "react";
import "../styles/About.css";

const About = () => {
    return (
        <div className="about_container">
            <h1>About Me</h1>
            <div className="about_text">
                <p>"After completing <a href='https://platform.manchestercodes.com/' target='_blank' rel='noreferrer'> Manchester Codes</a> excellent bootcamp, finishing in July 2022 I have taken some time to get the other aspects of my world in order. What I mean by this is that I thought I would have no problem welcoming my first child, purchasing a property and changing my career path all at the same time would be absolutly fine. In reality a few months were needed for things to settle down and now I am returning to the laptop and persuing my first forray into coding for a living."</p>
            </div>
            <div className="about_icon">
                <a href='../images/isaac_maltby_0423.pdf' target='_blank' rel='noreferrer'>
                <i class="fa-regular fa-file-user fa-bounce fa-2xl"></i></a>
            </div>
        </div>
    );
    }

export default About;