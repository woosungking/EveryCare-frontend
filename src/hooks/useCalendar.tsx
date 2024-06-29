// src/hooks/useCalendar.ts
import { useState, useEffect } from 'react';
import { dosageData } from '../components/Calendar/CalMockData';

export const useCalendar = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [selectedDay, setSelectedDay] = useState<number>(new Date().getDate());
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dosage, setDosage] = useState<string | null>(null);
  const [dates, setDates] = useState<
    Array<{ day: number; month: number; year: number }>
  >([]);
  const [dosageDataState, setDosageDataState] = useState(dosageData);

  useEffect(() => {
    const fetchData = async () => {
      // 여기서 나중에 실제 API로 변경
      // const response = await fetch('API_URL');
      // const data = await response.json();

      // 현재는 가짜 데이터 사용
      const data = dosageData;
      setDosageDataState(data); // 복용 기간 데이터 설정
    };

    fetchData();
  }, []);

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
    const selectedDate = new Date(year, month, day);
    const selectedDosage = dosageDataState.find((dosage) => {
      const startDate = new Date(dosage.IntakeStart);
      const endDate = new Date(dosage.IntakeEnd);
      return selectedDate >= startDate && selectedDate <= endDate;
    });
    setDosage(selectedDosage ? selectedDosage.drugName : null);
  };

  const handleModalConfirm = (
    selectedYear: number,
    selectedMonth: number,
    selectedDay: number,
  ) => {
    setYear(selectedYear);
    setMonth(selectedMonth);
    setSelectedDay(selectedDay);
    setShowModal(false);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY < 0) {
      setMonth((prev) => (prev === 0 ? 11 : prev - 1));
      setYear((prev) => (prev === 0 ? prev - 1 : prev));
    } else {
      setMonth((prev) => (prev === 11 ? 0 : prev + 1));
      setYear((prev) => (prev === 11 ? prev + 1 : prev));
    }
  };

  useEffect(() => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const newDates = Array.from({ length: daysInMonth }, (_, index) => ({
      day: index + 1,
      month: month,
      year: year,
    }));
    setDates(newDates);
  }, [year, month]);

  const initializeCalendar = () => {
    const currentDate = new Date();
    setYear(currentDate.getFullYear());
    setMonth(currentDate.getMonth());
    setSelectedDay(currentDate.getDate());
    setShowModal(false);
  };

  return {
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
    dosageData: dosageDataState,
    initializeCalendar,
  };
};
