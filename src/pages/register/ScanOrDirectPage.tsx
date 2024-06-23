import React from 'react';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import NavBar from '../../components/NavBar';

import ScanOrDirec from '../../components/register/ScanOrDirec';
import SmallLogo from '../../components/SmallLogo';

const ScanOrDirectPage: React.FC = () => {
  return (
    <BackLayout>
        <CenterLayout>
          <SmallLogo></SmallLogo>
          <ScanOrDirec></ScanOrDirec>
          <NavBar></NavBar>
        </CenterLayout>
    </BackLayout>
  );
};

export default ScanOrDirectPage;
