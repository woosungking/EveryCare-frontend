import React from 'react';

interface CalendarInfoProps {
  month: number;
  selectedDay: number;
  dosage: string | null;
}

const CalendarInfo: React.FC<CalendarInfoProps> = ({
  month,
  selectedDay,
  dosage,
}) => {
  return (
    <div className="dosage-info mt-5">
      {selectedDay && (
        <h3
          className="text-lg font-bold"
          style={{ paddingLeft: '8px' }}
        >{`${month + 1}월 ${selectedDay}일 복용 내역`}</h3>
      )}
      {dosage ? (
        <p className="mt-2">{dosage}</p>
      ) : (
        <div
          className=" mt-2 empty-dosage-info h-10 bg-gray-100 flex justify-start items-center text-gray-500 rounded-lg"
          style={{ paddingLeft: '8px' }}
        >
          기록 없음
        </div>
      )}
    </div>
  );
};

export default CalendarInfo;
