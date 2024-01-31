import {
  FaRegBell,
  FaDashcube,
  FaUser,
  FaBalanceScale,
  FaRegChartBar,
} from "react-icons/fa";

import { GiCheckedShield } from "react-icons/gi";

import { CgMenuGridR } from "react-icons/cg";

import { AiOutlineCalendar, AiOutlineSetting } from "react-icons/ai";

import { FaArrowTrendUp } from "react-icons/fa6";

import "../css/dashboard-sidebar.css";

const DashboardSidebar = () => {
  return (
    <div className="dashboard-sidenav">
      <div className="sidenav-icons">
        <ul>
          <li>
            <FaRegBell />
          </li>
          <li>
            <FaDashcube />
          </li>
        </ul>
      </div>
      <div className="sidenav-icons">
        <ul>
          <li>
            <CgMenuGridR />
          </li>
          <li>
            <FaArrowTrendUp />
          </li>
          <li>
            <FaUser />
          </li>
          <li>
            <FaBalanceScale />
          </li>
          <li>
            <FaRegChartBar />
          </li>
          <li>
            <AiOutlineCalendar />
          </li>
        </ul>
      </div>
      <div className="sidenav-icons">
        <ul>
          <li>
            <AiOutlineSetting />
          </li>
          <li>
            <GiCheckedShield />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
