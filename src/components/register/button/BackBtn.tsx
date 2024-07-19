import React from 'react';

const BackBtn: React.FC = ({ text }) => {
  return (
    <div
      style={{
        paddingLeft: '1rem',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginTop: '3%',
      }}
    >
      <button className="p-2"> &lt; </button>
      <span className="p-1">{text}</span>
    </div>
  );
};

export default BackBtn;
