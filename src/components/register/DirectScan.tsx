import React, { useContext, useRef } from 'react';
import CustomHr from '../CustomHr';
import RegisterIcon from '../../assets/register/Register3.png';
import QR from '../../assets/register/QRImg.png';
import BackBtn from './button/BackBtn';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {
  RegisterContext,
  RegisterContextProvider,
} from './context/RegisterContext';

const DirectScan: React.FC = () => {
  const { OCRData, setOCRData } = useContext(RegisterContext);
  const nevigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const dropFile = async (e: React.DragEvent) => {
    // 파일을 드레그 후 드랍할때 발생하는 함수.
    e.preventDefault();
    e.stopPropagation(); // 기본적인 동작 억제.
    const OCRImgFile = e.dataTransfer.files;
    if (OCRImgFile.length > 0) {
      if (fileInputRef.current) {
        fileInputRef.current.files = OCRImgFile;
        const formData = new FormData();
        formData.append('OCRImg', fileInputRef.current.files[0]);

        try {
          const response = await axios.post(
            'http://127.0.0.1:8000/test/',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            },
          );
          setOCRData({
            drugName: response.data.drugName,
            intakeStart: response.data.intakeStart,
            intakeEnd: response.data.intakeEnd,
            intakeCycle: response.data.intakeCycle,
            hospital: response.data.hospital,
            disease: response.data.disease,
          });
          console.log(response.data);
          console.log('Data response OK, redirecting...');
          nevigate('/scan-confirm');
        } catch (error) {
          console.error('Error:', error);
        }
      }
    }
  };

  const preventDragOver = (e: React.DragEvent) => {
    console.log('드레그 오버 이벤트 제한');
    e.preventDefault();
    e.stopPropagation();
  };

  const handleTest = () => {
    console.log(OCRData);
  };
  return (
    <>
      <BackBtn text="약봉투 등록하기"></BackBtn>
      <div className="min-h-[83vh] flex flex-col justify-center items-center overflow-hidden text-center">
        {/* //최상단 < 약봉투 등록하기 */}
        <div
          onDrop={dropFile}
          onDragOver={preventDragOver}
          className="w-[90%] h-[23vh] flex justify-center items-center bg-[#F5F5F5] border border-dashed border-black rounded-[10px] text-[0.9rem] mt-0 mb-[2vh]"
        >
          <img src={RegisterIcon} className="w-[10vh] h-[10vh] inline-block" />
          <input
            onChange={(e) => console.log(e.target.files)}
            style={{ display: 'none' }}
            accept="image/*"
            type="file"
            ref={fileInputRef}
          />
          <p>이곳에 이미지를 드래그하거나 파일을 업로드 하세요</p>
        </div>

        <CustomHr></CustomHr>
        <div className="w-full flex justify-center items-center h-[32vh] text-[0.9rem] flex-col">
          <img src={QR} className="w-[50vh] h-[30vh]" />
          <div
            onClick={handleTest}
            style={{
              width: '80%',
              textAlign: 'center',
              backgroundColor: '#D9D9D9',
              borderRadius: '20px',
              fontSize: '0.9rem',
              padding: '0.2rem',

              //맨 하단 코멘트 스타일 및 코멘트 박스 스타일
            }}
          >
            휴대폰으로 qr코드를 인식한 후 약 봉투를 스캔해주세요
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectScan;
