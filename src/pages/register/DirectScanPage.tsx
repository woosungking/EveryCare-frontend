import React from 'react';
import DirectScan from '../../components/register/DirectScan';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import SmallLogo from '../../assets/SmallLogo.png';
import NavBar from '../../components/NavBar';

const DirectScanPage: React.FC = () => {
  const LogoStyle = {
    width: '30%',
    marginTop: '3%',
    marginLeft: '3%',
  };
  return (
    <BackLayout>
      <CenterLayout>
        <img src={SmallLogo} alt="Small Logo" className="w-1/3 mt-3 ml-3" />
        <DirectScan></DirectScan>
        <NavBar></NavBar>
      </CenterLayout>
    </BackLayout>
  );
};

export default DirectScanPage;
