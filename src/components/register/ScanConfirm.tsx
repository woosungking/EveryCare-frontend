import React, { useState } from 'react';
import Prescription from '../../assets/register/Prescription.png';
import PillNextText from './PillNextText';
import BackBtn from './button/BackBtn';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import CalendarImg from '../../assets/calendar.png';

import './CustomDatePicker.css';
import InputBtn from '../button/Btn2';
import AddPillModal from './AddPillModal';
const ScanConfirm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const ExContainnerStyle = {
    width: '453px',
    padding:"16px",
    marginTop: '3%',
    marginBottom: '50%',
    // backgroundColor: 'green',
  }; // 처방전 사진, 처방약품, 복용기간, 질환이름등 모든 컨텐츠를 감싸는 컨테이너

  const ListStyle = {
    width: '46%',
    height: '28px',
    display: 'block',
    marginTop: '10px',
    marginLeft: '0.8rem',
    border: '1px solid gray',
    borderRadius: '15px',
    // backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center', // 수평 가운데 정렬
    alignItems: 'center', // 수직 가운데 정렬
    fontSize: '0.8rem',
    color: 'gray',
    fontSize: '0.94rem',
    position: 'relative',
    paddingRight: '1rem',
  };

  const deleteBtnStyle = {
    width: '1rem',
    height: '1rem',
    border: '1px solid #F5F5F5',
    borderRadius: '10px',
    fontSize: '1rem',
    color: '#F56132',
    backgroundColor: 'rgba(217, 217, 217, 0.58)',
    position: 'absolute',
    right: '1%',
    top: '18%',
    fontWeight: 'bold',
  };
  return (
    <div style={ExContainnerStyle} className="h-[60vh]">
      <BackBtn text="처방전 확인"></BackBtn>

      <div
        style={{
          backgroundColor: '#F4F4F5',
          width: '95%',
          height: '38%',
          marginTop: '10px',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          justifyContent: 'center',
          justifyItems: 'center',
          flexDirection: 'column',
        }}
      >
        <img
          src={Prescription}
          style={{ height: '95%', width: '95%', margin: 'auto' }}
        />
      </div>
      {/* 스캔한 처방전 사진이 보여지는 컨테이너 */}

      <div
        style={{ textAlign: 'center', fontSize: '0.94rem', color: '#666666' }}
      >
        등록한 처방전에서 개인정보는 저장되지 않습니다.
      </div>

      <div className="relative">
        {/* //추가, 수정 소 버튼의 위치를 상대적으로 지정하기 위해 div로 한번 감싸주었음. */}
        <PillNextText headText="처방약품"></PillNextText>
        <div
          style={{
            height: '5rem',
            maxWidth: '90%',
            minWidth: '90%',
            backgroundColor: 'white',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            overflow: 'scroll',
          }}
        >
          <ul
            style={{
              display: 'flex',
              // position: 'relative',
              // justifyContent: 'space-between',
              width: '100%',
              height: '100%',
              flexWrap: 'wrap',
            }}
          >
            <li style={ListStyle}>
              <p>씨프로바이정250밀리그램</p>
              <button style={deleteBtnStyle}>-</button>
            </li>
            <li style={ListStyle}>
              <p>씨프로바이정250밀리그램</p>
              <button style={deleteBtnStyle}>-</button>
            </li>
            <li style={ListStyle}>
              <p>씨프로바이정250밀리그램</p>
              <button style={deleteBtnStyle}>-</button>
            </li>
            <li style={ListStyle}>
              <p>씨프로바이정250밀리그램</p>
              <button style={deleteBtnStyle}>-</button>
            </li>
            <li style={ListStyle}>
              <p>씨프로바이정250밀리그램</p>
              <button style={deleteBtnStyle}>-</button>
            </li>
            <li style={ListStyle}>
              <p>씨프로바이정250밀리그램</p>
              <button style={deleteBtnStyle}>-</button>
            </li>
            <li style={ListStyle}>
              <p>씨프로바이정250밀리그램</p>
              <button style={deleteBtnStyle}>-</button>
            </li>
            <li style={ListStyle}>
              <p>씨프로바이정250밀리그램</p>
              <button style={deleteBtnStyle}>-</button>
            </li>
          </ul>
        </div>
        <button
          style={{
            position: 'absolute',
            right: '7%',
            top: '10%',
            width: '2.3125rem',
            height: '1.125rem',
            borderRadius: '2.34375rem',
            backgroundColor: '#F5F5F5',
            color: '#F56132',
            textAlign: 'center',
            fontFamily: 'Abhaya Libre ExtraBold',
            fontSize: '0.625rem',
            fontStyle: 'normal',
            fontWeight: 800,
            lineHeight: 'normal',
          }}
          onClick={handleOpenModal} // 모달창 open 핸들러
        >
          추가
        </button>
      </div>
      <PillNextText headText="복용기간"></PillNextText>

      <form
        style={{
          width: '100%',
          height: '6.4%',
          marginTop: '0.5rem',
          marginBottom: '2rem',
          // backgroundColor: 'red',
        }}
      >
        <DatePicker
          // style={{
          //   width: '38%',
          //   height: '75%',
          //   fontSize: '1rem',
          //   display: 'block',
          //   margin: 'auto',
          //   marginLeft: '10px',
          // }}
          className="date-picker-input"
          showIcon
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          placeholderText="시작일"
          icon={
            // 외부 이미지를 사용하려면 아이콘을 <img> 요소로 변경합니다.
            <img
              src={CalendarImg} // 외부 이미지의 URL을 지정합니다.
              alt="Icon" // 이미지에 대한 대체 텍스트를 제공합니다.
              className="date-picker-img"
            />
          }
        />
        <DatePicker
          // className="border border-gray-300 rounded-lg"
          className="date-picker-input"
          showIcon
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          placeholderText="죵료일"
          icon={
            // 외부 이미지를 사용하려면 아이콘을 <img> 요소로 변경합니다.
            <img
              src={CalendarImg} // 외부 이미지의 URL을 지정합니다.
              className="date-picker-img"
            />
          }
        />
      </form>
      <PillNextText headText="질환이름"></PillNextText>
      <p
        style={{
          // backgroundColor: 'blue',
          width: '85%',
          marginLeft: 'auto',
          fontSize: '1rem',
          color: '#9E9797',
        }}
      >
        어떤 질병으로 약을 복용하시나요
      </p>
      <p style={{ textAlign: 'center', fontSize: '1rem', marginTop: '1rem' }}>
        알츠하이머
      </p>
      <div style={{ width: '100%', height: '15%' }}>
        <InputBtn
          style={{
            height: '40%',
            fontSize: '1.25rem',
            color: '#666',
            backgroundColor: 'white',
            border: '1px solid rgba(59, 171, 231, 0.51)',
          }}
        >
          질병입력
        </InputBtn>
        <InputBtn
          style={{
            height: '40%',
            fontSize: '1.25rem',
            color: 'white',
            backgroundColor: '#A7D1FF',
          }}
        >
          저장하기
        </InputBtn>
      </div>

      <AddPillModal showModal={showModal} onClose={handleCloseModal}>
        <h2>모달 창 내용</h2>
        <p>여기에 추가할 내용을 넣으세요.</p>
      </AddPillModal>
      
    </div>
  );
};

export default ScanConfirm;
