import React from "react";
import {
  FaCalendarCheck,
  FaCar,
  FaChartLine,
  FaChartPie,
  FaCog,
  FaCommentDots,
  FaLifeRing,
  FaMoneyBillWave,
  FaShieldAlt,
  FaTags,
  FaUser,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard Overview", icon: <FaChartPie />, path: "/dashboard" },
    // { name: "User Management", icon: <FaUser />, path: "/dashboard/user-management" },
    { name: "Parking Space Management", icon: <FaCar />, path: "/dashboard/parking-space" },
    { name: "Reservation Management", icon: <FaCalendarCheck />, path: "/dashboard/reservations" },
    { name: "Payment Management", icon: <FaMoneyBillWave />, path: "/dashboard/payments" },
    // { name: "Reporting and Analytics", icon: <FaChartLine />, path: "/dashboard/analytics" },
    // { name: "Support and Communication", icon: <FaLifeRing />, path: "/dashboard/support" },
    // { name: "Promotions and Discounts", icon: <FaTags />, path: "/dashboard/promotions" },
    // { name: "Feedback and Reviews", icon: <FaCommentDots />, path: "/dashboard/feedback" },
    // { name: "Settings and Configurations", icon: <FaCog />, path: "/dashboard/settings" },
    // { name: "Security and Compliance", icon: <FaShieldAlt />, path: "/dashboard/security" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar Section */}
      <div className="w-64 bg-gray-800 text-white p-2 overflow-y-auto">
        <h2 className="text-xl font-bold mb-6 p-2">Admin Dashboard</h2>
        <ul className="space-y-3 text-sm">
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-3 cursor-pointer">
              <Link
                to={item.path}
                className={`flex items-center space-x-3 p-2 rounded ${
                  location.pathname === item.path ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 bg-gray-100 p-8 overflow-y-auto">{children}</div>
    </div>
  );
};

export default Sidebar;
