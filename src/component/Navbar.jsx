import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  return (
    <nav id="navbar">
      <a className="logo" href="https://daewoobattery.com">
        <img
          className="logo-brand"
          src="https://daewoobattery.com/wp-content/uploads/2018/01/logo-daewoo.png"
          alt="Daewoo Logo"
        />
      </a>

      <ul id="menu-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/battery-selector">Battery Selector</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/dealers-network">Dealers Network</Link>
        </li>
      </ul>

      <div className="bx bx-menu" id="menu-icon">
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
