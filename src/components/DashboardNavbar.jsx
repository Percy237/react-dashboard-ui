import { FaSearch, FaHornbill } from "react-icons/fa";
import "../css/dashboard-navbar.css";
const DashboardNavbar = () => {
  return (
    <>
      <div className="dashboard-navbar">
        <h1>Dashboard</h1>
        <div className="dashboard-navbar-left">
          <div className="dashboard-search">
            <div>
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Quick search" />
            </div>
            <FaHornbill className="navbar-icon" />
          </div>

          <div>
            <div className="dashboard-profile">
              <img
                src="https://plus.unsplash.com/premium_photo-1689632031083-518b012767a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="profile-pic"
              />
              <div className="profile-details">
                <p>Admin</p>
                <p>admin@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
