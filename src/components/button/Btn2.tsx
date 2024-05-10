import React from 'react';

const btnStyle = {
  borderRadius: '25px',
  backgroundColor: '#E4EFFB',
  minWidth: '90%',
  minHeight: '7%',
  display: 'block',
  margin: 'auto',
  marginTop: '15px',
};

const Btn2: React.FC<{ style?: React.CSSProperties }> = ({
  children,
  style,
}) => {
  const mergedStyle = { ...btnStyle, ...style }; // 버튼 스타일과 전달된 스타일을 병합합니다.

  return (
    <button type="submit" style={mergedStyle}>
      {children}
    </button>
  );
};

export default Btn2;
