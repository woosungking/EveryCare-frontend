import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/reset.css';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/sign/SignupPage';
import SiginupPage2 from './pages/sign/SignupPage2';
import ScanOrDirectPage from './pages/register/ScanOrDirectPage';
import DirectScanPage from './pages/register/DirectScanPage';
import ScanConfirmPage from './pages/register/ScanConfirmPage';
import DirectRegisterPage from './pages/register/DirectRegisterPage';
import PillSearchPage from './pages/register/PillSearchPage';
import PillRegisterPage from './pages/register/PillRegisterPage';
import CalendarPage from './pages/calendar/CalendarPage';
import MainPg from './pages/mainPage/MainPg';
import { RegisterContextProvider } from './components/register/context/RegisterContext';
import { worker } from './mock/browsers';
if (process.env.NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RegisterContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPg />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup2" element={<SiginupPage2 />} />
          <Route path="/scan-or-direct" element={<ScanOrDirectPage />} />
          <Route path="/direct-scan" element={<DirectScanPage />} />
          <Route path="/scan-confirm" element={<ScanConfirmPage />} />
          <Route path="/direct-register" element={<DirectRegisterPage />} />
          <Route path="/pill-search" element={<PillSearchPage />} />
          <Route path="/pill-register" element={<PillRegisterPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </Router>
    </RegisterContextProvider>
  </React.StrictMode>,
);
