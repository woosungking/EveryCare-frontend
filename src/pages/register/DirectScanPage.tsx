import React from 'react';
import DirectScan from '../../components/register/DirectScan';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import SmallLogo from '../../components/SmallLogo';
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
          <SmallLogo></SmallLogo>
          <DirectScan></DirectScan>
          <NavBar></NavBar>
        </CenterLayout>
    </BackLayout>
  );
};

export default DirectScanPage;
