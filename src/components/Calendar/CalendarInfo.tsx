import React, { useEffect, useState } from 'react';

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
  dosageData: Dosage[];
  handleDelete: (recordID: string) => void;
}

const CalendarInfo: React.FC<CalendarInfoProps> = ({
  selectedYear,
  month,
  selectedDay,
  dosageData,
  handleDelete,
}) => {
  const [deleteBtn, setDeleteBtn] = useState<boolean>(false);
  const [filteredDosage, setFilteredDosage] = useState<Dosage[]>([]);

  useEffect(() => {
    const filtered: Dosage[] = dosageData.filter((dosage) => {
      const intakeStart = new Date(dosage.IntakeStart);
      const intakeEnd = new Date(dosage.IntakeEnd);
      const selectedDate = new Date(selectedYear, month, selectedDay);

      return selectedDate >= intakeStart && selectedDate <= intakeEnd;
    });
    setFilteredDosage(filtered);
  }, [selectedYear, month, selectedDay, dosageData]);

  const clickedBtn = () => {
    setDeleteBtn(!deleteBtn);
  };

  return (
    <div className="dosage-info mt-5">
      {selectedDay && (
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold" style={{ paddingLeft: '8px' }}>
            {`${month + 1}월 ${selectedDay}일 복용 내역`}
          </h3>
          <span className="flex items-center" onClick={clickedBtn}>
            삭제
          </span>
        </div>
      )}
      {filteredDosage.length > 0 ? (
        <div className="mt-2" style={{ paddingLeft: '8px' }}>
          {filteredDosage.map((item) => (
            <div
              key={item.recordID}
              className="empty-dosage-info h-10 bg-gray-100 flex items-center text-black rounded-lg mt-1"
            >
              <span className="text-xs" style={{ padding: '8px' }}>
                {item.drugName}
              </span>
              {deleteBtn && (
                <button
                  onClick={() => handleDelete(item.recordID)}
                  className="flex items-center"
                  style={{ marginLeft: 'auto', marginRight: '10px' }}
                >
                  X
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div
          className="ml-2 mt-2 empty-dosage-info h-10 bg-gray-100 flex items-center text-black text-xs rounded-lg"
          style={{ paddingLeft: '8px' }}
        >
          기록없음
        </div>
      )}
    </div>
  );
};

export default CalendarInfo;
