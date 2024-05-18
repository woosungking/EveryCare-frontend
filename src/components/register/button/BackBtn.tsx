import React from 'react';

const BackBtn: React.FC = ({ text }) => {
  return (
    <div
      style={{
        paddingLeft: '1rem',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginTop:"3%"
      }}
    >
      <button> &lt; </button>
      <span>{text}</span>
    </div>
  );
};

export default BackBtn;
