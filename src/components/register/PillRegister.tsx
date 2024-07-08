import React, { useContext, useEffect, useRef, useState } from 'react';
import PillNextText from '../../components/register/PillNextText';
import SaveBtn from './button/SaveBtn';
import { RegisterContext } from './context/RegisterContext';
import './CustomDatePicker.css';
import ReactDatePicker from 'react-datepicker';
import CalendarImg from '../../assets/calendar.png';
import { useNavigate } from 'react-router';
const ListStyle = {
  width: '46%',
  height: '2.5vh',
  display: 'flex',
  marginTop: '10px',
  marginLeft: '0.8rem',
  border: '1px solid gray',
  borderRadius: '15px',
  justifyContent: 'center', // 수평 가운데 정렬
  alignItems: 'center', // 수직 가운데 정렬
  fontSize: '0.8rem',
  color: 'gray',
  position: 'relative',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  paddingRight: '1rem',
  textAligin: 'center',
};
const deleteBtnStyle = {
  width: '1rem',
  height: '1rem',
  border: '1px solid #F5F5F5',
  borderRadius: '10px',
  fontSize: '1rem',
  color: '#F56132',
  backgroundColor: 'rgba(217, 217, 217, 0.58)',
  position: 'absolute',
  right: '1%',
  top: '18%',
  fontWeight: 'bold',
};

