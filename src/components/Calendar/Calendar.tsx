import React, { useEffect, useRef, useState } from 'react';
import Modal from './Modal';
import CalendarTable from './CalendarTable';
import CalendarInfo from './CalendarInfo';
import { useCalendar } from '../../hooks/useCalendar';
import CalendarLogo from '../../assets/Calendar/Calendar.svg';
import { dosageData as initialDosageData } from './CalMockData';

const CalendarStyle: React.CSSProperties = {
  borderRadius: '15px',
  backgroundColor: '',
  padding: '16px',
  overflowY: 'auto',
};

const Calendar: React.FC = () => {
  const {
    year,
    month,
    selectedDay,
    showModal,
    setShowModal,
    handleModalConfirm,
    handleModalCancel,
    handleDayClick,
    dates,
    handleScroll,
  } = useCalendar();

  const [dosageData, setDosageData] = useState(initialDosageData);
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    handleScroll(event);
  };
  const handleDelete = (recordID: string) => {
    setDosageData((prevDosageData) =>
      prevDosageData.filter((dosage) => dosage.recordID !== recordID),
    );
    console.log(`항목 ${recordID} 삭제됨`);
  };

  return (
    <div
      className="calendar-container"
      style={CalendarStyle}
      onWheel={handleWheel}
      ref={calendarRef}
    >
      <div className="top-bar flex items-center"></div>
      <div className="month-display flex items-center bg-white">
        <div className="Calendar">
          <img
            src={CalendarLogo}
            alt="Calendar"
            className="mr-2 cursor-pointer"
            onClick={() => setShowModal(true)}
          />
          <div className="mb-2" />
        </div>
        <span
          className="current-month font-bold"
          style={{ fontSize: '1.3rem' }}
        >
          {`${year}년 ${month + 1}월`}
          <div className="mb-2" />
        </span>
        {showModal && (
          <Modal onConfirm={handleModalConfirm} onCancel={handleModalCancel} />
        )}
      </div>
      <CalendarTable
        month={month}
        selectedDay={selectedDay}
        dates={dates}
        handleDayClick={handleDayClick}
        dosageData={dosageData}
      />
      <CalendarInfo
        selectedYear={year}
        month={month}
        selectedDay={selectedDay}
        dosageData={dosageData}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Calendar;
