import React from 'react';

interface InputBtnProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const InputBtn: React.FC<InputBtnProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button
      type="submit"
      // className={`${className} rounded-2xl border-blue-200 border-[1px] text-gray-500 block mx-auto mt-4 font-bold`}
      className={`${className} border-2 rounded-3xl text-lg border-blue-200 text-blue-500 bg-white hover:bg-blue-200 hover:text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default InputBtn;