const MediNameStyle = {
  flex: 1, // p 태그가 가능한 너비를 차지하도록 설정합니다.
  margin: '0', // p 태그의 기본 마진을 제거합니다.
  overflow: 'hidden', // 넘치는 텍스트를 숨깁니다.
  whiteSpace: 'nowrap', // 텍스트가 한 줄로 유지되도록 합니다.
  textOverflow: 'ellipsis', // 넘치는 텍스트를 말줄임표(...)로 표시합니다.
  textAlign: 'center',
};
const PillRegister: React.FC = () => {
  const {
    savedDrug,
    setSavedDrug,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    hospital,
    setHospital,
    disease,
    setDisease,
    intakeSum,
    setIntakeSum,
    intakeCycle,
    setIntakeCycle,
  } = useContext(RegisterContext);
  const [selectedBtn, setSelectedBtn] = useState<string | null>(null);
  const [selectedStartDateBtn, setSelectedStartDateBtn] = useState<
    string | null
  >(null);
  const [selectedEndDateBtn, setSelectedEndDateBtn] = useState<string | null>(
    null,
  );

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setSelectedBtn(name);
  };
  const onClickStartDate = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setSelectedStartDateBtn(name);
  };

  const onClickEndDate = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setSelectedEndDateBtn(name);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleDeleteList = (itemName) => {
    const temp = savedDrug.filter((item) => item.drugName !== itemName);
    console.log('기존:', temp);
    setSavedDrug(temp);
  };
  useEffect(() => {
    console.log('업데이트된 savedDrug:', savedDrug);
  }, [savedDrug]); //다음 랜더링 주기에 반영이 되므로 useEffect로 확인
  const nevigate = useNavigate();
  const handleRedirect = () => {
    console.log('sdsd');
    nevigate('/pill-search');
  };
  return (
    <div className="h-[78vh] overflow-y-scroll">
      <div className="w-[100%] h-[28vh] mt-[3vh]">
        <PillNextText
          headText="복용 약"
          contentText="복용하시는 약이 맞으신가요?"
        ></PillNextText>
        <ul className="flex m-auto w-[90%] h-[10vh] flex-wrap overflow-y-scroll">
          {savedDrug.map((showedDrug) => (
            <li style={ListStyle}>
              <p style={MediNameStyle}>{showedDrug.drugName}</p>

              <button
                style={deleteBtnStyle}
                onClick={() => handleDeleteList(showedDrug.drugName)}
              >
                -
              </button>
            </li>
          ))}
        </ul>
        <SaveBtn
          className="h-[30px] w-[80%] mb-[10px] border-blue-200 border-2 text-blue-500 bg-white text-sm font-bold"
          onClick={handleRedirect}
        >
          추가하기
        </SaveBtn>
      </div>
      <div className="w-[100%] h-[25vh]">
        <PillNextText
          headText="복약 횟수"
          contentText="하루에 몇 번, 몇 일 간격으로 복용하시나요?"
        />
        <form
          onSubmit={handleSubmit}
          className="w-100% flex flex-col justify-center items-center space-y-6"
        >
          <div className="flex justify-center space-x-8 w-[100%] px-4">
            <button
              name="everyday"
              onClick={onClick}
              className={`w-[50%] h-[35px] mt-[30px] rounded-xl border-2 ${
                selectedBtn === 'everyday'
                  ? 'border-blue-200 text-white bg-blue-200'
                  : 'border-blue-200 text-blue-500 bg-white'
              } text-sm font-bold`}
            >
              횟수
            </button>

            <button
              name="interval"
              onClick={onClick}
              className={`w-[50%] h-[35px] mt-[30px] rounded-xl border-2 ${
                selectedBtn === 'interval'
                  ? 'border-blue-200 text-white bg-blue-200'
                  : 'border-blue-200 text-blue-500 bg-white'
              } text-sm font-bold`}
            >
              간격 일수
            </button>
          </div>
          {selectedBtn === 'everyday' && (
            <div className="mt-2 flex items-center space-x-1">
              <p className="text-gray-400">하루에 몇 번 복약 하시나요?</p>
              <input
                type="text"
                className="w-[55%] h-[2.5vh] rounded-xl border border-gray-700 text-gray-700 bg-white text-sm font-bold"
                placeholder="복약 횟수"
              />
            </div>
          )}

          {selectedBtn === 'interval' && (
            <div className="mt-2 flex items-center space-x-2">
              <p className="text-gray-400">며칠마다 복약 하시나요?</p>
              <input
                type="text"
                className="w-[55%] h-[2.5vh] rounded-xl border border-gray-700 text-gray-700 bg-white text-sm font-bold"
                placeholder="간격 일수"
              />
            </div>
          )}
        </form>
      </div>
      <div className="w-[100%] h-[25vh] mt-[3vh]">
        <PillNextText
          headText="복약일"
          contentText="언제부터 언제까지 복약을 하시나요?"
        />
        <div className="w-[100%] h-[10vh] mt-[30px] flex justify-center">
          <ReactDatePicker
            className="pillRegister-date-picker-input-start"
            showIcon
            dateFormat="yyyy-MM-dd"
            placeholderText="시작일"
            // onChange={handleEndDate}
            icon={
              <img
                src={CalendarImg} // 외부 이미지의 URL을 지정합니다.
                className="date-picker-img"
              />
            }
          ></ReactDatePicker>
          <span className="w-[30px]"></span>
          <ReactDatePicker
            className="pillRegister-date-picker-input-end"
            showIcon
            dateFormat="yyyy-MM-dd"
            placeholderText="죵료일"
            // onChange={handleEndDate}
            icon={
              <img
                src={CalendarImg} // 외부 이미지의 URL을 지정합니다.
                className="date-picker-img"
              />
            }
          ></ReactDatePicker>
        </div>
      </div>
      {/* <div className="bg-yellow-100 w-[100%] h-[25vh] mt-[3vh]">
        <PillNextText
          headText="복약일"
          contentText="언제부터 언제까지 복약을 하시나요?"
        />
        <form
          onSubmit={handleSubmit}
          className="w-[100%] flex flex-col justify-center items-center space-y-4"
        >
          <div className="flex justify-center space-x-8 w-[100%] max-w-[600px] px-4">
            <button
              name="today"
              onClick={onClickStartDate}
              className={`w-[40%] h-[3.5vh] rounded-xl border-2 ${
                selectedStartDateBtn === 'today'
                  ? 'border-blue-200 text-white bg-blue-200'
                  : 'border-blue-200 text-blue-500 bg-white'
              } text-sm font-bold`}
            >
              오늘
            </button>
            <button
              name="selctedDate"
              onClick={onClickStartDate}
              className={`w-[40%] h-[3.5vh] rounded-xl border-2 ${
                selectedStartDateBtn === 'selctedDate'
                  ? 'border-blue-200 text-white bg-blue-200'
                  : 'border-blue-200 text-blue-500 bg-white'
              } text-sm font-bold`}
            >
              날짜 선택
            </button>
          </div>
          {selectedStartDateBtn === 'selctedDate' && (
            <div className="mt-2 flex items-center space-x-2">
              <p className="text-gray-400">시작일</p>
              <input
                type="text"
                className="w-[75%] h-[2.5vh] rounded-xl border border-gray-700 text-black bg-white text-sm font-bold"
                placeholder="'YYYYMMDD' 8글자로 입력해주세요."
              />
            </div>
          )}
        </form>
      </div> */}
      {/* <div className="bg-green-100 w-[100%] h-[25vh] mt-[3vh]">
        <PillNextText headText="종료일" contentText="언제 복약을 종료하나요?" />
        <form
          onSubmit={handleSubmit}
          className="w-[100%] flex flex-col justify-center items-center space-y-4"
        >
          <div className="flex justify-center space-x-8 w-[100%] max-w-[600px] px-4">
            <button
              name="infinite"
              onClick={onClickEndDate}
              className={`w-[40%] h-[3.5vh] rounded-xl border-2 ${
                selectedEndDateBtn === 'infinite'
                  ? 'border-blue-200 text-white bg-blue-200'
                  : 'border-blue-200 text-blue-500 bg-white'
              } text-sm font-bold`}
            >
              종료일 없음
            </button>
            <button
              name="selctedDate2"
              onClick={onClickEndDate}
              className={`w-[40%] h-[3.5vh] rounded-xl border-2 ${
                selectedEndDateBtn === 'selctedDate2'
                  ? 'border-blue-200 text-white bg-blue-200'
                  : 'border-blue-200 text-blue-500 bg-white'
              } text-sm font-bold`}
            >
              날짜 선택
            </button>
          </div>
          {selectedEndDateBtn === 'selctedDate2' && (
            <div className="mt-2 flex items-center space-x-2">
              <p className="text-gray-400">종료일</p>
              <input
                type="text"
                className="w-[80%] h-[2.5vh] rounded-xl border border-gray-700 text-black bg-white text-sm font-bold"
                placeholder="'YYYYMMDD' 8글자로 입력해주세요."
              />
            </div>
          )}
        </form>
      </div> */}
      <div className="flex justify-center mt-16">
        <button className="justify-center h-[35px] w-[40%] rounded-xl border-2 border-blue-300 text-white bg-blue-300 text-base font-bold">
          등록
        </button>
      </div>
    </div>
  );
};

export default PillRegister;
