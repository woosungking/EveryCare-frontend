import React, { useContext, useEffect, useRef, useState } from 'react';
import PillNextText from '../../components/register/PillNextText';
import SaveBtn from './button/SaveBtn';
import { RegisterContext } from './context/RegisterContext';
import './CustomDatePicker.css';
import ReactDatePicker from 'react-datepicker';
import CalendarImg from '../../assets/calendar.png';
import { useNavigate } from 'react-router';
import InputBtn from './button/InputBtn';
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
    intakeDaily,
    setIntakeDaily,
    intakeCycle,
    setIntakeCycle,
  } = useContext(RegisterContext);

  // useEffect(() => {
  //   console.log('context값 변경');
  //   console.log(
  //     disease,
  //     hospital,
  //     startDate,
  //     endDate,
  //     intakeCycle,
  //     intakeDaily,
  //   );
  // }, [disease, hospital, startDate, endDate, intakeCycle, intakeDaily]);

  // useEffect(() => {
  //   console.log('업데이트된 savedDrug(렌더링):', savedDrug);
  // }, [savedDrug]); //다음 랜더링 주기에 반영이 되므로 useEffect로 확인

  const [selectedBtn, setSelectedBtn] = useState<string | null>(null);
  const [selectedStartDateBtn, setSelectedStartDateBtn] = useState<
    string | null
  >(null);
  const [selectedEndDateBtn, setSelectedEndDateBtn] = useState<string | null>(
    null,
  );

  const handleIntakeCycle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('intakecycle input.. : ');
    setIntakeCycle(e.target.value);
    console.log(intakeCycle);
  };
  const handleIntakeDaily = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('intakedaily input..');
    setIntakeDaily(e.target.value);
    console.log(intakeDaily);
  };

  const handleStartDate = (date: Date) => {
    console.log(date);
    setStartDate(date);
  };
  const handleEndDate = (date: Date) => {
    console.log(date);
    setEndDate(date);
  };

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
  const nevigate = useNavigate();
  const handleRedirect = (path) => {
    console.log('pill-search page redirect...');
    nevigate(path);
  };
  return (
    <div className="h-[79vh] overflow-auto">
      <div className="w-[100%] h-[22vh]">
        <div className="mt-[3vh] ml-[5%] mb-[2%]">
          <PillNextText
            headText="복용 약"
            contentText="복용하시는 약이 맞으신가요?"
          ></PillNextText>
        </div>
        <ul className="flex m-auto h-[5vh] flex-wrap overflow-y-scroll">
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
        <div className="w-[100%] flex">
          <InputBtn
            className="m-auto h-[35px] w-[80%]"
            onClick={() => handleRedirect('/pill-search')}
          >
            추가하기
          </InputBtn>
        </div>
      </div>
      <div className="w-[100%] h-[22vh]">
        <div className="mt-[3vh] ml-[5%] mb-[2%]">
          <PillNextText
            headText="복약 횟수"
            contentText="하루에 몇 번, 몇 일 간격으로 복용하시나요?"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-100% flex flex-col justify-center items-center space-y-6"
        >
          <div className="flex justify-center space-x-8 w-[100%] px-4">
            <button
              name="everyday"
              onClick={onClick}
              className={`w-[40%] h-[35px] mt-[30px] rounded-xl border-2 ${
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
              className={`w-[40%] h-[35px] mt-[30px] rounded-xl border-2 ${
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
                className="w-[55%] h-[2.5vh] rounded-xl border border-gray-700 text-gray-700 bg-white text-sm font-bold p-2"
                onChange={handleIntakeDaily}
                placeholder="복약 횟수"
                value={intakeDaily}
              />
            </div>
          )}

          {selectedBtn === 'interval' && (
            <div className="mt-2 flex items-center space-x-2">
              <p className="text-gray-400">며칠마다 복약 하시나요?</p>
              <input
                type="text"
                className="w-[55%] h-[2.5vh] rounded-xl border border-gray-700 text-gray-700 bg-white text-sm font-bold p-2"
                onChange={handleIntakeCycle}
                placeholder="간격 일수"
                value={intakeCycle}
              />
            </div>
          )}
        </form>
      </div>
      <div className="w-[100%] h-[22vh]">
        <div className="mt-[3vh] ml-[5%] mb-[2%]">
          <PillNextText
            headText="복약일"
            contentText="언제부터 언제까지 복약을 하시나요?"
          />
        </div>
        <div className="w-[100%] h-[10vh] mt-[30px] flex justify-center">
          <ReactDatePicker
            className="pillRegister-date-picker-input-start"
            showIcon
            dateFormat="yyyy-MM-dd"
            placeholderText="시작일"
            selected={startDate}
            onChange={handleStartDate}
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
            selected={endDate}
            onChange={handleEndDate}
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
      <div className="w-[100%] h-[15vh] flex flex-col justify-center">
        <SaveBtn
          className="m-auto h-[35px] w-[50%]"
          onClick={() => handleRedirect('/direct-register')}
        >
          저장하기
        </SaveBtn>
      </div>
    </div>
  );
};

export default PillRegister;
