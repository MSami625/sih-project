
import Accordion from "./Accordion";
import icon from "./assets/open-mind.png";
import { Link } from "react-router-dom";



//balls animation

const colors = ["#000"];

const numBalls = 5;
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



function Hero(){
    return (
        <>
                  
                  <nav>
                  <div className="logo">
                    <img src={icon} width={40} /> <a href="/">Heamen</a>
                  </div>
                  <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#faqs">FAQs</a></li>
                  <li><a href="#journal">Journal</a></li>
                  <li><a href="#about">About</a></li>
                  </ul>
                  </nav>
                  <div id="home" className="hero-container">
                  <div className="main-logo">
                    <img src={icon} width={230}/>
                    </div>
                    <div className="hero-text">
                      <h1>Heamen</h1>
                    </div>
                    <Link className="hero-a" to="/details">START</Link>
                  </div>
                  <div className="about">
                    <h1> About Us</h1>
                  </div>
                  <div className="about-container">
                  <div className="image-1">
                     <img src="src/assets/online-community.png"/>
                     </div>
                     <div>
                      <p>It appears that you are poised to embark upon a captivating journey within an immersive simulation game, where the decisions you make shall wield profound influence upon the intricate tapestry of your character's ultimate fate. This concept is nothing short of extraordinary, and I stand at your disposal, prepared to provide guidance and address any inquiries you may possess as you commence upon this remarkable odyssey. Pray, do unveil the initial scenario or inquiry you wish to proffer to our esteemed players. Let us commence this adventure forthwith! Here at Heamen, we stand prepared to accompany you on an enlightening voyage into the inner sanctums of your consciousness, akin to a celestial sojourn through the boundless expanses of the mind's ethereal heavens..</p>
                     </div>
                     </div>
                  <div id="faqs" className="accordion-title">
                    <h1>FAQs</h1>
                  </div>
                  <div id="accordion">
                    <Accordion  />
                  </div>

                  <footer id="about" className="footer">
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
                              <i className="fab fa-instagram" />
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
    )
}

export default Hero;