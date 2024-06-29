import React from 'react';
import CustomHr from '../CustomHr';
import RegisterIcon from '../../assets/register/Register3.png';
import QR from '../../assets/register/QRImg.png';
import BackBtn from './button/BackBtn';

const DirectScan: React.FC = () => {
  const ExContainnerStyle = {
    minHeight: '83vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    textAlign: 'center', // 부모 div의 텍스트 가로 정렬을 중앙 정렬로 설정
    // backgroundColor: 'green',
  }; // 큐알코드 및 업로드 컨테이너, 2개를 감싸는 메인 컨테이너.
  const FirstInContainnerStyle = {
    width: '90%',
    height: '23vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    border: '1px dashed black',
    borderRadius: '10px',
    fontSize: '0.9rem',
    marginTop: '0',
    marginBottom: '2vh',
    // backgroundColor: 'blue',
  }; // 큐알코드 혹은 업로드 컨테이너

  const SecondInContainnerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '32vh',
    fontSize: '0.9rem',
    flexDirection: 'column',
    // backgroundColor: 'blue',
  }; // 큐알코드 혹은 업로드 컨테이너
  // 큐알코드 혹은 업로드 컨테이너 내부에 이미지 및 내용이 들어 갈 컨테이너.
  const FirstImgStyle = {
    width: '10vh',
    height: '10vh',
    display: 'inline-block',
  };
  //첫번째 이미지 드레그 및 파일선택 이미지

  const SecondImgStyle = {
    width: '50vh',
    height: '30vh',
  };

  return (
    <>
      <BackBtn text="약봉투 등록하기"></BackBtn>
      <div style={ExContainnerStyle}>
        {/* //최상단 < 약봉투 등록하기 */}
        <div style={FirstInContainnerStyle}>
          <img src={RegisterIcon} style={FirstImgStyle} />
          <p>이곳에 이미지를 드래그하거나 파일을 업로드 하세요</p>
        </div>

        <CustomHr></CustomHr>
        <div style={SecondInContainnerStyle}>
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
    </>
  );
};

export default DirectScan;
