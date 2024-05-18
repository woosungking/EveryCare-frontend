import React from 'react';

const btnStyle = {
  borderRadius: '25px',
  backgroundColor: '#E4EFFB',
  minWidth: '90%',
  minHeight: '7%',
  display: 'block',
  margin: 'auto',
  marginTop: '30px',
};

const Btn1: React.FC<{ style?: React.CSSProperties }> = ({
  children,
  style,
}) => {
  const mergedStyle = { ...btnStyle, ...style }; //...은 전개 연산자(Spread Operator)입니다. 전개 연산자는 객체나 배열의 내용을 펼쳐서 새로운 객체나 배열에 넣을 때 사용됩니다.

  return (
    <button type="submit" style={mergedStyle}>
      {children}
    </button>
  );
};

export default Btn1;
