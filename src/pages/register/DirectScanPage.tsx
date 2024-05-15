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
      <div className="relative">
        <CenterLayout>
          <SmallLogo></SmallLogo>
          <DirectScan></DirectScan>
        </CenterLayout>
        <NavBar></NavBar>
      </div>
    </BackLayout>
  );
};

export default DirectScanPage;
