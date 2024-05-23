import React, { useState } from 'react';

interface ModalProps {
  onConfirm: (
    selectedYear: number,
    selectedMonth: number,
    selectedDay: number,
  ) => void;

  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ onConfirm, onCancel }) => {
  const currentDate = new Date();
  const [selectedYear, setSelectedYear] = useState<number>(
    currentDate.getFullYear(),
  );
  const [selectedMonth, setSelectedMonth] = useState<number>(
    currentDate.getMonth(),
  );
  const [selectedDay, setSelectedDay] = useState<number>(currentDate.getDate());

  const handleConfirm = () => {
    onConfirm(selectedYear, selectedMonth, selectedDay);
  };
  const handleCancel = () => {
    onCancel();
  };

  const handleModalClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed bottom-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="modal p-8 bg-white rounded-lg overflow-y-auto"
        onClick={handleModalClick}
      >
        <label className="block text-center mb-2">
          원하는 날짜로 한번에 이동하려면
        </label>
        <label className="block text-center mb-8">
          날짜를 선택 이동 버튼을 눌러주세요.
        </label>
        <div className="flex justify-center mb-4 space-x-3">
          <div className="mb-4">
            <div className="relative">
              <select
                className="w-full border-gray-300 rounded-md p-[1vh] appearance-none"
                value={selectedYear}
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              >
                {Array.from({ length: 7 }, (_, i) => selectedYear - 3 + i).map(
                  (year) => (
                    <option key={year} value={year}>
                      {year}년
                    </option>
                  ),
                )}
              </select>
            </div>
          </div>
          <div className="mb-4 max-h-32 overflow-y-auto">
            <div className="relative">
              <select
                className="w-full border-gray-300 rounded-md p-[1vh] appearance-none"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              >
                {Array.from({ length: 12 }, (_, i) => i).map((month) => (
                  <option key={month} value={month}>
                    {month + 1}월
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <select
                className="w-full border-gray-300 rounded-md p-[1vh] appearance-none"
                value={selectedDay}
                onChange={(e) => setSelectedDay(parseInt(e.target.value))}
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    {day}일
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleCancel}
            className="w-1/2 mr-2 bg-gray-100 text-gray-400 py-2 rounded-md"
          >
            취소
          </button>
          <button
            onClick={handleConfirm}
            className="w-1/2 ml-2 bg-blue-500 text-white py-2 rounded-md"
          >
            이동
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
