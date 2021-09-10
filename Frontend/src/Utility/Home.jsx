import { Link } from 'react-router-dom';

import '../css/style.css';
import '../css/slider.css';
import img0 from "../images/0.png";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";
import img8 from "../images/8.png";
import img9 from "../images/9.png";


import { Route } from "react-router";

function Home(){
    return(
        <div>
            <div className="container main-head">
        <div className="row">
            <div className="col col-md-6">
                <h1>
                    FACEBOOK ADS IN 30 SECONDS
                </h1>
                <h5>
                    Create stunning ad copy incredibly fast and skyrocket your digital business.
                </h5>
                <form className="d-flex">
                    <input className="form-control" type="search" placeholder="Your email address" aria-label="Search"/>
                    <button className="btn btn-primary early-btn" type="submit">Get Early Access</button>
                  </form> 
            </div>
            <div className="col col-md-6">
                <img src={img4}/>
            </div>
        </div>
      </div>
      <div className="container services">
          <h1>Tailor-made Services</h1>
        <div className="row">
            <div className="col myservice col-md-4">
                <div className="service-cont">
                    <img src={img2}/>
                    <div className="services-content">
                      <h2>
                        Facebook Ads
                    </h2>
                    <h5>
                        With custom audience targeting and personalized ad campaigns, your business is sure to acquire leads.
                    </h5>
                    
                    </div>
                    <div className="explore-btn">
                        Explore
                        <img src={img6}/>
                    </div>  
                    
                </div>
            </div>
            <div className="col myservice col-md-4">
                <div className="service-cont">
                    <img src={img2}/>
                    <div className="services-content">
                      <h2>
                        Facebook Ads
                    </h2>
                    <h5>
                        With custom audience targeting and personalized ad campaigns, your business is sure to acquire leads.
                    </h5>
                    
                    </div>
                    <div className="explore-btn">
                        Explore
                        <img src={img6}/>
                    </div>  
                    
                </div>
            </div>
            <div className="col myservice col-md-4">
                <div className="service-cont">
                    <img src={img2}/>
                    <div className="services-content">
                      <h2>
                        Facebook Ads
                    </h2>
                    <h5>
                        With custom audience targeting and personalized ad campaigns, your business is sure to acquire leads.
                    </h5>
                    
                    </div>
                    <div className="explore-btn">
                        Explore
                        <img src={img6}/>
                    </div>  
                    
                </div>
            </div>
            
        </div>
      </div>
      <div className="container whyus">
          <h1>Why Us</h1>
          <div className="row  whyus-row">
              <div className="col col-md-6">
                  <img src={img4}/>
              </div>
              <div className="col col-md-6 whyus-content">
                <h2>
                    Localised Ad Campaigns
                </h2>
                <h5>
                    With Zocket’s localised ad campaigns, you’re sure to drive customers to your physical store. Online business listings, geo-tagging, and ads are some of the many things we help businesses get started with. You can rest assured that you’ll leave a positive brand image on your customers as your business flourishes, making it easier for you to build long-lasting customer relationships locally.
                </h5>
              </div>
              
          </div>
          <div className="row flex-row-reverse whyus-row">
              <div className="col col-md-6">
                  <img src={img4}/>
              </div>
              <div className="col col-md-6 whyus-content">
                <h2>
                    Localised Ad Campaigns
                </h2>
                <h5>
                    With Zocket’s localised ad campaigns, you’re sure to drive customers to your physical store. Online business listings, geo-tagging, and ads are some of the many things we help businesses get started with. You can rest assured that you’ll leave a positive brand image on your customers as your business flourishes, making it easier for you to build long-lasting customer relationships locally.
                </h5>
              </div>
              
          </div>
          <div className="row  whyus-row">
              <div className="col col-md-6">
                  <img src={img4}/>
              </div>
              <div className="col col-md-6 whyus-content">
                <h2>
                    Localised Ad Campaigns
                </h2>
                <h5>
                    With Zocket’s localised ad campaigns, you’re sure to drive customers to your physical store. Online business listings, geo-tagging, and ads are some of the many things we help businesses get started with. You can rest assured that you’ll leave a positive brand image on your customers as your business flourishes, making it easier for you to build long-lasting customer relationships locally.
                </h5>
              </div>
              
          </div>
      </div>
      <div className="testimonials">
          <h1>Hear It From Them</h1>
          <img className="abscev3" src={img0}/>
        <div className="container">
    
          <div className="row">
            <div className="col-sm-12">
              <div id="customers-testimonials" className="owl-carousel">
    
                
                <div className="item">
                  <div className="testimonials-content ">
                      <h2>
                        Incredibly Amazing!
                      </h2>
                      <h5>
                        Zocket made a huge difference in just a few weeks of using it. Their ad copy helped take our business to the next level.
                      </h5>
                      
                    
                  </div>
                  <img className="myarrow" style={{marginTop: "-5px", width: "20px"}} src={img1}/>
                  <div className="testimonials-info">
                     <img className="img-circle"  src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt=""/>
                  <h3>
                    Ella May
                  </h3>
                  <h6>
                    Digital Marketer
                  </h6> 
                  </div>
                  
                </div>
                <div className="item">
                  <div className="testimonials-content ">
                      <h2>
                        Incredibly Amazing!
                      </h2>
                      <h5>
                        Zocket made a huge difference in just a few weeks of using it. Their ad copy helped take our business to the next level.
                      </h5>
                      
                    
                  </div>
                  <img className="myarrow" style={{marginTop: "-5px", width: "20px"}} src={img1}/>
                  <div className="testimonials-info">
                     <img className="img-circle"  src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt=""/>
                  <h3>
                    Ella May
                  </h3>
                  <h6>
                    Digital Marketer
                  </h6> 
                  </div>
                  
                </div>
                <div className="item">
                  <div className="testimonials-content ">
                      <h2>
                        Incredibly Amazing!
                      </h2>
                      <h5>
                        Zocket made a huge difference in just a few weeks of using it. Their ad copy helped take our business to the next level.
                      </h5>
                      
                    
                  </div>
                  <img className="myarrow" style={{marginTop: "-5px", width: "20px"}} src={img1}/>
                  <div className="testimonials-info">
                     <img className="img-circle"  src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt=""/>
                  <h3>
                    Ella May
                  </h3>
                  <h6>
                    Digital Marketer
                  </h6> 
                  </div>
                  
                </div>
                <div className="item">
                  <div className="testimonials-content ">
                      <h2>
                        Incredibly Amazing!
                      </h2>
                      <h5>
                        Zocket made a huge difference in just a few weeks of using it. Their ad copy helped take our business to the next level.
                      </h5>
                      
                    
                  </div>
                  <img className="myarrow" style={{marginTop: "-5px", width: "20px"}} src={img1}/>
                  <div className="testimonials-info">
                     <img className="img-circle"  src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt=""/>
                  <h3>
                    Ella May
                  </h3>
                  <h6>
                    Digital Marketer
                  </h6> 
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
          </div>
        </div>
        
        </div>
    );
}

export default Home;