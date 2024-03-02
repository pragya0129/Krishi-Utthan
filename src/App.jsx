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
            <a onClick={() => scrollToSection("faq")}>FAQ</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
