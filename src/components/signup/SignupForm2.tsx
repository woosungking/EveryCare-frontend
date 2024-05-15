import React from 'react';

const SignupForm2: React.FC = () => {
  const fieldsetStyle = {
    // 입력 태그들을 감싸는 fieldset태그에 대한 스타일
    width: '100%',
    height: '25%',
    marginLeft: '5%',
  };

  const inputStyle = {
    // 입력 태그들에 대한 스타일
    width: '90%',
    height: '30%',
    borderRadius: '15px',
    border: '1px solid #A7D1FF',
    margin: '10px',
  };
  const fontStyle = {
    // 폰트사이즈 조정
    fontSize: '0.8rem',
  };

  // const checkboxStyle = {
  //   appearance: 'none',
  //   WebkitAppearance: 'none',
  //   MozAppearance: 'none',
  //   border: '2px solid #555',
  //   borderRadius: '5px',
  //   // outline: 'none',
  //   // cursor: 'pointer',
  //   backgroundImage: "url('./BigMainLogo.png')", // 배경 이미지 URL을 지정합니다.
  //   backgroundSize: 'cover',
  //   minWidth: '20px',
  //   minHeight: '20px',
  // };

  return (
    <fieldset style={fieldsetStyle}>
      <legend style={fontStyle}>아이디</legend>
      <label htmlFor="username"></label>
      <input type="text" id="username" style={inputStyle} />

      <legend style={fontStyle}>성별</legend>
      <label htmlFor="username"></label>
      <input type="text" id="username" style={inputStyle} />

      <legend style={fontStyle}>비밀번호 재입력</legend>
      <label htmlFor="repassword"></label>
      <input type="text" id="repassword" style={inputStyle} />
    </fieldset>
  );
};

export default SignupForm2;
