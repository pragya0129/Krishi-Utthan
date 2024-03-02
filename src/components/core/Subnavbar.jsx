import { Link } from "react-router-dom";
import "./Subnavbar.css";
import { Outlet } from "react-router-dom";
function Subnavbar() {
  return (
    <div>
      <div className="navigation2">
        <ul className="subnav-links">
          <li>
            <Link to="summer">Summer</Link>
          </li>
          <li>
            <Link to="winter">Winter</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Subnavbar;
