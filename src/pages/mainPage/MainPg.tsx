import React from 'react';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import NavBar from '../../components/NavBar';
import SmallLogo from '../../assets/SmallLogo.png';
import MainPage from '../../components/mainPage/MainPage';

const MainPg: React.FC = () => {
  const LogoStyle = {
    width: '30%',
    marginTop: '3%',
    marginLeft: '3%',
  };
  return (
    <BackLayout>
      <CenterLayout margin="m-auto">
        <img src={SmallLogo} alt="" style={LogoStyle} />
        <MainPage />
        <NavBar></NavBar>
      </CenterLayout>
    </BackLayout>
  );
};

export default MainPg;
