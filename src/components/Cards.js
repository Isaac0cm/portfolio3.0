import React from "react";
import CardItem from "./CardItem";
import "../styles/Cards.css";

function Cards() {
      return (
         <div className="cards">
            <div className="cards__container">
               <div className="cards__wrapper">
                  <ul className="cards__items">
                     <CardItem
                        src={require("../images/img_projects.jpg")}
                        text="Projects I've completed"
                        label="Projects"
                        path="/projects"
                     />
                     <CardItem
                        src= {require("../images/img_about.jpg")}
                        text="About me"
                        label="About"
                        path="/about"
                     />
                     <CardItem
                        src= {require("../images/img_contact.jpg")}
                        text="Contact me"
                        label="Contact"
                        path="/contact"
                     />
                  </ul>
               </div>
            </div>
         </div>
      );
   }

export default Cards;
                        