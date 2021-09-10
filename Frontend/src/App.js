import logo from './logo.svg';
import { Link } from 'react-router-dom';

import './css/style.css';
import './css/slider.css';
import img0 from "./images/0.png";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.png";
import img8 from "./images/8.png";
import img9 from "./images/9.png";
import Footer from './Utility/Footer.jsx';
import Navbar from './Utility/navbar.jsx';
import Contact from './Utility/Contact';
import {  Route, BrowserRouter as Router, Switch, useParams } from 'react-router-dom';
import Home from './Utility/Home';
import Review from './Utility/Review';


function App() {
  
  
  return (
    <div className="App">
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <img src={img9}/>   
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/hey" className="nav-link">  Services </Link>   
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
   <Switch>
          <Route path="/:id" >
            <Review></Review>
            </Route>
          <Route path="/" >
            <Home></Home>
            </Route>
          <Route path="/hello" >
            <Review></Review>
            </Route>
          
        </Switch>
      </Router>
      
      <Contact></Contact>
      <Footer></Footer>
      </div>
  );
}

export default App;
