import React from 'react';

//ocr확인 페이지에 있는 저장하기 버튼 컴포넌트.
interface SaveBtnProps {
  className?: string;
  children?: React.ReactNode;
}

const SaveBtn: React.FC<SaveBtnProps> = ({ children, className }) => {
  return (
    <button
      type="submit"
      className={`rounded-2xl bg-[#E4EFFB] w-[80%] h-[7%] block mx-auto mt-4 ${className}`}
    >
      {children}
    </button>
  );
};

export default SaveBtn;
