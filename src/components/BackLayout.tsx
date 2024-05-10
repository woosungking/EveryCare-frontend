import React from 'react';

const BackLayout: React.FC = ({ children }) => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        backgroundColor: '#F1F8FF',
        minWidth: '35%', // viewport의 너비의 1/3
        minHeight: '100%', // viewport의 높이의 1/3
      }}
    >
      {children}
    </div>
  );
};

export default BackLayout;
