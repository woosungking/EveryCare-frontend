import React from 'react';

const CustomHr: React.FC = () => {
  const customhr = {
    border: 'none',
    height: '1px',
    width: '95%',
    backgroundColor: 'gray',
    margin: 'auto',
    marginTop: '30px',
    marginBottom: '30px',
  };

  return <hr style={customhr} />;
};

export default CustomHr;