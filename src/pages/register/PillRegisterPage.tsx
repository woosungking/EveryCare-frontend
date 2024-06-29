import React from 'react';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import NavBar from '../../components/NavBar';
import BackBtn from '../../components/register/button/BackBtn';
import SmallLogo from '../../assets/SmallLogo.png';
import PillRegister from '../../components/register/PillRegister';

const PillRegisterPage: React.FC = () => {
  const LogoStyle = {
    width: '30%',
    marginTop: '3%',
    marginLeft: '3%',
  };
  return (
    <BackLayout>
      <CenterLayout>
        <img src={SmallLogo} alt="Small Logo" className="w-1/3 mt-3 ml-3" />
        <BackBtn text="약 입력" />
        <PillRegister />
        <NavBar />
      </CenterLayout>
    </BackLayout>
  );
};

export default PillRegisterPage;
