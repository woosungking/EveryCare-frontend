import React from 'react';
import UpImg from '../../assets/register/Register.png';
import LowImg from '../../assets/register/Register2.png';
import CustomHr from '../CustomHr';
const ScanOrDirec: React.FC = () => {
  const ContainnerStyle = {
    width: '100%',
    minHeight: '100vh',
    // height: '40rem',
    // backgroundColor: 'blue', 범위확인용
    marginTop: '3%',
    marginBottom: '20%',
  };
  const ImgContainnerStyle = {
    height: '40%',
    width: '65%',
    margin: 'auto',
    margginTop: '100px',
    // border: '1px solid black',
    borderRadius: '15px',
    boxShadow: '0 0 4px rgba(128, 128, 128, 0.5)',
  };
  const imgStyle = {
    width: '95%',
    height: '90%',
  };

  return (
    <div style={ContainnerStyle}>
      <div style={{ ...ImgContainnerStyle, backgroundColor: '#FFFFED' }}>
        <img src={UpImg} style={imgStyle} />
        <div
          style={{
            textAlign: 'center',
            fontSize: '1.5rem',
          }}
        >
          약봉투 등록하기
        </div>
      </div>
      <CustomHr></CustomHr>
      {/* // 사진 경계선 밑줄 */}
      <div style={{ ...ImgContainnerStyle, backgroundColor: '#E6FBFF' }}>
        <img src={LowImg} style={imgStyle} />
        <div
          style={{
            textAlign: 'center',
            fontSize: '1.5rem',
          }}
        >
          직접입력하기
        </div>
      </div>
    </div>
  );
};

export default ScanOrDirec;
