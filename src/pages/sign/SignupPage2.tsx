import React from 'react';
import BackLayout from '../../components/BackLayout'; // 백 레이아웃
import CenterLayout from '../../components/CenterLayout'; // 센터레이아웃
import SignupForm2 from '../../components/signup/SignupForm2'; // 회원가입 폼
import MainLog from '../../assets/BigMainLogo.png'; // 메인로고
import Signup2 from '../../assets/signup/Signup2.svg';
import Signup22 from '../../assets/signup/Signup22.svg';

const SiginupPage2: React.FC = () => {
  return (
    <BackLayout>
      <div className="flex flex-col items-center ml-auto w-[403px] h-[403px]">
        <img src={Signup2} className="w-[23vw]" />
        <img src={Signup22} className="w-[33vw]" />
      </div>
      <CenterLayout margin="m-auto">
        <img
          src={MainLog}
          alt="MainLogo"
          style={{
            width: '17rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '40%',
            marginBottom: '10%',
          }}
        />
        <SignupForm2></SignupForm2>
      </CenterLayout>
    </BackLayout>
  );
};

export default SiginupPage2;
