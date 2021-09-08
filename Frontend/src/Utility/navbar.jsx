import { Link } from 'react-router-dom';
import '../css/style.css';
import img9 from "../images/9.png";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <img src={img9}/>   
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <span className="nav-link">  Services </span>   
              </li>
              <li className="nav-item">
              <span className="nav-link"> Why Us   </span>
              </li>
              <li className="nav-item">
              <span className="nav-link">About   </span>
              </li>
              <li className="nav-item">
              <span className="nav-link">Pricing   </span>
              </li>
              <li className="nav-item">
              <span className="nav-link"> Contact   </span>
              </li>
             
            </ul>
            <button className="btn btn-primary accessbtn">
                Get Early Access
            </button>
          </div>
        </div>
      </nav>
      
    )
}

export default Navbar;