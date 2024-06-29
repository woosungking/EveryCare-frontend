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
      className={`${className} rounded-2xl border-blue-200 border-[1px] text-gray-500 block mx-auto mt-4 font-bold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default InputBtn;
