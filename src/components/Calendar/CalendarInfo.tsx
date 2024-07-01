import React from 'react';
import { dosageData } from './CalMockData';

interface Dosage {
  recordID: string;
  drugName: string;
  hospital: string;
  disease: string;
  IntakeStart: string;
  IntakeEnd: string;
}

interface CalendarInfoProps {
  selectedYear: number;
  month: number;
  selectedDay: number;
}

const CalendarInfo: React.FC<CalendarInfoProps> = ({
  selectedYear,
  month,
  selectedDay,
}) => {
  const filteredDosage: Dosage[] = dosageData.filter((dosage) => {
    const intakeStart = new Date(dosage.IntakeStart);
    const intakeEnd = new Date(dosage.IntakeEnd);
    const selectedDate = new Date(selectedYear, month, selectedDay);

    return selectedDate >= intakeStart && selectedDate <= intakeEnd;
  });

  return (
    <div className="dosage-info mt-5">
      {selectedDay && (
        <h3 className="text-lg font-bold" style={{ paddingLeft: '8px' }}>
          {`${month + 1}월 ${selectedDay}일 복용 내역`}
        </h3>
      )}
      {filteredDosage.length > 0 ? (
        <div className="mt-2" style={{ paddingLeft: '8px' }}>
          {filteredDosage.map((item) => (
            <div
              key={item.recordID}
              className="empty-dosage-info h-10 bg-gray-100 flex justify-start items-center text-black rounded-lg mt-1"
            >
              <span style={{ padding: '8px' }}>{item.drugName}</span>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="mt-2 empty-dosage-info h-10 bg-gray-100 flex justify-start items-center text-black text-xs rounded-lg"
          style={{ paddingLeft: '8px' }}
        >
          기록없음
        </div>
      )}
    </div>
  );
};

export default CalendarInfo;
