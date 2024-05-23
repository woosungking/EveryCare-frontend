// useCalendar.tsx
import { useCallback, useState } from 'react';
import { startOfMonth, endOfMonth, subMonths, addMonths } from 'date-fns';
import { throttle } from 'lodash';

interface CalendarDate {
  day: number;
  month: number;
  year: number;
}

export const useCalendar = () => {
  const currentDate = new Date();
  const [year, setYear] = useState<number>(currentDate.getFullYear());
  const [month, setMonth] = useState<number>(currentDate.getMonth());
  const [selectedDay, setSelectedDay] = useState<number>(currentDate.getDate());
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dosage, setDosage] = useState<string | null>(null);

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

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
    // 클릭한 날짜의 복용 내역 요청 (현재는 빈 상자만 표시)
    setDosage(null); // 일단 빈 상자로 초기화
    // 이후에 데이터베이스에서 복용 내역을 가져와서 setDosage로 설정하면 됨
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = useCallback(
    throttle((e: React.WheelEvent<HTMLDivElement>) => {
      const delta = e.deltaY;

      if (delta < 0) {
        // 스크롤을 위로 올릴 때
        if (month === 0 && year > currentDate.getFullYear() - 5) {
          setYear(year - 1);
          setMonth(11);
        } else if (month > 0) {
          setMonth(month - 1);
        }
      } else if (delta > 0) {
        // 스크롤을 아래로 내릴 때
        if (month === 11 && year < currentDate.getFullYear() + 5) {
          setYear(year + 1);
          setMonth(0);
        } else if (month < 11) {
          setMonth(month + 1);
        }
      }
    }, 5000),
    [month, year],
  );

  // 날짜 데이터 생성
  const firstDayOfMonth = startOfMonth(new Date(year, month, 1));
  const lastDayOfMonth = endOfMonth(new Date(year, month, 1));

  const dates: CalendarDate[] = [];

  const lastDayOfPrevMonth = endOfMonth(subMonths(firstDayOfMonth, 1));
  const fristDayOfNextMonth = startOfMonth(addMonths(lastDayOfMonth, 1));
  const daysFromPrevMonth = firstDayOfMonth.getDay();
  const daysFromNextMonth = lastDayOfMonth.getDay();

  // 이전 달
  for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
    const preDate = lastDayOfPrevMonth.getDate() - i;
    dates.push({ day: preDate, month: month - 1, year });
  }

  // 이번 달
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    dates.push({ day: i, month, year });
  }

  // 다음 달
  const remainingDays = 6 - daysFromNextMonth;
  for (let i = 1; i <= remainingDays; i++) {
    const nextDate = fristDayOfNextMonth.getDate() + i;
    dates.push({ day: nextDate, month: month + 1, year });
  }

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
  };
};
