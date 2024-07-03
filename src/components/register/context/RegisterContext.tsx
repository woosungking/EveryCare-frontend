import React, { createContext, useState } from 'react';

interface OCRDataType {
  // OCR 인식으로 받은 처방전 데이터 인터페이스
  drugName?: string[];
  intakeStart?: string;
  intakeEnd?: string;
  intakeCycle?: string;
  hospital?: string;
  disease?: string;
}

const initData: OCRDataType = {
  drugName: ['약1 초기화', '약2 초기화'],
  intakeStart: '졸료일 초기화',
  intakeEnd: '시작일 초기화',
  intakeCycle: '주기 초기화',
  hospital: '병원 초기화',
  disease: '감기 초기화',
};

// export const RegisterContext = createContext<{
//   OCRData: OCRDataType;
//   setOCRData: React.Dispatch<React.SetStateAction<OCRDataType>>;
// }>({
//   OCRData: initData,
//   setOCRData: () => {
//     throw new Error('오류~~ ㅠㅠㅠ 살려줘');
//   },
// });
export const RegisterContext = createContext({
  OCRData: initData,
});

export const RegisterContextProvider: React.FC = ({ children }) => {
  const [OCRData, setOCRData] = useState(initData);

  return (
    <RegisterContext.Provider value={{ OCRData, setOCRData }}>
      {children}
    </RegisterContext.Provider>
  );
};