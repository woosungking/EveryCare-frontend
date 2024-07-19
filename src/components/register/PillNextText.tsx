import React from 'react';
import PillImg from '../../assets/register/PillImg.png';
// 빨간알약사진 옆 "처방약품, 복용기간, 질환이름" 텍스트가 써있는 블록에 대한 컴포넌트
//prescriptionText를 이용해서 다른 컴포넌트가 P태그("처방약품, 복용기간, 질환이름")안에 텍스트를 입력해서 유동적으로 쓰기위함임..

const PillNextText: React.FC<{ headText: string; contentText: string }> = ({
  headText,
  contentText,
  exStyle,
  imgStyle,
  inStyle,
}) => {
  return (
    <div className={`${exStyle} flex font-extrabold`}>
      <img src={PillImg} className={`${imgStyle} w-[42px] h-[42px]`} />
      <div className={`${inStyle} flex flex-col ml-3 text-left`}>
        <p className="h-[20px] w-[100%] text-[20px] text-xl item-center mb-2">
          {headText}
        </p>
        <p className="h-[10px] w-[100%] text-gray-500 font-abel text-base font-normal">
          {contentText}
        </p>
      </div>
    </div>
  );
};

export default PillNextText;
