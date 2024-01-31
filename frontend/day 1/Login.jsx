import { useState } from 'react';
import '../App.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        'Password must be at least 8 characters long and include at least one number and one special character.'
      );
    } else {
      setError('');
      console.log('Logging in with:', { username, password });
      // Add your login logic here
    }
  };

  return (
    
    <div className="fullstack">
      <form className="login">
        <div className="lo">
          <h2>LOGIN </h2>
        </div>
        <div className="group">
          <label htmlFor="username"><b>USERNAME:</b></label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form1">
          <label htmlFor="password"><b>PASSWORD:</b></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          {error && <p className="error">{error}</p>}
        </div>
        <Link to="/LandingPage">
          <button type="button" onClick={handleLogin} className="login-button">
            Login
          </button>
        </Link>
        <Link to="/Registration">
          <button type="button" onClick={handleLogin} className="login-button">
            Sign up
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
