import { useState } from 'react'
import Panel from './Panel'
import SignIn from './SignIn'
import Admin_signup from './Admin_signup'

function Login() {
    const [account, setAccount] = useState(true);
    const toggleAccount = () => {
      setAccount(!account);
    };
    return (
      
    <div className="bg-stone-50 w-screen flex">
      <Panel/>
      <div className="flex-grow flex items-center justify-center">
        {account?<SignIn toggleAccount={toggleAccount} />:<Admin_signup toggleAccount={toggleAccount}/>}
    
      </div>
  
    </div>
    // <div>
    //   <All_prompts/>
    // </div>
    
    )
  }
  
  export default Login
