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
      className={`rounded-2xl bg-sky-200 w-[80%] h-[50px] block mx-auto mt-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SaveBtn;
