// src/components/Sidebar/index.js
import './index.scss';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/hacettepelogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import myIcon from '../../assets/images/world.png';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`nav-bar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} color="#ffd700" />
      </button>
      
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>
      
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        
        {process.env.NODE_ENV === 'development' && (
          <NavLink exact="true" activeclassname="active" className="world-link" to="/world">
            <i className="png-icon-container">
              <img src={myIcon} alt="World" className="png-icon" />
            </i>
          </NavLink>
        )}
        
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
      </nav>
      
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://youtu.be/q93CwmL2j7k">
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;