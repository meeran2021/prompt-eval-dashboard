import React, { useState } from "react";
import logo from "../../assets/full_logo.svg";
import { useNavigate } from 'react-router-dom';
import { logout } from '../auth';
  
function Header({email}) {
    const [adminEmail, setAdminEmail] = useState("Admin@greenridertech.com");
    const navigateTo = useNavigate();
    const handleLogout = () => {
      logout();
      navigateTo('/signin');
      
  };
  return (
    <header className=" w-screen flex items-center justify-between px-3">
      <img src={logo} alt="logo" />
      <button className="flex items-center gap-1.5">
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-5 w-6" 
      viewBox="0 0 21 22" 
      fill="none"
    >
      <path 
        d="M16.5 7.00177C16.5 5.41047 15.8679 3.88435 14.7426 2.75913C13.6174 1.63391 12.0913 1.00177 10.5 1.00177C8.9087 1.00177 7.38258 1.63391 6.25736 2.75913C5.13214 3.88435 4.5 5.41047 4.5 7.00177C4.5 14.0018 1.5 16.0018 1.5 16.0018H19.5C19.5 16.0018 16.5 14.0018 16.5 7.00177Z" 
        stroke="black" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12.23 20.0018C12.0542 20.3048 11.8019 20.5564 11.4982 20.7313C11.1946 20.9062 10.8504 20.9982 10.5 20.9982C10.1496 20.9982 9.80541 20.9062 9.50179 20.7313C9.19818 20.5564 8.94583 20.3048 8.77002 20.0018" 
        stroke="black" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
        <p className="font-Nunito Sans text-sm font-semibold">Notifications</p>

      </button>
      <div className="flex gap-6 items-center">
        <div className="font-semibold">{email}</div>
        <button
          className="bg-red-700 text-white font-bold py-2 px-4 rounded-md shadow-custom-shadow"
          style={{ width: "127px", height: "42px", backgroundColor: "#C72400" }}
          onMouseEnter={(e) => (e.target.style.color = "#000000")}
          onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header