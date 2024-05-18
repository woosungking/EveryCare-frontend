import React from 'react';
import PillImg from '../../assets/register/PillImg.png';
// 빨간알약사진 옆 "처방약품, 복용기간, 질환이름" 텍스트가 써있는 블록에 대한 컴포넌트
//prescriptionText를 이용해서 다른 컴포넌트가 P태그("처방약품, 복용기간, 질환이름")안에 텍스트를 입력해서 유동적으로 쓰기위함임..

const PillNextText: React.FC = ({ headText, contentText }) => {
  return (
    <div
      style={{
        // backgroundColor: 'blue',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        marginTop: '0.8rem',
        fontWeight: '800',
      }}
    >
      <img
        src={PillImg}
        style={{ width: '8%', height: '25%', display: 'inline' }}
      />
      <div
        style={{
          fontSize: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <p className="block">{headText}</p>
        <p className="text-gray-500 font-abel text-sm font-normal">{contentText}</p>
      </div>
    </div>
  );
};

export default PillNextText;
