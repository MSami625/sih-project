import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";

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

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordionItems: [],
    };
  }

  componentDidMount() {
    const accordion = this.props.data.map((item) => ({
      title: item.title,
      content: item.content,
      open: false,
    }));

    this.setState({
      accordionItems: accordion,
    });
  }

  click(item) {
    const newAccordion = this.state.accordionItems.slice();
    const index = newAccordion.indexOf(item);
    newAccordion[index].open = !newAccordion[index].open;
    this.setState({ accordionItems: newAccordion });
  }

  render() {
    return (
      <div className="accordion">
        {this.state.accordionItems.map((item, index) => (
          <div key={index}>
            <div className="title" onClick={() => this.click(item)}>
              <div className="arrow-wrapper">
              <span className="arrow-text">{item.open ? "-" : "+"}</span>
              </div>
              <span className="title-text">{item.title}</span>
            </div>
            <div className={item.open ? "content content-open" : "content"} >
              <div className={item.open
                    ? "content-text content-text-open"
                    : "content-text"
                }
              >
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

class App extends Component {
  render() {
    const data = [
      {
        title: "Can a child’s temperament affect one’s behaviour? ",
        content: `Yes, a child’s temperament, like being easygoing or spirited, plays a significant role in their behavior. Easy-going children may adapt well, while spirited ones may display more intense reactions.
        `, // Add your content here
      },
      {
        title: "Is the (name) designed only for children or can it be played by adults as well?",
        content: `Yes, this game can be played by young adults as well. Though in that case, we cannot be sure about the reliability of the analysis report, as adults are seen to be more smart and thoughtful with their answers. While children are observed to be immersed in the game and let their subconscious behavioural pattern select the answers for them.
        `, // Add your content here
      },
      {
        title: "Three",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi delectus ea repellat consequatur tempora, sunt laudantium aspernatur fugiat sed quo, molestias ipsa quisquam corrupti possimus vitae harum architecto totam?
        `, // Add your content here
      },
      {
        title: "Four",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi delectus ea repellat consequatur tempora, sunt laudantium aspernatur fugiat sed quo, molestias ipsa quisquam corrupti possimus vitae harum architecto totam?
        `, // Add your content here
      },
      {
        title: "Five",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi delectus ea repellat consequatur tempora, sunt laudantium aspernatur fugiat sed quo, molestias ipsa quisquam corrupti possimus vitae harum architecto totam?
        `, // Add your content here
      },
      {
        title: "Six",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi delectus ea repellat consequatur tempora, sunt laudantium aspernatur fugiat sed quo, molestias ipsa quisquam corrupti possimus vitae harum architecto totam?
        `, // Add your content here
      },
      {
        title: "Seven",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi delectus ea repellat consequatur tempora, sunt laudantium aspernatur fugiat sed quo, molestias ipsa quisquam corrupti possimus vitae harum architecto totam?
        `, // Add your content here
      },
      {
        title: "Eight",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi delectus ea repellat consequatur tempora, sunt laudantium aspernatur fugiat sed quo, molestias ipsa quisquam corrupti possimus vitae harum architecto totam?
        `, // Add your content here
      },
      {
        title: "Nine",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi delectus ea repellat consequatur tempora, sunt laudantium aspernatur fugiat sed quo, molestias ipsa quisquam corrupti possimus vitae harum architecto totam?
        `, // Add your content here
      },
      {
        title: "Ten",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi delectus ea repellat consequatur tempora, sunt laudantium aspernatur fugiat sed quo, molestias ipsa quisquam corrupti possimus vitae harum architecto totam?
        `, // Add your content here
      },
    ];

    return (
      <>
        <div className="logo">
          <a href="/">SIHPREQ</a>
        </div>
        <div className="hero-container">
          <div className="hero-text">
            <h1>A Story based Quiz</h1>
          </div>

          <a href="/" className="hero-a">
            LET'S START
          </a>
        </div>
        <div className="accordion-title"> 
        <h1>FAQ</h1>
        </div>
        <div id="accordion">
          <Accordion data={data} />
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

<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
<script src="https://kit.fontawesome.com/1c4e74024b.js" crossorigin="anonymous"></script>
      </>
    );
  }
}

export default App;
