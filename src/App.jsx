import "./App.css";
import Home from "./components/core/Home";
function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
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
        <Home />
      </div>
    </div>
  );
}

export default App;
