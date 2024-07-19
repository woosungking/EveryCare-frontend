import React, { useContext, useEffect, useRef, useState } from 'react';
import SearchIcon from '../../assets/SearchIc.png';
import PillNextText from './PillNextText';
import axios from 'axios';
import SaveBtn from './button/SaveBtn';
import { RegisterContext } from './context/RegisterContext';
import { useNavigate } from 'react-router';
import { parseJSON } from 'date-fns';

const PillSearch: React.FC = () => {
  const nevigate = useNavigate();
  const handleRedirect = (path) => {
    console.log('pill-search page redirect...');
    nevigate(path);
  };
  interface DrugData {
    drugName: string;
    drugCode: string;
    drugPcode: string;
    drugCompany: string;
    check: boolean;
  }

  const { savedDrug, setSavedDrug } = useContext(RegisterContext);
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
    // 토글 기능만 하는 함수
    if (checkboxRefs.current[index]) {
      console.log(checkboxRefs.current[index]?.value);
      if (checkboxRefs.current[index]!.checked == true) {
        //체크박스가 선택이 안되어 있다면 -> 선택을 한 후 -> 배경색, 선택되어진 약 저장하는 함수로 이동
        checkboxRefs.current[index]!.checked =
          !checkboxRefs.current[index]!.checked; // checked 토글 역할
        handleCheckboxBgChange(index);
      } else if (checkboxRefs.current[index]!.checked == false) {
        console.log('선택됌.');

        checkboxRefs.current[index]!.checked =
          !checkboxRefs.current[index]!.checked; // checked 토글 역할
        handleCheckboxBgChange2(index);
      }
    }
  };

  const handleCheckboxBgChange = (index: number) => {
    // 선택 해제 모드
    console.log(checkedBgRefs.current[index]);
    checkedBgRefs.current[index]?.classList.remove('bg-blue-100');
    const drug = checkboxRefs.current[index]!.value; // 삭제 할 약의 값
    const { drugCode, ...restDrugData } = JSON.parse(drug); // 문자열로 바꾼후, 재구조화를 통해서 drugCode만 추출.
    console.log('drugCode:', drugCode);
    const temp = savedDrug.filter(
      (drugData: DrugData) => drugData.drugCode != drugCode,
    ); // 지우려는 데이터를 뺀 나머지 항목을 다시 저장
    setSavedDrug(temp);
  };
  const handleCheckboxBgChange2 = (index: number) => {
    // 선택 모드
    console.log(checkedBgRefs.current[index]);
    checkedBgRefs.current[index]?.classList.add('bg-blue-100');
    const temp = checkboxRefs.current[index]?.value; //json형식으로 파싱되어 있는 value값을 받아옴
    const drug = JSON.parse(temp); // input값의 객체를 원래 DrugData객체로 다시 파싱해줌.
    // setSavedDrug(...savedDrug, drug);
    setSavedDrug((preSavedDrug: DrugData) => [...preSavedDrug, drug]);
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

    const updatedDrugs = [...savedDrug]; // 기존 저장된 약 데이터 복사
    for (let i = 0; i < checkboxRefs.current.length; i++) {
      const temp = checkboxRefs.current[i]?.checked;
      if (temp === true) {
        const item = checkboxRefs.current[i]?.value;
        const drug = JSON.parse(item); // JSON 문자열을 객체로 변환

        // 이미 있는지 확인
        const exists = updatedDrugs.some(
          (savedDrug) => savedDrug.drugCode === drug.drugCode,
        );
        if (!exists) {
          updatedDrugs.push(drug); // 새로운 약 데이터 추가
        }

        handleCheckboxChange(i); // 체크박스 상태 변경
      }
    }

    setSavedDrug(updatedDrugs); // 한 번에 상태 업데이트
    // http:127.0.0.1:8000/test/?query=${searchInputValue}
    axios
      // .get(`http://127.0.0.1:8000/test/?drugName`)
      .get(`http://127.0.0.1:8000/test/${searchInputValue}`)
      // .get(`http://127.0.0.1:8000/test/?drugName=${searchInputValue}`)
      .then((response) => {
        const data = response.data;
        console.log('서버로 부터 응답 data : ', data);
        console.log(typeof data);
        setSearchedDrugData(response.data.drugData);
      })
      .catch((error) =>
        console.error('서버로 데이터를 보내는데 실패했습니다:', error),
      );
  };

  const saveDrug = () => {
    console.log(savedDrug);
    handleRedirect('/pill-register');
  };
  return (
    <div className="overflow-auto h-[83vh] mb-20">
      <div className="w-[100%] relative flex justify-center mt-4">
        <input
          type="text"
          placeholder="약 이름으로 입력해주세요."
          onChange={handleSearchInputChange}
          className="w-[97%] h-[35px] border-blue-500 border rounded-2xl px-2"
        />
        <button className="absolute right-[3%]" onClick={searchDrug}>
          <img
            src={SearchIcon}
            alt="검색"
            className="w-[100%] h-[2.5vh] mt-0.5"
          />
        </button>
      </div>

      <div className="w-[100%] mt-[20px] ml-5 mb-2">
        <span>검색 결과</span>
        <span className="text-red-600 ml-2">{countDrug}</span>
      </div>
      {/* <hr className="border-none h-px w-[95%] bg-gray-500 m-auto mb-[3px]" /> */}
      <ul className="w-[100%] h-[50vh]">
        {searchedDrugData &&
          searchedDrugData.map((medicine, index) => (
            <li
              key={index}
              onClick={() => handleCheckboxChange(index)}
              ref={(element) => (checkedBgRefs.current[index] = element)}
            >
              <PillNextText headText={medicine.drugName} />
              <hr className="border-none h-px w-[95%] bg-gray-500 m-auto mt-8 mb-[3px]" />
              <input
                type="checkbox"
                className="hidden"
                value={JSON.stringify(medicine)} // 서버로 보내줄때 약 이름을 주기로 해서 이름을 저장했음.
                ref={(element) => (checkboxRefs.current[index] = element)}
                // element는 React 컴포넌트 내에서 해당 DOM 요소에 대한 참조를 나타내는 매개변수입니다. 이 매개변수는 일반적으로 DOM 요소 자체를 나타내며,
                // ref={checkboxRefs}
                // ref={checkboxRefs.current[index]}
              />
            </li>
          ))}
      </ul>

      <SaveBtn
        className="mt-[30px] h-[3vh] w-[40%] mb-[10px] border-blue-200 border-2 text-blue-500 bg-white hover:border-none hover:text-white hover:bg-blue-300 text-sm font-bold"
        onClick={saveDrug}
      >
        저장하기
      </SaveBtn>
    </div>
  );
};

export default PillSearch;
