import { Link } from 'react-router-dom';
import '../css/style.css';
import img7 from "../images/7.png";
import img8 from "../images/8.png";
import img3 from "../images/3.png";
import { Component } from 'react';
import axios from 'axios';



class Contact extends Component{
    handleSubmit(e){
        e.preventDefault();
        const email = document.getElementById('email').value;
        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: {
                name: "Test",   
                email: email,  
                messsage: "Test message"
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }
    render(){
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
                <form className="d-flex" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <input className="form-control" id="email" type="search" placeholder="Your email address" aria-label="Search"/>
                    <button type="submit" className="btn btn-primary early-btn" type="submit">Get Early Access</button>
                  </form> 
              </div>
          </div>
      </div>
      
    )}
}
export default Contact;