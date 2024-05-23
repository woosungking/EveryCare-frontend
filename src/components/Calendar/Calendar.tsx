import React, { useRef } from 'react';
import Modal from './Modal';
import CalendarTable from './CalendarTable';
import CalendarInfo from './CalendarInfo';
import { useCalendar } from '../../hooks/useCalendar';
// import { Link } from 'react-router-dom';

import CalendarLogo from '../../assets/Calendar/Calendar.svg';

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
    dosage,
    dates,
    handleScroll,
  } = useCalendar();

  const calendarRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    handleScroll(event);
  };

  // const handleHomeClick = () => {
  //   // 홈 페이지로 이동하는 로직 추가
  // };

  // const handleHistoryClick = () => {
  //   // 복용 내역 페이지로 이동하는 로직 추가
  // };

  // const handleRegisterClick = () => {
  //   // 약봉투 등록 페이지로 이동하는 로직 추가
  // };

  // const handleSearchClick = () => {
  //   // 약 검색 페이지로 이동하는 로직 추가
  // };

  // const handleProfileClick = () => {
  //   // 내 정보 페이지로 이동하는 로직 추가
  // };

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
      />{' '}
      {/* 복용 내역 정보 */}
      <CalendarInfo month={month} selectedDay={selectedDay} dosage={dosage} />
    </div>
  );
};

export default Calendar;
