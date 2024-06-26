import React from 'react';

interface BtnProps {
  onClick?: () => void; // onClick prop으로 변경\
  className? : string;
}

const btnStyle = {
  borderRadius: '25px',
  width: '90%',
  minHeight: '7%',
  display: 'block',
  margin: 'auto',
  marginTop: '15px',
};

const OkBtn: React.FC<BtnProps> = ({
  children,
  style,
  onClick, // onClick prop으로 변경
  className,
}) => {
  const mergedStyle = {...btnStyle };

  const handleClick = () => {
    if (onClick) {
      onClick(); // 클릭 시 onClick 함수를 호출
    }
  };

  return (
    <button
      type="button"
      style={mergedStyle}
      className={`${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default OkBtn;