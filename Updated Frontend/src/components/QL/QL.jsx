import React, { useState } from 'react'
import Header from '../Header'
import QL_Dashboard from './QL_Dashboard'
import QL_Passchecked from './QL_Passchecked';
import Sidebar from '../Sidebar';

function QL() {
  const [prompt,setPrompt]=useState(true)
  const toggleprompt = () => {
    // console.log(prompt)
    setPrompt(!prompt);
  };
  const [sideBarButton,setSidebarButton]=useState(true);
  const toggleButton=()=>{
    setSidebarButton(!sideBarButton);
  }
  return (
    <div className='h-screen '>
        <header className='h-[10vh] border-solid border-2 flex border-[#E6E6E6] '>
            <Header  email="QC.greenridertech@gmail.com"/>

        </header>
        <main className='h-[90vh] text-white flex '>
           <div>
            <Sidebar/>
            </div>
            
            
            <div className='w-[87vw] bg-[#f8f8f8]'>
                <div className='m-4 bg-white h-custom2 text-black  overflow-y-hidden mx-6 rounded-lg  '>
                {/* {account?<SignUp toggleAccount={toggleAccount} />:<Admin_signup toggleAccount={toggleAccount}/>} */}
               { prompt?<QL_Dashboard toggleprompt={toggleprompt} />:<QL_Passchecked toggleprompt={toggleprompt}/>}
                </div>
            </div>
        </main>
    </div>
  )
}

export default QL