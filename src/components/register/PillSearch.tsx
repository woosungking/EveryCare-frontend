import React from 'react';
import SearchIcon from '../../assets/SearchIc.png';
import PillNextText from './PillNextText';
import CustomHr from '../CustomHr';

const PillSearch: React.FC = () => {
  const inputStyle = {
    border: '1px solid #02A2F8',
    width: '26.4375rem',
    height: '2.1875rem',
    borderRadius: '1.375rem',
    fontSize: '1rem',
    textAlign: 'center',
    marginLeft: '1rem',
    backgroundColor: '#FFFAFA',
  };
  return (
    <div className='mb-20'>
      <form action="" className="relative mt-4">
        <input style={inputStyle} type="text" placeholder="약 이름으로 검색" />
        <button className="absolute right-8 bottom-2">
          <img
            src={SearchIcon}
            alt="검색"
            style={{ width: '20px', height: '20px' }}
          />
        </button>
      </form>
      <div className="mt-3 ml-5">
        <span>검색 결과</span>
        <span className="text-red-600"> 2</span>
      </div>
      <ul>
        <li>
          <PillNextText headText="타이레놀8시간이알서방정" contentText="진동 해열제 입니다."></PillNextText>
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
