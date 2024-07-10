import React from 'react';
import Logo from '../assets/SmallLogo.png';

const SmallLogo: React.FC = () => {
  const LogoStyle = {
    width: '30%',
    marginTop: '3%',
    marginLeft: '3%',
    height: '4.5vh',
  };
  return <img src={Logo} alt="" style={LogoStyle} />;
};

export default SmallLogo;
