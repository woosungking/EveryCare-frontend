import React from 'react';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import NavBar from '../../components/NavBar';
import SmallLogo from '../../components/SmallLogo';
import BackBtn from '../../components/register/button/BackBtn';
import PillSearch from '../../components/register/PillSearch';

const PillSearchPage: React.FC = () => {
  return (
    <BackLayout>
      <div className="relative">
        <CenterLayout>
          <SmallLogo></SmallLogo>
          <BackBtn text="약 입력"></BackBtn>
          <PillSearch></PillSearch>
        </CenterLayout>
        <NavBar></NavBar>
      </div>
    </BackLayout>
  );
};

export default PillSearchPage;
