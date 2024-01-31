import "../css/dashboard.css";
import { FaUsers } from "react-icons/fa";
import MySwitch from "../components/Switch";
import { IoSunnyOutline, IoSettings } from "react-icons/io5";
import DashboardBarChart from "../components/DashboardBarChart";

import DashboardSidebar from "../components/DashboardSidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardCard from "../components/DashboardCard";
import Chart from "../components/Chart";

import { createContext, useState } from "react";
import Switch from "@mui/material/Switch";
import { FormControlLabel, FormGroup } from "@mui/material";
export const ThemeContext = createContext(null);

const Dashboard = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="my-dashboard" id={theme}>
        <DashboardSidebar />
        <div className="dashboard-main">
          <div className="box">
            <DashboardNavbar />
            <div className="tabs">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      style={{ color: theme === "light" ? "black" : "white" }}
                      onChange={toggleTheme}
                    />
                  }
                  label={theme === "light" ? "Dark Mode" : "Light Mode"}
                  style={{ color: theme === "light" ? "black" : "white" }}
                />
              </FormGroup>
            </div>
            <div className="dashboard-container">
              <div className="dis">
                <div className="date-time-config">
                  <div>
                    <div className="time-box">
                      <div className="time-icon">
                        <IoSunnyOutline />
                      </div>
                      <div className="time">
                        <p>8:02:09 AM</p>
                        <p>Real time insight</p>
                      </div>
                    </div>
                    <div className="date-box">
                      Today:
                      <br />
                      <span>8th August 2023</span>
                    </div>
                    <button>
                      <IoSettings />
                      Advanced Configurations
                    </button>
                  </div>
                </div>
                <div className="cards">
                  <DashboardCard
                    total="10"
                    title="On time"
                    difference="+3% increase than yesterday"
                    icon={<FaUsers />}
                  />
                  <DashboardCard
                    total="10"
                    title="On time"
                    difference="+3% increase than yesterday"
                    icon={<FaUsers />}
                  />
                  <DashboardCard
                    total="10"
                    title="On time"
                    difference="+3% increase than yesterday"
                    icon={<FaUsers />}
                  />
                  <DashboardCard
                    total="10"
                    title="On time"
                    difference="+3% increase than yesterday"
                    icon={<FaUsers />}
                  />
                  <DashboardCard
                    total="10"
                    title="On time"
                    difference="+3% increase than yesterday"
                    icon={<FaUsers />}
                  />
                  <DashboardCard
                    total="10"
                    title="On time"
                    difference="+3% increase than yesterday"
                    icon={<FaUsers />}
                  />
                </div>
              </div>
              <div className="charts">
                <div className="chart1">
                  <Chart />
                </div>
                <div className="chart2">
                  <DashboardBarChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Dashboard;
