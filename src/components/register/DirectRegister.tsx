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

  const [selectedHos, setSelectedHos] = useState<boolean>(false);
  const [hosConfirm, setHosConfirm] = useState<boolean>(false);

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

  const onClickSick = () => {
    setSelectedSick(true);
    setSickConfirm(false);
  };
  const onClickSickConfirm = () => {
    const trimmedValue = disease.trim();
    if (trimmedValue === '') {
      console.log('아무것도 입력되지 않았습니다.');
      alert('질병명을 입력해주세요!');
      setDisease(trimmedValue);
    } else {
      setSickConfirm(true);
    }
  };
  const handleSickInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDisease(event.target.value);
    console.log(event.target.value);
  };

  const onClickHos = () => {
    setSelectedHos(true);
    setHosConfirm(false);
  };
  const onClickHosConfirm = () => {
    const trimmedValue = hospital.trim();
    if (trimmedValue === '') {
      console.log('아무것도 입력되지 않았습니다.');
      alert('처방 받으신 병원을 입력해주세요!');
      setHospital(trimmedValue);
    } else {
      setHosConfirm(true);
    }
  };
  const handleHosInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHospital(event.target.value);
    console.log(event.target.value);
  };

  const navigate = useNavigate();

  const handleRedirect = (path) => {
    console.log(path, 'redirecting ...');
    navigate(path);
  };

  const handleStartDate = (date: Date) => {
    console.log(date);
    setStartDate(date);
  };
  const handleEndDate = (date: Date) => {
    console.log(date);
    setEndDate(date);
  };

  const handleIntakeCycle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCycle = e.target.value;
    console.log(newCycle);
    setIntakeCycle(newCycle);
  };
  const handleIntakeDaily = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSum = e.target.value;
    console.log(newSum);
    setIntakeDaily(newSum);
  };
  const handleSubmitData = () => {
    console.log('병원 : ', hospital);
    console.log('질병 : ', disease);
    console.log('약품 : ', savedDrug);
    console.log('시작일, 종료일 : ', startDate, endDate);
    console.log('주기, 총 합 : ', intakeCycle, intakeDaily);
  };
  return (
    <div className="h-[86vh] w-100% items-center overflow-auto">
      <div className="flex h-[25vh] w-[100%]">
        <div className="flex flex-col w-full h-[30%] mt-[12%]">
          {!selectedSick ? (
            <>
              <p className="text-3xl w-[50%] font-black ml-[5%] mb-[2%]">
                질병
              </p>
              <p className="text-base w-[90%] text-gray-500 ml-[5%]">
                어떤 질병으로 약을 복용하시나요?
              </p>
              <div className="flex justify-center m-auto w-full mt-[5vh]">
                <button
                  name="sick"
                  onClick={onClickSick}
                  className="w-[50%] h-[37px] border-2 rounded-3xl text-lg border-blue-200 text-blue-500 bg-white hover:bg-blue-200 hover:text-white"
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
                  <p className="inline-block w-[70%] h-[40px] text-2xl text-gray-700 font-bold">
                    {disease}
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
                    value={disease}
                    onChange={handleSickInputChange}
                    className="h-[40px] w-[70%] rounded-xl border border-black text-gray-700 bg-white text-lg p-2"
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
      <hr className="border-1 border-gray-300 m-auto w-[85%]" />
      <div className="w-[100%] h-[22vh]">
        <div className="flex flex-col h-[30%] mt-[12%]">
          {!selectedHos ? (
            <>
              <p className="text-3xl w-[50%] font-black mb-[2%] ml-[5%]">
                병원
              </p>
              <p className="text-base text-gray-500 ml-[5%]">
                처방 받으신 병원을 입력해주세요.
              </p>
              <div className="flex justify-center w-full mt-[5vh]">
                <button
                  name="hospital"
                  onClick={onClickHos}
                  className="w-[50%] h-[37px] border-2 rounded-3xl text-lg border-blue-200 text-blue-500 bg-white hover:bg-blue-200 hover:text-white"
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
                  <p className="inline-block w-[70%] h-[40px] text-2xl text-gray-700 font-bold">
                    {hospital}
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
                    value={hospital}
                    onChange={handleHosInputChange}
                    className="inline-block h-[40px] w-[70%] rounded-xl border border-black text-gray-700 bg-white text-lg p-2"
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
      <hr className="border-1 border-gray-300 m-auto w-[85%]" />
      <div className="h-[22vh] w-[100%]">
        <div className="flex flex-col h-[30%] mt-[12%]">
          <p className="text-3xl font-black mb-[2%] ml-[5%]">약</p>
          <p className="text-base text-gray-500 ml-[5%]">
            복용하실 약을 입력해주세요.
          </p>
          <div className="flex justify-center space-x-7 mt-[5vh]">
            <button
              name="medicine"
              onClick={() => handleRedirect('/pill-search')}
              className="w-[38%] h-[37px] border-2 rounded-3xl text-lg border-blue-200 text-blue-500 bg-white hover:bg-blue-200 hover:text-white"
            >
              약 입력
            </button>
            <button
              name="medicine"
              onClick={() => handleRedirect('/pill-register')}
              className="w-[38%] h-[37px] border-2 rounded-3xl text-lg border-blue-200 text-blue-500 bg-white hover:bg-blue-200 hover:text-white"
            >
              입력 확인
            </button>
          </div>
        </div>
      </div>
      <hr className="border-1 border-gray-300 m-auto w-[85%]" />
      <div className="w-[100%] h-[22vh]">
        <div className="flex flex-col h-[30%] mt-[12%]">
          {!selectedHos ? (
            <>
              <p className="text-3xl w-[50%] font-black mb-[2%] ml-[5%]">
                복용일
              </p>
              <p className="text-base text-gray-500 ml-[5%]">
                복용 시작일과 종료일을 입력해주세요.
              </p>
              <div className="flex justify-center w-full mt-[5vh]">
                <button
                  name="hospital"
                  onClick={onClickHos}
                  className="w-[50%] h-[37px] border-2 rounded-3xl text-lg border-blue-200 text-blue-500 bg-white hover:bg-blue-200 hover:text-white"
                >
                  복용일 입력
                </button>
              </div>
            </>
          ) : (
            <div className="flex justify-center space-x-6 mt-10 mr-7">
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
      <hr className="border-1 border-gray-300 m-auto w-[85%]" />
      <div className="flex h-[27vh] w-[100%]">
        <div className="flex flex-col w-full h-[30%] mt-[12%]">
          {!selectedSick ? (
            <>
              <p className="text-3xl w-[50%] font-black ml-[5%] mb-[2%]">
                복용주기
              </p>
              <p className="text-base w-[90%] text-gray-500 ml-[5%]">
                하루에 몇번, 몇일 간격으로 드시나요 ?
              </p>
              <div className="flex justify-center m-auto w-full mt-[5vh]">
                <button
                  name="sick"
                  onClick={onClickSick}
                  className="w-[50%] h-[37px] border-2 rounded-3xl text-lg border-blue-200 text-blue-500 bg-white hover:bg-blue-200 hover:text-white"
                >
                  주기 입력
                </button>
              </div>
            </>
          ) : (
            <div>
              {selectedSick ? (
                <div className="flex justify-center items-center h-[6vh] mt-[1vh]">
                  <div className="w-[40%] h-[35px] flex justify-center rounded-2xl border-blue-200 border-[1px] text-gray-500 text-[8px] m-auto ml-auto">
                    <input
                      type="number"
                      min="1"
                      max="100"
                      placeholder="ex)1"
                      className="text-[14px] text-right"
                      onChange={handleIntakeDaily}
                      value={intakeDaily}
                    />
                    <button className="w-[30%] text-blue-400 text-xs text-left font-bold">
                      회 섭취
                    </button>
                  </div>
                  <div className="w-[40%] h-[35px] flex justify-center rounded-2xl border-blue-200 border-[1px] text-gray-500 text-[8px] mr-auto">
                    <input
                      type="number"
                      min="1"
                      max="100"
                      placeholder="ex)0"
                      className="text-[14px] text-right"
                      onChange={handleIntakeCycle}
                      value={intakeCycle}
                    />
                    <button className="w-[30%] text-blue-400 text-xs text-left font-bold">
                      일 간격
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
      <hr className="border-1 border-gray-300 m-auto w-[85%] mt-[10px]" />

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

export default DirectRegister;
