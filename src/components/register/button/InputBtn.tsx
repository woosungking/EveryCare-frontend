import React from 'react';

interface InputBtnProps {
  children?: React.ReactNode;
  className?: string;
}

const InputBtn: React.FC<InputBtnProps> = ({ children, className }) => {
  return (
    <button
      type="submit"
      className={`${className} rounded-2xl bg-[#E4EFFB] block mx-auto mt-4`}
    >
      {children}
    </button>
  );
};

export default InputBtn;
