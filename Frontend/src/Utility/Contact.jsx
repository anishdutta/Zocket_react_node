import { Link } from 'react-router-dom';
import '../css/style.css';
import img7 from "../images/7.png";
import img8 from "../images/8.png";
import img3 from "../images/3.png";
import { Component } from 'react';
import axios from 'axios';
import React,{useState} from 'react';


function Contact()  {
    const [ sent, setSent ] = useState(false)
	const [ text, setText ] = useState("")
    const handleSend = async (e) => {
		setSent(true)
		try {
			await axios.post("http://localhost:4000/send_mail", {
				text
			})
		} catch (error) {
			console.error(error)
		}
	}
       return (
        <div className="container launch">
          
          <div className="row launch-row">
           
              <div className="col col-md-6 launch-img">
                  <img src={img3}/>
              </div>
              <div className="col col-md-6">
                <img src={img7} className="absvec1"/>
                <img src={img8} className="absvec2"/>
                <h1>
                    Be one of the first to know when we launch!
                </h1>
                {
                    !sent?(
                        <form className="d-flex" onSubmit={handleSend}>
                    <input className="form-control" id="email" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Your email address" aria-label="Search"/>
                    <button type="submit" className="btn btn-primary early-btn">Get Early Access</button>
                  </form> 
                    ):(
                        <h1>Email Sent</h1>
                    )
                }
                
              </div>
          </div>
      </div>
      
    )
}
export default Contact;