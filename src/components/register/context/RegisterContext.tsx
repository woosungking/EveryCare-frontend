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
  drugName: [],
  intakeStart: '',
  intakeEnd: '',
  intakeCycle: '',
  hospital: '',
  disease: '',
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