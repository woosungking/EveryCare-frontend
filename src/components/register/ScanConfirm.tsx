import React, { useContext, useEffect, useState } from 'react';
import Prescription from '../../assets/register/Prescription.png';
import PillNextText from './PillNextText';
import BackBtn from './button/BackBtn';
import { useSearchDrug } from '../../service/queries';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import CalendarImg from '../../assets/calendar.png';

import './CustomDatePicker.css';
import InputBtn from '../../components/register/button/InputBtn';
import SaveBtn from '../../components/register/button/SaveBtn';
import AddPillModal from './AddPillModal';
import { formatDate } from '../../utils/date';
import axios from 'axios';
import { RegisterContext } from './context/RegisterContext';
import { searchDrug } from '../../service/searchDrug';

const ScanConfirm: React.FC = () => {
  const formatStartDate = (formatedDate) => {
    const date = new Date(formatedDate);
    setStartDate(date);
  };

  const formatEndDate = (formatedDate) => {
    const date = new Date(formatedDate);
    console.log(date);
    setEndDate(date);
  };

  const { OCRData, setOCRData, imgURL, setImgURL } =
    useContext(RegisterContext); // 처방전 인식 결과를 받아오는 전역변수 역할
  useEffect(() => {
    const drugName = OCRData.drugName; // ocr로 받을때 약 정보는 한번에 배열로 받아서 직접입력하기 형식과 맞추려면 drugName배열을 다 풀어서 pcode,code,company가 있는 형식으로 맞춰줘야함. 안그러면 리스트에서 랜더링을 못함
    //OCRData는 객체이므로 바로 map으로 돌리기가 불가능.
    const parsedDrugData = drugName.map((drugName) => ({
      drugName: drugName,
      drugCode: '',
      drugPcode: '',
      drugCompany: '',
    }));

    setSaveDrugData(parsedDrugData);
    setIntakeCycle(OCRData.intakeCycle);
    formatStartDate(OCRData.intakeStart);
    formatEndDate(OCRData.intakeEnd);
    setHospital(OCRData.hospital);
    setShowHospital(true);
    setDisease(OCRData.disease);
    setShowDisease(true);
  }, [OCRData]);

  const [showedDrugCount, setShowedDrugCount] = useState(0);
  const [inputValue, setInputValue] = useState<string>(''); // 모달창 input박스 안 데이터를 읽어오는 배열.

  interface DrugData {
    drugName: string;
    drugCode: string;
    drugPcode: string;
    drugCompany: string;
    check: boolean;
  }
  const [drugData, setDrugData] = useState<DrugData>([]);

  const changeInputBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // 모달창 input박스에서 글씨가 입력되면 onChange이벤트 발생하는데 그때마다 배열 최신화.
    console.log('입력중...');
  };

  // const searchMedi = () => {
  //   //서버로 inputValue값 넘길 로직 작성
  //   if (inputValue.trim() == '') {
  //     alert('감색어를 입력하세요!!');
  //     // 스페이스 같은 짓 못하도록 trim() 을 사용해서 공백문자 줄바꿈 제거 후 검증
  //     return;
  //   }
  //   console.log('전송중,,');
  //   console.log(inputValue);
  //   axios
  //     .get(`http://127.0.0.1:8000/test/${inputValue}`)
  //     .then((response) => {
  //       const data = response.data;
  //       console.log('서버로 부터 응답 data : ', data);
  //       console.log(typeof data);
  //       console.log('서버 응답:', response.data.data);
  //       console.log('서버 응답:', response.data.data[0].drugName);
  //       const temp = response.data.data.map((drugList) => drugList);
  //       setDrugData(temp);
  //     })
  //     .catch((error) =>
  //       console.error('서버로 데이터를 보내는데 실패했습니다:', error),
  //     );
  // };
  const { drugData: searchData } = useSearchDrug(inputValue); // useSearchDrug 훅 사용

  const searchMedi = () => { // 모달창에서 약 추가.
    console.log('응답해라 ', searchData);
  };

  const [saveDrugData, setSaveDrugData] = useState<DrugData[]>([]);
  const handleCheckboxChange = (index: number) => {
    const updatedDrugData = [...drugData];
    updatedDrugData[index].check = !updatedDrugData[index].check;
    console.log(index);
    if (updatedDrugData[index].check) {
      console.log('체크박스 체크');
      setSaveDrugData([...saveDrugData, updatedDrugData[index]]);
      console.log(saveDrugData);
    } else {
      const updatedSaveDrugData = saveDrugData.filter(
        (item) => item.drugID !== updatedDrugData[index].drugID,
      ); // 일치하지 않는것은 저장을 안하고 일치하는것만 남겨서 update배열에 새로 저장, 중괄호가 없으면 boolean으로
      console.log('체크박스 해제');
      setSaveDrugData(updatedSaveDrugData);
    }

    setDrugData(updatedDrugData);
  };

  const handleDeleteList = (drugName: string) => {
    const updatedDrugData = [...saveDrugData]; // 기존 저장배열을 받아옴
    const updatedSaveDrugData = updatedDrugData.filter((item) => {
      return item.drugName !== drugName;
    });
    setSaveDrugData(updatedSaveDrugData);
    console.log(saveDrugData);
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setDrugData([]);
  };

  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const handleStartDate = (date: Date | null) => {
    console.log(date);
    setStartDate(date);
  };

  const handleEndDate = (date: Date | null) => {
    console.log(date);
    setEndDate(date);
  };

  const [showIntakeCycle, setShowIntakeCycle] = useState(false);
  const [showHospital, setShowHospital] = useState(false);
  const [showDisease, setShowDisease] = useState(false);
  const [intakeCycle, setIntakeCycle] = useState('');
  const [intakeDaily, setIntakeDaily] = useState('');
  const [hospital, setHospital] = useState('');
  const [disease, setDisease] = useState('');

  const handleShowIntakeCycle = () => {
    setShowIntakeCycle((preShowIntakeCycle) => !preShowIntakeCycle);
  };

  const handleShowHospital = () => {
    setShowHospital((preShowHospital) => !preShowHospital);
  };

  const handleShowDisease = () => {
    setShowDisease((preShowDisease) => !preShowDisease);
  };

  const handleIntakeCycle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setIntakeCycle(e.target.value);
  };

  const handleIntakeDaily = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setIntakeDaily(e.target.value);
  };

  const handleHospital = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    console.log(OCRData);
    console.log(endDate);
    setHospital(e.target.value);
  };

  const handleDisease = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setDisease(e.target.value);
  };

  interface submitData {
    drugName: [];
    intakeStart: string;
    intakeEnd: string;
    intakeCycle: string;
    hospital: string;
    disease: string;
  }

  const [dataSubmit, setDataSubmit] = useState<submitData | boolean>(false);

  useEffect(() => {
    // console.log('동작 중....', startDate);
    // console.log('동작 중....', endDate);
    // console.log('admlamsdlkmaklsdmklasm', imgURL);
    setShowedDrugCount(saveDrugData.length);
    if (dataSubmit) {
      const drugCode = saveDrugData.map((item) => item.drugCode);
      axios
        .put('http://127.0.0.1:8000/test/', {
          drugCode: drugCode,
          intakeStart: startDate,
          intakeEnd: endDate,
          intakeCycle: intakeCycle,
          intakeDaily: intakeDaily,
          hospital: hospital,
          disease: disease,
        })
        .then((response) => {
          console.log('서버 응답:', response.data);
        });
    }
  }, [
    dataSubmit,
    disease,
    endDate,
    hospital,
    intakeCycle,
    intakeDaily,
    saveDrugData,
    startDate,
  ]);

  const handleDataSubmit = () => {
    let splitDate = String(startDate).split(' '); // date가 datepicker 의 객체로 전달되어서 형변환 필요.
    let formatedDate = formatDate(splitDate);
    setStartDate(formatedDate);

    splitDate = String(endDate).split(' '); // date가 datepicker 의 객체로 전달되어서 형변환 필요.
    console.log(splitDate);
    formatedDate = formatDate(splitDate);
    setEndDate(formatedDate);
    console.log('서버 전송', endDate, startDate);
    setDataSubmit(true); //저장하기 버튼을 누르면 useEffect
  };
  return (
    <>
      <BackBtn text="처방전 확인"></BackBtn>

      <div className="w-[453px] h-[88vh] text-center margin-0 mt-0 overflow-y-scroll">
        <img
          src={imgURL}
          className="h-[30%] w-[80%] m-[auto] mt-[10px] mb-[0] pt-[2vh]"
        />
        <p
          style={{ textAlign: 'center', fontSize: '0.94rem', color: '#666666' }}
          className="mt-[0.5rem]"
        >
          등록한 처방전에서 개인정보는 저장되지 않습니다.
        </p>

        <div className="w-[100%] h-[15vh] relative mb-[0] ml-[1vh] mt-[0.8rem]">
          {/* //추가, 수정 소 버튼의 위치를 상대적으로 지정하기 위해 div로 한번 감싸주었음. */}
          <PillNextText className="absolute" headText="처방약품"></PillNextText>
          <ul className="flex m-auto w-[90%] h-[10vh] flex-wrap overflow-y-scroll bg-blue-50 rounded-[15px]">
            {saveDrugData.map((medicine) => (
              <li className="w-[46%] h-[2.5vh] flex mt-[23px] ml-[0.8rem] border border-gray-500 rounded-[15px] justify-center items-center text-[0.8rem] text-gray-500 relative pt-4 pb-4 pr-4">
                <p className="flex-1 m-0 overflow-hidden whitespace-nowrap text-ellipsis">
                  {medicine.drugName}
                </p>

                <button
                  className="w-4 h-4 border border-[#F5F5F5] rounded-[10px] text-[1rem] text-[#F56132] bg-[rgba(217,217,217,0.58)] absolute right-[1%] top-[18%] font-bold"
                  onClick={() => handleDeleteList(medicine.drugName)}
                >
                  -
                </button>
              </li>
            ))}
          </ul>

          <AddPillModal showModal={showModal} onClose={handleCloseModal}>
            <div className="w-[100%] h-[20%] mt-[2vh]">
              <input
                type="text"
                placeholder="   찾는 약이 있으신가요?"
                className="mx-auto w-[80%] h-[5vh] border border-gray-300  "
                onChange={changeInputBox} // input창에 입력 발생시 배열에 저장.(최종전송은 버튼이 눌리면 할거임.)
              />

              <button
                className="w-[20%] h-[5vh] border border-gray-400 bg-gray-200"
                onClick={searchMedi}
              >
                검색 🔍
              </button>
            </div>

            <div className="w-[100%] h-[25vh] overflow-y-scroll text-[1vh]">
              <table className="w-[100%] h-[30vh] divide-y border-black border-1 table-fixed">
                <thead className="w-[100%] h-[3vh] bg-gray-100 border-t-2 border-gray-300">
                  <tr>
                    <th className="h-[3vh] w-[26%] text-center align-middle text-[1.4vh] p-[5px] border-l-[1px] border-gray-200">
                      제품명
                    </th>
                    <th className="h-[3vh] w-[17%] text-center align-middle text-[1.4vh] p-[5px] border-l-[1px] border-gray-200">
                      제품코드
                    </th>
                    <th className="h-[3vh] w-[19%] text-center align-middle text-[1.4vh] p-[5px] border-l-[1px] border-gray-200">
                      주성분코드
                    </th>
                    <th className="h-[3vh] w-[28%] text-center align-middle text-[1.4vh] p-[5px] border-l-[1px] border-gray-200">
                      업체명
                    </th>
                    <th className="h-[3vh] w-[10%] text-center align-middle text-[1.4vh] p-[5px] border-l-[1px] border-r-[1px] border-gray-200">
                      선택
                    </th>
                  </tr>
                </thead>
                <tbody className="w-[100%] bg-white h-[80%] overflow-y-scroll">
                  {drugData.map((medicine, index) => (
                    <tr
                      className="border border-gray-200 relative"
                      key={medicine.drugID}
                    >
                      <td className="h-[10%] w-[17%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        {medicine.drugName}
                      </td>
                      <td className="h-[10%] w-[17%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        {medicine.drugCode}
                      </td>
                      <td className="h-[10%] w-[17%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        {medicine.drugPcode}
                      </td>
                      <td className="h-[10%] w-[17%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        {medicine.drugCompany}
                      </td>
                      <input
                        className="absolute bottom-[50%] right-[3%]"
                        type="checkbox"
                        onChange={() => handleCheckboxChange(index)}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AddPillModal>
          {/* </div> */}
          <button
            className="absolute right-[7%] top-[10%] pl-[5px] pr-[5px] rounded-full bg-gray-200 text-red-500 text-center font-extrabold text-[12px] leading-normal"
            onClick={handleOpenModal} // 모달창 open 핸들러
          >
            추가
          </button>
          <p className="absolute text-[12px] left-[28%] top-[10%] text-[orange]">
            {showedDrugCount}개
          </p>
        </div>

        <div className="h-[15vh] w-[100%] ml-[1vh] mt-[2vh]">
          <PillNextText headText="복용기간"></PillNextText>

          <div className="flex w-[100%] h-[6.4%] justify-center">
            <DatePicker
              className="date-picker-input"
              showIcon
              selected={startDate}
              onChange={handleStartDate}
              dateFormat="yyyy-MM-dd"
              placeholderText="시작일"
              icon={
                // 외부 이미지를 사용하려면 아이콘을 <img> 요소로 변경합니다.
                <img
                  src={CalendarImg} // 외부 이미지의 URL을 지정합니다.
                  alt="Icon" // 이미지에 대한 대체 텍스트를 제공합니다.
                  className="date-picker-img"
                />
              }
            />
            <DatePicker
              // className="border border-gray-300 rounded-lg"
              className="date-picker-input"
              showIcon
              selected={endDate}
              onChange={handleEndDate}
              dateFormat="yyyy-MM-dd"
              placeholderText="죵료일"
              icon={
                // 외부 이미지를 사용하려면 아이콘을 <img> 요소로 변경합니다.
                <img
                  src={CalendarImg} // 외부 이미지의 URL을 지정합니다.
                  className="date-picker-img"
                />
              }
            />
          </div>
        </div>

        <div className="h-[20vh] w-[100%] ml-[1vh] mt-[3vh]">
          <PillNextText
            headText="복약횟수"
            contentText="하루에 몇번 복약 하시나요"
          ></PillNextText>
          <div>
            {showIntakeCycle ? (
              <div className="flex justify-center items-center h-[6vh] mt-[1vh]">
                <div className="w-[30%] h-[30px] flex justify-center items-center bg-blue-50 border-blue-200 border-[1px] text-gray-500 text-[8px] inline-block m-auto ml-auto mr-[1vh]">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    placeholder="ex)1"
                    className="text-[14px] text-right bg-blue-50"
                    onChange={handleIntakeDaily}
                  />
                  <button className="w-[30%] text-blue-400 text-left font-bold">
                    회 섭취
                  </button>
                </div>
                <div className="w-[30%] h-[30px] flex justify-center items-center bg-blue-50 border-blue-200 border-[1px] text-gray-500 text-[8px] inline-block mr-auto ml-[1vh]">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    placeholder="ex)0"
                    className="text-[14px] text-right bg-blue-50"
                    onChange={handleIntakeCycle}
                  />
                  <button className="w-[30%] text-blue-400 text-left font-bold">
                    일 간격
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          <InputBtn
            onClick={handleShowIntakeCycle}
            className="w-[80%] h-[30px] text-[16px] p-[1vh] flex items-center justify-center text-center]"
          >
            주기입력
          </InputBtn>
        </div>

        <div className="h-[20vh] w-[100%] ml-[1vh] mt-[3vh]">
          <PillNextText
            headText="처방병원"
            contentText="어느 병원에서 처방받으셨나요"
          ></PillNextText>
          {showHospital ? (
            <div className="flex flex-col bg-blue-50 justify-center aligin-center h-[30px] w-[70%] mt-[1rem] border-blue-200 border-[1px] text-gray-500 m-auto">
              <input
                type="text"
                className="w-[70%] h-[80%] bg-blue-50 m-auto text-center"
                placeholder="병원을 입력 해 주세요"
                value={hospital}
                onChange={handleHospital}
              />
            </div>
          ) : null}

          <InputBtn
            onClick={handleShowHospital}
            className="w-[80%] h-[30px] text-[16px] p-[1vh] flex items-center justify-center text-center]"
          >
            병원입력
          </InputBtn>
        </div>

        <div className="w-[100%] h-[20vh] ml-[1vh] mt-[5vh] relative">
          <PillNextText
            headText="질환이름"
            contentText="어떤 질환으로 약을 복용하시나요"
          ></PillNextText>
          {showDisease ? (
            <div className="bg-blue-50 flex flex-col justify-center aligin-center h-[30px] w-[70%] mt-[1rem] border-blue-200 border-[1px] text-gray-500 m-auto">
              <input
                type="text"
                className="bg-blue-50 w-[70%] h-[80%] m-auto text-center"
                placeholder="질병을 입력 해 주세요."
                value={disease}
                onChange={handleDisease}
              />
            </div>
          ) : null}
          <InputBtn
            onClick={handleShowDisease}
            className="w-[80%] h-[30px] text-[16px] p-[1vh] flex items-center justify-center text-center]"
          >
            질병입력
          </InputBtn>
        </div>
        <SaveBtn
          className="w-[80%] h-[30px] text-[16px] p-[1vh] flex items-center justify-center text-center] mb-[20px]"
          onClick={handleDataSubmit}
        >
          저장하기
        </SaveBtn>
      </div>
    </>
  );
};

export default ScanConfirm;
