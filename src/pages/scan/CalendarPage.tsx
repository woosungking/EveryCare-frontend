import React from 'react';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import NavBar from '../../components/NavBar';
import SmallLogo from '../../assets/SmallLogo.png';
import Calendar from '../../components/Calendar/Calendar';

const CalendarPage: React.FC = () => {
  const LogoStyle = {
    width: '30%',
    marginTop: '3%',
    marginLeft: '3%',
  };
  return (
    <BackLayout>
      <CenterLayout>
        <img src={SmallLogo} alt="" style={LogoStyle} />
        <Calendar />
        <NavBar></NavBar>
      </CenterLayout>
    </BackLayout>
  );
};

export default CalendarPage;
