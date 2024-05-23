import React from 'react';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import SignupBtn from '../../components/button/Btn2';
import SignupForm from '../../components/signup/SignupForm';
import MainLog from '../../assets/BigMainLogo.png';

const LoginPageStyle = {
  left: '15%',
};
//로그인, 회원가입시에는 메인컨텐츠 화면이 왼쪽에 있으므로 페이지 파일에서 left값을 따로 주었음.

const SignupBtnStyle = {
  marginLeft: '5%',
  marginTop: '6rem',

};

const SignupPage: React.FC = () => {
  return (
    <BackLayout>
      <CenterLayout style={LoginPageStyle}>
      <img
          src={MainLog}
          alt="MainLogo"
          style={{ width: '17rem', marginLeft: 'auto', marginRight: 'auto' }}
        />
        {/* 로고를 동적으로 받아온 후 부모요소의 가운대로 오도록 정렬 */}
        <form action="" style={{ height: '30rem' }}>
          <SignupForm></SignupForm>
          <SignupBtn style={SignupBtnStyle}>회원가입</SignupBtn>
        </form>
      </CenterLayout>
    </BackLayout>
  );
};

export default SignupPage;
