import "./App.css";
import Home from "./components/core/Home";
import Subnavbar from "./components/core/Subnavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Summer from "./components/core/Summer";
import Winter from "./components/core/Winter";
import Buy from "./pages/Buy";
import ContactUs from "./pages/Contactus";
import Faq from "./pages/faq";
import YellowHighlight from "./components/common/YellowHighlight";
import WeatherInfo from "./pages/Weather";
import ExpertAdvice from "./pages/ExpertAdvice";

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
          <img src="/public/Images/name.png "></img>
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

      <div className="recommendation" id="recommendation">
        <YellowHighlight text="Recommendation" />
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

      <div className="buy" id="buy">
        <Buy />
      </div>
      <div id="weather">
        <WeatherInfo />
      </div>

      <div className="advice">
        <img src="/public/quotes.gif" width="80px"></img>
        <YellowHighlight text="Expert Advice" />
        <ExpertAdvice />
      </div>

      <div id="faq">
        <Faq />
      </div>

      <div id="about">
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
