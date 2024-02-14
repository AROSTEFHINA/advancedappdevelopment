import React, { useState, useEffect } from 'react';
import '../styles/Bookedevents.css'; // Import your CSS file here
import axios from 'axios';
import { Link } from 'react-router-dom';
const ApplicantDetails = () => {
  
  const[Dat,SetDat]=useState('');
  // Mock data for demonstration
  let token=localStorage.getItem('token');           
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response= await axios.get('http://localhost:8080/services',
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":'no-cache',
      
            
            
          }
        }
        
        );
        SetDat(response.data);
        console.log(response.data);
      }
      catch(error){
        console.log(error);
      }
      
    };
    fetchData();
  },[]);
  
  return (
    <div className="satoru">
    <div className="hiros">
    <div className="ester">
      <div className="hats">
      <h1 className="vero">Booked events</h1></div>
      <div className="velen">
      {Dat && Dat.map((item, index) => (
          <div key={item.name} className="killme">
            {/* <h2 className="inthis">{item.address}</h2> */}
            
            <p className="worlddd">Event Name: {item.eventname}</p>
            <p className="qwe">Address: {item.address}</p>
            <p className="hbg">Email: {item.email}</p>
            <p className="polk">Date of Event: {item.date}</p>
            <p className="yutf">Time of Event: {item.timing}</p>
            {/* <p className="applicant-time">Time of Event: {item.people}</p> */}
            <p className="uyir">Number of People: {item.people}</p>
            <Link to="/Delete"><button className="gyuh">Cancel</button></Link>
            <Link to="/updateBooking"><button className="gyuh">Update</button></Link>

        
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}

export default ApplicantDetails;
