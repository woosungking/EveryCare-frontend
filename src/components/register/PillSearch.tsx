import React, { useEffect, useRef, useState } from 'react';
import SearchIcon from '../../assets/SearchIc.png';
import PillNextText from './PillNextText';
import CustomHr from '../CustomHr';
import axios from 'axios';

const PillSearch: React.FC = () => {
  interface DrugData {
    drugName: string;
    drugCode: string;
    drugPcode: string;
    drugCompany: string;
    check: boolean;
  }

  const [searchedDrugData, setSearchedDrugData] = useState<DrugData[] | null>(
    null,
  );
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [countDrug, setCountDrug] = useState<number>(0); // countDrug 타입 추가
  const checkboxRefs = useRef<(HTMLInputElement | null)[]>([]); // checkboxRefs 수정
  const checkedBgRefs = useRef<(HTMLLIElement | null)[]>([]);
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchData = e.target.value;
    setSearchInputValue(searchData);
  };

  const handleCheckboxChange = (index: number) => {
    if (checkboxRefs.current[index]) {
      console.log(checkboxRefs.current[index]?.value);
      if (checkboxRefs.current[index]!.checked == true) {
        //체크박스가 선택이 안되어 있다면 -> 선택을 하고 배경색을 바꿀거임
        handleCheckboxBgChange(index);
        checkboxRefs.current[index]!.checked =
          !checkboxRefs.current[index]!.checked; // checked 토글 역할
      } else if (checkboxRefs.current[index]!.checked == false) {
        console.log('선택됌.');
        handleCheckboxBgChange2(index);
        checkboxRefs.current[index]!.checked =
          !checkboxRefs.current[index]!.checked; // checked 토글 역할
      }
    }
  };

  const handleCheckboxBgChange = (index: number) => {
    // 선택해제 모드
    console.log(checkedBgRefs.current[index]);
    checkedBgRefs.current[index]?.classList.remove('bg-blue-100');
  };
  const handleCheckboxBgChange2 = (index: number) => {
    // 선택 모드
    console.log(checkedBgRefs.current[index]);
    console.log(checkboxRefs.current[index]?.style.backgroundColor);
    checkedBgRefs.current[index]?.classList.add('bg-blue-100');
  };

  useEffect(() => {
    if (searchedDrugData) {
      setCountDrug(searchedDrugData.length); // 검색된 약데이터의 길이로 count 설정
    } else {
      setCountDrug(0);
    }
  }, [searchedDrugData]);

  const searchDrug = () => {
    if (searchInputValue.trim() === '') {
      alert('검색어를 입력해 주세요!');
      return;
    }
    axios
      .get(`http://127.0.0.1:8000/test/?query=${searchInputValue}`)
      .then((response) => {
        setSearchedDrugData(response.data);
      })
      .catch((error) =>
        console.error('서버로 데이터를 보내는데 실패했습니다:', error),
      );
  };

  return (
    <div className="flex flex-col overflow-y-scroll h-[83vh] mb-20">
      <div className="relative flex justify-center mt-4">
        <input
          type="text"
          placeholder="약 이름으로 입력해주세요."
          onChange={handleSearchInputChange}
          className="w-[97%] h-[4vh] border-2 rounded-2xl px-2"
        />
        <button className="absolute right-5" onClick={searchDrug}>
          <img src={SearchIcon} alt="검색" className="w-[90%] h-[3vh] mt-1" />
        </button>
      </div>

      <div className="mt-6 mb-5 ml-5">
        <span>검색 결과</span>
        <span className="text-red-600">{countDrug}</span>
      </div>

      <ul>
        {searchedDrugData &&
          searchedDrugData.map((medicine, index) => (
            <li
              key={index}
              onClick={() => handleCheckboxChange(index)}
              ref={(element) => (checkedBgRefs.current[index] = element)}
            >
              <PillNextText headText={medicine.drugName} />
              <CustomHr />
              <input
                type="checkbox"
                className="hidden"
                value={medicine.drugName} // 서버로 보내줄때 약 이름을 주기로 해서 이름을 저장했음.
                ref={(element) => (checkboxRefs.current[index] = element)}
                // element는 React 컴포넌트 내에서 해당 DOM 요소에 대한 참조를 나타내는 매개변수입니다. 이 매개변수는 일반적으로 DOM 요소 자체를 나타내며,
                // ref={checkboxRefs}
                // ref={checkboxRefs.current[index]}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PillSearch;
