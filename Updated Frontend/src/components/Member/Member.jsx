import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Member_all_prompts from "./Member_all_prompts";
import Member_dashboard from "./Member_dashboard";

function Member() {
  const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');        
  const [email,setEmail]=useState(loggedInUserEmail);
  const [index,setIndex]=useState(true);
 // console.log(index);
    const indexTrue=()=>{
      setIndex(true);
    }
    const indexFalse=()=>{
      setIndex(false);
    }
  return (
    <div>
      <header className="h-[10vh] border-solid border-2 flex border-[#E6E6E6] ">
        <Header email={email}/>
      </header>
      <main className="h-[90vh] flex">
        <div >
            <Sidebar indextrue={indexTrue} indexfalse={indexFalse}/>
        </div>
        <div className="bg-[#f8f8f8] h-full w-full">
            {index?<Member_dashboard />:<Member_all_prompts/>}
        </div>
        
      </main>
    </div>
  );
}

export default Member;
