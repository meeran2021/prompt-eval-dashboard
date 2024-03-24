import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { login } from '../../auth';


function SignIn({ toggleAccount }) {
	const { register, handleSubmit, reset, formState: { errors } } = useForm();
	const [role, setRole] = useState('');
	const navigateTo = useNavigate();

	const handleRoleChange = (newRole) => {
		setRole(newRole);
	};

	useEffect(() => {
        const isAuthenticated = localStorage.getItem('REACT_TOKEN_AUTH_KEY');        
        if (isAuthenticated) {
            navigateTo('/dashboard');
        }
    }, []);

	const signinUser = async (data) => {
        const requestData = { ...data, role }; // Include role in the request data
		console.log(requestData);
		const requestOptions = {
			method: "POST",
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(requestData)
		};

		try {
			const response = await fetch('http://127.0.0.1:5000/auth/signin', requestOptions);
			if (response.ok) {
				const responseData = await response.json();
				const { access_token, refresh_token } = responseData;
				login({ accessToken: access_token, refreshToken: refresh_token });
				localStorage.setItem('loggedInUserEmail', requestData.email);
				if (role === "Member") {
					// Redirect to member page
					navigateTo('/dashboard');
				} else if (role === 'QualityLeader') {
					// Redirect to quality leader page
					navigateTo('/quality-leader');
				}
			} else {
				// Unsuccessful response
				const errorMessage = await response.json();
				const alertMessage = response.statusText + ": " + errorMessage.message || 'An error occurred during sign-in';
				alert(alertMessage);
			}
		} catch (error) {
			console.error('Error during sign-in:', error);
			alert('An error occurred during sign-in');
		}
		
		reset();
	};

	return (
		<div className="w-1/2">
			<h2 className="text-2xl mb-4 justify-center flex font-extrabold">Log In</h2>
			<p className="pb-[40px] justify-center flex">Login as a Member or Quality Leader</p>
			<form className="flex flex-col gap-4"
				onSubmit={handleSubmit(signinUser)}>
				<label className="w-full font-semibold">Work Email</label>
				<input
					className="input input-bordered w-full rounded-md p-1.5"
					type="email"
					placeholder="Email@greenridertech.com"
					{...register("email", { required: true, maxLength: 80 })}
				/>
				{errors.email && <p style={{ color: "red" }}><small>Email is required</small></p>}
				{errors.email?.type === "maxLength" && <p style={{ color: "red" }}><small>Max characters should be 80</small></p>}
				{/* <br></br> */}

				<label className="w-full font-semibold">Password
				</label>
				<input
					className="input input-bordered w-full rounded-md p-1.5"
					type="password"
					placeholder="Password"
					{...register("password", { required: true, minLength: 8 })}
				/>
				{errors.password && <p style={{ color: "red" }}><small>Password is required</small></p>}
				{errors.password?.type === "minLength" && <p style={{ color: "red" }}><small>Min characters should be 8</small></p>}
				{/* <br></br> */}


				<div className='flex justify-center gap-x-20 pt-5'>
					<button type="button" onClick={() => handleRoleChange('Member')} className={`border-solid border-2 ${role === 'Member' ? 'border-white bg-black text-white' : 'border-black'} rounded-xl w-1/3 py-1`}>Member</button>
					<button type="button" onClick={() => handleRoleChange('QualityLeader')} className={`border-solid border-2 ${role === 'QualityLeader' ? 'border-white bg-black text-white' : 'border-black'} w-1/3 rounded-xl py-1`}>Quality leader</button>
				</div>

				<label className='py-4 justify-center flex font-medium'>Login as a {role}</label>
				<button className='w-full border-solid border-2 border-black rounded-xl py-1 text-white bg-black'
					type="submit"
					onClick={() => handleSubmit(signinUser)}>Log In</button>
			</form>
			<div className="flex gap-1 justify-center pt-3">	
				<p>Login as a</p>
				<button className="text-blue-600" onClick={toggleAccount}>Admin</button>
			</div>
		</div>
	);
}

export default SignIn;
