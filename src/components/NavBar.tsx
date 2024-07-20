import React from 'react';
import Home from '../assets/navicon/Home.png';
import Info from '../assets/navicon/Info.png';
import Intake from '../assets/navicon/Intake.png';
import Register from '../assets/navicon/Register.png';
import Search from '../assets/navicon/Search.png';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const NavStyle = {
    bottom: '0',
    width: '100%',
    height: '4.25rem',
    borderTop: '1px solid #D9D9D9',
    borderRadius: '15px 15px 0 0',
    backgroundColor: 'white',
    position: 'absolute',
  };

  const NavContentStyle = {
    flex: '1',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    marginTop: '10px',
  };

  return (
    <nav className="fixed flex bottom-0 w-full" style={NavStyle}>
      <Link
        to="/"
        style={{ ...NavContentStyle, backgroundImage: `url(${Home})` }}
      />
      <Link
        to="/calendar"
        style={{
          ...NavContentStyle,
          backgroundImage: `url(${Intake})`,
        }}
      ></Link>
      <Link
        to="/scan-or-direct"
        style={{
          ...NavContentStyle,
          backgroundImage: `url(${Register})`,
        }}
      ></Link>
      <Link
        to="/pill-info-search"
        style={{
          ...NavContentStyle,
          backgroundImage: `url(${Search})`,
        }}
      ></Link>
      <div
        style={{
          ...NavContentStyle,
          backgroundImage: `url(${Info})`,
        }}
      ></div>
    </nav>
  );
};

export default NavBar;
