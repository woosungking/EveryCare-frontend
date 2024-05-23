import React from 'react';

const LoginForm: React.FC = () => {
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

  return (
    <fieldset style={fieldsetStyle}>
      <legend style={fontStyle}>아이디</legend>
      <label htmlFor="username"></label>
      <input type="text" id="username" style={inputStyle} />
      <legend style={fontStyle}>비밀번호</legend>
      <label htmlFor="password"></label>
      <input type="password" id="password" style={inputStyle} />
    </fieldset>
  );
};

export default LoginForm;
