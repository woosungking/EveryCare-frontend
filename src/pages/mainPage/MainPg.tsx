import React from 'react';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import NavBar from '../../components/NavBar';
import SmallLogo from '../../assets/SmallLogo.png';
import MainPage from '../../components/mainPage/MainPage';
import { useNavigate } from 'react-router';

const MainPg: React.FC = () => {
  const LogoStyle = {
    width: '30%',
    marginTop: '3%',
    marginLeft: '3%',
  };
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleJoinClick = () => {
    navigate('/signup');
  };
  return (
    <BackLayout>
      <CenterLayout>
        <div className="flex justify-between">
          <img src={SmallLogo} alt="" style={LogoStyle} />
          <div className="flex justify-between">
            <button
              onClick={handleLoginClick}
              className="flex justify-center items-center text-sm text-gray-600 mt-5 mr-4"
            >
              Login
            </button>
            <button
              onClick={handleJoinClick}
              className="flex justify-center items-center w-[50px] h-[2.5vh] rounded-xl text-sm bg-blue-300 text-white mt-5 mr-4"
            >
              Join
            </button>
          </div>
        </div>

        <MainPage />
        <NavBar></NavBar>
      </CenterLayout>
    </BackLayout>
  );
};

export default MainPg;
