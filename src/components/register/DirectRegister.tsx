import React from 'react';
import InputBtn from '../button/Btn1';

const DirectRegister: React.FC = ({headText, contentText, btnText}) => {
  const ExContainnerStyle = {
    margin: 'auto',
    width: '80%',
    height: '20%',
    
  };

  const headStyle = {
    fontSize: '2.1875rem',
    fontWeight: 'bold',
  };
  const contentStyle = {
    fontSize: '1rem',
    marginTop: '10px',
    color: '#9E9797',
  };
  const btnStyle = {
    width: '50%',
    height: '3rem',
    border: '2px solid rgba(59, 171, 231, 0.51)',
    backgroundColor: 'white',
    color: '#0093FE',
    fontSize: '1.25rem',
  };

  return (
    <div style={ExContainnerStyle}>
      <p style={headStyle}>{headText}</p>
      <p style={contentStyle}>{contentText}</p>
      <InputBtn style={btnStyle}>{btnText}</InputBtn>
    </div>
  );
};

export default DirectRegister;
