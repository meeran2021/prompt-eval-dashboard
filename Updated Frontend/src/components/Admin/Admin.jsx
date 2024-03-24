import React, { useState } from 'react'

import Admin_Dashboard from './Admin_Dashboard'
import Header from '../Header'
import Sidebar from '../Sidebar'
function Admin() {
  const [adminEmail, setAdminEmail] = useState("Admin@greenridertech.com");
  return (
    // <div className='h-screen '>
    //     <header className='h-[10vh] border-solid border-2 flex border-[#E6E6E6] '>
    //         <Admin_Header/>
    //     </header>
    //     <main className='h-[90vh] text-white flex '>
    //         <div className='w-[13vw] border-2 border-[#E6E6E6] border-t-0'>sidebar</div>
    //         <div className='w-[87vw] bg-[#f8f8f8]'>
    //             <div className='m-4 bg-white h-custom2 text-black  overflow-y-hidden mx-6 rounded-lg'>
    //               <Admin_Dashboard/>
    //             </div>
    //         </div>
    //     </main>
    // </div>
    <div>
    <header className="h-[10vh] border-solid border-2 flex border-[#E6E6E6] ">
      <Header email={adminEmail}  />
    </header>
    <main className="h-[90vh] flex">
      <div >
          <Sidebar firstcol={"All Members"} secondcol={"Current Leads"}/>
      </div>
      <div className="bg-[#f8f8f8] h-full w-full">
        <Admin_Dashboard/>
      </div>
      
    </main>
  </div>
  )
}

export default Admin