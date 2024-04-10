import React, { useState } from 'react';

const LoginForm = () => {
	const [emailOrUsername, setEmailOrUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your login logic here
		console.log('Email or Username:', emailOrUsername);
		console.log('Password:', password);
		// Reset form fields
		setEmailOrUsername('');
		setPassword('');
	};

	return (
		<div className=''>
			<form className='flex flex-col w-full items-center' onSubmit={handleSubmit}>
							<input type='text' id='email' placeholder='Email' onChange={handleInputChange} value={formData.email} className='outline-0 shadow-2xl m-2 p-2 w-4/5 focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' />
							<input type='password' id='password' placeholder='Password' onChange={handleInputChange} value={formData.password} className='outline-0 shadow-2xl m-2 p-2 w-4/5 focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' />
							<Link to="/" className=''>Forgot Your Password? </Link>
							<button type='submit' className='bg-black text m-2 p-2 w-4/5 cursor-pointer text-white text-center hover:bg-buttonYellow transition-colors'>SIGN IN</button>
						</form>
		</div>
	);
};

export default LoginForm;
