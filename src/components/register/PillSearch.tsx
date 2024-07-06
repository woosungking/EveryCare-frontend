import React, { useEffect, useState } from 'react';
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
  const [countDrug, setCountDrug]=useState();
  // const [savedDrugData, setSavedDrugData] = useState<DrugData|>(null);
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchData = e.target.value;
    console.log(searchData);
    setSearchInputValue(searchData);
  };

  useEffect(() => {
    console.log('약 랜더링 중 ...');
    const count = searchedDrugData?.length;
    setCountDrug(count);
  }, [searchedDrugData]);

  const searchDrug = () => {
    if (searchInputValue.trim() == '') {
      alert('검색어를 입력해 주세요!');
      return;
    }
    axios
      .get(`http://127.0.0.1:8000/test/?query=${searchInputValue}`)
      .then((response) => {
        console.log('서버 응답:', response.data);
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
            <li key={index}>
              <PillNextText headText={`${medicine.drugName}`} />
              <CustomHr />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PillSearch;
