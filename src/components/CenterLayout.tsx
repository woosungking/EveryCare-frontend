import React from 'react';
import MainLog from '../assets/BigMainLogo.png';

const CenterLayout: React.FC<{ style?: React.CSSProperties }> = ({
  children,
  style,
}) => {
  const CenterLayoutStyle = {
    boxShadow: '0 0 1px gray',
    width: '453px',
    minHeight: '100vh',
    
  };
  const mergedStyle = { ...style, ...CenterLayoutStyle };
  return (
    <div className="h-screen bg-white" style={mergedStyle}>
      {/* <img
        src={MainLog}
        alt="MainLogo"
        style={{ width: '17rem', marginLeft: 'auto', marginRight: 'auto' }}
      />
      로고를 동적으로 받아온 후 부모요소의 가운대로 오도록 정렬 */}

      {children}
    </div>
  );
};

export default CenterLayout;
