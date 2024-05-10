import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/reset.css';
import Test from './Test';
import BackLayout from './components/BackLayout';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/sign/SignupPage';
import SiginupPage2 from './pages/sign/SignupPage2';
import ScanOrDirectPage from './pages/scan/ScanOrDirectPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <SignupPage></SignupPage> */}
    {/* <LoginPage></LoginPage> */}
    {/* <SiginupPage2></SiginupPage2> */}
    <ScanOrDirectPage></ScanOrDirectPage>
  </React.StrictMode>,
);
