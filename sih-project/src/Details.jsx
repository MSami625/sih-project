import React from "react";
import icon from "./assets/open-mind.png";
import groupicon from "./assets/group.png";
import "./Details.css";
function Details(){
    return (
           <>
            <div className="logo">
                    <img src={icon} width={40} /> <a href="/">SIHPREQ</a>
                  </div>
                 <div className="main-container">
                  <div className="detail-container">
                  <div className="groupicon">
                    <img src={groupicon} width={100} /> 
                    </div>
                    
                    <div className="questions">
                        <h1>What is your name?</h1>
                    </div>
                    <div className="inputs">
                        <input type="Your Name" />
                    </div>
                    <div className="questions">
                        <h1>What is your gender?</h1>
                    </div>
                    <div className="inputs">
                    <select name="Gender" id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    </select>
                    </div>
                    <div className="questions">
                        <h1>What is your age?</h1>
                    </div>
                    <div className="inputs">
                        <input type="number" id="numericInput" min="0" max="100" step="1" inputmode="numeric"/>
                    </div>
                    <div className="questions">
                        <h1>Select Language</h1>
                    </div>
                    <div className="inputs">
                    <select name="Language">
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    </select>
                    </div>
                    <div className="submit">
                    <a href="/">Submit</a>
                  </div>
                    

                  </div>
                  
                  </div>
           </>
    )
}

export default Details;