import React from 'react';
import { chunkArray } from '../../utils/helpers';

interface CalendarTableProps {
  month: number;
  selectedDay: number;
  dates: Array<{ day: number; month: number; year: number }>;
  handleDayClick: (day: number) => void;
}

const CalendarTable: React.FC<CalendarTableProps> = ({
  month,
  selectedDay,
  dates,
  handleDayClick,
}) => {
  return (
    <table className="calendar-table w-full mt-2">
      <thead>
        <tr className="bg-whtie">
          <th className="p-3">일</th>
          <th className="p-3">월</th>
          <th className="p-3">화</th>
          <th className="p-3">수</th>
          <th className="p-3">목</th>
          <th className="p-3">금</th>
          <th className="p-3">토</th>
        </tr>
      </thead>
      <tbody>
        {chunkArray(dates, 7).map((week, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {weekIndex >= 0 && (
              <tr className="border-[1px] border-gray-300"></tr>
            )}
            <tr>
              {week.map((date, dayIndex) => (
                <td
                  key={dayIndex}
                  className={`w-20 h-[8vh] ${date.month !== month ? 'text-gray-400' : ''} 
                  ${date.month === month && dayIndex === 0 ? 'text-red-500' : ''} 
                  ${date.month === month && dayIndex === 6 ? 'text-blue-500' : ''}`}
                  onClick={() => handleDayClick(date.day)}
                >
                  <div className="flex flex-col items-center pt-[0.4vh] w-full h-full">
                    <span
                      className={`flex justify-center items-center p-[0.3vh] ${date.month === month && date.day === selectedDay ? 'bg-blue-200 text-black rounded-full' : ''}`}
                    >
                      {date.day}
                    </span>
                    <div className="h-[0.3vh] w-full bg-gray-300 mt-[1vh] mb-[0.3vh]"></div>
                  </div>
                </td>
              ))}
            </tr>
            {weekIndex === chunkArray(dates, 7).length - 1 && (
              <tr className="border-[1px] border-gray-300"></tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default CalendarTable;
