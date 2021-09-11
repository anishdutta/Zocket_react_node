import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Review() {

  let { id } = useParams();
  const [email, setemail] = useState('');

  useEffect(()=>{
    axios.get(`http://localhost:4000/api/getFromId/${id}`).then((data)=>{
        console.log(data)
        if(Array.isArray(data.data) && data.data.length){
          setemail(data.data[0].Email);  
        }
          
     });
    
    },[id]);
    
    
  
    return (
      <div className="container review">
        <h3><span className="reviwemail">{ email ? email : '...' }</span> has been registered successfully, Thank you! </h3>
      </div>
    );
  }

  export default Review;