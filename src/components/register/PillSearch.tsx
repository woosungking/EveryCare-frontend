import React from 'react';
import SearchIcon from '../../assets/SearchIc.png';
import PillNextText from './PillNextText';
import CustomHr from '../CustomHr';

const PillSearch: React.FC = () => {
  return (
    <div className="flex flex-col h-[70vh] mb-20">
      <form className="relative flex justify-center mt-4">
        <input
          type="text"
          placeholder="약 이름으로 입력해주세요."
          className="w-[97%] h-[4vh] border-2 rounded-2xl px-2"
        />
        <button className="absolute right-5">
          <img src={SearchIcon} alt="검색" className="w-[90%] h-[3vh] mt-1" />
        </button>
      </form>

      <div className="mt-6 mb-5 ml-5">
        <span>검색 결과</span>
        <span className="text-red-600"> 2</span>
      </div>
      <ul>
        <li>
          <PillNextText
            headText="타이레놀8시간이알서방정"
            contentText="진동 해열제 입니다."
          ></PillNextText>
          <CustomHr></CustomHr>
        </li>

        <li>
          <PillNextText headText="타이레놀정160밀리그람"></PillNextText>
          <CustomHr></CustomHr>
        </li>
        <li>
          <PillNextText headText="타이레놀정160밀리그람"></PillNextText>
          <CustomHr></CustomHr>
        </li>
      </ul>
    </div>
  );
};

export default PillSearch;
