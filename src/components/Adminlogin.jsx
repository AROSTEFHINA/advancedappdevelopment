import React from 'react';
import '../styles/LandingPage.css';
import {Link} from 'react-router-dom';

 // Import the CSS file
// import React from 'react';
// import './styles.css'; // Import the CSS file

const Evento = () => {
  return (
    <div>
      <header className="header">
      
        <p className="logo">Evento</p>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
            <Link to="/Bookedevents">
              <a href="#" className="nav-link">View events</a></Link>
            </li>
            <li className="nav-item"
            >
                
              <a href="#" className="nav-link">Edit Themes</a>
            </li>

            <li className="nav-item">
                <Link to="/Login">
              <a href="#" className="nav-link">Sign out</a></Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h1 className="heading">Show all the booked events</h1>
        <p className="text"> Get your events planned safely through Evento.</p>
        <form className="form">
          <input type="text" className="input" placeholder='Find events by id' />
          <button className="btn">Search</button>
        </form>
      </main>
      <footer className="footer">
        <p className="copyright">&copy; 2025. Copyright by evento</p>
        <p className="stats">24,452 events. 322 cities.</p>
      </footer>
    </div>
  );
};

export default Evento;
