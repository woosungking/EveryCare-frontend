import React from 'react';
import CustomHr from '../CustomHr';
import RegisterIcon from '../../assets/register/Register3.png';
import QR from '../../assets/register/QRImg.png';
import BackBtn from './button/BackBtn';

const DirectScan: React.FC = () => {
  const ExContainnerStyle = {
    width: '100%',
    height: '30rem',
    marginTop: '3%',
    marginBottom:"50%"
    // backgroundColor: 'green',
  }; // 큐알코드 및 업로드 컨테이너, 2개를 감싸는 메인 컨테이너.
  const InContainnerStyle = {
    width: '100%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // \backgroundColor: 'blue',
  }; // 큐알코드 혹은 업로드 컨테이너

  const ImgContainnerStyle = {
    backgroundColor: '#F5F5F5',
    border: '1px dashed black',
    borderRadius: '10px',
    width: '70%',
    height: '65%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 'auto',
  };
  // 큐알코드 혹은 업로드 컨테이너 내부에 이미지 및 내용이 들어 갈 컨테이너.
  const FirstImgStyle = {
    width: '30%',
    height: '50%',
    display: 'inline-block',
  };
  //첫번째 이미지 드레그 및 파일선택 이미지

  const SecondImgStyle = {
    width: '60%',
    height: '90%',
  };

  return (
    <div style={ExContainnerStyle}>
      <BackBtn text="약봉투 등록하기"></BackBtn>
      {/* //최상단 < 약봉투 등록하기 */}
      <div style={InContainnerStyle}>
        <div style={ImgContainnerStyle}>
          <img src={RegisterIcon} style={FirstImgStyle} />
          <div
            style={{
              height: '90%',
              width: '60%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '0.9rem',
              //글씨 가운데 정렬(p태그내부)를 위한 스타일
            }}
          >
            <p>이곳에 이미지를 드래그하거나 파일을 업로드 하세요</p>
          </div>
        </div>
      </div>

      <CustomHr></CustomHr>
      <div style={{ ...InContainnerStyle, flexDirection: 'column' }}>
        <img src={QR} style={SecondImgStyle} />
        <div
          style={{
            width: '80%',
            textAlign: 'center',
            backgroundColor: '#D9D9D9',
            borderRadius: '20px',
            fontSize: '0.9rem',
            padding: '0.2rem',
            //맨 하단 코멘트 스타일 및 코멘트 박스 스타일
          }}
        >
          휴대폰으로 qr코드를 인식한 후 약 봉투를 스캔해주세요
        </div>
      </div>
    </div>
  );
};

export default DirectScan;
