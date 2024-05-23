import React from 'react';

const BackLayout: React.FC = ({ children }) => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        backgroundColor: '#F1F8FF',
        minWidth: '35vw', // viewport의 너비의 1/3
        minHeight: '100vh', // viewport의 높이의 1/3
        // overflow: 'auto',
      }}
    >
      {children}
    </div>
  );
};

export default BackLayout;
