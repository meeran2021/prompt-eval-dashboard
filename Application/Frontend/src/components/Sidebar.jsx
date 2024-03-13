import React, { useState } from 'react';

function Sidebar() {
    const [activeLink, setActiveLink] = useState('dashboard');

    const handleClick = (id) => {
        setActiveLink(id);
    };

    return (
        <div className="Sidebar">
            <a className={activeLink === 'dashboard' ? 'Active' : ''} onClick={() => handleClick('dashboard')} href="#dashboard">Dashboard</a>
            <a className={activeLink === 'prompts-history' ? 'Active' : ''} onClick={() => handleClick('prompts-history')} href="#prompts-history">Prompts History</a>
            <a className={activeLink === 'contact' ? 'Active' : ''} onClick={() => handleClick('contact')} href="#contact">Contact</a>
            <a className={activeLink === 'about' ? 'Active' : ''} onClick={() => handleClick('about')} href="#about">About</a>
        </div>
    );
}

export default Sidebar;





// import React from 'react';

// function Sidebar() {
//     // Get all the links in the sidebar    
//     const links = document.querySelectorAll('.Sidebar a');

//     links.forEach(link => {
//         link.addEventListener('click', function (event) {
//             links.forEach(link => {
//                 link.classList.remove('Active');    
//             });

//             this.classList.add('Active');
//         });
//     });

//     return (
//         < div class="Sidebar" >    
//             <a class="Active" href="#dashboard">Dashboard</a>
//             <a href="#rompts-history">Prompts History</a>
//             <a href="#contact">Contact</a>
//             <a href="#about">About</a>
//         </div >
//     )
// }

// export default Sidebar;




