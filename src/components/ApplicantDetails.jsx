import React, { useState } from 'react';
import axios from 'axios';

const ApplicantDetails = () => {
  const [name, setName] = useState('');
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/services/${name}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "cache-control": 'no-cache',
        }
      });
      console.log(response.data); // Log response data to see if it's returning correctly
      setUserData(response.data);
      setError(null); // Reset error state on successful response
    } catch (error) {
      console.log(error); // Log any errors
      setError('Failed to fetch data. Please try again.'); // Set error state with a meaningful message
    }
  };

  return (
    <div className="hiros">
      <div className="ester">
        <div className="hats">
          <h1 className="vero">Booked events</h1>
        </div>
        <div className="velen">
          <input
            type="text"
            placeholder="Enter name to search"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSearch}>Submit</button> {/* Ensure onClick is connected to handleSearch */}
          {error && <p>{error}</p>}
          {userData.length > 0 && userData.map((item, index) => (
            <div key={index} className="killme">
              <p className="worlddd">Event Name: {item.eventname}</p>
              <p className="qwe">Address: {item.address}</p>
              <p className="hbg">Email: {item.email}</p>
              <p className="polk">Date of Event: {item.date}</p>
              <p className="yutf">Time of Event: {item.timing}</p>
              <p className="uyir">Number of People: {item.people}</p>
              {/* You can add more details as needed */}
              <button className="gyuh">Cancel</button>
              <button className="gyuh">Update</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApplicantDetails;
