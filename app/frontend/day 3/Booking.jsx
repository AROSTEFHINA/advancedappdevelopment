import  { useState } from 'react';
import '../styles/Booking.css';
 // Import CSS file for styling

function App() {
  const [formData, setFormData] = useState({
   
    applicantName: '',
    applicationAddress: '',
    applicationMobile: '',
    email: '',
    dateOfEvent: '',
    timeOfEvent: '',
    numberOfPeople: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Do whatever you want with the form data
  };

  return (
    <div className="winsall">
    <div className="min">
      <h1>Book your Events!</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="hoon">
          <label htmlFor="applicantName">Applicant Name:</label>
          <input type="text" id="applicantName" name="applicantName" value={formData.applicantName} onChange={handleChange} />
        </div>
        <div className="park">
          <label htmlFor="applicationAddress">Applicant Address:</label>
          <input type="text" id="applicationAddress" name="applicationAddress" value={formData.applicationAddress} onChange={handleChange} />
        </div>
        <div className="sugar">
          <label htmlFor="applicationMobile">Applicant Mobile Number:</label>
          <input type="text" id="applicationMobile" name="applicationMobile" value={formData.applicationMobile} onChange={handleChange} />
        </div>
        <div className="water">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="bottle">
          <label htmlFor="dateOfEvent">Date of Event:</label>
          <input type="date" id="dateOfEvent" name="dateOfEvent" value={formData.dateOfEvent} onChange={handleChange} />
        </div>
        <div className="phone">
          <label htmlFor="timeOfEvent">Time of Event:</label>
          <input type="time" id="timeOfEvent" name="timeOfEvent" value={formData.timeOfEvent} onChange={handleChange} />
        </div>
        <div className="essarr">
          <label htmlFor="numberOfPeople">Number of People:</label>
          <input type="number" id="numberOfPeople" name="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange} />
        </div>
        <button className="aott" type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default App;
