import './Navbar.css';

import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleLogout = (e) =>
{
      e.preventDefault();
      localStorage.removeItem("email");
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>ZTO</h1>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/exams">Exams</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="navbar-buttons">

        <button className="login-btn" onClick={handleLogin}>Login</button>
        <button className="getstarted-btn" onClick={handleLogout}> logout</button>
      </div>
    </nav>
  );
};

export default Navbar;