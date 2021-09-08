import { Link } from 'react-router-dom';
import '../css/style.css';
import img9 from "../images/9.png";
import img5 from "../images/5.png";
function Footer(){
    return(
        <div className="footer">
          <div className="container">
              <div className="row footer-row">
                  <div className="col col-md-5">
                      <img src={img9}/>
                      <div className="copyright">
                          <h5>Copyright © 2021 Zocket.</h5>
                          <h5>All rights reserved</h5>
                      </div>
                      <div className="socials row">
                          <div className="col col-md-1 social-holder">
                              <img src={img5}/>
                          </div>
                          <div className="col col-md-1 social-holder">
                              <img src={img5}/>
                          </div>
                          <div className="col col-md-1 social-holder">
                              <img src={img5}/>
                          </div>
                      </div>
                  </div>
                  <div className="col col-md-7">
                      <div className="row">
                          <div className="col col-md-3">
                              <h4>
                                Company
                              </h4>
                              <h5>About us</h5>
                              <h5>Blog</h5>
                              <h5>Contact us</h5>
                              <h5>Pricing</h5>
                              <h5>Testimonials</h5>
                          </div>
                          <div className="col col-md-3">
                              <h4>
                                Company
                              </h4>
                              <h5>About us</h5>
                              <h5>Blog</h5>
                              <h5>Contact us</h5>
                              <h5>Pricing</h5>
                              <h5>Testimonials</h5>
                          </div>
                          
                          
                          <div className="col col-md-6">
                            <h3>Get Early Access</h3>
                            <input className="form-control" placeholder="Your email address"/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    
    )
}
export default Footer;