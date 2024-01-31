import  { useState } from 'react';
import '../styles/Registration.css'
import {Link} from 'react-router-dom';
// import './App.css'; // Import the CSS file

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    // Add your registration logic here
    // You can perform validation and send data to the server
    
    // For simplicity, just logging the input values
    console.log('Registering with:', { username, email, name, address, phoneNumber });
  };

  return (
    <div className="reg1">
      <form className="registration">
        <h2>REGISTER</h2>
        <div className="grp1">
          <label htmlFor="username">USERNAME:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="grp2">
          <label htmlFor="email">EMAIL:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grp3">
          <label htmlFor="name">NAME:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grp4">
          <label htmlFor="address">ADDRESS:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="grp5">
          <label htmlFor="phoneNumber">PHONE NUMBER:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <br />
        {error && <p className="itsme">{error}</p>}
        <button type="button" onClick={handleRegister} className="prob">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
