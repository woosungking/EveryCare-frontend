import React from 'react';
import UpImg from '../../assets/register/Register.png';
import LowImg from '../../assets/register/Register2.png';
import CustomHr from '../CustomHr';
import { useNavigate } from 'react-router-dom';

const ScanOrDirec: React.FC = () => {
  const ContainnerStyle = {
    height: '82vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    textAlign: 'center', // 부모 div의 텍스트 가로 정렬을 중앙 정렬로 설정
  };

  const ImgContainnerStyle = {
    height: '32vh',
    width: '80%',
    margin: '20px 0',
    borderRadius: '15px',
    boxShadow: '0 0 4px rgba(128, 128, 128, 0.5)',
    maxWidth: '90vw',
    maxHeight: '40vh',
    fontSize: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  };

  const imgStyle = {
    width: '100%',
    height: '90%',
  };

  const nevigate = useNavigate();
  const handleRedirect = (path: string) => {
    console.log('sdsd');
    nevigate(path);
  };

  return (
    <div style={ContainnerStyle}>
      <div
        style={{ ...ImgContainnerStyle, backgroundColor: '#FFFFED' }}
        onClick={() => handleRedirect('/direct-scan')}
      >
        <img src={UpImg} style={imgStyle} alt="약봉투 등록하기" />
        <p>약봉투 등록하기</p>
      </div>
      <CustomHr />
      <div
        style={{ ...ImgContainnerStyle, backgroundColor: '#E6FBFF' }}
        onClick={() => handleRedirect('/direct-register')}
      >
        <img src={LowImg} style={imgStyle} alt="직접입력하기" />
        <p>직접입력하기</p>
      </div>
    </div>
  );
};

export default ScanOrDirec;
