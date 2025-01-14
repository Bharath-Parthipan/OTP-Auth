import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  // Data for Pie Chart (Battery and Margin %)
  const pieData = [
    { name: "Battery", value: 93 },
    { name: "Margin %", value: 65 },
  ];

  // Colors for Pie Chart
  const COLORS = ["#00c851", "#007bff"];

  // Data for Line Chart (Orders)
  const lineData = [
    { date: "13th Oct", remaining: 65, consumed: 35 },
    { date: "14th Oct", remaining: 50, consumed: 50 },
    { date: "15th Oct", remaining: 25, consumed: 75 },
    { date: "16th Oct", remaining: 10, consumed: 90 },
    { date: "17th Oct", remaining: 5, consumed: 95 },
  ];

  return (
    <div className="dashboard-container">
      <header>
        <h1>Analytics Dashboard</h1>
        <button onClick={handleLogout} className="btn">
          Logout
        </button>
      </header>

      {/* Metrics Section */}
      <div className="metrics">
        <div className="metric">
          <h4>7 days</h4>
          <p>Battery</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "93%" }}></div>
          </div>
        </div>
        <div className="metric">
          <h4>Margin %</h4>
          <p>7 days</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "65%" }}></div>
          </div>
        </div>
      </div>

      {/* Pie Chart Section */}
      <div className="chart-container">
        <h4>Battery vs Margin %</h4>
        <PieChart width={400} height={300}>
          <Pie
            data={pieData}
            cx={200}
            cy={150}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Line Chart Section */}
      <div className="chart-container">
        <h4>Orders Over Time</h4>
        <LineChart
          width={600}
          height={300}
          data={lineData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="remaining"
            stroke="#00c851"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="consumed"
            stroke="#007bff"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025, Greendzine Technologies Pvt. Ltd. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
