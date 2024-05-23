import React from 'react';

const SignupForm: React.FC = () => {
  const fieldsetStyle = { // input을 감싸는 fieldset에 대한 스타일
    width: '100%',
    height: '25%',
    marginLeft: '5%',

  };

  const inputStyle = { // 입력칸에 대한 스타일
    minWidth: '90%',
    minHeight: '30%',
    borderRadius: '15px',
    border: '1px solid #A7D1FF',
    margin: '10px',
  };
  const fontStyle = { // legend태그의 폰트사이즈에 대한 스타일
    fontSize: '0.5rem',
  };
  return (
    <fieldset style={fieldsetStyle}>
      <legend style={fontStyle}>아이디</legend>
      <label htmlFor="username"></label>
      <input type="text" id="username" style={inputStyle} />
      <legend style={fontStyle}>비밀번호</legend>
      <label htmlFor="password"></label>
      <input type="password" id="password" style={inputStyle} />
      <legend style={fontStyle}>비밀번호 재입력</legend>
      <label htmlFor="repassword"></label>
      <input type="text" id="repassword" style={inputStyle} />
    </fieldset>
  );
};

export default SignupForm;
