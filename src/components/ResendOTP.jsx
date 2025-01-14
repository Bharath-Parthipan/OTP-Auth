import { useNavigate } from "react-router-dom";

const ResendOTP = () => {
  const navigate = useNavigate();

  const handleResendOtp = () => {
    navigate("/otp");
  };

  return (
    <div className="container">
      <header className="h1data">
        <h1>Analytics Dashboard</h1>
      </header>
      <div className="card1">
        <h2 className="h2data">OTP Expired</h2>
        <p>Your OTP has expired. Please click below to resend OTP.</p>
        <button onClick={handleResendOtp} className="btn1">
          Resend OTP
        </button>
        <div className="data">
          <h4 className="h3data">
            Web Application With Analytics <br />
            Dashboard
          </h4>
        </div>
        <br />
      </div>
      <footer>
        <p>© 2025, Greendzine Technologies Pvt. Ltd. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ResendOTP;
