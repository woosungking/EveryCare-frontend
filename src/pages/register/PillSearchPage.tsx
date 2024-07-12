import React from 'react';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import NavBar from '../../components/NavBar';
import SmallLogo from '../../assets/SmallLogo.png';
import BackBtn from '../../components/register/button/BackBtn';
import PillSearch from '../../components/register/PillSearch';

const PillSearchPage: React.FC = () => {
  const LogoStyle = {
    width: '30%',
    marginTop: '3%',
    marginLeft: '3%',
  };
  return (
    <BackLayout>
      <CenterLayout margin="m-auto">
        <img src={SmallLogo} alt="" style={LogoStyle} />
        <BackBtn text="약 입력"></BackBtn>
        <PillSearch></PillSearch>
        <NavBar></NavBar>
      </CenterLayout>
    </BackLayout>
  );
};

export default PillSearchPage;
