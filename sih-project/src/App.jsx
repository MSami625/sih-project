import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Story from "./Story";
import icon from "./assets/open-mind.png";

import Accordion from "./Accordion";




//balls animation
const colors = ["#000"];

const numBalls = 20;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 85)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 80)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random() * 3 + 1}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -1 : 11),
    y: Math.random() * 8,
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` },
    ],
    {
      duration: (Math.random() + 1) * 2000,
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
});






function App(){

    return (
      <>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="logo">
                    <img src={icon} width={30} /> <a href="/">SIHPREQ</a>
                  </div>

                  <div className="hero-container">
                    <div className="hero-text">
                      <h1>A Story based Quiz</h1>
                    </div>

                    <a href="/details" className="hero-a">
                      LET'S START
                    </a>
                  </div>
                  <div className="accordion-title">
                    <h1>FAQ</h1>
                  </div>
                  <div id="accordion">
                    <Accordion  />
                  </div>

                  <footer className="footer">
                    <div className="container">
                      <div className="row">
                        <div className="footer-col">
                          <h4>SIHPREQ</h4>
                          <ul>
                            <li>
                              <a href="#">Some</a>
                            </li>
                            <li>
                              <a href="#">thing</a>
                            </li>
                            <li>
                              <a href="#">cool</a>
                            </li>
                            <li>
                              <a href="#">stuff</a>
                            </li>
                          </ul>
                        </div>
                        <div className="footer-col">
                          <h4>get help</h4>
                          <ul>
                            <li>
                              <a href="#">Never</a>
                            </li>
                            <li>
                              <a href="#">Gonna</a>
                            </li>
                            <li>
                              <a href="#">Give</a>
                            </li>
                            <li>
                              <a href="#">You</a>
                            </li>
                            <li>
                              <a href="#">Up</a>
                            </li>
                          </ul>
                        </div>
                        <div className="footer-col">
                          <h4>Contact Us</h4>
                          <ul>
                            <li>
                              <a href="#">Never</a>
                            </li>
                            <li>
                              <a href="#">Gonna</a>
                            </li>
                            <li>
                              <a href="#">Give</a>
                            </li>
                            <li>
                              <a href="#">You</a>
                            </li>
                            <li>
                              <a href="#">Up</a>
                            </li>
                          </ul>
                        </div>
                        <div className="footer-col">
                          <h4>follow us</h4>
                          <div className="social-links">
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </footer>



                </>
              }
            />
            
             <Route path="/story" Component={Story} />
          </Routes>
        </Router>
      </>
    );
   }

export default App;
