import '../css/style.css';
import img7 from "../images/7.png";
import img8 from "../images/8.png";
import img3 from "../images/3.png";
import { Component } from 'react';
import axios from 'axios';
import React,{useState} from 'react';
import ReactDom from 'react-dom';
import { useHistory } from 'react-router';
import img18 from "../images/18.png";
import img19 from "../images/19.png";
import img20 from "../images/20.png";



function Contact()  {
    
    const history = useHistory();

    const [ sent, setSent ] = useState(false)
	const [ text, setText ] = useState("")
	var timestamp = 0;    
    const handleSend =  (e) => {
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
    
       return (
         <div>
             <img className="absvec8"  alt="" src={img18}></img>
            <img className="absvec9"  alt="" src={img19}></img>
            <img className="absvec10"  alt="" src={img20}></img>
            <img className="absvec11"  alt="" src={img18}></img>
            <img className="absvec12"  alt="" src={img20}></img>
            <img className="absvec13"  alt="" src={img20}></img>
            <img className="absvec14"  alt="" src={img19}></img>

           <div className="container launch">
            
            
          <div className="row launch-row">
           
              <div className="col col-md-6 launch-img">
                  <img src={img3}/>
              </div>
              <div className="col col-md-6">
                <img src={img7} alt="" className="absvec1"/>
                <img src={img8} alt="" className="absvec2"/>
                <h1>
                    Be one of the first to know when we launch!
                   
                </h1>
                {
                    !sent?(
                        
                        <form className="d-flex" onSubmit={handleSend}>
                    <input className="form-control" id="email" type="text" required value={text} onChange={(e) => setText(e.target.value)} placeholder="Your email address" aria-label="Search"/>
                    
                    <button type="submit"  className="btn btn-primary early-btn">Get Early Access</button>
                  </form> 
                    ):(
                        <h1>Email Sent</h1>
                    )
                }
                {/* <button onClick={submitPost} className="btn btn-primary">Test</button> */}
                
              </div>
          </div>
      </div>
        
         </div>  
        
    )
}
export default Contact;