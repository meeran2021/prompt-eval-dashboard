// import React, { useState } from "react";
// import { RiPieChart2Fill, RiFileList3Line } from "react-icons/ri"; // Assuming you're using a list icon for "Assigned Prompts"
// import { FiBarChart2, FiCheckSquare } from "react-icons/fi"; // Assuming you're using a check square icon for "Review"
// import { useNavigate } from "react-router-dom";

// function Sidebar({ firstcol = 'Editor', secondcol = 'Prompt History', thirdcol = 'Review', fourthcol = 'Dashboard' }) {
//   const [active, setActive] = useState('firstcol');
//   const navigate = useNavigate();

//   // Enhanced function to handle more buttons
//   const handleNavigation = (col) => {
//     setActive(col);
//     switch (col) {
//       case 'firstcol':
//         navigate("/editor");
//         break;
//       case 'secondcol':
//         navigate("/prompt-history");
//         break;
//       case 'thirdcol':
//         navigate("/review");
//         break;
//       case 'fourthcol':
//         navigate("/dashboard");
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="w-[13vw] border-2 border-[#E6E6E6] border-t-0 h-full max-xl:w-[7vw]">
//       <div className="py-7 px-4 gap-4 flex flex-col ">
//         <ButtonComponent icon={<RiPieChart2Fill className="h-5 w-5 duration-200"/>} col='firstcol' text={firstcol} active={active} onClick={handleNavigation} />
//         <ButtonComponent icon={<FiBarChart2 className="h-5 w-5 duration-200"/>} col='secondcol' text={secondcol} active={active} onClick={handleNavigation} />
//         <ButtonComponent icon={<FiCheckSquare className="h-5 w-5 duration-200"/>} col='thirdcol' text={thirdcol} active={active} onClick={handleNavigation} />
//         <ButtonComponent icon={<RiPieChart2Fill className="h-5 w-5 duration-200"/>} col='fourthcol' text={fourthcol} active={active} onClick={handleNavigation} />
//       </div>
//     </div>
//   );
// }

// // Refactor repeated button logic into a separate component
// const ButtonComponent = ({ icon, col, text, active, onClick }) => (
//   <button
//     className={`text-black border-2 px-2 gap-2 py-2 rounded-lg ${active === col ? 'bg-[#00801C] text-white' : 'hover:bg-[#00801C] duration-300 hover:text-white'} flex justify-center items-center max-lg:px-0 max-lg:border-none`}
//     onClick={() => onClick(col)}
//   >
//     {icon}
//     <p className="max-xl:hidden">{text}</p>
//   </button>
// );

// export default Sidebar;

// // 


import React from 'react';
import { RiPieChart2Fill, RiFileList3Line, RiDashboardFill } from "react-icons/ri";
import { FiBarChart2, FiCheckSquare } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'firstcol', path: '/editor', icon: <RiPieChart2Fill className="h-5 w-5" />, text: 'Editor' },
    { id: 'secondcol', path: '/prompt-history', icon: <FiBarChart2 className="h-5 w-5" />, text: 'Prompt History' },
    { id: 'thirdcol', path: '/review', icon: <FiCheckSquare className="h-5 w-5" />, text: 'Review' },
    { id: 'fourthcol', path: '/dashboard', icon: <RiDashboardFill className="h-5 w-5" />, text: 'Dashboard' },
  ];

  return (
    <div className="w-[13vw] border-r border-gray-300 max-xl:w-[7vw]">
      <div className="py-7 px-4 gap-4 flex flex-col">
        {navItems.map(item => (
          <ButtonComponent
            key={item.id}
            icon={item.icon}
            col={item.id}
            text={item.text}
            isActive={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          />
        ))}
      </div>
    </div>
  );
}

const ButtonComponent = ({ icon, col, text, isActive, onClick }) => (
  <button
    className={`flex items-center gap-2 p-2 rounded-lg w-full justify-start ${isActive ? 'bg-green-700 text-white' : 'text-black hover:bg-green-600 hover:text-white'} transition duration-300`}
    onClick={onClick}
  >
    <span className="text-xl">{icon}</span>
    <span className="hidden md:inline">{text}</span>
  </button>
);

export default Sidebar;
