import React from 'react';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import NavBar from '../../components/NavBar';
import SmallLogo from '../../assets/SmallLogo.png';
import ScanConfirm from '../../components/register/ScanConfirm';

const ScanConfirmPage: React.FC = () => {
  const LogoStyle = {
    width: '30%',
    marginTop: '3%',
    marginLeft: '3%',
  };
  return (
    <BackLayout>
      <CenterLayout>
        <img src={SmallLogo} alt="" style={LogoStyle} />
        <ScanConfirm></ScanConfirm>
      </CenterLayout>
      <NavBar></NavBar>
    </BackLayout>
  );
};

export default ScanConfirmPage;
