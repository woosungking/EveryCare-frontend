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
  // 모달창 여닫기 useState

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const ExContainnerStyle = {
    width: '100%',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    textAlign: 'center',
    margin: '0',
    // backgroundColor: 'green',
  }; // 처방전 사진, 처방약품, 복용기간, 질환이름등 모든 컨텐츠를 감싸는 컨테이너

  const ListStyle = {
    width: '46%',
    height: '2.5vh',
    display: 'flex',
    marginTop: '10px',
    marginLeft: '0.8rem',
    border: '1px solid gray',
    borderRadius: '15px',
    justifyContent: 'center', // 수평 가운데 정렬
    alignItems: 'center', // 수직 가운데 정렬
    fontSize: '0.8rem',
    color: 'gray',
    position: 'relative',
    paddingTop: '1rem',
    paddingBottom: '1rem',
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

  const MediNameStyle = {
    flex: 1, // p 태그가 가능한 너비를 차지하도록 설정합니다.
    margin: '0', // p 태그의 기본 마진을 제거합니다.
    overflow: 'hidden', // 넘치는 텍스트를 숨깁니다.
    whiteSpace: 'nowrap', // 텍스트가 한 줄로 유지되도록 합니다.
    textOverflow: 'ellipsis', // 넘치는 텍스트를 말줄임표(...)로 표시합니다.
  };

  return (
    <>
      <BackBtn text="처방전 확인"></BackBtn>
      <div style={ExContainnerStyle}>
        <img
          src={Prescription}
          className="h-[30%] w-[80%] m-[auto] mt-[10px] mb-[0] pt-[2vh]"
        />
        <p
          style={{ textAlign: 'center', fontSize: '0.94rem', color: '#666666' }}
          className="mt-[0.5rem]"
        >
          등록한 처방전에서 개인정보는 저장되지 않습니다.
        </p>

        <div className="w-[100%] h-[15vh] relative mb-[0] mt-[0.8rem]">
          {' '}
          {/* //추가, 수정 소 버튼의 위치를 상대적으로 지정하기 위해 div로 한번 감싸주었음. */}
          <PillNextText
            className="absolute"
            headText="처방약품"
            contentText="sdd"
          ></PillNextText>
          <div
            style={{
              height: '10vh',
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
                width: '100%',
                height: '10vh',
                flexWrap: 'wrap',
              }}
            >
              <li style={ListStyle}>
                <p style={MediNameStyle}>씨프로바이정250밀리그램</p>
                <button style={deleteBtnStyle}>-</button>
              </li>
              <li style={ListStyle}>
                <p style={MediNameStyle}>씨프로바이정250밀리그램</p>
                <button style={deleteBtnStyle}>-</button>
              </li>
              <li style={ListStyle}>
                <p style={MediNameStyle}>씨프로바이정250밀리그램</p>
                <button style={deleteBtnStyle}>-</button>
              </li>
              <li style={ListStyle}>
                <p style={MediNameStyle}>씨프로바이정250밀리그램</p>
                <button style={deleteBtnStyle}>-</button>
              </li>
              <li style={ListStyle}>
                <p style={MediNameStyle}>
                  씨프로바이정2asndjknaskjndsajknsdjkn250밀리그램
                </p>
                <button style={deleteBtnStyle}>-</button>
              </li>
              <li style={ListStyle}>
                <p style={MediNameStyle}>씨프로바이정250밀리그램</p>
                <button style={deleteBtnStyle}>-</button>
              </li>
            </ul>

            <AddPillModal showModal={showModal} onClose={handleCloseModal}>
              <div className="w-[100%] h-[20%] mt-[2vh]">
                <input
                  type="text"
                  placeholder="   찾는 약이 있으신가요?"
                  className="mx-auto w-[80%] h-[5vh] border border-gray-300  "
                />

                <button className="w-[20%] h-[5vh] border border-gray-400 bg-gray-200">
                  검색 🔍
                </button>
              </div>
              {/* 상단 검색 */}

              <div className="w-[100%] h-[25vh] overflow-y-scroll text-[1vh]">
                <table className="w-[100%] h-[30vh] divide-y border-black border-1 table-fixed">
                  <thead className="w-[100%] h-[3vh] bg-gray-100 border-t-2 border-gray-300">
                    <tr>
                      <th className="h-[3vh] w-[26%] text-center align-middle text-[1.4vh] p-[5px] border-l-[1px] border-gray-200">
                        제품명
                      </th>
                      <th className="h-[3vh] w-[17%] text-center align-middle text-[1.4vh] p-[5px] border-l-[1px] border-gray-200">
                        제품코드
                      </th>
                      <th className="h-[3vh] w-[19%] text-center align-middle text-[1.4vh] p-[5px] border-l-[1px] border-gray-200">
                        주성분코드
                      </th>
                      <th className="h-[3vh] w-[28%] text-center align-middle text-[1.4vh] p-[5px] border-l-[1px] border-gray-200">
                        업체명
                      </th>
                      <th className="h-[3vh] w-[10%] text-center align-middle text-[1.4vh] p-[5px] border-l-[1px] border-r-[1px] border-gray-200">
                        선택
                      </th>
                    </tr>
                  </thead>
                  <tbody className="w-[100%] bg-white h-[80%] overflow-y-scroll">
                    <tr className="border border-gray-200 relative">
                      <td className="h-[4vh] w-[26%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        asdmjklasmdklmasdlkmaskldmsalasdjnasjkndjkasnjkdsan
                      </td>
                      <td className="h-[10%] w-[17%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        11231231223
                      </td>
                      <td className="h-[10%] w-[19%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        asdasd
                      </td>
                      <td className="h-[10%] w-[28%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        4124124124
                      </td>
                      <input className='absolute bottom-[50%] right-[3%]' type="checkbox" id="myCheckbox" />
                    </tr>
                    <tr className="border border-gray-200 relative">
                      <td className="h-[4vh] w-[26%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        asdmjklasmdklmasdlkmaskldmsalasdjnasjkndjkasnjkdsan
                      </td>
                      <td className="h-[10%] w-[17%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        11231231223
                      </td>
                      <td className="h-[10%] w-[19%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        asdasd
                      </td>
                      <td className="h-[10%] w-[28%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        4124124124
                      </td>
                      <input className='absolute bottom-[50%] right-[3%]' type="checkbox" id="myCheckbox" />
                    </tr>
                    <tr className="border border-gray-200 relative">
                      <td className="h-[4vh] w-[26%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        asdmjklasmdklmasdlkmaskldmsalasdjnasjkndjkasnjkdsan
                      </td>
                      <td className="h-[10%] w-[17%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        11231231223
                      </td>
                      <td className="h-[10%] w-[19%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        asdasd
                      </td>
                      <td className="h-[10%] w-[28%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        4124124124
                      </td>
                      <input className='absolute bottom-[50%] right-[3%]' type="checkbox" id="myCheckbox" />
                    </tr>
                    <tr className="border border-gray-200 relative">
                      <td className="h-[4vh] w-[26%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        asdmjklasmdklmasdlkmaskldmsalasdjnasjkndjkasnjkdsan
                      </td>
                      <td className="h-[10%] w-[17%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        11231231223
                      </td>
                      <td className="h-[10%] w-[19%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        asdasd
                      </td>
                      <td className="h-[10%] w-[28%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        4124124124
                      </td>
                      <input className='absolute bottom-[50%] right-[3%]' type="checkbox" id="myCheckbox" />
                    </tr>
                    <tr className="border border-gray-200 relative">
                      <td className="h-[4vh] w-[26%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        asdmjklasmdklmasdlkmaskldmsalasdjnasjkndjkasnjkdsan
                      </td>
                      <td className="h-[10%] w-[17%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        11231231223
                      </td>
                      <td className="h-[10%] w-[19%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        asdasd
                      </td>
                      <td className="h-[10%] w-[28%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        4124124124
                      </td>
                      <input className='absolute bottom-[50%] right-[3%]' type="checkbox" id="myCheckbox" />
                    </tr>
                    <tr className="border border-gray-200 relative">
                      <td className="h-[4vh] w-[26%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        asdmjklasmdklmasdlkmaskldmsalasdjnasjkndjkasnjkdsan
                      </td>
                      <td className="h-[10%] w-[17%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        11231231223
                      </td>
                      <td className="h-[10%] w-[19%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        asdasd
                      </td>
                      <td className="h-[10%] w-[28%] border border-gray-200 whitespace-normal overflow-x-scroll align-middle">
                        4124124124
                      </td>
                      <input className='absolute bottom-[50%] right-[3%]' type="checkbox" id="myCheckbox" />
                    </tr>
              
                   
                  </tbody>
                </table>
              </div>
            </AddPillModal>
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

        <div className="h-[15vh] w-[100%] mt-[2vh]">
          <PillNextText headText="복용기간"></PillNextText>

          <form
            style={{
              width: '100%',
              height: '6.4%',
              display: 'flex',
              justifyContent: 'center',
              // alignItems:"center",
            }}
          >
            <DatePicker
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
        </div>

        <div className="w-[100%] h-[30vh] mt-[1vh] relative">
          <PillNextText
            headText="질환이름"
            contentText="어떤 질환으로 약을 복용하시나요"
          ></PillNextText>
          <p
            style={{ textAlign: 'center', fontSize: '1rem', marginTop: '1rem' }}
          >
            알츠하이머
          </p>
          <div style={{ width: '100%', height: '15%' }}>
            <InputBtn
              style={{
                height: '100%',
                fontSize: '1.25rem',
                color: '#666',
                backgroundColor: 'white',
                border: '1px solid rgba(59, 171, 231, 0.51)',
                // paddingTop:"0.5rem",
                // paddingBottom:"0.5rem",
              }}
            >
              질병입력
            </InputBtn>
            <InputBtn
              style={{
                height: '100%',
                fontSize: '1.25rem',
                color: 'white',
                backgroundColor: '#A7D1FF',
                // paddingTop:"0.5rem",
                // paddingBottom:"0.5rem",
              }}
            >
              저장하기
            </InputBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScanConfirm;
