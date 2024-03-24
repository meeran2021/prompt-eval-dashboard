import React from "react";
function Admin_signup({toggleAccount}){
    return(
        <div className='w-1/2'>
        <h2 className="text-2xl mb-4 justify-center flex font-extrabold">Log In</h2>
        <p className='pb-[40px] justify-center flex'>Login as a Admin</p>
        <form className="flex flex-col gap-4">
          <label className='w-full font-semibold'>Work Email</label>
          <input type="email" placeholder="Email@greenridertech.com" className="input input-bordered w-full rounded-md p-1.5" />
          <label className='w-full font-semibold'>Password</label> 
          <input type="password" placeholder="Password" className="input input-bordered w-full rounded-md p-1.5" />
          <button className='w-full border-solid border-2 border-black rounded-xl py-1.5 text-white bg-black'>Log In</button>
        </form>
        <div className='flex gap-1 justify-center pt-3'>
          <p>Login as a</p>
          <button className='text-blue-600' onClick={toggleAccount}>Member/Quality Leader</button> 
        </div>
      </div>
    )
}
export default Admin_signup;