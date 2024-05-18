import React from 'react';

const CustomHr: React.FC = () => {
  const customhr = {
    // hr태그, 이미지 구분선에 대한 스타일
    border: 'none', // 원래 hr태그의 수평선을 없애는 역할임
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
