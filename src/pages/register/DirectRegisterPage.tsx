import React from 'react';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import NavBar from '../../components/NavBar';
import DirectRegister from '../../components/register/DirectRegister';
import SmallLogo from '../../assets/SmallLogo.png';

const DirectRegisterPage: React.FC = () => {
  const LogoStyle = {
    width: '30%',
    marginTop: '3%',
    marginLeft: '3%',
  };

  return (
    <BackLayout>
      <CenterLayout margin="m-auto">
        <img src={SmallLogo} alt="Small Logo" className="w-1/3 mt-3 ml-3" />
        <DirectRegister />
        <NavBar></NavBar>
      </CenterLayout>
    </BackLayout>
  );
};

export default DirectRegisterPage;
