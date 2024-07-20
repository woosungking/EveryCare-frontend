import React from 'react';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import NavBar from '../../components/NavBar';
import PillInfoSearch from '../../components/pillinfosearch/PillInfoSearch';
import SmallLogo from '../../assets/SmallLogo.png';

const PillInfoSearchPage: React.FC = () => {

  return (
    <BackLayout>
      <CenterLayout margin="m-auto">
        <img src={SmallLogo} alt="Small Logo" className="w-1/3 mt-3 ml-3" />
        <PillInfoSearch></PillInfoSearch>
        <NavBar></NavBar>
      </CenterLayout>
    </BackLayout>
  );
};

export default PillInfoSearchPage;
