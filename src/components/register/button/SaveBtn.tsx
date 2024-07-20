import React from 'react';

//ocr확인 페이지에 있는 저장하기 버튼 컴포넌트.
interface SaveBtnProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const SaveBtn: React.FC<SaveBtnProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={`justify-center rounded-2xl text-white bg-blue-300 text-base font-bold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SaveBtn;
