import React from 'react';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import NavBar from '../../components/NavBar';
import BackBtn from '../../components/register/button/BackBtn';
import SmallLogo from '../../components/SmallLogo';
import PillNextText from '../../components/register/PillNextText';
import Btn from '../../components/button/Btn2';

const PillRegister: React.FC = () => {
  const btnStyle = {
    height: '30%',
    width: '35%',
    border: '2px solid rgba(59, 171, 231, 0.51)',
    color: '#0093FE',
    backgroundColor: 'white',
    fontSize: '0.9rem',
    fontWeight: '800',
    marginLeft: '3rem',
  };
  const btnStyle2 = {
    height: '30%',
    width: '35%',
    border: '2px solid rgba(59, 171, 231, 0.51)',
    color: 'white',
    backgroundColor: '#8FE0F9',
    fontSize: '0.9rem',
    fontWeight: '800',
    marginRight: '3rem',
  };
  const btnStyle3 = {
    height: '25%',
    width: '35%',
    border: '2px solid #A6A3A3',
    color: '#A6A3A3',
    backgroundColor: 'white',
    fontSize: '0.9rem',
    fontWeight: '800',
    position: 'absolute',
    bottom: '12%',
    left: '55%',
  };

  return (
    <BackLayout>
      <div className="relative">
        <CenterLayout>
          <SmallLogo></SmallLogo>
          <BackBtn text="약 입력"></BackBtn>
          <div style={{ width: '100%', height: '10rem' }}>
            <PillNextText
              headText="복약주기"
              contentText="얼마나 자주 복용하시나요"
            ></PillNextText>
            <form
              style={{
                width: '100%',
                height: '70%',
                display: 'flex',
                position: 'relative',
              }}
            >
              <Btn style={btnStyle}>매일</Btn>
              <Btn style={btnStyle2}>특수 일수 간격</Btn>
              <Btn style={btnStyle3}>간격 일수</Btn>
              <p className="absolute bottom-5 right-1/2 text-gray-400">
                며칠마다 복약 하시나요?
              </p>
            </form>
          </div>
          <div style={{ width: '100%', height: '10rem' }}>
            <PillNextText
              headText="시작일"
              contentText="언제 복약을 시작하나요?"
            ></PillNextText>
            <form
              style={{
                width: '100%',
                height: '70%',
                display: 'flex',
                position: 'relative',
              }}
            >
              <Btn style={btnStyle}>오늘</Btn>
              <Btn style={btnStyle2}>날짜 선택</Btn>
              <p
                className="absolute"
                style={{ left: '10%', bottom: '15%', fontSize: '0.8rem' }}
              >
                시작일
              </p>
              <p
                className="absolute"
                style={{ left: '20%', bottom: '10%', fontSize: '1.25rem' }}
              >
                2024년 10월 8일
              </p>
            </form>
          </div>

          <div style={{ width: '100%', height: '10rem' }}>
            <PillNextText
              headText="종료일"
              contentText="언제 복약을 종료하나요?"
            ></PillNextText>
            <form
              style={{
                width: '100%',
                height: '70%',
                display: 'flex',
                position: 'relative',
              }}
            >
              <Btn style={btnStyle}>종료일 없음</Btn>
              <Btn style={btnStyle2}>날짜 선택</Btn>
              <p
                className="absolute"
                style={{ left: '10%', bottom: '15%', fontSize: '0.8rem' }}
              >
                시작일
              </p>
              <p
                className="absolute"
                style={{ left: '20%', bottom: '10%', fontSize: '1.25rem' }}
              >
                2024년 10월 8일
              </p>
            </form>
          </div>

          
        </CenterLayout>
        <NavBar></NavBar>
      </div>
    </BackLayout>
  );
};

export default PillRegister;
