import { Routes, Route } from "react-router-dom";
import SIgnIn from './components/SIgnIn';
import OTPForm from './components/OTPForm';
import ResendOTP from './components/ResendOTP';
import Dashboard from './components/Dashboard';
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SIgnIn />} />
        <Route path="/otp" element={<OTPForm />} />
        <Route path="/resend-otp" element={<ResendOTP />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App
