import React from 'react';
import PillImg from '../../assets/register/PillImg.png';
// 빨간알약사진 옆 "처방약품, 복용기간, 질환이름" 텍스트가 써있는 블록에 대한 컴포넌트
//prescriptionText를 이용해서 다른 컴포넌트가 P태그("처방약품, 복용기간, 질환이름")안에 텍스트를 입력해서 유동적으로 쓰기위함임..

const PillNextText: React.FC<{ headText: string; contentText: string }> = ({
  headText,
  contentText,
}) => {
  return (
    <div className="flex items-center mt-16 ml-5 w-[26vw] font-extrabold">
      <img src={PillImg} className="w-[60px] h-[60px]" />
      <div className="flex flex-col ml-3 mt-1">
        <p className="h-[30px] w-[160px] text-lg">{headText}</p>
        <p className="h-[30px] w-[160px] text-gray-500 font-abel text-sm font-normal">
          {contentText}
        </p>
      </div>
    </div>
  );
};

export default PillNextText;
