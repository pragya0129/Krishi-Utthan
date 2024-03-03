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
import Monsoon from "./components/core/Monsoon";
import Spring from "./components/core/Spring";
import AllYear from "./components/core/AllYear";
import Tutorial from "./pages/tutorials";

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
        <img src="Images/name.png" alt="logo" />
        <ul className="nav-links bg-gradient-to-r from-sky-600 to-blue-300 ">
          <li>
            <a onClick={() => scrollToSection("home")}>Home</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("recommendation")}>
              Recommendation
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("buy")}>Buy</a>
          </li>

          <li>
            <a onClick={() => scrollToSection("weather")}>Weather</a>
          </li>

          <li>
            <a onClick={() => scrollToSection("advice")}>Expert</a>
          </li>

          <li>
            <a onClick={() => scrollToSection("tutorial")}>Tutorial</a>
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
              <Route path="monsoon" element={<Monsoon />} />
              <Route path="spring" element={<Spring />} />
              <Route path="allyear" element={<AllYear />} />
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

      <div className="advice" id="advice">
        <img src="quotes.gif" width="80px"></img>
        <YellowHighlight text="Expert Advice" />
        <ExpertAdvice />
      </div>

      <div className="tutorial" id="tutorial">
        <YellowHighlight text="Tutorial Videos" />
        <Tutorial />
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
