import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SIgnIn = () => {
      const [email, setEmail] = useState("");
      const navigate = useNavigate();

      const handleSignIn = () => {
        if (email.trim() === "" || !/\S+@\S+\.\S+/.test(email)) {
          alert("Please enter a valid email address!");
          return;
        }
        localStorage.setItem("userEmail", email);
        navigate("/otp"); // This will work with HashRouter
    };
    
  return (
    <div className="container">
      <header className="h1data">
        <h1>Analytics Dashboard</h1>
      </header>
      <div className="card1">
        <h2 className="h2data">Sign In</h2>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input1"
        />
        <br />
        <button onClick={handleSignIn} className="btn1">
          Send OTP
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
}

export default SIgnIn