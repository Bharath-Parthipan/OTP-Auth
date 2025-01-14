import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OTPForm = () => {
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    alert(`Your OTP is: ${newOtp}`);

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleValidateOtp = () => {
    if (otp === generatedOtp) {
      navigate("/dashboard");
    } else {
      alert("Invalid OTP!");
      navigate("/resend-otp");
    }
  };

  return (
    <div className="container">
      <header className="h1data">
        <h1>Analytics Dashboard</h1>
      </header>
      <div className="card1">
        <h2 className="h2data">Enter OTP</h2>
        <p>Time remaining: {timeLeft}s</p>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="input1"
        />
        <br />
        <button
          onClick={handleValidateOtp}
          className="btn1"
          disabled={timeLeft === 0}
        >
          Validate
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

export default OTPForm;
