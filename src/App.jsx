import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="navigation">
        <ul className="nav-links">
          <li>
            <img src=""></img>
          </li>
          <li>
            <a onClick={() => scrollToSection("home")}>Home</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("buy")}>Buy</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("recommendation")}>
              Recommendation
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("weather")}>Weather</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("faq")}>FAQ</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("about")}>About</a>
          </li>
        </ul>
      </div>

      <div className="top" id="home">
        <br className="showhide"></br>
        <h1>
          <span className="heading">Krishi Utthan</span>
        </h1>
        <br></br>
        <div className="text">
          description
          <br></br>
          <br></br>
        </div>

        <p className="animtext">animated text</p>
      </div>
    </div>
  );
}

export default App;
