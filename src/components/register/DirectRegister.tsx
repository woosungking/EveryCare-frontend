import React, { ReactElement, useContext, useEffect } from 'react';
import { useState } from 'react';
import RegisterSick from '../../assets/register/RegisterSick.svg';
import RegisterHos from '../../assets/register/RegisterHospital.svg';
import { useNavigate } from 'react-router-dom';
// import CustomHr from '../CustomHr';
import { RegisterContext } from './context/RegisterContext';
import DatePicker from 'react-datepicker';
import './CustomDatePicker.css';
import CalendarImg from '../../assets/calendar.png';
import SaveBtn from './button/SaveBtn';
const DirectRegister: React.FC = () => {
  const { OCRData, setOCRData } = useContext(RegisterContext);
  useEffect(() => {
    console.log(OCRData);
    console.log('asda');
  }, [OCRData]);

  const [selectedSick, setSelectedSick] = useState<boolean>(false);
  const [sickConfirm, setSickConfirm] = useState<boolean>(false);
  const [sickValue, setSickValue] = useState<string>('');

  const [selectedHos, setSelectedHos] = useState<boolean>(false);
  const [hosConfirm, setHosConfirm] = useState<boolean>(false);
  const [hosValue, setHosValue] = useState<string>('');

  const [selectDate, setSelectDate] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | string>(new Date());
  const [endDate, setEndDate] = useState<Date | string>(new Date());

  const [selectCycle, setSelectCycle] = useState();
  const [intakeSum, setIntakeSum] = useState<null | String>(null);
  const [intakeCycle, setIntakeCycle] = useState<null | String>(null);

  const onClickSick = () => {
    setSelectedSick(true);
    setSickConfirm(false);
  };
  const onClickSickConfirm = () => {
    const trimmedValue = sickValue.trim();
    if (trimmedValue === '') {
      console.log('아무것도 입력되지 않았습니다.');
      alert('질병명을 입력해주세요!');
      setSickValue('');
    } else {
      setSickConfirm(true);
    }
  };
  const handleSickInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSickValue(event.target.value);
    console.log(event.target.value);
  };

  const onClickHos = () => {
    setSelectedHos(true);
    setHosConfirm(false);
  };
  const onClickHosConfirm = () => {
    const trimmedValue = hosValue.trim();
    if (trimmedValue === '') {
      console.log('아무것도 입력되지 않았습니다.');
      alert('처방 받으신 병원을 입력해주세요!');
      setHosValue('');
    } else {
      setHosConfirm(true);
    }
  };
  const handleHosInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHosValue(event.target.value);
    console.log(event.target.value);
  };

  const navigate = useNavigate();

  const handleMedicine = () => {
    navigate('/pill-search');
  };

  const handleStartDate = (date: Date) => {
    const newDate = date;
    console.log(newDate);
    setStartDate(newDate);
  };
  const handleEndDate = (date: Date) => {
    const newDate = date;
    console.log(newDate);
    setEndDate(newDate);
  };

  const handleIntakeCycle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCycle = e.target.value;
    console.log(newCycle);
    setIntakeCycle(newCycle);
  };
  const handleIntakeSum= (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSum = e.target.value;
    console.log(newSum);
    setIntakeSum(newSum);
  };
  return (
    <div className="h-[83vh] w-100% items-center overflow-scroll">
      <div className="flex h-[30vh] w-[100%]">
        <div className="flex flex-col w-full h-[30%] mt-[10%]">
          {!selectedSick ? (
            <>
              <p className="text-4xl w-[50%] font-black ml-[3%] mb-[2%]">
                질병
              </p>
              <p className="text-base w-[90%] text-gray-500 ml-[3%]">
                어떤 질병으로 약을 복용하시나요?
              </p>
              <div className="flex justify-center m-auto w-full mt-[3vh]">
                <button
                  name="sick"
                  onClick={onClickSick}
                  className="w-[80%] h-[40px] border-2 rounded-xl text-lg border-blue-200 text-blue-500 bg-white hover:bg-blue-200 hover:text-white"
                >
                  질병 입력
                </button>
              </div>
            </>
          ) : (
            <div className="flex m-[3vh] items-center space-x-4">
              <img
                src={RegisterSick}
                alt="질병"
                className="w-[41px] h-[34px]"
              />
              {sickConfirm ? (
                <div className="relative w-[90%]">
                  <p className="inline-block overflow-x-scroll w-[70%] h-[40px] text-2xl text-gray-700 font-bold">
                    {sickValue}
                  </p>
                  <button
                    name="sickConfirm"
                    onClick={onClickSick}
                    className="absolute right-[5%] top-[18%] text-xs text-orange-500 font-bold bg-gray-100 pl-[13px] pr-[13px] p-[5px] rounded-2xl"
                  >
                    수정
                  </button>
                </div>
              ) : (
                <div className="relative w-[90%]">
                  <input
                    type="text"
                    value={sickValue}
                    onChange={handleSickInputChange}
                    className="h-[40px] w-[70%] rounded-xl border border-black text-gray-700 bg-white text-lg "
                    placeholder="질병명을 입력해주세요."
                  />
                  <button
                    name="sickConfirm"
                    onClick={onClickSickConfirm}
                    className="inline-block absolute right-[5%] top-[18%] text-xs text-orange-500 font-bold bg-gray-100 pl-[13px] pr-[13px] p-[5px] rounded-2xl"
                  >
                    확인
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <hr className="border-1 border-gray-300 m-auto w-[70%]" />
      <div className="w-[100%] h-[30vh]">
        <div className="flex flex-col h-[30%] mt-[10%]">
          {!selectedHos ? (
            <>
              <p className="text-4xl w-[50%] font-black mb-[2%] ml-[3%]">
                병원
              </p>
              <p className="text-base text-gray-500 ml-[3%]">
                처방 받으신 병원을 입력해주세요.
              </p>
              <div className="flex justify-center w-full mt-[3vh]">
                <button
                  name="hospital"
                  onClick={onClickHos}
                  className="w-[80%] h-[40px] border-2 rounded-xl text-lg border-blue-200 text-blue-500 bg-white hover:bg-blue-200 hover:text-white"
                >
                  병원 입력
                </button>
              </div>
            </>
          ) : (
            <div className="m-[3vh] flex items-center space-x-4">
              <img
                src={RegisterHos}
                alt="hopital"
                className="w-[41px] h-[34px]"
              />
              {hosConfirm ? (
                <div className="relative w-[90%]">
                  <p className="inline-block overflow-x-scroll w-[70%] h-[40px] text-2xl text-gray-700 font-bold">
                    {hosValue}
                  </p>
                  <button
                    name="sickConfirm"
                    onClick={onClickHos}
                    className="absolute right-[5%] top-[18%] text-xs text-orange-500 font-bold bg-gray-100 pl-[13px] pr-[13px] p-[5px] rounded-2xl"
                  >
                    수정
                  </button>
                </div>
              ) : (
                <div className="relative w-[90%]">
                  <input
                    type="text"
                    value={hosValue}
                    onChange={handleHosInputChange}
                    className="inline-block h-[40px] w-[70%] rounded-xl border border-black text-gray-700 bg-white text-lg"
                    placeholder="병원명을 입력해주세요."
                  />
                  <button
                    name="hosConfirm"
                    onClick={onClickHosConfirm}
                    className="inline-block absolute right-[5%] top-[18%] text-xs text-orange-500 font-bold bg-gray-100 pl-[13px] pr-[13px] p-[5px] rounded-2xl"
                  >
                    확인
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <hr className="border-1 border-gray-300 m-auto w-[70%]" />
      <div className="h-[30vh] w-[100%]">
        <div className="flex flex-col h-[30%] mt-[10%]">
          <p className="text-4xl font-black mb-[2%] ml-[3%]">약</p>
          <p className="text-base text-gray-500 ml-[3%]">
            복용하실 약을 입력해주세요.
          </p>
          <div className="flex justify-center w-full mt-[3vh]">
            <button
              name="medicine"
              onClick={handleMedicine}
              className="w-[80%] h-[40px] border-2 rounded-xl text-lg border-blue-200 text-blue-500 bg-white hover:bg-blue-200 hover:text-white"
            >
              약 입력
            </button>
          </div>
        </div>
      </div>
      <hr className="border-1 border-gray-300 m-auto w-[70%]" />
      <div className="w-[100%] h-[30vh]">
        <div className="flex flex-col h-[30%] mt-[10%]">
          {!selectedHos ? (
            <>
              <p className="text-4xl w-[50%] font-black mb-[2%] ml-[3%]">
                복용일
              </p>
              <p className="text-base text-gray-500 ml-[3%]">
                복용 시작일과 종료일을 입력해주세요.
              </p>
              <div className="flex justify-center w-full mt-[3vh]">
                <button
                  name="hospital"
                  onClick={onClickHos}
                  className="w-[80%] h-[40px] border-2 rounded-xl text-lg border-blue-200 text-blue-500 bg-white hover:bg-blue-200 hover:text-white"
                >
                  복용일 입력
                </button>
              </div>
            </>
          ) : (
            <div className="flex w-[100%] h-[6.4%] justify-center">
              <DatePicker
                selected={startDate}
                className="date-picker-input2"
                showIcon
                dateFormat="yyyy-MM-dd"
                placeholderText="시작일"
                onChange={handleStartDate}
                icon={
                  <img
                    src={CalendarImg} // 외부 이미지의 URL을 지정합니다.
                    className="date-picker-img"
                  />
                }
              ></DatePicker>
              <DatePicker
                selected={endDate}
                className="date-picker-input2"
                showIcon
                dateFormat="yyyy-MM-dd"
                placeholderText="죵료일"
                onChange={handleEndDate}
                icon={
                  <img
                    src={CalendarImg} // 외부 이미지의 URL을 지정합니다.
                    className="date-picker-img"
                  />
                }
              ></DatePicker>
            </div>
          )}
        </div>
      </div>
      <hr className="border-1 border-gray-300 m-auto w-[70%]" />
      <div className="flex h-[30vh] w-[100%]">
        <div className="flex flex-col w-full h-[30%] mt-[10%]">
          {!selectedSick ? (
            <>
              <p className="text-4xl w-[50%] font-black ml-[3%] mb-[2%]">
                복용주기
              </p>
              <p className="text-base w-[90%] text-gray-500 ml-[3%]">
                하루에 몇번, 몇일 간격으로 드시나요 ?
              </p>
              <div className="flex justify-center m-auto w-full mt-[3vh]">
                <button
                  name="sick"
                  onClick={onClickSick}
                  className="w-[80%] h-[40px] border-2 rounded-xl text-lg border-blue-200 text-blue-500 bg-white hover:bg-blue-200 hover:text-white"
                >
                  질병 입력
                </button>
              </div>
            </>
          ) : (
            <div>
              {selectedSick ? (
                <div className="flex justify-center items-center h-[6vh] mt-[1vh]">
                  <div className="w-[35%] h-[35px] flex justify-center items-center rounded-2xl border-blue-200 border-[1px] text-gray-500 text-[8px] inline-block m-auto ml-auto mr-[2vh]">
                    <input
                      type="number"
                      min="1"
                      max="100"
                      placeholder="ex)1"
                      className="text-[14px] text-right"
                      onChange={handleIntakeSum}
                    />
                    <button className="w-[30%] text-blue-400 text-left font-bold">
                      회 섭취
                    </button>
                  </div>
                  <div className="w-[35%] h-[35px] flex justify-center items-center rounded-2xl border-blue-200 border-[1px] text-gray-500 text-[8px] inline-block mr-auto ml-[2vh]">
                    <input
                      type="number"
                      min="1"
                      max="100"
                      placeholder="ex)0"
                      className="text-[14px] text-right"
                      onChange={handleIntakeCycle}
                    />
                    <button className="w-[30%] text-blue-400 text-left font-bold">
                      일 간격
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
      <hr className="border-1 border-gray-300 m-auto w-[70%]" />
      <SaveBtn className="h-[30px] w-[90%] mb-[10px] border-blue-200 border-2 text-blue-500 bg-white text-sm font-bold">저장하기</SaveBtn>
    </div>
  );
};

export default DirectRegister;
