import React from 'react';
import { useState } from 'react';
import RegisterSick from '../../assets/register/RegisterSick.svg';
import RegisterHos from '../../assets/register/RegisterHospital.svg';
import { useNavigate } from 'react-router-dom';

const DirectRegister: React.FC = () => {
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
    setSickConfirm(true);
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
    setHosConfirm(true);
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
    <div>
      <div className="mt-16 ml-5">
        <div className="flex flex-col mt-5" style={{ height: '200px' }}>
          {!selectedSick ? (
            <>
              <p className="text-4xl font-black mb-3">질병</p>
              <p className="text-base text-gray-500 mb-10">
                어떤 질병으로 약을 복용하시나요?
              </p>
              <div className="flex justify-center w-full">
                <button
                  name="sick"
                  onClick={onClickSick}
                  className="w-[125px] h-[40px] border-2 rounded-xl text-lg mb-12 border-blue-200 text-blue-500 bg-white hover:bg-blue-200 hover:text-white"
                >
                  질병 입력
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-4 mt-5 mb-36">
              <img src={RegisterSick} alt="질병" />
              {sickConfirm ? (
                <p className="text-2xl text-gray-700">{sickValue}</p>
              ) : (
                <>
                  <input
                    type="text"
                    value={sickValue}
                    onChange={handleSickInputChange}
                    className="h-[40px] w-[300px] rounded-xl border border-black text-gray-700 bg-white text-lg"
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
          <hr className="border-t-1.5 border-gray-300 w-[400px]" />
        </div>
      </div>
      <div className="mt-16 ml-5">
        <div className="flex flex-col mt-1">
          {!selectedHos ? (
            <>
              <p className="text-4xl font-black mb-3">병원</p>
              <p className="text-base text-gray-500 mb-10">
                처방 받으신 병원을 입력해주세요.
              </p>
              <div className="flex justify-center w-full">
                <button
                  name="hospital"
                  onClick={onClickHos}
                  className="w-[125px] h-[40px] border-2 rounded-xl text-lg mb-12 border-blue-200 text-blue-500 bg-white hover:bg-blue-200 hover:text-white"
                >
                  병원 입력
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-4 mt-5 mb-36">
              <img src={RegisterHos} alt="hopital" />
              {hosConfirm ? (
                <p className="text-2xl text-gray-700">{hosValue}</p>
              ) : (
                <>
                  <input
                    type="text"
                    value={hosValue}
                    onChange={handleHosInputChange}
                    className="h-[40px] w-[285px] rounded-xl border border-black text-gray-700 bg-white text-lg"
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
          <hr className="border-t-1.5 border-gray-300 w-[400px]" />
        </div>
      </div>
      <div className="mt-16 ml-5">
        <div className="flex flex-col mt-1">
          <p className="text-4xl font-black mb-3">약</p>
          <p className="text-base text-gray-500 mb-10">
            복용하실 약을 입력해주세요.
          </p>
          <div className="flex justify-center w-full">
            <button
              name="medicine"
              onClick={handleMedicine}
              className="w-[125px] h-[40px] border-2 rounded-xl text-lg mb-12 border-blue-200 text-blue-500 bg-white hover:bg-blue-200 hover:text-white"
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
