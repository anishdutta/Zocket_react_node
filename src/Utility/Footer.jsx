import { Link } from 'react-router-dom';
import '../css/style.css';
import img9 from "../images/9.png";
import img5 from "../images/5.png";
import img17 from "../images/17.png";
import img15 from "../images/15.png";
import img16 from "../images/16.png";
import axios from 'axios';
import { useState } from 'react';
function Footer(){
    const [ sent, setSent ] = useState(false)
	const [ text, setText ] = useState("")
	var timestamp = 0;    
    const handleSend =  (e) => {
      e.preventDefault();
		setSent(true)
        
		try {
			axios.post("https://zocket-express-azure.herokuapp.com/send_mail", {
				text
			}).then(Response=>{
                timestamp = Math.floor(Date.now()/1000);
            console.log(timestamp);
                axios.post('https://zocket-express-azure.herokuapp.com/api/create', {Id: timestamp, User: text}).then(Response=>{
                    window.location.replace(`/${timestamp}`);
                    // this.props.history.replace(`/${timestamp}`);
                    
                });
            })
            // prod
			// axios.post("https://zocket-express-azure.herokuapp.com/send_mail", {
			// 	text
			// })
		} catch (error) {
            console.log(text);
			console.error(error);
		}
    }
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
                              <img src={img15}/>
                          </div>
                          <div className="col col-md-1 social-holder">
                              <img src={img16}/>
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
                            <form className="d-flex footer-form" onSubmit={handleSend}>
                    <input required value={text} onChange={(e) => setText(e.target.value)} className="form-control" type="search" placeholder="Your email address" aria-label="Search"/>
                    <button type="submit" className="btn footer-btn" ><img src={img17} alt=""></img></button>
                  </form> 
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    
    )
}
export default Footer;