import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import RegisterSick from '../../assets/register/RegisterSick.svg';
import RegisterHos from '../../assets/register/RegisterHospital.svg';
import { useNavigate } from 'react-router-dom';
// import CustomHr from '../CustomHr';
import { RegisterContext } from './context/RegisterContext';

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

  return (
    <div className="h-[83vh] w-100% flex justify-center flex-col items-center space-y-[2vh]">
      <div className="flex h-[35%] w-[100%]">
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
                <p className="text-2xl text-gray-700">{sickValue}</p>
              ) : (
                <>
                  <input
                    type="text"
                    value={sickValue}
                    onChange={handleSickInputChange}
                    className="h-[40px] w-[70%] rounded-xl border border-black text-gray-700 bg-white text-lg"
                    placeholder="질병명을 입력해주세요."
                  />
                  <button
                    name="sickConfirm"
                    onClick={onClickSickConfirm}
                    className="text-xs text-blue-500 bg-white"
                  >
                    확인
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <hr className="border-1 border-gray-300 m-auto w-[70%]" />
      <div className="w-[100%] h-[35%]">
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
                <p className="text-2xl text-gray-700">{hosValue}</p>
              ) : (
                <>
                  <input
                    type="text"
                    value={hosValue}
                    onChange={handleHosInputChange}
                    className="h-[40px] w-[70%] rounded-xl border border-black text-gray-700 bg-white text-lg"
                    placeholder="병원명을 입력해주세요."
                  />
                  <button
                    name="hosConfirm"
                    onClick={onClickHosConfirm}
                    className="text-xs text-blue-500 bg-white"
                  >
                    확인
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <hr className="border-1 border-gray-300 m-auto w-[70%]" />
      <div className="bg-pih-[35%] w-[100%]">
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
    </div>
  );
};

export default DirectRegister;
