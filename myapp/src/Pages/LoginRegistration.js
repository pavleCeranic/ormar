import './LoginRegistration.css';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUser, login } from './User';
import { AuthContext } from '../context/AuthContext';
// import axios from 'axios';


const LoginRegistration = () => {

	const initialLogin = {
		username: '',
		password: ''
	}

	const initialRegister = {
		username: '',
		password: '',
		email: ''
	}

	const aCotnext = useContext(AuthContext)
	const navigate = useNavigate();
	const firstDivRef = useRef(null);
	const secondDivRef = useRef(null);
	const emailRef = useRef(null);
	const usernameRef = useRef(null);
	const [activeTab, setActiveTab] = useState('login');
	const [loginFormData, setLoginFormData] = useState(initialLogin);
	const [regFormData, setRegFormData] = useState(initialRegister);

	const handleTabClick = (newActiveTab, oldActiveTab, skip = false) => {

		setActiveTab(newActiveTab === firstDivRef ? 'login' : '');

		if (newActiveTab && oldActiveTab) {
			newActiveTab.current.style.backgroundColor = 'white';
			oldActiveTab.current.style.backgroundColor = '#d3d3d3';

			if (skip) return;

			// validateEmail(emailRef, true);

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

		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}, 150);

		if (aCotnext.loggedUser) {
			navigate('/account', { state: { newUser: aCotnext.loggedUser } });
		}

		handleTabClick(firstDivRef, secondDivRef, true);

	}, []);

	const validateEmail = (e, fromTabClick = false) => {

		// everything looks good but when you set focus on email and click to navigate other tab,
		// than the validation is called from onBlur event and is validating the field of the current
		// tab and calling styles but in the meantime switching tab takes place so that style aplied is actualy on the field on the newly navigated tab

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

					setTimeout(() => {
						myTarget.classList.remove('wiggle');
					}, 200);
				}

				myTarget.style.outline = 'red solid 1px';

			}
			else if (myTarget.style.outline !== '') {
				myTarget.style.outline = '';
			}
		}, 1000);

	}

	const validatePasswordOnBlur = (e) => {

		setTimeout(() => {
			if (e.target.value.length < 4) {
				if (e.target.style.outline !== 'red solid 1px') {
					e.target.classList.add('wiggle');
					setTimeout(() => {
						e.target.classList.remove('wiggle');
					}, 200);
				}

				e.target.style.outline = 'red solid 1px';
			} else {
				e.target.style.outline = '';
			}
		}, 1000);


	}

	const validateUsernameOnBlur = (e) => {

		setTimeout(() => {
			if (e.target.value.length < 4) {
				e.target.style.outline = 'red solid 1px';
			} else {
				e.target.style.outline = '';
			}
		}, 1000);

	}

	const handleLogin = (e) => {
		e.preventDefault();
		// loader
		const sendLogin = async () => {
			try {
				const response = await login(loginFormData);
				if (response.data === 'fail') {
					alert('credentials not ok');   //TODO: instead of this set the fields style to red to indicate failure
					return;
				}
				if (response.status === 200) {
					aCotnext.topLogin(response.data);
					navigate('/account', { state: { newUser: response.data } });
				}
			} catch (e) {
				// login Invalid
			}
		}
		sendLogin();
	}

	const handleRegister = (e) => {
		e.preventDefault();

		const requestCreateUser = async () => {
			try {
				const createdUser = await createUser(regFormData);
				console.log(createdUser.data)
				navigate('/account', { state: { newUser: createdUser.data } });
			} catch (e) {
				throw e
			}

		}

		requestCreateUser();
	}

	return (
		<div className='landscape:h-full h-[100vh] w-full flex justify-center items-center '>
			<div className='h-[60vh] min-h-96 w-11/12 md:w-3/5 lg:w-2/5 shadow-2xl landscape:mt-36 landscape:mb-24'>
				<div className='flex flex-row text-center cursor-pointer w-full h-1/6 justify-around font-semibold text-xl'>
					<div id='myDiv' ref={firstDivRef} className='content-center bg-inactiveGrey w-full h-full hover:bg-gray-100' onClick={() => { handleTabClick(firstDivRef, secondDivRef) }} >Login</div>
					<div id='tab1' ref={secondDivRef} className='content-center bg-inactiveGrey w-full h-full hover:opacity-95' onClick={() => { handleTabClick(secondDivRef, firstDivRef) }} >Create Account</div>
				</div>
				<div className='w-full h-5/6 flex flex-col justify-center items-center'>
					{activeTab === 'login' ? (
						<form className='flex flex-col w-full items-center' onSubmit={handleLogin}>
							<input type='text' name='username' id='username' ref={usernameRef} placeholder='Username' onChange={handleInputChange} /*onBlur={validateEmail}*/ value={loginFormData.username} className='outline-0 shadow-2xl m-2 p-2 w-11/12 sm:w-4/5 focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' />
							<input type='password' name='password' id='password' placeholder='Password' onChange={handleInputChange} onBlur={validatePasswordOnBlur} value={loginFormData.password} className='outline-0 shadow-2xl m-2 p-2 w-11/12 sm:w-4/5 focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' />
							<Link to="/" className=''>Forgot Your Password? </Link>
							<button type='submit' className='bg-black text m-2 p-2 w-11/12 sm:w-4/5 cursor-pointer text-white text-center hover:bg-buttonYellow transition-colors' onClick={handleLogin} >SIGN IN</button>
						</form>
					) : (
						<form className='flex flex-col w-full justify-center items-center' onSubmit={handleRegister}>
							<input type='text' id='email' ref={emailRef} placeholder='Email' onChange={handleInputChange} /*onBlur={validateEmail}*/ value={regFormData.email} className='outline-0 shadow-2xl m-2 p-2 w-11/12 sm:w-4/5 focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' />
							<input type='text' id='username' ref={usernameRef} placeholder='Username' onChange={handleInputChange} onBlur={validateUsernameOnBlur} value={regFormData.username} className='outline-0 shadow-2xl m-2 p-2 w-11/12 sm:w-4/5 focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' />
							<input type='password' id='password' placeholder='Password' onChange={handleInputChange} onBlur={validatePasswordOnBlur} value={regFormData.password} className='outline-0 shadow-2xl m-2 p-2 w-11/12 sm:w-4/5 focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' />
							<Link to="/account" className='' onClick={() => { handleTabClick(firstDivRef, secondDivRef) }}>Already have an Account? </Link>
							<button type='submit' className='bg-black text m-2 p-2 w-11/12 sm:w-4/5 cursor-pointer text-white text-center hover:bg-buttonYellow transition-colors'>REGISTER</button>
						</form>
					)}

				</div>
			</div>
		</div>
	);
};

export default LoginRegistration;