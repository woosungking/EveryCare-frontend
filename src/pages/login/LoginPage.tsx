import React, { useState } from 'react';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import LoginForm from '../../components/login/LoginForm';
import LoginBtn from '../../components/button/Btn1';
import SignUpBtn from '../../components/button/Btn2';
import MainLog from '../../assets/BigMainLogo.png';

const LoginPageStyle = {
  left: '15%',
};
//로그인, 회원가입시에는 메인컨텐츠 화면이 왼쪽에 있으므로 페이지 파일에서 left값을 따로 주었음.

const SignupPage: React.FC = () => {
  const [isvisuable, setIsvisuable] = useState(true);
  const Visuable = () => {
    console.log('asd');
    setIsvisuable(false);
  };
  return (
    <BackLayout>
      <CenterLayout style={LoginPageStyle}>
        <img
          src={MainLog}
          alt="MainLogo"
          style={{
            width: '17rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '20%',
          }}
        />
        {/* 로고를 동적으로 받아온 후 부모요소의 가운대로 오도록 정렬 */}

        <form style={{ height: '30rem' }}>
          <LoginForm></LoginForm>
          <LoginBtn>로그인</LoginBtn>
          <SignUpBtn>회원가입</SignUpBtn>
        </form>
        
        <LoginBtn onClick={Visuable}>asd</LoginBtn>
        {isvisuable && (
          <div style={{ width: '100%', height: '50%' }}>asdasd</div>
        )}
      </CenterLayout>
    </BackLayout>
  );
};

export default SignupPage;
