import './LoginRegistration.css';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';


const LoginRegistration = () => {

	const initialState = {
		username: '',
		email: '',
		password: ''
	}

	const firstDivRef = useRef(null);
	const secondDivRef = useRef(null);
	const emailRef = useRef(null);
	const usernameRef = useRef(null);
	const [activeTab, setActiveTab] = useState('login');
	const [loginFormData, setLoginFormData] = useState(initialState);
	const [regFormData, setRegFormData] = useState(initialState);

	const handleTabClick = (newActiveTab, oldActiveTab, skip = false) => {

		setActiveTab(newActiveTab === firstDivRef ? 'login' : '');

		if (newActiveTab && oldActiveTab) {
			newActiveTab.current.style.backgroundColor = 'white';
			oldActiveTab.current.style.backgroundColor = '#d3d3d3';

			if (skip) return;
			validateEmail(emailRef, true);

			// emailRef.current.style.outline = '';
		}
	};

	const handleInputChange = (e) => {

		let name = e.target.id;
		let value = e.target.value;

		if (value.length === 30) {
			// show a tooltip about limitations
			return
		}

		activeTab === 'login'
			?
			setLoginFormData(prevState => ({
				...prevState,
				[name]: value.replaceAll(' ', '')
			}))
			: setRegFormData(prevState => ({
				...prevState,
				[name]: value.replaceAll(' ', '')
			}));

	};

	useEffect(() => {
		// decide if user is loged in or not and direct user to Account or stay here to login/register

		handleTabClick(firstDivRef, secondDivRef, true);
	}, []);

	const validateEmail = (e, fromTabClick = false) => {


		// everything looks good but when you set focus on email and click to navigate other tab than the validation is called from onBlur event and is validating the field of the current tab and calling styles but in the meantime switching tab takes place so that style aplied is actualy on the field on the newly navigated tab
		let myTarget

		fromTabClick
			? myTarget = e.current
			: myTarget = e.target;

		setTimeout(() => {

			if (fromTabClick && myTarget.style?.outline === '') {
				//when switching between tabs and no fields are touched
				return
			}

			if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(myTarget?.value)) {
				// alert user that email is not valid

				if (myTarget.style.outline !== 'red solid 1px') {
					myTarget.classList.add('wiggle');
					myTarget.classList.add('myoutline');

					setTimeout(() => {
						myTarget.classList.remove('wiggle');
					}, 200);
				}

				myTarget.style.outline = 'red solid 1px';


			}
			else if (myTarget.style.outline !== '') {
				myTarget.style.outline = 'green solid 1px';
				setTimeout(() => {
					myTarget.style.outline = '';
				}, 2000);
			}
		}, 1000);



	}

	const handleSubmit = (e) => {
		e.preventDefault();

		// console.log('e', formData)
		// axios.post('___', formData)
		// 	.then(response => {
		// 		console.log('Form submitted successfully:', response.data);
		// 		// Clear the form after successful submission
		// 		setFormData({
		// 			name: '',
		// 			email: '',
		// 			message: ''
		// 		});
		// 	})
		// 	.catch(error => {
		// 		console.error('Error submitting form:', error);
		// 	});

	}

	return (
		<div className='h-[100vh] w-full flex justify-center items-center '>
			<div className='h-3/5 w-2/5 shadow-2xl'>
				<div className='flex flex-row text-center cursor-pointer w-full h-1/6 justify-around font-semibold text-xl'>
					<div id='myDiv' ref={firstDivRef} className='content-center bg-inactiveGrey w-full h-full hover:bg-gray-100' onClick={() => { handleTabClick(firstDivRef, secondDivRef) }} >Login</div>
					<div id='tab1' ref={secondDivRef} className='content-center bg-inactiveGrey w-full h-full hover:opacity-95' onClick={() => { handleTabClick(secondDivRef, firstDivRef) }} >Create Account</div>
				</div>
				<div className='w-full h-5/6 flex flex-col justify-center items-center'>
					{activeTab === 'login' ? (
						<form className='flex flex-col w-full items-center' onSubmit={handleSubmit}>
							<input type='text' id='email' ref={emailRef} placeholder='Email' onChange={handleInputChange} onBlur={validateEmail} value={loginFormData.email} className='outline-0 shadow-2xl m-2 p-2 w-4/5 focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' />
							<input type='password' id='password' placeholder='Password' onChange={handleInputChange} value={loginFormData.password} className='outline-0 shadow-2xl m-2 p-2 w-4/5 focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' />
							<Link to="/" className=''>Forgot Your Password? </Link>
							<button type='submit' className='bg-black text m-2 p-2 w-4/5 cursor-pointer text-white text-center hover:bg-buttonYellow transition-colors'>SIGN IN</button>
						</form>
					) : (
						<form className='flex flex-col w-full justify-center items-center' onSubmit={handleSubmit}>
							<input type='text' id='email' ref={emailRef} placeholder='Email' onChange={handleInputChange} onBlur={validateEmail} value={regFormData.email} className='outline-0 shadow-2xl m-2 p-2 w-4/5 focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' />
							<input type='text' id='username' ref={usernameRef} placeholder='Username' onChange={handleInputChange} value={regFormData.username} className='outline-0 shadow-2xl m-2 p-2 w-4/5 focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' />
							<input type='password' id='password' placeholder='Password' onChange={handleInputChange} value={regFormData.password} className='outline-0 shadow-2xl m-2 p-2 w-4/5 focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' />
							<Link to="/account" className='' onClick={() => { handleTabClick(firstDivRef, secondDivRef) }}>Already have an Account? </Link>
							<button type='submit' className='bg-black text m-2 p-2 w-4/5 cursor-pointer text-white text-center hover:bg-buttonYellow transition-colors'>REGISTER</button>
						</form>
					)}

				</div>
			</div>
		</div>
	);
};

export default LoginRegistration;