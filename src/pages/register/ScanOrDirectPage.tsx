import React from 'react';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import NavBar from '../../components/NavBar';
import ScanOrDirec from '../../components/register/ScanOrDirec';
import SmallLogo from '../../assets/SmallLogo.png';

const ScanOrDirectPage: React.FC = () => {
  const LogoStyle = {
    width: '30%',
    marginTop: '3%',
    marginLeft: '3%',
  };
  return (
    <BackLayout>
      <CenterLayout>
        <img src={SmallLogo} alt="" style={LogoStyle} />
        <ScanOrDirec></ScanOrDirec>
        <NavBar></NavBar>
      </CenterLayout>
    </BackLayout>
  );
};

export default ScanOrDirectPage;
