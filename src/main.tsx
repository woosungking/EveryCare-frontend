import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/reset.css';
import Test from './Test';
import BackLayout from './components/BackLayout';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/sign/SignupPage';
import SiginupPage2 from './pages/sign/SignupPage2';
import ScanOrDirectPage from './pages/register/ScanOrDirectPage';
import DirectScanPage from './pages/register/DirectScanPage';
import ScanConfirmPage from './pages/register/ScanConfirmPage';
import DirectRegister from './components/register/DirectRegister';
import DirectRegisterPage from './pages/register/DirectRegisterPage';
import PillSearchPage from './pages/register/PillSearchPage';
import PillRegister from './pages/register/PillRegister';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <LoginPage></LoginPage> */}
    {/* <SignupPage></SignupPage> */}
    {/* <SiginupPage2></SiginupPage2> */}
    {/* <ScanOrDirectPage></ScanOrDirectPage> */}
    {/* <DirectScanPage></DirectScanPage> */}
    {/* <ScanConfirmPage></ScanConfirmPage> */}
    {/* <DirectRegisterPage></DirectRegisterPage> */}
    {/* <PillSearchPage></PillSearchPage> */}
    <PillRegister></PillRegister>
  </React.StrictMode>,
);
