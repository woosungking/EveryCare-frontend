import React from 'react';
import BackLayout from '../../components/BackLayout'; // 백 레이아웃
import CenterLayout from '../../components/CenterLayout'; // 센터레이아웃
import SignupForm2 from '../../components/signup/SignupForm2'; // 회원가입 폼
import MainLog from '../../assets/BigMainLogo.png'; // 메인로고
import JoinBtn from '../../components/button/Btn1'; //join버튼

const LoginPageStyle = {
  left: '15%',
};
//로그인, 회원가입시에는 메인컨텐츠 화면이 왼쪽에 있으므로 페이지 파일에서 left값을 따로 주었음.

const SiginupPage2: React.FC = () => {
  const JoinBtnStyle = {
    marginLeft: '5%',
    marginTop: '6rem',
  };
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
          <SignupForm2></SignupForm2>
          <JoinBtn style={JoinBtnStyle}>시작</JoinBtn>
        </form>
      </CenterLayout>
    </BackLayout>
  );
};

export default SiginupPage2;
