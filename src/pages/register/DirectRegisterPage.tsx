import React from 'react';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import NavBar from '../../components/NavBar';
import DirectRegister from '../../components/register/DirectRegister';
import SmallLogo from '../../components/SmallLogo';
import BackBtn from '../../components/register/button/BackBtn';
import CustomHr from '../../components/CustomHr';

const DirectRegisterPage: React.FC = () => {
  const innerContainnerStyle = {
    width: '100%',
    height: '100%',
    minHeight: '30rem',
    marginTop: '10%',
  };
  return (
    <BackLayout>
      <div className="relative">
        <CenterLayout>
          <SmallLogo></SmallLogo>
          <BackBtn text="직접입력하기"></BackBtn>
          <div style={innerContainnerStyle}>
            <DirectRegister headText="질병" contentText="어떤 질병으로 약을 복용 하시나요?" btnText="질병입력"></DirectRegister>
            <CustomHr></CustomHr>
            <DirectRegister headText="병원" contentText="처방 받으신 병원을 입력해 주세요" btnText="병원입력"></DirectRegister>
            <CustomHr></CustomHr>
            <DirectRegister headText="약" contentText="복용하실 약을 입력해 주세요" btnText="약입력"></DirectRegister>
          </div>
        </CenterLayout>
        <NavBar></NavBar>
      </div>
    </BackLayout>
  );
};

export default DirectRegisterPage;
