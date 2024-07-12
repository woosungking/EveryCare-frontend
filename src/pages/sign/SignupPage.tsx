import React from 'react';
import BackLayout from '../../components/BackLayout';
import CenterLayout from '../../components/CenterLayout';
import SignupForm from '../../components/signup/SignupForm';
import MainLog from '../../assets/BigMainLogo.png';
import Signup1 from '../../assets/signup/Signup1.svg';
import Signup12 from '../../assets/signup/Signup12.svg';
import Signup13 from '../../assets/signup/Signup13.svg';

const SignupPage: React.FC = () => {
  return (
    <BackLayout>
      <div className="flex flex-col items-center mb-3 ml-auto w-[403px] h-[403px]">
        <img src={Signup1} alt="Bg1" className="w-[10vw] mb-8 " />
        <img src={Signup12} className="w-[15vw] mb-10" />
        <img src={Signup13} className="w-[28vw]" />
      </div>
      <CenterLayout margin="m-auto">
        <img
          src={MainLog}
          alt="MainLogo"
          style={{
            width: '17rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '40%',
            marginBottom: '10%',
          }}
        />
        <SignupForm></SignupForm>
      </CenterLayout>
    </BackLayout>
  );
};

export default SignupPage;
