import React, { useState } from 'react';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import LoginForm from '../../components/login/LoginForm';
import LoginBtn from '../../components/button/Btn1';
import SignUpBtn from '../../components/button/Btn2';
import MainLog from '../../assets/BigMainLogo.png';
import Bg1 from '../../assets/login/Bg1.svg';
import Bg12 from '../../assets/login/Bg12.svg';

const LoginPageStyle = {};
//로그인, 회원가입시에는 메인컨텐츠 화면이 왼쪽에 있으므로 페이지 파일에서 left값을 따로 주었음.

const LoginPage: React.FC = () => {
  return (
    <BackLayout>
      <div className="flex flex-col items-center mb-3 ml-auto">
        <img src={Bg1} alt="Bg1" className="w-[20vw] mb-3 " />
        <img src={Bg12} className="w-[28vw]" />
      </div>

      <CenterLayout style={LoginPageStyle}>
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
        <LoginForm></LoginForm>
      </CenterLayout>
    </BackLayout>
  );
};

export default LoginPage;
