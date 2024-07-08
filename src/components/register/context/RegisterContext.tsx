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

interface DrugData {
  drugName: string;
  drugCode: string;
  drugPcode: string;
  drugCompany: string;
  check: boolean;
}

export const RegisterContext = createContext(initData);

export const RegisterContextProvider: React.FC = ({ children }) => {
  const [OCRData, setOCRData] = useState(initData);
  const [savedDrug, setSavedDrug] = useState<(DrugData | null)[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [hospital, setHospital] = useState<string>('');
  const [disease, setDisease] = useState<string>('');
  const [intakeDaily, setIntakeDaily] = useState<string>('');
  const [intakeCycle, setIntakeCycle] = useState<string>('');

  return (
    <RegisterContext.Provider
      value={{
        OCRData,
        setOCRData,
        savedDrug,
        setSavedDrug,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        hospital,
        setHospital,
        disease,
        setDisease,
        intakeDaily,
        setIntakeDaily,
        intakeCycle,
        setIntakeCycle,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
