import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
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
import img10 from "../images/10.png";
import img11 from "../images/11.png";
import img12 from "../images/12.png";
import img13 from "../images/13.png";
import img14 from "../images/14.png";
import img15 from "../images/15.png";
import img16 from "../images/16.png";
import img17 from "../images/17.png";
import img18 from "../images/18.png";
import img19 from "../images/19.png";
import img20 from "../images/20.png";



import { Route } from "react-router";

function Home(){
  const [ sent, setSent ] = useState(false)
	const [ text, setText ] = useState("")
	var timestamp = 0;    
    const handleSend =  (e) => {
      e.preventDefault();
		setSent(true)
        
		try {
			axios.post("http://localhost:4000/send_mail", {
				text
			}).then(Response=>{
                timestamp = Math.floor(Date.now()/1000);
            console.log(timestamp);
                axios.post('http://localhost:4000/api/create', {Id: timestamp, User: text}).then(Response=>{
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
        <div>
            <div className="container main-head">
            <img className="bubble absvec4"  alt="" src={img18}></img>
            <img className="absvec5"  alt="" src={img19}></img>
            <img className="absvec6"  alt="" src={img20}></img>
            <img className="absvec7"  alt="" src={img18}></img>

        <div className="row">
            <div className="col col-md-6">
                <h1>
                    FACEBOOK ADS IN 30 SECONDS
                </h1>
                <h5>
                    Create stunning ad copy incredibly fast and skyrocket your digital business.
                </h5>
                <form className="d-flex" onSubmit={handleSend}>
                    <input required value={text} onChange={(e) => setText(e.target.value)} className="form-control" type="search" placeholder="Your email address" aria-label="Search"/>
                    <button type="submit" className="btn btn-primary early-btn" >Get Early Access</button>
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
                    <img src={img11}/>
                    <div className="services-content">
                      <h2>
                      Google Ads
                    </h2>
                    <h5>
                    We offer industry research paired with PPC monitoring and A/B testing to ensure you get an improved ROI.                    </h5>
                    
                    </div>
                    <div className="explore-btn">
                        Explore
                        <img src={img6}/>
                    </div>  
                    
                </div>
            </div>
            <div className="col myservice col-md-4">
                <div className="service-cont">
                    <img src={img10}/>
                    <div className="services-content">
                      <h2>
                      Instagram Ads                    </h2>
                    <h5>
                    Right from design and content strategy to profile management and everything in between, we’ve got you covered.                    </h5>
                    
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
                  <img src={img12}/>
              </div>
              <div className="col col-md-6 whyus-content">
                <h2>
                Get More Calls and Enquiries                </h2>
                <h5>
                When you use Zocket, you can expect calls pouring in with enquiries about your business. Our exceptional outreach strategies and business profile optimization techniques will catch the eye of prospects. With organic leads taken care of by Zoket, all you’d have to worry about is converting your leads to customers.                </h5>
              </div>
              
          </div>
          <div className="row  whyus-row">
              <div className="col col-md-6">
                  <img src={img14}/>
              </div>
              <div className="col col-md-6 whyus-content">
                <h2>
                No Expertise Required                </h2>
                <h5>
                Zocket is completely beginner friendly and doesn’t require any previous marketing expertise to use. Built with an aim to make marketing easier for small businesses, Zocket is powered by AI and will provide done-for-you content while you can take care of other important things in your business. With easy-to-follow guides, it doesn’t get better than this.                </h5>
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