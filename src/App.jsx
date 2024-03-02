import "./App.css";
import Home from "./components/core/Home";
import Subnavbar from "./components/core/Subnavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Summer from "./components/core/Summer";
import Winter from "./components/core/Winter";
import Buy from "./pages/Buy";

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-screen min-h-screen bg-richblack-900 flex flex-col">
      <div className="navigation">
        <ul className="nav-links">
          <img src="/public/logo (1).png"></img>

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

      <div className="recommendation">
        <h1>Recommendations</h1>
        <Router>
          <Routes>
            <Route path="/" element={<Subnavbar />}>
              <Route path="summer" element={<Summer />} />
              <Route path="winter" element={<Winter />} />
              <Route path="monsoon" element={<Winter />} />
              <Route path="spring" element={<Winter />} />
              <Route path="allyear" element={<Winter />} />
              <Route index element={<Summer />} />
            </Route>
          </Routes>
        </Router>
      </div>

      <div className="buy">
        <Buy />
      </div>
    </div>
  );
}

export default App;
