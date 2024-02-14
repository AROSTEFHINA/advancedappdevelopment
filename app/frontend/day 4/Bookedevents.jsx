import React, { useState, useEffect } from 'react';
import '../styles/Bookedevents.css'; // Import your CSS file here

const ApplicantDetails = () => {
  const [applicants, setApplicants] = useState([]);

  // Mock data for demonstration
  useEffect(() => {
    const mockApplicants = [
      { id: 1, name: 'John Doe', address: '123 Main St, Anytown, USA', phoneNumber: '123-456-7890', email: 'john.doe@example.com', dateOfEvent: '2024-03-15', timeOfEvent: '18:00', numberOfPeople: 2 },
      { id: 2, name: 'Jane Smith', address: '456 Elm St, Anytown, USA', phoneNumber: '987-654-3210', email: 'jane.smith@example.com', dateOfEvent: '2024-04-10', timeOfEvent: '15:30', numberOfPeople: 3 },
      
    ];
    setApplicants(mockApplicants);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="hiros">
    <div className="applicant-details-container">
      <h1 className="page-title">Booked events</h1>
      <div className="applicant-list">
        {applicants.map(applicant => (
          <div key={applicant.id} className="applicant-card">
            <h2 className="applicant-name">{applicant.name}</h2>
            <p className="applicant-address">Address: {applicant.address}</p>
            <p className="applicant-phone">Phone Number: {applicant.phoneNumber}</p>
            <p className="applicant-email">Email: {applicant.email}</p>
            <p className="applicant-date">Date of Event: {applicant.dateOfEvent}</p>
            <p className="applicant-time">Time of Event: {applicant.timeOfEvent}</p>
            <p className="applicant-people">Number of People: {applicant.numberOfPeople}</p>
            <button className="cancel-button">Cancel</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default ApplicantDetails;
