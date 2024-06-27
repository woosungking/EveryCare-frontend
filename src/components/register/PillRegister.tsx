import React, { useState } from 'react';
import PillNextText from '../../components/register/PillNextText';

const PillRegister: React.FC = () => {
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

  return (
    <div className="flex flex-col h-[70vh]">
      <div className="w-full h-[20vh] mt-10 mb-5 md:mt-20 md:mb-10">
        <PillNextText
          headText="복약 횟수"
          contentText="하루에 몇 번 복용하시나요?"
        />
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col justify-center items-center space-y-6"
        >
          <div className="flex justify-center space-x-8 w-full px-4">
            <button
              name="everyday"
              onClick={onClick}
              className={`w-[40%] h-[3vh] rounded-xl border-2 ${
                selectedBtn === 'everyday'
                  ? 'border-blue-200 text-white bg-blue-200'
                  : 'border-blue-200 text-blue-500 bg-white'
              } text-sm font-bold`}
            >
              매일
            </button>

            <button
              name="interval"
              onClick={onClick}
              className={`w-[40%] h-[3vh] rounded-xl border-2 ${
                selectedBtn === 'interval'
                  ? 'border-blue-200 text-white bg-blue-200'
                  : 'border-blue-200 text-blue-500 bg-white'
              } text-sm font-bold`}
            >
              특수 일수 간격
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
      <div className="w-full h-[20vh] mt-10 mb-5 md:mt-20 md:mb-10">
        <PillNextText headText="시작일" contentText="언제 복약을 시작하나요?" />
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col justify-center items-center space-y-4"
        >
          <div className="flex justify-center space-x-8 w-full max-w-[600px] px-4">
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
      </div>
      <div className="w-full h-[20vh] mt-10 mb-5 md:mt-20 md:mb-10">
        <PillNextText headText="종료일" contentText="언제 복약을 종료하나요?" />
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col justify-center items-center space-y-4"
        >
          <div className="flex justify-center space-x-8 w-full max-w-[600px] px-4">
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
      </div>
      <div className="flex justify-center mt-16">
        <button className="justify-center h-[35px] w-[40%] rounded-xl border-2 border-blue-300 text-white bg-blue-300 text-base font-bold">
          등록하기
        </button>
      </div>
    </div>
  );
};

export default PillRegister;
