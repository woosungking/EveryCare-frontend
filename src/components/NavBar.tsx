import React from 'react';
import Home from '../assets/navicon/Home.png';
import Info from '../assets/navicon/Info.png';
import Intake from '../assets/navicon/Intake.png';
import Register from '../assets/navicon/Register.png';
import Search from '../assets/navicon/Search.png';
const NavBar: React.FC = () => {
  const NavStyle = {
    bottom: '10px', // 화면 하단에 고정
    minWidth: '100%',
    minHeight: '6%',
    borderTop: '1px solid #D9D9D9',
    borderRadius: '15px',
  };

  const NavContentStyle = {
    flex: '1',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    marginTop:"10px",
  };

  return (
    <nav className="flex absolute" style={NavStyle}>
      <div
        style={{
          ...NavContentStyle,
          backgroundImage: `url(${Home})`,
        }}
      ></div>
      <div
        style={{
          ...NavContentStyle,
          backgroundImage: `url(${Intake})`,
        }}
      ></div>
      <div
        style={{
          ...NavContentStyle,
          backgroundImage: `url(${Register})`,
        }}
      ></div>
      <div
        style={{
          ...NavContentStyle,
          backgroundImage: `url(${Search})`,
        }}
      ></div>
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
